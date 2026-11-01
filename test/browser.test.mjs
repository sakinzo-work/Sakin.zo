import assert from "node:assert/strict";
import { test } from "node:test";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const routes = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/routes.json")),
);
const manifest = Object.fromEntries(
  [...routes, { slug: "admin", path: "/admin" }].map((route) => [
    route.slug,
    { file: route.path, bodyAttributes: { "data-page": route.slug } },
  ]),
);
const services = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/services.json")),
);
const article = {
  _id: "blog-fixture",
  slug: "engineering-guide",
  title: "Engineering guide",
  excerpt: "A practical engineering guide.",
  category: "AI",
  author: "Sakinzo Team",
  body: fs.readFileSync(
    path.join(root, "content/blogs/ai-tools-tips.md"),
    "utf8",
  ),
  coverImage: "assets/service-ai.webp",
  tags: ["AI", "Engineering"],
  publishedAt: "2026-10-29",
  readTime: 5,
};
const project = {
  _id: "project-fixture",
  title: "Connected app",
  category: "Android App",
  desc: "## The product\n\nA **connected** app.\n\n- Reliable software\n- Clear design",
  img: "assets/service-iot.webp",
  images: ["assets/service-ai.webp"],
  tags: ["React", "IoT"],
  demoUrl: "https://preview.example.test/",
  videoUrl: "https://media.example.test/demo.mp4",
  creatorName: "Example developer",
  creatorPortfolio: "https://example.test/",
  visible: true,
  order: 1,
};
const admin = {
  id: "owner-fixture",
  _id: "owner-fixture",
  name: "Test owner",
  email: "owner@example.test",
  role: "owner",
  canSaveDirect: true,
  canManageAccess: true,
  permissions: [],
  active: true,
};
const siteData = {
  projects: [project],
  blogs: [article],
  insights: [],
  clients: [],
  stats: [],
  team: [],
  testimonials: [],
  mapLocations: [],
  contactOffices: [],
  contactPage: {},
  whatWeDoServices: {},
  sections: {},
};
let server, browser, origin;
async function setup() {
  assert.ok(
    fs.existsSync(path.join(root, "dist/index.html")),
    "Run npm run build before npm test.",
  );
  server = http.createServer((request, response) => {
    const url = new URL(request.url, "http://localhost");
    if (url.pathname.startsWith("/api/")) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(
        JSON.stringify(
          url.pathname.endsWith("/i18n/languages")
            ? { configured: false }
            : url.pathname.endsWith("/public/site-data")
              ? siteData
              : [],
        ),
      );
      return;
    }
    let file = path.resolve(
      root,
      "dist",
      "." +
        (url.pathname === "/"
          ? "/index.html"
          : decodeURIComponent(url.pathname)),
    );
    if (!fs.existsSync(file) && (!path.extname(file) || file.endsWith(".html")))
      file = path.join(root, "dist/index.html");
    if (
      !file.startsWith(path.join(root, "dist") + path.sep) ||
      !fs.existsSync(file) ||
      !fs.statSync(file).isFile()
    ) {
      response.writeHead(404).end();
      return;
    }
    const type =
      {
        ".html": "text/html; charset=utf-8",
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".webp": "image/webp",
        ".png": "image/png",
        ".svg": "image/svg+xml",
        ".mp4": "video/mp4",
        ".webmanifest": "application/manifest+json",
        ".woff2": "font/woff2",
      }[path.extname(file)] || "application/octet-stream";
    response.writeHead(200, { "Content-Type": type });
    fs.createReadStream(file).pipe(response);
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ channel: "chrome", headless: true });
  fs.mkdirSync(path.join(root, "test-results"), { recursive: true });
}
await setup();

async function session({ translation = false, employee = false, brokenCover = false, mapLocations = [], projectCount = 1 } = {}) {
  const identity = employee
    ? {
        ...admin,
        id: "employee-fixture",
        _id: "employee-fixture",
        email: "employee@example.test",
        role: "employee",
        canSaveDirect: false,
        canManageAccess: false,
        permissions: ["projects"],
      }
    : admin;
  const approvals = [];
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    serviceWorkers: "block",
  });
  const page = await context.newPage(),
    errors = [],
    requests = [];
  let projects = [structuredClone(project)];
  for (let index = 1; index < projectCount; index++)
    projects.push({ ...structuredClone(project), _id: `project-fixture-${index}`, title: `Connected app ${index + 1}` });
  if (brokenCover) projects[0].img = "assets/missing-project-cover.png";
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      /React|hydration|Invalid DOM|did not match/i.test(message.text())
    )
      errors.push(message.text());
  });
  await page.route("**/*", async (route) => {
    const request = route.request(),
      url = new URL(request.url());
    if (url.pathname.startsWith("/api/")) {
      requests.push({
        method: request.method(),
        path: url.pathname,
        body: request.postData(),
      });
      const endpoint = url.pathname.slice(4);
      if (endpoint === "/approvals") {
        if (request.method() === "POST")
          approvals.push({
            ...request.postDataJSON(),
            _id: "approval-fixture",
            status: "pending",
          });
        return route.fulfill({
          json: request.method() === "POST" ? approvals.at(-1) : approvals,
        });
      }
      if (endpoint === "/i18n/languages")
        return route.fulfill({
          json: {
            configured: translation,
            languages: translation
              ? [
                  { code: "en", name: "English" },
                  { code: "hi", name: "Hindi" },
                  { code: "ur", name: "Urdu" },
                ]
              : [{ code: "en", name: "English" }],
          },
        });
      if (endpoint === "/i18n/translate") {
        const { texts, target } = request.postDataJSON();
        return route.fulfill({
          json: {
            translations: texts.map(
              (text) => `${target === "ur" ? "اردو" : "हिंदी"} ${text}`,
            ),
          },
        });
      }
      if (endpoint === "/public/site-data")
        return route.fulfill({ json: { ...siteData, projects, mapLocations } });
      if (endpoint === "/auth/login")
        return route.fulfill({
          json: { token: "local-test-token", admin: identity },
        });
      if (endpoint === "/auth/me")
        return route.fulfill({ json: { admin: identity } });
      if (endpoint === "/projects/admin/all")
        return route.fulfill({ json: projects });
      if (endpoint === "/projects" && request.method() === "POST") {
        const saved = { ...request.postDataJSON(), _id: "created-fixture" };
        projects.push(saved);
        return route.fulfill({ json: saved });
      }
      if (
        endpoint === "/projects/project-fixture" &&
        request.method() === "PUT"
      ) {
        projects[0] = { ...projects[0], ...request.postDataJSON() };
        return route.fulfill({ json: projects[0] });
      }
      if (endpoint.startsWith("/projects/") && !endpoint.endsWith("/all"))
        return route.fulfill({ json: projects[0] });
      if (endpoint === "/upload/videos")
        return route.fulfill({
          json: { url: "/api/upload/videos/video-fixture" },
        });
      if (endpoint === "/blogs" || endpoint === "/blogs/admin/all")
        return route.fulfill({ json: [article] });
      if (endpoint === "/contact-page") return route.fulfill({ json: {} });
      if (endpoint === "/submissions" && request.method() === "POST")
        return route.fulfill({
          status: 201,
          json: { _id: "submission-fixture", message: "Saved" },
        });
      if (endpoint === "/admins") return route.fulfill({ json: [identity] });
      return route.fulfill({ json: [] });
    }
    if (url.origin === origin) return route.continue();
    if (url.hostname === "preview.example.test")
      return route.fulfill({
        contentType: "text/html",
        body: "<!doctype html><title>App preview fixture</title><p>App preview</p>",
      });
    return route.fulfill({
      contentType: url.pathname.endsWith(".css") ? "text/css" : "text/plain",
      body: "",
    });
  });
  const open = async (file) => {
    await page.goto(new URL(file.replace(/^\//, ""), origin + "/").href);
    await page.locator("[data-react-route]").waitFor({ state: "attached" });
  };
  return { page, errors, requests, open, close: () => context.close() };
}

await test("all public React routes render without runtime errors on desktop and mobile", async () => {
  const { page, open, errors, close } = await session();
  try {
    for (const [slug, route] of Object.entries(manifest)) {
      await page.setViewportSize({ width: 1440, height: 1000 });
      await open(route.file);
      assert.ok(await page.locator("#root").textContent(), slug);
      assert.equal(
        await page.locator("body").getAttribute("data-page"),
        route.bodyAttributes["data-page"] ?? null,
        slug,
      );
      for (const width of [1440, 390]) {
        await page.setViewportSize({
          width,
          height: width === 390 ? 844 : 1000,
        });
        const metrics = await page.evaluate(() => ({
          width: innerWidth,
          scroll: document.documentElement.scrollWidth,
        }));
        assert.ok(
          metrics.scroll <= metrics.width + 1,
          `${slug} overflows at ${width}: ${metrics.scroll}`,
        );
      }
      assert.deepEqual(errors, [], `${slug}: browser errors`);
    }
  } finally {
    await close();
  }
});

await test("all fifteen service pages retain content, hero assets, FAQs and responsive navigation", async () => {
  const { page, open, errors, close } = await session();
  try {
    for (const service of services) {
      await page.setViewportSize({ width: 1440, height: 1000 });
      await open(service.href);
      assert.equal(await page.locator("h1").textContent(), service.headline);
      assert.equal(
        await page.locator(".service-capabilities article").count(),
        3,
      );
      assert.equal(await page.locator(".service-process > li").count(), 4);
      assert.equal(await page.locator("header .service-menu a").count(), 16);
      const image = page.locator(".service-hero-image");
      await image.evaluate((node) => node.decode());
      assert.equal(await image.getAttribute("src"), "/" + service.cover.image);
      await page.locator("details summary").first().click();
      assert.equal(await page.locator("details[open]").count(), 1);
    }
    await open("services.html");
    assert.equal(await page.locator(".service-grid .service-card").count(), 15);
    await page.locator("header .service-nav-group .nbtn").click();
    assert.equal(
      await page
        .locator("header .service-nav-group .nbtn")
        .getAttribute("aria-expanded"),
      "true",
    );
    await page.keyboard.press("Escape");
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator("#hamburger").click();
    await page
      .locator("#mobileMenu .mob-link")
      .filter({ hasText: /^Services$/ })
      .click();
    assert.equal(await page.locator("#mobileMenu .mob-sub.open a").count(), 16);
    await page.locator('#mobileMenu a[href="/qa-testing"]').click();
    await page.waitForURL("**/qa-testing");
    await page.locator("[data-react-route]").waitFor({ state: "attached" });
    assert.equal(
      await page.locator("h1").textContent(),
      services.find((item) => item.slug === "qa-testing").headline,
    );
    await page.screenshot({
      path: path.join(root, "test-results/service-mobile.png"),
      fullPage: true,
    });
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("home API content, contact submissions, attachments and reset work with fixtures", async () => {
  const { page, open, errors, requests, close } = await session();
  try {
    await open("index.html");
    await page.locator('a[href="/projects/project-fixture"]').first().waitFor();
    await page.waitForFunction(() =>
      [...document.querySelectorAll(".hero h1,.hero h1 *")].every(
        (node) => Number(getComputedStyle(node).opacity) > 0.99,
      ),
    );
    for (const element of await page.locator(".reveal:visible").all())
      await element.scrollIntoViewIfNeeded();
    await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: path.join(root, "test-results/home-hero-desktop.png"),
    });
    await page.screenshot({
      path: path.join(root, "test-results/home-desktop.png"),
      fullPage: true,
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({
      path: path.join(root, "test-results/home-hero-mobile.png"),
    });
    await page.screenshot({
      path: path.join(root, "test-results/home-mobile.png"),
      fullPage: true,
    });
    await open("contactus.html");
    await page.locator('#cForm [name="name"]').fill("Local test");
    await page.locator('#cForm [name="email"]').fill("test@example.test");
    await page.locator('#cForm [name="phone"]').fill("1234567890");
    await page.locator('#cForm [name="company"]').fill("Example company");
    await page
      .locator('#cForm [name="desc"]')
      .fill("A fixture-only contact request.");
    await page.locator("#fileIn").setInputFiles({
      name: "brief.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("Test brief"),
    });
    await page.locator("#chkBox").click();
    await page.locator("#subBtn").click();
    await page.locator("#successBox").waitFor({ state: "visible" });
    assert.ok(
      requests.some(
        (request) =>
          request.method === "POST" &&
          request.path === "/api/submissions" &&
          request.body.includes("brief.txt"),
      ),
    );
    await page.locator(".btn-reset").click();
    assert.equal(await page.locator('#cForm [name="name"]').inputValue(), "");
    assert.equal(
      await page.locator("#chkBox").getAttribute("class"),
      "chk-box",
    );
    await page.screenshot({
      path: path.join(root, "test-results/contact-mobile.png"),
      fullPage: true,
    });
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("public layout, visible map pins, language menu and business contact links work on desktop and mobile", async () => {
  const mapLocations = [
    { _id: "location-one", name: "Mumbra client", city: "Mumbra", country: "India", lat: 19.17541, lng: 73.026638 },
    { _id: "location-two", name: "Mulund client", city: "Mulund", country: "India", lat: 19.1725, lng: 72.9416 },
  ];
  const { page, open, errors, close } = await session({ mapLocations, projectCount: 4, translation: true });
  try {
    await open("/");
    await page.locator("#main-projects-grid .project-card").first().waitFor();
    const spacing = await page.locator("#sec-projects").evaluate((section) => ({
      padding: parseFloat(getComputedStyle(section).paddingTop),
      gap: section.querySelector(".project-filters").getBoundingClientRect().top - section.querySelector(".sec-hd").getBoundingClientRect().bottom,
    }));
    assert.ok(spacing.padding >= 64, "projects need section padding");
    assert.ok(spacing.gap >= 24, "filters must clear the heading");
    assert.equal(await page.locator(".project-filter").count(), 10);
    await page.getByRole("button", { name: "Show More", exact: true }).click();
    assert.equal(await page.locator("#main-projects-grid .project-card").count(), 4);
    await page.getByRole("button", { name: "Show Less", exact: true }).click();
    assert.equal(await page.locator("#main-projects-grid .project-card").count(), 3);
    await page.getByRole("button", { name: "iOS App", exact: true }).click();
    assert.match(await page.locator(".empty-projects").textContent(), /in this category/);
    await page.locator("#sec-map").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => {
      const pins = [...document.querySelectorAll(".leaflet-marker-icon")];
      return pins.length === 2 && pins.every((pin) => pin.complete && pin.naturalWidth > 0 && !pin.src.includes("node_modules"));
    });
    await page.getByRole("button", { name: "Show Mumbra client on map" }).click();
    await page.locator(".leaflet-popup-content strong").waitFor();
    assert.equal(await page.locator(".leaflet-popup-content strong").textContent(), "Mumbra client");
    assert.ok((await page.locator(".leaflet-popup-content").boundingBox()).width >= 200);
    await page.locator("#clientsMap").evaluate((map) => map.scrollIntoView({ block: "start", behavior: "instant" }));
    assert.ok(await page.evaluate(() => document.elementFromPoint(innerWidth / 2, 25)?.closest("header")), "map controls must stay below the header");
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
      await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
      assert.equal(await page.locator(".hero-content").evaluate((content) => Number(getComputedStyle(content).opacity)), 1, "mobile hero content must remain visible");
      const trigger = page.getByRole("button", { name: "Choose website language" });
      await trigger.click();
      const bounds = await page.locator(".language-panel").evaluate((panel) => {
        const rect = panel.getBoundingClientRect();
        return { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom, width: innerWidth, height: innerHeight, headerBottom: document.querySelector("header").getBoundingClientRect().bottom };
      });
      assert.ok(bounds.top >= bounds.headerBottom, "language panel must clear the header");
      assert.ok(bounds.left >= 0 && bounds.right <= bounds.width && bounds.bottom <= bounds.height, "language menu must fit the viewport");
      await page.getByPlaceholder("Search languages").fill("Hindi");
      assert.equal(await page.locator(".language-option").count(), 1);
      await page.keyboard.press("Escape");
      assert.equal(await page.locator(".language-panel").count(), 0);
      assert.ok(await trigger.evaluate((button) => button === document.activeElement));
    }
    for (const route of ["/", "/contact", "/services", "/blog", "/projects/project-fixture"]) {
      await open(route);
      assert.ok(await page.locator('a[href="mailto:sakinzo.work@gmail.com"]').count(), route);
      assert.ok(await page.locator('a[href="tel:+918879162814"]').count(), route);
      assert.ok(await page.locator('a[href="https://www.instagram.com/sakin.zo/"]').count(), route);
      if (route === "/contact") assert.equal(await page.locator(".contact-details--methods a").count(), 3);
    }
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("footer attachments support select, remove, size validation and submit; the original phone hero remains clickable", async () => {
  const { page, open, requests, errors, close } = await session();
  try {
    await open("/");
    const form = page.locator("#indexContactForm");
    const row = await form.locator(".footer-form-row").first().evaluate((row) => {
      const [name, email] = [...row.querySelectorAll("input")].map((input) => input.getBoundingClientRect());
      return { sameRow: Math.abs(name.top - email.top) < 2, separated: name.right < email.left };
    });
    assert.ok(row.sameRow && row.separated);
    assert.match(await page.locator(".ft-addr").textContent(), /Mumbai.*Thane/);
    assert.doesNotMatch(await page.locator(".ft-addr").textContent(), /Pune/i);
    await form.locator("#indexAttachment").setInputFiles({ name: "brief.pdf", mimeType: "application/pdf", buffer: Buffer.from("Fixture brief") });
    assert.equal(await form.locator("#indexAttachLabel").textContent(), "brief.pdf");
    await form.getByRole("button", { name: "Remove attachment" }).click();
    assert.equal(await form.locator("#indexAttachLabel").textContent(), "Add an attachment");
    await form.locator("#indexAttachment").setInputFiles({ name: "too-large.pdf", mimeType: "application/pdf", buffer: Buffer.alloc(10 * 1024 * 1024 + 1) });
    assert.match(await form.getByRole("alert").textContent(), /smaller than 10 MB/);
    assert.equal(await form.locator(".attachment-remove").count(), 0);
    await form.locator("#indexAttachment").setInputFiles({ name: "footer-brief.pdf", mimeType: "application/pdf", buffer: Buffer.from("Footer fixture") });
    await form.locator('[name="name"]').fill("Footer test");
    await form.locator('[name="email"]').fill("fixture@example.test");
    await form.locator('[name="desc"]').fill("Fixture-only footer request.");
    await form.locator('input[type="checkbox"]').check();
    await form.getByRole("button", { name: "Send Request", exact: true }).click();
    await form.getByRole("status").waitFor();
    assert.ok(requests.some((request) => request.path === "/api/submissions" && request.method === "POST" && request.body.includes("footer-brief.pdf") && request.body.includes("Website footer")));
    await form.getByRole("button", { name: "Send another request" }).click();
    for (const width of [360, 390, 430]) {
      await page.setViewportSize({ width, height: 844 });
      await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
      const hero = await page.locator(".home-hero-photo").evaluate((hero) => {
        const link = hero.querySelector(".hero-cta"), rect = link.getBoundingClientRect();
        return { image: getComputedStyle(hero).backgroundImage, clickable: document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)?.closest("a") === link, width: rect.width, height: rect.height };
      });
      assert.match(hero.image, /sakinzo-hero-mobile\.webp/);
      assert.ok(hero.clickable && hero.width > 120 && hero.height >= 44);
    }
    await page.locator(".home-hero-photo .hero-cta").click();
    await page.locator('[data-react-route="contactus"]').waitFor({ state: "attached" });
    assert.ok(page.url().includes("/contact#form-section"));
    assert.equal(await page.locator(".attachment-picker #fileIn").count(), 1);
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("project cards retain working gallery images when the saved cover link fails", async () => {
  const { page, open, errors, close } = await session({ brokenCover: true });
  try {
    await open("/");
    const card = page.locator("#main-projects-grid .project-card").first();
    await card.waitFor();
    await card.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => {
      const image = document.querySelector("#main-projects-grid .project-img.active");
      return image?.src.endsWith("/assets/service-ai.webp") && image.complete && image.naturalWidth > 0;
    });
    assert.equal(await card.locator(".project-img-fallback").count(), 0);
    assert.equal(await card.locator(".project-img").count(), 1);
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("blog guides render safe React content and project previews switch devices without iframe reloads", async () => {
  const { page, open, errors, close } = await session();
  try {
    await open("blog.html?slug=engineering-guide");
    await page.locator("h1").filter({ hasText: article.title }).waitFor();
    assert.ok((await page.locator(".article-toc a").count()) > 2);
    assert.ok((await page.locator(".article-content h2").count()) > 2);
    await page.locator(".article-toc a").first().click();
    assert.ok(new URL(page.url()).hash.startsWith("#guide-"));
    await page.screenshot({
      path: path.join(root, "test-results/blog-desktop.png"),
      fullPage: true,
    });
    await open("project.html?id=project-fixture");
    await page.locator("#livePreview").waitFor();
    await page.locator(".preview-frame").evaluate((frame) => {
      frame.dataset.original = "true";
    });
    for (const width of [1440, 768, 390]) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
      for (const device of ["phone", "tablet", "desktop"]) {
        await page.locator(`[data-preview-device="${device}"]`).click();
        assert.equal(
          await page.locator("#livePreviewDevice").getAttribute("data-device"),
          device,
        );
        assert.equal(
          await page.locator(".preview-frame").getAttribute("data-original"),
          "true",
        );
        const metrics = await page
          .locator(".preview-device")
          .evaluate((element) => ({
            box: element.getBoundingClientRect().toJSON(),
            width: innerWidth,
          }));
        assert.ok(
          metrics.box.left >= -1 && metrics.box.right <= metrics.width + 1,
          `${width}/${device}: preview clipping`,
        );
      }
    }
    assert.equal(await page.locator("video.project-video").count(), 1);
    await page.screenshot({
      path: path.join(root, "test-results/project-mobile.png"),
      fullPage: true,
    });
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("admin login, navigation, edit modal and video upload retain their API behavior", async () => {
  const { page, open, errors, requests, close } = await session();
  try {
    await open("admin.html");
    await page.locator('#loginForm [name="email"]').fill("owner@example.test");
    await page.locator("#loginPassword").fill("local-test-password");
    await page.locator("#loginButton").click();
    await page.locator("#app").waitFor({ state: "visible" });
    await page.locator('#nav [data-page="projects"]').click();
    await page
      .locator("button")
      .filter({ hasText: /^Edit$/ })
      .first()
      .click();
    await page
      .locator('#modalForm [name="title"]')
      .fill("Updated connected app");
    await page.locator("#upload-project-video").setInputFiles({
      name: "project-demo.mp4",
      mimeType: "video/mp4",
      buffer: Buffer.from("Fixture video bytes"),
    });
    await page
      .locator("#modalForm button")
      .filter({ hasText: "Save changes" })
      .click();
    await page.locator("#modal").waitFor({ state: "hidden" });
    assert.ok(
      requests.some(
        (request) =>
          request.path === "/api/upload/videos" && request.method === "POST",
      ),
    );
    const saved = requests.find(
      (request) =>
        request.path === "/api/projects/project-fixture" &&
        request.method === "PUT",
    );
    assert.ok(saved, "updated project was submitted");
    assert.equal(JSON.parse(saved.body).title, "Updated connected app");
    assert.ok(
      JSON.parse(saved.body).videoUrl.endsWith(
        "/api/upload/videos/video-fixture",
      ),
    );
    await page.screenshot({
      path: path.join(root, "test-results/admin-desktop.png"),
      fullPage: true,
    });
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("translation retains form values, switches RTL correctly and restores English", async () => {
  const { page, open, errors, requests, close } = await session({
    translation: true,
  });
  try {
    await open("/contact");
    await page.locator('#cForm [name="name"]').fill("Original form value");
    const original = await page.locator("h2#contactFormTitle").textContent();
    const choose = async (name) => {
      await page.locator("header .language-trigger").click();
      await page.getByRole("option").filter({ hasText: name }).click();
    };
    await choose("Hindi");
    await page.waitForFunction(
      () =>
        document.documentElement.lang === "hi" &&
        document
          .querySelector("#contactFormTitle")
          ?.textContent.includes("\u0939\u093f\u0902\u0926\u0940"),
    );
    assert.equal(
      await page.locator('#cForm [name="name"]').inputValue(),
      "Original form value",
    );
    assert.equal(
      (await page.locator("header .logo-txt").textContent()).trim(),
      "Sakin.zo",
    );
    await choose("Urdu");
    await page.waitForFunction(() => document.documentElement.dir === "rtl");
    await choose("English");
    await page.waitForFunction(() => document.documentElement.lang === "en");
    assert.equal(
      await page.locator("#contactFormTitle").textContent(),
      original,
    );
    assert.equal(await page.locator("html").getAttribute("dir"), "ltr");
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("admin PWA retains its React shell when opened offline", async () => {
  const context = await browser.newContext();
  try {
    const page = await context.newPage();
    await page.goto(`${origin}/admin.html`);
    await page.locator("[data-react-route]").waitFor({ state: "attached" });
    await page.evaluate(async () => {
      await navigator.serviceWorker.ready;
    });
    await page.waitForFunction(() =>
      Boolean(navigator.serviceWorker.controller),
    );
    await context.setOffline(true);
    await page.reload();
    await page.locator("[data-react-route]").waitFor({ state: "attached" });
    assert.equal(await page.locator("#loginForm").isVisible(), true);
    assert.equal(
      await page.locator("#loginPassword").getAttribute("type"),
      "password",
    );
  } finally {
    await context.close();
  }
});

await test("React navigation preserves the document across routes, back navigation and blog query links", async () => {
  const { page, open, errors, close } = await session();
  try {
    await open("/");
    await page.evaluate(() => (window.__navigationSentinel = "same-document"));
    await page.locator("header .service-nav-group .nbtn").click();
    await page.locator("header .service-menu-all").click();
    await page.waitForURL("**/services");
    await page.locator(".service-grid").first().waitFor();
    assert.equal(
      await page.evaluate(() => window.__navigationSentinel),
      "same-document",
    );
    await page.locator('.service-grid a[href="/qa-testing"]').first().click();
    await page.waitForURL("**/qa-testing");
    await page.locator("h1").waitFor();
    await page.goBack();
    await page.waitForURL("**/services");
    await page.locator(".service-grid").first().waitFor();
    assert.equal(
      await page.evaluate(() => window.__navigationSentinel),
      "same-document",
    );
    await page
      .locator("header .nbtn")
      .filter({ hasText: /^Insights$/ })
      .click();
    await page.locator('header .drop a[href="/blog"]').click();
    await page.locator(".post-card a").first().click();
    await page.locator("h1").filter({ hasText: article.title }).waitFor();
    assert.equal(
      await page.evaluate(() => window.__navigationSentinel),
      "same-document",
    );
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});
await test("employee project edits submit approvals and unauthorized sections remain inaccessible", async () => {
  const { page, open, requests, errors, close } = await session({
    employee: true,
  });
  try {
    await open("/admin");
    await page
      .locator('#loginForm [name="email"]')
      .fill("employee@example.test");
    await page.locator("#loginPassword").fill("fixture-password");
    await page.locator("#loginButton").click();
    await page.locator("#app").waitFor();
    await page.locator('#nav [data-page="projects"]').click();
    assert.equal(await page.locator('#nav [data-page="blogs"]').count(), 0);
    await page
      .getByRole("button", { name: "Edit", exact: true })
      .first()
      .click();
    await page
      .locator('#modalForm [name="title"]')
      .fill("Employee project request");
    await page.locator('#modalForm button[type="submit"]').click();
    await page.locator("#modal").waitFor({ state: "hidden" });
    const request = requests.find(
      (row) => row.path === "/api/approvals" && row.method === "POST",
    );
    assert.ok(request);
    const payload = JSON.parse(request.body);
    assert.equal(payload.resourceType, "projects");
    assert.equal(payload.action, "update");
    assert.equal(payload.payload.title, "Employee project request");
    assert.equal(
      requests.some(
        (row) =>
          row.path === "/api/projects/project-fixture" && row.method === "PUT",
      ),
      false,
    );
    await open("/admin/blogs");
    await page.locator("#pages").getByRole("alert").waitFor();
    assert.ok(
      (await page.locator("#pages").textContent()).includes(
        "do not have access",
      ),
    );
    assert.deepEqual(errors, []);
  } finally {
    await close();
  }
});

await test("header dropdowns remain open across the pointer gap and support keyboard navigation", async () => {
  const { page, open, errors, close } = await session();
  try {
    for (const path of ["/", "/contact", "/ai-development", "/blog"]) {
      await open(path);
      for (const label of ["About Us", "Services"]) {
        const trigger = page.locator("header .nbtn").filter({ hasText: label });
        const group = trigger.locator("..");
        const menu = group.locator(".drop");
        await trigger.hover();
        await menu.waitFor({ state: "visible" });
        assert.equal(await trigger.getAttribute("aria-expanded"), "true");
        const button = await trigger.boundingBox(), panel = await menu.boundingBox();
        await page.mouse.move(button.x + button.width / 2, (button.y + button.height + panel.y) / 2);
        // Staying in the visual gap must not run out the delayed close timer.
        await page.waitForTimeout(300);
        assert.equal(await menu.isVisible(), true, `${path}: ${label} closes in the gap`);
        await menu.locator("a").first().hover();
        assert.equal(await menu.isVisible(), true);
        await page.mouse.move(1400, 800);
        await menu.waitFor({ state: "hidden" });
        await trigger.focus();
        await page.keyboard.press("ArrowDown");
        await menu.waitFor({ state: "visible" });
        await page.waitForFunction(() => document.activeElement?.matches(".drop a"));
        await page.keyboard.press("Escape");
        await menu.waitFor({ state: "hidden" });
        assert.equal(await trigger.evaluate(element => element === document.activeElement), true);
      }
    }
    await open("/");
    await page.locator("header .nbtn").filter({ hasText: "About Us" }).hover();
    await page.locator('header .drop a[href="/careers"]').click();
    await page.waitForURL("**/careers");
    await page.locator("header .drop").first().waitFor({ state: "hidden" });
    assert.deepEqual(errors, []);
  } finally { await close(); }
});

await test("failed and slow public data has styled recovery controls and preserves saved projects", async () => {
  const { page, open, errors, close } = await session();
  let mode = "hold", release;
  let gate = new Promise(resolve => { release = resolve; });
  const hold = () => { mode = "hold"; gate = new Promise(resolve => { release = resolve; }); };
  await page.route("**/api/public/site-data", async route => {
    if (mode === "hold") await gate;
    await route.fulfill(mode === "error" ? { status: 503, json: { message: "Fixture outage" } } :
      { json: { ...siteData, projects: mode === "empty" ? [] : [project] } }).catch(() => {});
  });
  try {
    await open("/");
    await page.locator("#sec-projects .project-skeleton").first().waitFor();
    assert.equal(await page.locator("#sec-projects .project-skeleton").count(), 3);
    assert.equal(await page.locator(".project-filter").count(), 0);
    mode = "error"; release();
    const failure = page.locator('#sec-projects .content-state[data-state="error"]');
    await failure.waitFor();
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      const retry = failure.getByRole("button", { name: "Try again", exact: true });
      const appearance = await retry.evaluate(element => ({ height: element.getBoundingClientRect().height,
        background: getComputedStyle(element).backgroundColor }));
      assert.ok(appearance.height >= 44);
      assert.equal(appearance.background, "rgb(22, 115, 255)");
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      await failure.screenshot({ path: path.join(root, `test-results/projects-recovery-${width}.png`) });
    }
    hold();
    await failure.getByRole("button", { name: "Try again", exact: true }).click();
    await page.locator("#sec-projects .project-skeleton").first().waitFor();
    assert.equal(await page.locator('#sec-projects .content-state[data-state="error"]').count(), 0);
    mode = "success"; release();
    await page.locator("#main-projects-grid .project-card").first().waitFor();
    assert.equal(await page.locator(".project-filter").count(), 10);
    mode = "error";
    await page.reload();
    await page.locator('#sec-projects .content-state--compact[data-state="error"]').waitFor();
    assert.equal(await page.locator("#main-projects-grid .project-card").count(), 1);
    hold();
    await page.locator("#sec-projects").getByRole("button", { name: "Try again", exact: true }).click();
    await page.locator("#sec-projects").getByRole("button", { name: "Refreshing…", exact: true }).waitFor();
    assert.equal(await page.locator("#sec-projects .content-state-action").isDisabled(), true);
    assert.equal(await page.locator("#main-projects-grid .project-card").count(), 1);
    mode = "success"; release();
    await page.locator("#sec-projects .content-state--compact").waitFor({ state: "hidden" });
    mode = "empty";
    await page.reload();
    await page.getByRole("heading", { name: "No projects published yet." }).waitFor();
    assert.equal(await page.locator("#sec-projects .content-state-action").count(), 0);
    assert.equal(await page.locator(".project-filter").count(), 0);
    await page.route("**/api/blogs", route => route.fulfill({ status: 503, json: {} }));
    await open("/blog");
    await page.getByRole("heading", { name: "Articles are temporarily unavailable" }).waitFor();
    assert.equal(await page.locator(".content-state-action").isVisible(), true);
    await page.route("**/api/projects/unavailable", route => route.fulfill({ status: 503, json: {} }));
    await open("/projects/unavailable");
    await page.getByRole("heading", { name: "Project details are temporarily unavailable" }).waitFor();
    assert.equal(await page.locator(".content-state-action").isVisible(), true);
    assert.deepEqual(errors, []);
  } finally { release(); await close(); }
});

await test("page JavaScript loads alongside CSS and failed styling recovers without showing a broken layout", async () => {
  const { page, errors, close } = await session();
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  let fail = true, stylesheetRequests = 0;
  await page.route("**/assets/page-index-*.css", async route => {
    stylesheetRequests++;
    if (fail) { await gate; await route.abort().catch(() => {}); }
    else await route.continue();
  });
  try {
    const pageChunk = page.waitForRequest(request => /\/assets\/SiteHeader-[^/]+\.js$/.test(request.url()));
    await page.goto(origin, { waitUntil: "domcontentloaded" });
    await page.locator(".route-loading").waitFor();
    await pageChunk;
    assert.equal(await page.locator(".home-hero-photo").count(), 0);
    assert.equal(stylesheetRequests, 1);
    release();
    await page.getByRole("heading", { name: "This page couldn't finish loading" }).waitFor();
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      const retry = page.getByRole("button", { name: "Try again", exact: true });
      const appearance = await retry.evaluate(element => ({ height: element.getBoundingClientRect().height,
        background: getComputedStyle(element).backgroundColor }));
      assert.ok(appearance.height >= 44);
      assert.equal(appearance.background, "rgb(22, 115, 255)");
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      await page.screenshot({ path: path.join(root, `test-results/stylesheet-recovery-${width}.png`) });
    }
    fail = false;
    await page.getByRole("button", { name: "Try again", exact: true }).click();
    await page.locator(".home-hero-photo").waitFor();
    assert.equal(stylesheetRequests, 2);
    assert.equal(await page.locator('link[data-react-page-style][media="all"]').count(), 1);
    assert.equal(await page.locator('link[href*="leaflet"]').count(), 0);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.locator("header .nbtn").filter({ hasText: /^Insights$/ }).click();
    await page.locator('header .drop a[href="/blog"]').click();
    await page.locator(".post-card").first().waitFor();
    await page.goBack();
    await page.locator(".home-hero-photo").waitFor();
    assert.equal(stylesheetRequests, 2, "Returning to a page should reuse its loaded CSS");
    assert.deepEqual(errors, []);
  } finally { release(); await close(); }
});

await test("saved public articles and project details remain usable through slow reloads and outages", async () => {
  const { page, open, errors, close } = await session();
  let mode = "success", release;
  let gate;
  const hold = () => { mode = "hold"; gate = new Promise(resolve => { release = resolve; }); };
  const respond = async route => {
    if (mode === "hold") await gate;
    const blog = new URL(route.request().url()).pathname.endsWith("/blogs");
    await route.fulfill(mode === "success" ? { json: blog ? [article] : project }
      : { status: mode === "missing" ? 404 : 503, json: {} }).catch(() => {});
  };
  await page.route("**/api/blogs", respond);
  await page.route("**/api/projects/project-fixture", respond);
  try {
    await open("/blog");
    await page.locator(".post-card").first().waitFor();
    hold();
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.getByRole("heading", { name: "Updating articles…", exact: true }).waitFor();
    assert.equal(await page.locator(".post-card").count(), 1);
    mode = "error"; release();
    await page.getByRole("heading", { name: "Showing saved articles" }).waitFor();
    assert.equal(await page.locator(".post-card").count(), 1);
    mode = "success";
    await page.getByRole("button", { name: "Try again", exact: true }).click();
    await page.locator(".content-state--compact").waitFor({ state: "hidden" });
    await open("/projects/project-fixture");
    await page.getByRole("heading", { name: project.title, exact: true }).waitFor();
    hold();
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.getByRole("heading", { name: "Updating project details…", exact: true }).waitFor();
    assert.equal(await page.getByRole("heading", { name: project.title, exact: true }).count(), 1);
    mode = "error"; release();
    await page.getByRole("heading", { name: "Showing saved project details" }).waitFor();
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      const notice = page.locator(".remote-refresh-note .content-state");
      const copy = await notice.locator(".content-state-copy").boundingBox();
      const button = await notice.locator("button").boundingBox();
      const hero = await page.locator('[data-hero-page="project"]').boundingBox();
      const panel = await notice.boundingBox();
      assert.ok(hero.y >= panel.y + panel.height, "Saved-data notice must not overlap the project hero");
      if (width === 390) {
        assert.ok(copy.width >= 200, "The saved-data message needs readable text width");
        assert.ok(button.y >= copy.y + copy.height, "Retry belongs below the message on mobile");
      }
      await page.screenshot({ path: path.join(root, `test-results/saved-project-recovery-${width}.png`) });
    }
    mode = "missing";
    await page.getByRole("button", { name: "Try again", exact: true }).click();
    await page.getByRole("heading", { name: "Project not found", exact: true }).waitFor();
    assert.equal(await page.getByRole("heading", { name: project.title, exact: true }).count(), 0);
    assert.equal(await page.evaluate(() => Object.keys(localStorage).some(key => key.startsWith("sakinzo-public-v1:") && key.endsWith(":/projects/project-fixture"))), false);
    assert.deepEqual(errors, []);
  } finally { release?.(); await close(); }
});

await test("incomplete saved site data does not break the homepage and stalled requests expose a styled retry", async () => {
  const { page, open, errors, close } = await session();
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  await page.addInitScript(cached => {
    localStorage.setItem("sakinzo-site-data-v6", JSON.stringify({ data: cached }));
    const original = window.setTimeout;
    window.setTimeout = (handler, delay, ...args) => original(handler, delay === 30000 ? 500 : delay, ...args);
  }, { ...siteData, projects: [null, project], clients: [null], mapLocations: [null], sections: null, contactPage: null });
  await page.route("**/api/public/site-data", async route => { await gate; await route.fulfill({ json: siteData }).catch(() => {}); });
  try {
    await open("/");
    await page.getByRole("heading", { name: "Showing saved projects" }).waitFor();
    assert.equal(await page.locator("#main-projects-grid .project-card").count(), 1);
    assert.ok(await page.locator("#sec-projects .content-state-action").isEnabled());
    assert.deepEqual(errors, []);
  } finally { release(); await close(); }
});

await browser.close();
await new Promise((resolve) => {
  server.close(resolve);
  server.closeAllConnections();
});
