// Existing Render records still reference the former GitHub Pages frontend.
// Only migrate that owned site; links and media on other hosts stay external.
function legacySitePath(value) {
  if (typeof value !== "string" || !/^(?:https?:)?\/\//i.test(value)) return null;
  try {
    const url = new URL(value, "https://sakinzo-work.github.io");
    if (url.hostname !== "sakinzo-work.github.io" || url.username || url.password) return null;
    const match = url.pathname.match(/^\/(?:sakinzo|sakin\.zo)\/frontend\/(.*)$/i);
    return match ? "/" + match[1] + url.search + url.hash : null;
  } catch { return null; }
}
export function appPath(value = "") {
  value = legacySitePath(value) ?? value;
  if (!value || /^(?:[a-z]+:|\/\/|#)/i.test(value)) return value;
  const [, file, rest] = value.replace(/^\.\//, "").match(/^([^?#]*)(.*)$/s);
  const slug = file.replace(/^\//, "").replace(/\.html$/, "");
  const aliases = {
    index: "",
    index1: "",
    newindex: "",
    preindex: "",
    contactus: "contact",
    constactus2: "contact",
    ad: "admin",
    project: "projects",
  };
  return "/" + (aliases[slug] ?? slug) + rest;
}
export const assetUrl = (value) => {
  const migrated = legacySitePath(value);
  if (migrated !== null) value = migrated.slice(1);
  if (!value || /^(?:[a-z]+:|\/\/|\/)/i.test(value)) return value;
  return `${import.meta.env?.BASE_URL || "/"}${value.replace(/^\.\//, "")}`;
};
