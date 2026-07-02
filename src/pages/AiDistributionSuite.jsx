import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiDistributionSuite() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [platform, setPlatform] = useState("youtube");
  const [coreIdea, setCoreIdea] = useState("");
  const [thumbnailPlan, setThumbnailPlan] = useState(null);
  const [titlePlan, setTitlePlan] = useState(null);
  const [descriptionPlan, setDescriptionPlan] = useState(null);
  const [hashtagPlan, setHashtagPlan] = useState(null);
  const [schedulePlan, setSchedulePlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => setBrand(b);

  const generateDistribution = async () => {
    if (!coreIdea.trim())
      return alert("Describe the core idea or hook of your video.");
    if (!brand) return alert("Select a brand.");

    setLoading(true);

    const style = buildBrandStyle(brand);

    const payload = {
      brand: {
        name: brand.name,
        audience: brand.audience,
        tone: brand.tone,
        style
      },
      platform,
      coreIdea
    };

    const r = await callAdCreator("distribution-suite", payload);

    setThumbnailPlan(
      r.thumbnailPlan || {
        concept: "Close‑up of main subject with bold text hook",
        colors: "High contrast, brand palette accent",
        text: "Big 3‑5 word promise",
        notes:
          "Design for mobile first. Make sure subject is clear at small sizes."
      }
    );

    setTitlePlan(
      r.titlePlan || {
        primary: "Turn Your Brand Into a Full AI Studio in Minutes",
        variants: [
          "How to Build an AI Production Studio for Your Brand",
          "From Idea to Viral Video with AdCreator‑AI"
        ],
        notes:
          "Lead with transformation, keep it under ~60 characters for most platforms."
      }
    );

    setDescriptionPlan(
      r.descriptionPlan || {
        hook:
          "In this video, we turn a simple brand idea into a full AI‑powered production pipeline.",
        body: [
          "Learn how to go from script to storyboard, shotlist, camera moves, edit, color, sound, VFX, voice, and music—all inside AdCreator‑AI.",
          "Perfect for creators, agencies, and brands that want studio‑level output without studio‑level overhead."
        ],
        cta: "Try AdCreator‑AI and turn your next idea into a full production.",
        links: ["https://your‑site.example/adcreator-ai"],
        notes:
          "Keep first 2 lines strong; they show above the fold on most platforms."
      }
    );

    setHashtagPlan(
      r.hashtagPlan || {
        core: ["#AdCreatorAI", "#AIVideo", "#ContentCreator"],
        platformBoost: ["#Shorts", "#YouTubeCreator"],
        niche: ["#BrandStory", "#DigitalStudio"],
        notes:
          "Mix 2–3 broad tags, 2–3 niche tags, and 1–2 branded tags per post."
      }
    );

    setSchedulePlan(
      r.schedulePlan || {
        timezone: "User local",
        slots: [
          {
            id: 1,
            day: "Monday",
            time: "10:00 AM",
            platform: "YouTube",
            focus: "Educational / deep dive"
          },
          {
            id: 2,
            day: "Wednesday",
            time: "6:00 PM",
            platform: "TikTok",
            focus: "Short hook / teaser"
          },
          {
            id: 3,
            day: "Saturday",
            time: "11:00 AM",
            platform: "Instagram Reels",
            focus: "Behind‑the‑scenes / process"
          }
        ],
        notes:
          "Start with 3 posts per week. Adjust based on engagement and your capacity."
      }
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Distribution Suite</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Core Idea & Platform</h2>

        <textarea
          value={coreIdea}
          onChange={(e) => setCoreIdea(e.target.value)}
          placeholder="Describe the core idea, hook, or promise of your video."
          style={{
            ...inputStyle(theme),
            minHeight: 100,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={inputStyle(theme)}
        >
          <option value="youtube">YouTube</option>
          <option value="tiktok">TikTok</option>
          <option value="instagram">Instagram Reels</option>
          <option value="facebook">Facebook Video</option>
          <option value="linkedin">LinkedIn</option>
        </select>

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateDistribution}
            style={buttonStyle(theme)}
          >
            {loading ? "Building Distribution Plan..." : "Generate Distribution Plan"}
          </button>
        </div>
      </div>

      {(thumbnailPlan || titlePlan || descriptionPlan || hashtagPlan || schedulePlan) && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 12,
            marginBottom: 16
          }}
        >
          {thumbnailPlan && (
            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Thumbnail Plan</h2>
              <p><strong>Concept:</strong> {thumbnailPlan.concept}</p>
              <p><strong>Colors:</strong> {thumbnailPlan.colors}</p>
              <p><strong>Text:</strong> {thumbnailPlan.text}</p>
              <strong>Notes</strong>
              <p style={{ margin: 0 }}>{thumbnailPlan.notes}</p>
            </div>
          )}

          {titlePlan && (
            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Title Plan</h2>
              <p><strong>Primary:</strong> {titlePlan.primary}</p>
              <strong>Variants</strong>
              <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                {titlePlan.variants.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <strong>Notes</strong>
              <p style={{ margin: 0 }}>{titlePlan.notes}</p>
            </div>
          )}

          {descriptionPlan && (
            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Description Plan</h2>
              <p><strong>Hook:</strong> {descriptionPlan.hook}</p>
              <strong>Body</strong>
              <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                {descriptionPlan.body.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
              <p><strong>CTA:</strong> {descriptionPlan.cta}</p>
              <strong>Links</strong>
              <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                {descriptionPlan.links.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
              <strong>Notes</strong>
              <p style={{ margin: 0 }}>{descriptionPlan.notes}</p>
            </div>
          )}

          {hashtagPlan && (
            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Hashtag Plan</h2>
              <strong>Core</strong>
              <p>{hashtagPlan.core.join(" ")}</p>
              <strong>Platform Boost</strong>
              <p>{hashtagPlan.platformBoost.join(" ")}</p>
              <strong>Niche</strong>
              <p>{hashtagPlan.niche.join(" ")}</p>
              <strong>Notes</strong>
              <p style={{ margin: 0 }}>{hashtagPlan.notes}</p>
            </div>
          )}

          {schedulePlan && (
            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Posting Schedule</h2>
              <p><strong>Timezone:</strong> {schedulePlan.timezone}</p>
              {schedulePlan.slots.map((s) => (
                <div
                  key={s.id}
                  style={{
                    marginBottom: 6,
                    padding: 6,
                    borderRadius: 6,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{s.day}</strong> — {s.time}
                  </p>
                  <p style={{ margin: 0, fontSize: 13 }}>
                    Platform: {s.platform}
                  </p>
                  <p style={{ margin: 0, fontSize: 12, opacity: 0.7 }}>
                    Focus: {s.focus}
                  </p>
                </div>
              ))}
              <strong>Notes</strong>
              <p style={{ margin: 0 }}>{schedulePlan.notes}</p>
            </div>
          )}
        </div>
      )}

      {(thumbnailPlan || titlePlan || descriptionPlan || hashtagPlan || schedulePlan) && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Save Distribution Plan</h2>
          <SaveProjectButton
            brand={brand}
            generator="AI Distribution Suite"
            data={{
              platform,
              coreIdea,
              thumbnailPlan,
              titlePlan,
              descriptionPlan,
              hashtagPlan,
              schedulePlan
            }}
          />
        </div>
      )}
    </div>
  );
}
