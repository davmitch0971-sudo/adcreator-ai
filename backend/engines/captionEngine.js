/**
 * Caption Engine — AdCreator‑AI
 *
 * This engine generates:
 * - Short captions
 * - Long captions
 * - Hashtags
 * - Platform‑optimized formatting
 * - CTA lines
 *
 * Works for TikTok, Reels, Shorts, Facebook, Instagram, YouTube, etc.
 */

const buildShortCaption = ({ offer }) => {
  return `${offer.productName} is your shortcut to ${offer.coreBenefit}.`;
};

const buildLongCaption = ({ brand, offer }) => {
  return (
    `If you're a ${brand.audience} tired of ${offer.painPoint}, ` +
    `${offer.productName} gives you ${offer.coreBenefit} without the hassle.\n\n` +
    `Trusted by ${offer.proofDetail} users.\n\n` +
    `Tap to ${offer.action}.`
  );
};

const buildHashtags = ({ brand, offer, platform }) => {
  const baseTags = [
    brand.niche.replace(/\s+/g, ''),
    offer.productName.replace(/\s+/g, ''),
    offer.coreBenefit.replace(/\s+/g, ''),
    "viral",
    "trending",
    "fyp",
    "adcreatorai"
  ];

  const platformTags = {
    TikTok: ["tiktokmade", "tiktokgrowth", "tiktokads"],
    Reels: ["instagramreels", "reelsviral", "reelsmarketing"],
    YouTube: ["shorts", "youtubeshorts", "ytgrowth"],
    Facebook: ["fbads", "facebookmarketing", "facebookgrowth"]
  };

  return [...baseTags, ...(platformTags[platform] || [])].map(tag => `#${tag}`);
};

const buildCTA = ({ platform, action }) => {
  if (platform === "TikTok" || platform === "Reels") {
    return `Tap the link in bio to ${action}.`;
  }
  return `Click the button to ${action}.`;
};

const generateCaption = (payload) => {
  const { brand, offer, platform } = payload;

  const shortCaption = buildShortCaption({ offer });
  const longCaption = buildLongCaption({ brand, offer });
  const hashtags = buildHashtags({ brand, offer, platform });
  const cta = buildCTA({ platform, action: offer.action });

  return {
    platform,
    shortCaption,
    longCaption,
    hashtags,
    cta,
    fullCaption: `${longCaption}\n\n${cta}\n\n${hashtags.join(' ')}`
  };
};

module.exports = {
  generateCaption,
};
