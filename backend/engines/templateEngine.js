/**
 * Template Engine — AdCreator‑AI
 *
 * This engine generates structured ad templates for:
 * - Image ads
 * - Video ads
 * - Carousel ads
 * - Story ads
 * - Product highlight ads
 *
 * It outputs layout structure, text placement, color themes,
 * recommended fonts, and platform‑optimized formatting.
 */

const buildLayout = ({ type }) => {
  const layouts = {
    image_ad: {
      name: "Image Ad",
      structure: [
        "Top: Bold hook text",
        "Center: Product image",
        "Bottom: CTA button"
      ]
    },
    video_ad: {
      name: "Video Ad",
      structure: [
        "Scene 1: Hook overlay",
        "Scene 2: Product demo",
        "Scene 3: Transformation",
        "Scene 4: Proof",
        "Scene 5: CTA"
      ]
    },
    carousel: {
      name: "Carousel Ad",
      structure: [
        "Slide 1: Hook",
        "Slide 2: Pain point",
        "Slide 3: Solution",
        "Slide 4: Proof",
        "Slide 5: CTA"
      ]
    },
    story: {
      name: "Story Ad",
      structure: [
        "Top: Hook text",
        "Middle: Product visual",
        "Bottom: Swipe-up CTA"
      ]
    },
    product_highlight: {
      name: "Product Highlight",
      structure: [
        "Left: Product image",
        "Right: Benefit list",
        "Bottom: CTA"
      ]
    }
  };

  return layouts[type] || layouts.image_ad;
};

const buildColorTheme = ({ brandTone }) => {
  const themes = {
    luxury: {
      primary: "#D4AF37",
      secondary: "#000000",
      accent: "#FFFFFF"
    },
    playful: {
      primary: "#FF6F61",
      secondary: "#FFD700",
      accent: "#FFFFFF"
    },
    tech: {
      primary: "#0FF0FC",
      secondary: "#1A1A1A",
      accent: "#FFFFFF"
    },
    bold: {
      primary: "#FF0000",
      secondary: "#000000",
      accent: "#FFFFFF"
    },
    clean: {
      primary: "#FFFFFF",
      secondary: "#F2F2F2",
      accent: "#000000"
    }
  };

  return themes[brandTone] || themes.clean;
};

const buildFontSet = ({ brandTone }) => {
  const fonts = {
    luxury: ["Playfair Display", "Cormorant Garamond"],
    playful: ["Poppins", "Fredoka One"],
    tech: ["Inter", "Orbitron"],
    bold: ["Montserrat", "Anton"],
    clean: ["Helvetica Neue", "Roboto"]
  };

  return fonts[brandTone] || fonts.clean;
};

const buildTextBlocks = ({ offer }) => {
  return {
    hook: `Stop struggling with ${offer.painPoint}.`,
    benefit: `${offer.productName} gives you ${offer.coreBenefit}.`,
    proof:
      offer.proofType === "social"
        ? `Trusted by ${offer.proofDetail} users.`
        : `Users report ${offer.proofDetail}.`,
    cta: `Tap to ${offer.action}.`
  };
};

const generateTemplate = (payload) => {
  const { brand, offer, type } = payload;

  const layout = buildLayout({ type });
  const colors = buildColorTheme({ brandTone: brand.tone });
  const fonts = buildFontSet({ brandTone: brand.tone });
  const textBlocks = buildTextBlocks({ offer });

  return {
    type,
    layout,
    colors,
    fonts,
    textBlocks,
    preview: {
      description: `A ${layout.name} using ${brand.tone} theme with ${fonts[0]} font.`,
      recommendedSize:
        type === "story"
          ? "1080x1920"
          : type === "carousel"
          ? "1080x1080"
          : "1200x628"
    }
  };
};

module.exports = {
  generateTemplate,
};
