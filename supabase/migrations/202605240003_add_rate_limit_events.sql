-- Add basic server-side rate limiting events.
-- These records are written only by Server Actions using the Supabase service role key.
-- No public policies are added.

create table if not exists public.rate_limit_events (
  id uuid primary key default gen_random_uuid(),
  action text not null,
  identifier text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.rate_limit_events enable row level security;

create index if not exists idx_rate_limit_events_action_identifier_created_at
on public.rate_limit_events(action, identifier, created_at desc);

create index if not exists idx_rate_limit_events_created_at
on public.rate_limit_events(created_at desc);