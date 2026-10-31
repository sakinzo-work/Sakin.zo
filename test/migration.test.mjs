import assert from "node:assert/strict";
import { test } from "node:test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { parse } from "parse5";
import { parseMarkdown, safeMarkdownLink } from "../src/lib/markdown.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const walk = (node) => [node, ...(node.childNodes || []).flatMap(walk)];

test("migration preserves every inventoried original file byte for byte", (context) => {
  const inventory = JSON.parse(
    fs.readFileSync(path.join(root, "migration/original-files.json")),
  );
  const source = path.resolve(root, "..");
  if (!fs.existsSync(path.join(source, "frontend/index.html"))) {
    context.skip(
      "Original sibling project is unavailable in this standalone copy.",
    );
    return;
  }
  for (const entry of inventory) {
    const bytes = fs.readFileSync(path.join(source, entry.path));
    assert.equal(
      crypto.createHash("sha256").update(bytes).digest("hex"),
      entry.sha256,
      entry.path,
    );
  }
});

test("one React entry shell serves native JSX routes without DOM controllers", () => {
  const dist = path.join(root, "dist");
  assert.deepEqual(
    fs.readdirSync(root).filter((file) => file.endsWith(".html")),
    ["index.html"],
  );
  const index = fs.readFileSync(path.join(dist, "index.html"), "utf8");
  assert.match(index, /<div id="root"><\/div>/);
  assert.match(index, /type="module"/);
  assert.equal(fs.existsSync(path.join(root, "src/controllers")), false);
  const files = [];
  const scan = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      entry.isDirectory() ? scan(file) : files.push(file);
    }
  };
  scan(path.join(root, "src"));
  for (const file of files.filter((file) => /\.(js|jsx)$/.test(file))) {
    const code = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(
      code,
      /innerHTML|outerHTML|insertAdjacentHTML|document\.write|dangerouslySetInnerHTML|useController|lifecycle\.expose/,
      file,
    );
  }
  const routes = JSON.parse(
    fs.readFileSync(path.join(root, "src/data/routes.json")),
  );
  assert.ok(routes.length >= 30);
  for (const route of routes) {
    assert.ok(!route.path.includes(".html"));
    assert.ok(fs.existsSync(path.join(root, "src/pages", route.slug + ".jsx")));
  }
  const assets = walk(parse(index)).flatMap((node) =>
    (node.attrs || [])
      .filter((attribute) => ["src", "href"].includes(attribute.name))
      .map((attribute) => attribute.value),
  );
  for (const asset of assets) {
    if (/^(?:[a-z]+:|#|\/\/)/i.test(asset)) continue;
    assert.ok(fs.existsSync(path.join(dist, asset.replace(/^\//, ""))), asset);
  }
  const styles = JSON.parse(
    fs.readFileSync(path.join(root, "src/data/route-styles.json")),
  );
  for (const stylesheet of new Set(Object.values(styles).flat()))
    assert.ok(
      fs.existsSync(path.join(dist, stylesheet.replace(/^\//, ""))),
      stylesheet,
    );
});

test("React markdown retains unique guide anchors and treats unsafe links and HTML as text", () => {
  const parsed = parseMarkdown(
    "## Duplicate\n\n**Useful** [source](https://example.com).\n\n## Duplicate\n\n<script>alert(1)</script>\n\n```js\nconst value = 1;\n```\n\n- One\n- Two",
  );
  assert.equal(parsed.headings.length, 2);
  assert.notEqual(parsed.headings[0].id, parsed.headings[1].id);
  assert.ok(
    parsed.blocks.some(
      (block) => block.type === "code" && block.text === "const value = 1;",
    ),
  );
  assert.ok(
    parsed.blocks.some(
      (block) => block.type === "p" && block.text.includes("<script>"),
    ),
  );
  assert.equal(safeMarkdownLink("javascript:alert(1)"), null);
  assert.equal(
    safeMarkdownLink("https://example.com/guide"),
    "https://example.com/guide",
  );
  assert.equal(safeMarkdownLink("services.html#faq"), "services.html#faq");
});
