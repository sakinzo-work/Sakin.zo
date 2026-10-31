import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = (await fs.readdir(path.join(root, "dist/assets")))
  .filter((file) => /\.(js|css)$/.test(file))
  .map((file) => "./assets/" + file);
const version = crypto
  .createHash("sha256")
  .update(assets.join("\n"))
  .digest("hex")
  .slice(0, 12);
const file = path.join(root, "dist/admin-sw.js");
const source = await fs.readFile(file, "utf8");
await fs.writeFile(
  file,
  source
    .replace("__REACT_BUILD_ASSETS__", JSON.stringify(assets))
    .replace("__REACT_BUILD_VERSION__", version),
);
const env = loadEnv("production", root, "");
const site = (
  env.VITE_SITE_URL || "https://sakinzo-work.github.io/Sakin.zo/"
).replace(/\/?$/, "/");
const routes = JSON.parse(
  await fs.readFile(path.join(root, "src/data/routes.json"), "utf8"),
);
const entries = routes
  .filter((route) => route.slug !== "project")
  .map(
    (route) =>
      `  <url><loc>${new URL(route.path.replace(/^\//, ""), site).href}</loc></url>`,
  )
  .join("\n");
await fs.writeFile(
  path.join(root, "dist/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
);
await fs.writeFile(
  path.join(root, "dist/robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: ${new URL("admin", site).pathname}\n\nSitemap: ${new URL("sitemap.xml", site).href}\n`,
);
console.log(
  "React SPA built. Admin offline shell includes the versioned React bundles.",
);
