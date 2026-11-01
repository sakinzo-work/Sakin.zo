import { createSeo, detailMetadata, siteAddress } from "../src/lib/seo.js";

export const escapeHtml = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
export function routeSeo(catalog, slug, path, row, kind) {
  const detail = row ? detailMetadata(kind, row) : {};
  const meta = {
    ...(catalog.metadata[slug] || catalog.metadata["not-found"]),
    ...detail,
  };
  const cover = catalog.covers[slug];
  const schema = row
    ? kind === "blog"
      ? {
          "@type": "BlogPosting",
          headline: row.title,
          description: meta.description,
          author: {
            "@type":
              !row.author || row.author === "Sakinzo Team"
                ? "Organization"
                : "Person",
            name: row.author || "Sakinzo Team",
          },
          publisher: { "@type": "Organization", name: "Sakin.zo" },
          datePublished: row.publishedAt || undefined,
          dateModified: row.updatedAt || row.publishedAt || undefined,
          articleSection: row.category,
        }
      : {
          "@type": "CreativeWork",
          name: row.title,
          description: meta.description,
          creator: {
            "@type": row.creatorName ? "Person" : "Organization",
            name: row.creatorName || "Sakin.zo",
          },
        }
    : undefined;
  return createSeo({
    slug,
    path,
    meta,
    cover,
    schema,
    service: catalog.services.find((item) => item.slug === slug),
    siteUrl: catalog.siteUrl,
    api: catalog.api,
  });
}
export function renderSeoHead(seo) {
  const meta = (name, content, property = false) =>
    `<meta ${property ? "property" : "name"}="${name}" content="${escapeHtml(content)}" />`;
  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    meta("description", seo.description),
    meta("robots", seo.robots),
    `<link rel="canonical" href="${escapeHtml(seo.url)}" />`,
    ...Object.entries({
      "og:title": seo.title,
      "og:description": seo.description,
      "og:url": seo.url,
      "og:image": seo.image,
      "og:image:alt": seo.imageAlt,
      "og:type": seo.type,
      "og:site_name": "Sakin.zo",
      "og:locale": "en_IN",
      ...(seo.imageWidth
        ? {
            "og:image:width": seo.imageWidth,
            "og:image:height": seo.imageHeight,
          }
        : {}),
    }).map(([name, value]) => meta(name, value, true)),
    ...Object.entries({
      "twitter:card": "summary_large_image",
      "twitter:title": seo.title,
      "twitter:description": seo.description,
      "twitter:image": seo.image,
      "twitter:image:alt": seo.imageAlt,
    }).map(([name, value]) => meta(name, value)),
    `<script id="sakinzo-schema" type="application/ld+json" data-site-seo>${JSON.stringify(seo.schema).replace(/</g, "\\u003c")}</script>`,
  ].join("\n");
}
export function seoDocument(shell, seo) {
  const block = `<!--seo:start-->\n${renderSeoHead(seo)}\n<!--seo:end-->`;
  return /<!--seo:start-->[\s\S]*?<!--seo:end-->/.test(shell)
    ? shell.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => block)
    : shell.replace("</head>", () => block + "\n</head>");
}
export function contentEntries(data, siteUrl) {
  const base = siteAddress(siteUrl),
    entries = [];
  for (const [kind, rows] of [
    ["blog", data?.blogs],
    ["projects", data?.projects],
  ]) {
    for (const row of Array.isArray(rows) ? rows : []) {
      if (row.visible === false) continue;
      const id = kind === "blog" ? row.slug || row._id : row._id;
      if (!id) continue;
      const updated = row.updatedAt || row.publishedAt;
      entries.push({
        url: new URL(`${kind}/${encodeURIComponent(id)}`, base).href,
        ...(updated && !Number.isNaN(Date.parse(updated))
          ? { modified: new Date(updated).toISOString() }
          : {}),
      });
    }
  }
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
export function sitemapXml(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((entry) => `  <url><loc>${escapeHtml(entry.url)}</loc>${entry.modified ? `<lastmod>${escapeHtml(entry.modified)}</lastmod>` : ""}</url>`).join("\n")}\n</urlset>\n`;
}
