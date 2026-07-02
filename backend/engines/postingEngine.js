/**
 * Posting Engine — AdCreator‑AI
 *
 * This engine prepares post payloads for different platforms:
 * - TikTok
 * - Instagram (Feed, Reels, Stories)
 * - Facebook
 * - YouTube (Shorts, Community)
 *
 * It does NOT actually call external APIs — that will be handled
 * by your integration layer later. This focuses on:
 * - Payload structure
 * - Scheduling metadata
 * - Platform mapping
 */

const buildPlatformPayload = ({ platform, content }) => {
  switch (platform) {
    case "TikTok":
      return {
        platform,
        type: "short_video",
        title: content.hook || "",
        description: content.caption?.fullCaption || "",
        tags: content.caption?.hashtags || [],
      };

    case "Instagram_Reels":
      return {
        platform: "Instagram",
        type: "reel",
        caption: content.caption?.fullCaption || "",
        tags: content.caption?.hashtags || [],
      };

    case "Instagram_Feed":
      return {
        platform: "Instagram",
        type: "feed",
        caption: content.caption?.fullCaption || "",
        imagePrompt: content.image?.prompt || "",
      };

    case "Instagram_Story":
      return {
        platform: "Instagram",
        type: "story",
        text: content.caption?.shortCaption || "",
        swipeUpCTA: content.caption?.cta || "",
      };

    case "Facebook":
      return {
        platform,
        type: "feed",
        message: content.caption?.fullCaption || "",
        imagePrompt: content.image?.prompt || "",
      };

    case "YouTube_Shorts":
      return {
        platform: "YouTube",
        type: "short",
        title: content.hook || "",
        description: content.caption?.fullCaption || "",
        tags: content.caption?.hashtags || [],
      };

    case "YouTube_Community":
      return {
        platform: "YouTube",
        type: "community",
        message: content.caption?.fullCaption || "",
      };

    default:
      return {
        platform,
        type: "generic",
        content: content.caption?.fullCaption || "",
      };
  }
};

const buildSchedule = ({ schedule }) => {
  if (!schedule) {
    return {
      mode: "immediate",
      time: null,
    };
  }

  return {
    mode: "scheduled",
    time: schedule.time || null,
    timezone: schedule.timezone || "UTC",
  };
};

const generatePostPlan = (payload) => {
  const {
    brand,
    offer,
    platforms,
    content,
    schedule,
  } = payload;

  const scheduleMeta = buildSchedule({ schedule });

  const posts = platforms.map((platform) => {
    const platformPayload = buildPlatformPayload({
      platform,
      content,
    });

    return {
      platform,
      payload: platformPayload,
      schedule: scheduleMeta,
      meta: {
        brand: {
          name: brand.name,
          niche: brand.niche,
          tone: brand.tone,
        },
        offer: {
          productName: offer.productName,
          coreBenefit: offer.coreBenefit,
          action: offer.action,
        },
      },
    };
  });

  return {
    schedule: scheduleMeta,
    posts,
  };
};

module.exports = {
  generatePostPlan,
};
