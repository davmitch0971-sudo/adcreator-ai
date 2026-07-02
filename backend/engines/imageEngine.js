/**
 * Image Engine — AdCreator‑AI
 *
 * This engine generates structured image prompts, styles,
 * compositions, and variations for AI image generation.
 *
 * It does NOT generate the actual image — that will be handled
 * by your Image Generation Engine (ImagineArt / Midjourney-style).
 */

const buildBasePrompt = ({ productName, coreBenefit, brandTone }) => {
  return `${productName} that represents ${coreBenefit}, in a ${brandTone} visual tone`;
};

const buildStyle = ({ style }) => {
  const styles = {
    cinematic: "cinematic lighting, shallow depth of field, dramatic shadows",
    clean: "minimalist, clean layout, soft lighting, modern aesthetic",
    bold: "high contrast, vibrant colors, sharp edges, energetic composition",
    luxury: "premium textures, gold accents, soft glow, elegant composition",
    playful: "bright colors, rounded shapes, fun and friendly vibe",
    tech: "futuristic neon lighting, holographic UI elements, cyber aesthetic"
  };

  return styles[style] || styles.clean;
};

const buildComposition = ({ composition }) => {
  const compositions = {
    product_focus: "centered product shot, isolated background, crisp detail",
    lifestyle: "real people using the product, natural environment, candid feel",
    flatlay: "top-down flatlay layout, organized elements, clean background",
    macro: "extreme close-up, texture detail, shallow depth of field",
    wide: "wide-angle shot, full scene, environmental storytelling"
  };

  return compositions[composition] || compositions.product_focus;
};

const buildColorPalette = ({ palette }) => {
  const palettes = {
    warm: "warm tones, oranges, reds, soft highlights",
    cool: "cool tones, blues, purples, calm atmosphere",
    neutral: "neutral tones, whites, grays, balanced lighting",
    vibrant: "high saturation, bold colors, energetic mood",
    pastel: "soft pastel colors, gentle gradients, smooth textures"
  };

  return palettes[palette] || palettes.neutral;
};

const buildVariationPrompts = (basePrompt) => {
  return [
    `${basePrompt}, alternate angle, different lighting`,
    `${basePrompt}, close-up macro detail`,
    `${basePrompt}, wide scene, environmental context`,
    `${basePrompt}, stylized artistic interpretation`,
    `${basePrompt}, high-contrast dramatic lighting`
  ];
};

const generateImagePrompt = (payload) => {
  const {
    brand,
    offer,
    style,
    composition,
    palette
  } = payload;

  const basePrompt = buildBasePrompt({
    productName: offer.productName,
    coreBenefit: offer.coreBenefit,
    brandTone: brand.tone
  });

  const stylePrompt = buildStyle({ style });
  const compositionPrompt = buildComposition({ composition });
  const palettePrompt = buildColorPalette({ palette });

  const finalPrompt = `${basePrompt}, ${stylePrompt}, ${compositionPrompt}, ${palettePrompt}, ultra-detailed, professional commercial photography`;

  const variations = buildVariationPrompts(finalPrompt);

  return {
    prompt: finalPrompt,
    variations,
    meta: {
      style,
      composition,
      palette,
      brandTone: brand.tone
    }
  };
};

module.exports = {
  generateImagePrompt,
};
