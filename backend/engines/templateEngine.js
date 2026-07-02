const buildHeadline = ({ productName, coreBenefit }) => {
  return `${productName} gives you ${coreBenefit} without the usual struggle.`;
};

const buildSubheadline = ({ painPoint }) => {
  return `Stop wasting time dealing with ${painPoint} — there’s a better way.`;
};

const buildBody = ({ proofType, proofDetail }) => {
  if (proofType === 'social') {
    return `Trusted by ${proofDetail}+ customers who use it every day.`;
  }
  if (proofType === 'results') {
    return `Real users report ${proofDetail} after consistent use.`;
  }
  return `Backed by real-world use and proven outcomes.`;
};

const buildCTA = ({ action }) => {
  return `Click now to ${action} today.`;
};

export function generateTemplate(payload) {
  const { brand, offer, type } = payload;

  const headline = buildHeadline({
    productName: offer.productName,
    coreBenefit: offer.coreBenefit,
  });

  const subheadline = buildSubheadline({
    painPoint: offer.painPoint,
  });

  const body = buildBody({
    proofType: offer.proofType,
    proofDetail: offer.proofDetail,
  });

  const cta = buildCTA({
    action: offer.action,
  });

  return {
    type,
    template: {
      headline,
      subheadline,
      body,
      cta,
      tone: brand.tone
    }
  };
}
