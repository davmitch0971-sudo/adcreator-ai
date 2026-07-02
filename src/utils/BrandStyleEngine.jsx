export function buildBrandStyle(brand) {
  if (!brand) return {};

  const colors = brand.colors
    ? brand.colors.split(",").map((c) => c.trim())
    : [];

  const primary = colors[0] || "#3b82f6";
  const secondary = colors[1] || "#1e293b";

  const toneMap = {
    bold: "high‑contrast, punchy, energetic, modern",
    luxury: "premium, elegant, refined, gold accents, soft shadows",
    minimal: "clean, simple, spacious, muted colors",
    playful: "bright, fun, rounded shapes, energetic motion",
    corporate: "professional, structured, blue tones, clean lines",
    creator: "vibrant, neon accents, dynamic lighting, trendy"
  };

  const toneKey = brand.tone?.toLowerCase() || "bold";
  const toneStyle = toneMap[toneKey] || toneMap.bold;

  return {
    primary,
    secondary,
    toneStyle,
    colorPalette: `${primary}, ${secondary}, neutral darks`,
    imageStyle: `Use ${toneStyle}. Emphasize ${primary} as the primary brand color and ${secondary} as the secondary.`,
    templateStyle: `Design using ${primary} and ${secondary}. Style: ${toneStyle}.`,
    captionStyle: `Tone: ${brand.tone}. Style: ${toneStyle}.`,
    scriptStyle: `Narration tone: ${brand.tone}. Visual tone: ${toneStyle}.`
  };
}
