const buildHook = ({ audience, painPoint }) => {
  return `If you're a ${audience} tired of ${painPoint}, this is for you.`;
};

const buildValue = ({ productName, coreBenefit }) => {
  return `${productName} helps you get ${coreBenefit} without the usual headache.`;
};

const buildSocialProof = ({ proofType, proofDetail }) => {
  if (proofType === 'social') {
    return `${proofDetail}+ people already use this every day.`;
  }
  if (proofType === 'results') {
    return `Users report ${proofDetail} after using it consistently.`;
  }
  return `Real users. Real outcomes.`;
};

const buildCTA = ({ action, platform }) => {
  if (platform === 'instagram') {
    return `Tap the link in bio to ${action} now.`;
  }
  return `Click the button to ${action} today.`;
};

export function generateCaption(payload) {
  const { brand, offer, platform } = payload;

  const hook = buildHook({
    audience: brand.audience,
    painPoint: offer.painPoint,
  });

  const value = buildValue({
    productName: offer.productName,
    coreBenefit: offer.coreBenefit,
  });

  const proof = buildSocialProof({
    proofType: offer.proofType,
    proofDetail: offer.proofDetail,
  });

  const cta = buildCTA({
    action: offer.action,
    platform,
  });

  const caption = [hook, value, proof, cta].join(' ');

  return {
    platform,
    caption,
    sections: { hook, value, proof, cta }
  };
}
