import { NextResponse } from 'next/server';
import { paypalClient } from '@/lib/paypal';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { paypal_subscription_id, email } = await req.json();

  // 1) Fetch subscription details from PayPal
  const request = new (require('@paypal/checkout-server-sdk').subscriptions.SubscriptionsGetRequest)(
    paypal_subscription_id
  );

  const response = await paypalClient.execute(request);
  const status = response.result.status; // ACTIVE, CANCELLED, SUSPENDED, etc.

  // 2) Upsert user
  const { data: user } = await supabase
    .from('users')
    .upsert({ email })
    .select()
    .single();

  // 3) Store subscription in DB
  await supabase.from('subscriptions').upsert({
    user_id: user.id,
    paypal_subscription_id,
    status,
    current_period_end: response.result.billing_info?.next_billing_time || null,
  });

  return NextResponse.json({ ok: true, status });
}
