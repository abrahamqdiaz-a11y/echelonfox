-- Enable pg_cron and pg_net extensions (must be enabled in Supabase Dashboard > Extensions)
-- create extension if not exists pg_cron;
-- create extension if not exists pg_net;

-- Settings
create table if not exists settings (
  id uuid primary key default gen_random_uuid(),
  business_name text not null default 'Echelon Fox',
  physical_address text not null default '',
  logo_url text not null default '',
  brand_color text not null default '#FF5500',
  updated_at timestamptz default now()
);
insert into settings (business_name, physical_address, logo_url, brand_color)
values ('Echelon Fox', '123 Main St, City, State 00000', '', '#FF5500');

-- Campaigns
create table if not exists campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  from_name text not null,
  from_email text not null,
  active boolean not null default true,
  created_at timestamptz default now()
);

-- Campaign emails (drip sequence steps)
create table if not exists campaign_emails (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references campaigns(id) on delete cascade,
  step_number integer not null,
  subject text not null,
  body_html text not null default '',
  delay_days integer not null default 0,
  active boolean not null default true,
  unique(campaign_id, step_number)
);

-- Contacts
create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  first_name text not null default '',
  campaign_id uuid not null references campaigns(id) on delete cascade,
  sequence_step integer not null default 0,
  last_email_sent_at timestamptz,
  status text not null default 'active' check (status in ('active', 'unsubscribed', 'completed')),
  created_at timestamptz default now(),
  unique(email, campaign_id)
);

-- Send log
create table if not exists send_log (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contacts(id) on delete cascade,
  campaign_id uuid not null references campaigns(id) on delete cascade,
  step_number integer not null,
  sent_at timestamptz default now(),
  resend_id text,
  status text not null default 'sent' check (status in ('sent', 'failed'))
);

-- RLS
alter table settings enable row level security;
alter table campaigns enable row level security;
alter table campaign_emails enable row level security;
alter table contacts enable row level security;
alter table send_log enable row level security;

-- Authenticated users (admin) can do everything
create policy "admin_settings" on settings for all to authenticated using (true) with check (true);
create policy "admin_campaigns" on campaigns for all to authenticated using (true) with check (true);
create policy "admin_campaign_emails" on campaign_emails for all to authenticated using (true) with check (true);
create policy "admin_contacts" on contacts for all to authenticated using (true) with check (true);
create policy "admin_send_log" on send_log for all to authenticated using (true) with check (true);

-- Service role bypasses RLS — no extra policies needed for edge functions

-- pg_cron schedule: run send-drip daily at 9 AM Eastern (14:00 UTC)
-- Run this after enabling pg_cron and deploying the edge function:
--
-- select cron.schedule(
--   'send-drip-emails',
--   '0 14 * * *',
--   $$
--   select net.http_post(
--     url := 'https://<PROJECT_REF>.supabase.co/functions/v1/send-drip',
--     headers := jsonb_build_object(
--       'Authorization', 'Bearer <SUPABASE_ANON_KEY>',
--       'Content-Type', 'application/json',
--       'x-cron-secret', '<CRON_SECRET>'
--     ),
--     body := '{}'::jsonb
--   ) as request_id;
--   $$
-- );
