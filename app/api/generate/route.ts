import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// CHECK SUBSCRIPTION STATUS
async function requireActiveSubscription(email: string) {
  // 1) Find user
  const { data: user } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  if (!user) return { allowed: false, reason: 'NO_USER' };

  // 2) Find subscription
  const { data: sub } = await supabase
    .from('subscriptions')
    .select('status')
    .eq('user_id', user.id)
    .single();

  if (!sub || sub.status !== 'ACTIVE') {
    return { allowed: false, reason: 'NO_ACTIVE_SUB' };
  }

  return { allowed: true };
}

// PROTECTED ENDPOINT
export async function POST(req: Request) {
  const { email } = await req.json();

  // Check subscription
  const check = await requireActiveSubscription(email);

  if (!check.allowed) {
    return NextResponse.json(
      { error: 'Subscription required' },
      { status: 403 }
    );
  }

  // If we reach here → user is ACTIVE
  return NextResponse.json({ ok: true });
}
