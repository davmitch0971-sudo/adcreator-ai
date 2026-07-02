export function buildBrandStyle(brand) {
  if (!brand) return {};
  return {
    colors: brand.colors || ["#2563eb", "#f97316"],
    font: brand.font || "system",
    vibe: brand.vibe || "modern"
  };
}
