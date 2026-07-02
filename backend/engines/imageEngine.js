const buildBasePrompt = ({ productName, coreBenefit, brandTone }) => {
  return `High-quality ${brandTone} visual showcasing ${productName} that delivers ${coreBenefit}.`;
};

const addPlatformFlavor = ({ platform }) => {
  if (platform === 'instagram') {
    return 'Optimized for Instagram feed with strong composition and scroll-stopping colors.';
  }
  if (platform === 'tiktok') {
    return 'Vertical format, bold visuals that pop in motion-heavy TikTok feeds.';
  }
  return 'Clean, modern layout suitable for multi-platform use.';
};

const addAudienceDetail = ({ audience }) => {
  return `Designed to instantly resonate with ${audience}.`;
};

export function generateImagePrompt(payload) {
  const { brand, offer, platform } = payload;

  const base = buildBasePrompt({
    productName: offer.productName,
    coreBenefit: offer.coreBenefit,
    brandTone: brand.tone,
  });

  const platformFlavor = addPlatformFlavor({ platform });
  const audienceDetail = addAudienceDetail({ audience: brand.audience });

  const prompt = [base, platformFlavor, audienceDetail].join(' ');

  return {
    platform,
    prompt,
    pieces: { base, platformFlavor, audienceDetail }
  };
}
