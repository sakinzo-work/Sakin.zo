export function appPath(value = "") {
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
  if (!value || /^(?:[a-z]+:|\/\/|\/)/i.test(value)) return value;
  return `${import.meta.env?.BASE_URL || "/"}${value.replace(/^\.\//, "")}`;
};
