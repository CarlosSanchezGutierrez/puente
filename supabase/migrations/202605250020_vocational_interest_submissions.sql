create table if not exists public.vocational_interest_submissions (
  id uuid primary key default gen_random_uuid(),
  participant_type text not null check (
    participant_type in ('school', 'mentor', 'student')
  ),
  full_name text not null,
  email text not null,
  phone text,
  organization text,
  city text,
  role_or_career text,
  interest_areas text[] not null default '{}',
  message text,
  preferred_contact_method text not null default 'email',
  privacy_accepted_at timestamptz not null,
  source_path text not null default '/eventos/puente-vocacional-2026/registro',
  status text not null default 'new' check (
    status in ('new', 'reviewed', 'contacted', 'scheduled', 'closed')
  ),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_vocational_interest_submissions_updated_at
on public.vocational_interest_submissions;

create trigger set_vocational_interest_submissions_updated_at
before update on public.vocational_interest_submissions
for each row
execute function public.set_updated_at();

alter table public.vocational_interest_submissions enable row level security;

create index if not exists idx_vocational_interest_participant_type
on public.vocational_interest_submissions(participant_type);

create index if not exists idx_vocational_interest_status
on public.vocational_interest_submissions(status);

create index if not exists idx_vocational_interest_created_at
on public.vocational_interest_submissions(created_at desc);

create index if not exists idx_vocational_interest_areas
on public.vocational_interest_submissions using gin(interest_areas);