import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import metadata from "../data/metadata.json";
import covers from "../data/page-covers.js";
import services from "../data/services.json";
import { useLanguage } from "./LanguageContext.jsx";
const Context = createContext(() => {});
export function MetadataProvider({ slug, children }) {
  const location = useLocation(),
    { t, language } = useLanguage();
  const [override, setOverride] = useState(null);
  const info = metadata[slug] || metadata.index;
  const current =
    override?.route === location.pathname + location.search ? override : null;
  const meta = { ...info, ...current?.meta };
  const title = slug === "admin" ? meta.title : t(meta.title),
    description = slug === "admin" ? meta.description : t(meta.description);
  const base = new URL(import.meta.env.BASE_URL, window.location.origin);
  const url = new URL(
    location.pathname.replace(/^\//, "") + location.search,
    base,
  ).href;
  const candidate = new URL(
    meta.image ||
      covers.get(slug)?.image ||
      "assets/sakinzo-hero-desktop-waves.webp",
    base,
  );
  const image = /^https?:$/.test(candidate.protocol)
    ? candidate.href
    : new URL(
        covers.get(slug)?.image || "assets/sakinzo-hero-desktop-waves.webp",
        base,
      ).href;
  const service = services.find((item) => item.slug === slug);
  const schema = current?.schema || {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        description,
        url,
        inLanguage: slug === "admin" ? "en" : language,
        publisher: { "@type": "Organization", name: "Sakin.zo" },
      },
      {
        "@type": "Organization",
        name: "Sakin.zo",
        url: base.href,
        logo: new URL("favicon.svg", base).href,
      },
      ...(service
        ? [
            {
              "@type": "Service",
              name: service.name,
              serviceType: service.name,
              description: service.summary,
              url,
              image,
              provider: { "@type": "Organization", name: "Sakin.zo" },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: base.href,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: new URL("services", base).href,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: service.name,
                  item: url,
                },
              ],
            },
          ]
        : []),
    ],
  };
  return (
    <Context.Provider value={setOverride}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={meta.keywords || ""} />
      <meta
        name="robots"
        content={slug === "admin" ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={meta.type || "website"} />
      <meta property="og:site_name" content="Sakin.zo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script
        id={current?.schemaId || "sakinzo-schema"}
        type="application/ld+json"
      >
        {JSON.stringify(schema)}
      </script>
      {children}
    </Context.Provider>
  );
}
export function useMetadata(meta, schema, schemaId) {
  const setOverride = useContext(Context),
    location = useLocation();
  const key = JSON.stringify([meta, schema]);
  useEffect(() => {
    if (!meta) return;
    setOverride({
      route: location.pathname + location.search,
      meta,
      schema,
      schemaId,
    });
    return () => setOverride(null);
  }, [key, location.pathname, location.search, setOverride]);
}
