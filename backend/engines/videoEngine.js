const buildHook = ({ audience, painPoint, platform }) => {
  return `If you're a ${audience} dealing with ${painPoint}, this is for you — especially on ${platform}.`;
};

const buildProblem = ({ painPoint }) => {
  return `Everyone knows how frustrating ${painPoint} can be. It slows everything down.`;
};

const buildSolution = ({ productName, coreBenefit }) => {
  return `${productName} fixes that by giving you ${coreBenefit} faster than anything else.`;
};

const buildProof = ({ proofType, proofDetail }) => {
  if (proofType === 'social') {
    return `${proofDetail}+ people already swear by it.`;
  }
  if (proofType === 'results') {
    return `Users report ${proofDetail} after consistent use.`;
  }
  return `Real results. Real users. Real impact.`;
};

const buildCTA = ({ action }) => {
  return `Hit the button and ${action} today.`;
};

export function generateVideoScript(payload) {
  const { brand, offer, platform, length } = payload;

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
    action: offer.action,
  });

  return {
    platform,
    length,
    videoScript: [hook, problem, solution, proof, cta].join(' '),
    sections: { hook, problem, solution, proof, cta }
  };
}
