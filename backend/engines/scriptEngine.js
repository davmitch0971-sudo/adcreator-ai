const buildHook = ({ audience, painPoint, platform }) => {
  return `Stop scrolling if you're a ${audience} struggling with ${painPoint} on ${platform}.`;
};

const buildProblem = ({ painPoint }) => {
  return `You’re tired of ${painPoint} and it’s costing you time, money, and momentum.`;
};

const buildSolution = ({ productName, coreBenefit }) => {
  return `${productName} changes that by giving you ${coreBenefit} without the usual hassle.`;
};

const buildProof = ({ proofType, proofDetail }) => {
  if (proofType === 'social') {
    return `Join over ${proofDetail} people already using this every day.`;
  }
  if (proofType === 'results') {
    return `Our users report ${proofDetail} after just a few weeks.`;
  }
  return `This isn’t theory—it’s already working in the real world.`;
};

const buildCTA = ({ platform, action }) => {
  if (platform === 'TikTok' || platform === 'Reels') {
    return `Tap the link in bio and ${action} today.`;
  }
  return `Click the button below to ${action} now.`;
};

export function generateScript(payload) {
  const { brand, offer, platform, goal } = payload;

  const hook = buildHook({
    audience: brand.audience,
    painPoint: offer.painPoint,
    platform,
  });

  const problem = buildProblem({
    painPoint: offer.painPoint,
  });

  const solution = buildSolution({
    productName: offer.productName,
    coreBenefit: offer.coreBenefit,
  });

  const proof = buildProof({
    proofType: offer.proofType,
    proofDetail: offer.proofDetail,
  });

  const cta = buildCTA({
    platform,
    action: offer.action,
  });

  return {
    platform,
    goal,
    script: [hook, problem, solution, proof, cta].join(' '),
    sections: { hook, problem, solution, proof, cta },
  };
}
