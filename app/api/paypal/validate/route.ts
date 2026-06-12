import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const supabase = getSupabase();

    const body = await req.json();
    const { userId, subscriptionId } = body;

    if (!userId || !subscriptionId) {
      return NextResponse.json(
        { error: "Missing userId or subscriptionId" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("subscriptions")
      .insert({
        user_id: userId,
        subscription_id: subscriptionId,
        active: true,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
