create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  interest_type text not null check (
    interest_type in ('general', 'ngo', 'program', 'service', 'research', 'team')
  ),
  full_name text not null,
  email text not null,
  phone text,
  organization text,
  role_or_context text,
  message text not null,
  preferred_contact_method text not null default 'email',
  privacy_accepted_at timestamptz not null,
  source_path text not null default '/contacto',
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

drop trigger if exists set_contact_submissions_updated_at
on public.contact_submissions;

create trigger set_contact_submissions_updated_at
before update on public.contact_submissions
for each row
execute function public.set_updated_at();

alter table public.contact_submissions enable row level security;

create index if not exists idx_contact_submissions_interest_type
on public.contact_submissions(interest_type);

create index if not exists idx_contact_submissions_status
on public.contact_submissions(status);

create index if not exists idx_contact_submissions_created_at
on public.contact_submissions(created_at desc);