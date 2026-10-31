import { useLayoutEffect, useState } from "react";
import styles from "../data/route-styles.json";
import { assetUrl } from "../lib/paths.js";
export default function usePageStyles(slug) {
  const [loaded, setLoaded] = useState(null);
  useLayoutEffect(() => {
    let active = true;
    const previousClass = document.body.className;
    document.body.className =
      slug === "services" ||
      /development|solutions|design|analysis|testing/.test(slug)
        ? "service-page"
        : "";
    document.body.dataset.page = slug;
    const links = (styles[slug] || styles["who-we-are"]).map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = assetUrl(href.replace(/^\//, ""));
      link.dataset.reactPageStyle = slug;
      return link;
    });
    const loads = links.map(
      (link) =>
        new Promise((resolve) => {
          link.onload = resolve;
          link.onerror = resolve;
          document.head.appendChild(link);
        }),
    );
    Promise.all(loads).then(() => {
      if (active) setLoaded(slug);
    });
    return () => {
      active = false;
      links.forEach((link) => link.remove());
      document.body.className = previousClass;
    };
  }, [slug]);
  return loaded === slug;
}
