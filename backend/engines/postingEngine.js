const buildSlot = ({ platform, timeOfDay, contentType }) => {
  return {
    platform,
    timeOfDay,
    contentType,
    note: `Post a ${contentType} optimized for ${platform} in the ${timeOfDay}.`
  };
};

export function generatePostingPlan(payload) {
  const { brand, offer, platforms } = payload;

  const plan = platforms.map((platform) => {
    return [
      buildSlot({ platform, timeOfDay: 'morning', contentType: 'value post' }),
      buildSlot({ platform, timeOfDay: 'afternoon', contentType: 'soft pitch' }),
      buildSlot({ platform, timeOfDay: 'evening', contentType: 'direct offer' })
    ];
  }).flat();

  return {
    brandTone: brand.tone,
    productName: offer.productName,
    plan
  };
}
