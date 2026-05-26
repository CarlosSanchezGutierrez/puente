create table if not exists public.field_service_requests (
  id uuid primary key default gen_random_uuid(),
  request_type text not null check (
    request_type in ('audiovisual', 'technical', 'both')
  ),
  organization_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  city text,
  location text,
  event_date date,
  audience_size integer,
  needs_drone boolean not null default false,
  requested_services text[] not null default '{}',
  context text,
  preferred_contact_method text not null default 'email',
  privacy_accepted_at timestamptz not null,
  source_path text not null default '/servicios/solicitud',
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

drop trigger if exists set_field_service_requests_updated_at
on public.field_service_requests;

create trigger set_field_service_requests_updated_at
before update on public.field_service_requests
for each row
execute function public.set_updated_at();

alter table public.field_service_requests enable row level security;

create index if not exists idx_field_service_requests_type
on public.field_service_requests(request_type);

create index if not exists idx_field_service_requests_status
on public.field_service_requests(status);

create index if not exists idx_field_service_requests_created_at
on public.field_service_requests(created_at desc);

create index if not exists idx_field_service_requests_services
on public.field_service_requests using gin(requested_services);