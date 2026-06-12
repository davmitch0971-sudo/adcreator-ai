import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { product, audience, platform, tone, offer, callToAction, length } =
      await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY in environment." },
        { status: 500 }
      );
    }

    const prompt = `
You are an expert direct-response ad copywriter.

Write a high-converting ${length || "short"} ad for:
- Product: ${product}
- Audience: ${audience}
- Platform: ${platform}
- Tone: ${tone}
- Offer: ${offer}
- Call to action: ${callToAction}

Return ONLY the ad copy, no explanations.
    `.trim();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You write high-converting ad copy." },
          { role: "user", content: prompt },
        ],
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI error:", errorText);
      return NextResponse.json(
        { error: "Failed to generate ad." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const adText = data.choices?.[0]?.message?.content?.trim();

    if (!adText) {
      return NextResponse.json(
        { error: "No ad text returned." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ad: adText });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Unexpected error generating ad." },
      { status: 500 }
    );
  }
}
