/**
 * Video Engine — AdCreator‑AI
 * 
 * This engine generates platform‑optimized video scripts,
 * shot lists, transitions, captions, and pacing instructions.
 * 
 * It does NOT generate actual video files — that will be handled
 * by your Video Generation Engine later (Runway / VEO‑style).
 */

const buildHook = ({ audience, painPoint, platform }) => {
  if (platform === 'TikTok' || platform === 'Reels') {
    return `POV: You're a ${audience} tired of ${painPoint}.`;
  }
  return `Attention ${audience}: struggling with ${painPoint}?`;
};

const buildScene1 = ({ productName, coreBenefit }) => {
  return {
    scene: "Scene 1",
    description: `Show the product (${productName}) in action.`,
    voiceover: `${productName} gives you ${coreBenefit} instantly.`,
    duration: "2-3 seconds"
  };
};

const buildScene2 = ({ painPoint }) => {
  return {
    scene: "Scene 2",
    description: `Show the pain point visually.`,
    voiceover: `No more dealing with ${painPoint}.`,
    duration: "2-3 seconds"
  };
};

const buildScene3 = ({ coreBenefit }) => {
  return {
    scene: "Scene 3",
    description: `Show the transformation.`,
    voiceover: `Imagine having ${coreBenefit} every single day.`,
    duration: "3 seconds"
  };
};

const buildProofScene = ({ proofType, proofDetail }) => {
  if (proofType === 'social') {
    return {
      scene: "Proof",
      description: "Show social proof screenshots or testimonials.",
      voiceover: `Trusted by ${proofDetail} creators.`,
      duration: "2 seconds"
    };
  }

  return {
    scene: "Proof",
    description: "Show results or before/after.",
    voiceover: `Users report ${proofDetail}.`,
    duration: "2 seconds"
  };
};

const buildCTA = ({ platform, action }) => {
  if (platform === 'TikTok' || platform === 'Reels') {
    return {
      scene: "CTA",
      description: "Show product + bold text overlay.",
      voiceover: `Tap the link in bio to ${action}.`,
      duration: "2 seconds"
    };
  }

  return {
    scene: "CTA",
    description: "Show product + button animation.",
    voiceover: `Click below to ${action}.`,
    duration: "3 seconds"
  };
};

const generateVideoScript = (payload) => {
  const { brand, offer, platform, goal } = payload;

  const hook = buildHook({
    audience: brand.audience,
    painPoint: offer.painPoint,
    platform
  });

  const scenes = [
    buildScene1({
      productName: offer.productName,
      coreBenefit: offer.coreBenefit
    }),
    buildScene2({
      painPoint: offer.painPoint
    }),
    buildScene3({
      coreBenefit: offer.coreBenefit
    }),
    buildProofScene({
      proofType: offer.proofType,
      proofDetail: offer.proofDetail
    }),
    buildCTA({
      platform,
      action: offer.action
    })
  ];

  return {
    platform,
    goal,
    hook,
    scenes,
    fullScript: [
      hook,
      ...scenes.map(s => `${s.scene}: ${s.voiceover}`)
    ].join(" "),
  };
};

module.exports = {
  generateVideoScript,
};
