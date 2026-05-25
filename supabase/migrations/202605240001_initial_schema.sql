-- Puente initial database schema
-- Purpose: community, books, events, volunteers, NGOs and social software requests.

create extension if not exists "pgcrypto";

-- ============================================================
-- Enums
-- ============================================================

do $$ begin
  create type public.user_role as enum (
    'student',
    'volunteer',
    'mentor',
    'teacher',
    'researcher',
    'ngo',
    'admin'
  );
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type public.request_status as enum (
    'pending',
    'reviewing',
    'approved',
    'rejected',
    'completed',
    'cancelled'
  );
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type public.book_status as enum (
    'available',
    'borrowed',
    'reserved',
    'unavailable'
  );
exception
  when duplicate_object then null;
end $$;

-- ============================================================
-- Utility function
-- ============================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================
-- Profiles
-- ============================================================

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  avatar_url text,
  bio text,
  city text,
  university text,
  career text,
  linkedin_url text,
  github_url text,
  portfolio_url text,
  role public.user_role not null default 'student',
  interests text[] not null default '{}',
  skills text[] not null default '{}',
  languages text[] not null default '{}',
  availability_hours_per_week integer,
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_profiles_updated_at on public.profiles;

create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

-- ============================================================
-- Organizations / NGOs
-- ============================================================

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organization_type text,
  description text,
  website_url text,
  city text,
  contact_name text,
  contact_email text,
  contact_phone text,
  created_by uuid references public.profiles(id) on delete set null,
  is_verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_organizations_updated_at on public.organizations;

create trigger set_organizations_updated_at
before update on public.organizations
for each row
execute function public.set_updated_at();

-- ============================================================
-- NGO / social software requests
-- ============================================================

create table if not exists public.ngo_requests (
  id uuid primary key default gen_random_uuid(),
  organization_name text not null,
  organization_type text,
  contact_name text not null,
  contact_email text not null,
  contact_phone text,
  city text,
  people_served_estimate integer,
  problem_description text not null,
  current_process text,
  desired_solution text,
  urgency text,
  approximate_budget_mxn integer,
  wants_annual_free_program boolean not null default false,
  wants_social_discount_quote boolean not null default true,
  status public.request_status not null default 'pending',
  admin_notes text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_ngo_requests_updated_at on public.ngo_requests;

create trigger set_ngo_requests_updated_at
before update on public.ngo_requests
for each row
execute function public.set_updated_at();

-- ============================================================
-- Volunteer applications
-- ============================================================

create table if not exists public.volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  city text,
  university text,
  career text,
  area text not null,
  skills text[] not null default '{}',
  motivation text not null,
  availability_hours_per_week integer not null,
  linkedin_url text,
  github_url text,
  status public.request_status not null default 'pending',
  admin_notes text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_volunteer_applications_updated_at on public.volunteer_applications;

create trigger set_volunteer_applications_updated_at
before update on public.volunteer_applications
for each row
execute function public.set_updated_at();

-- ============================================================
-- Books
-- ============================================================

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text,
  category text not null,
  language text,
  description text,
  cover_url text,
  owner_profile_id uuid references public.profiles(id) on delete set null,
  status public.book_status not null default 'available',
  location_label text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_books_updated_at on public.books;

create trigger set_books_updated_at
before update on public.books
for each row
execute function public.set_updated_at();

create table if not exists public.book_requests (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references public.books(id) on delete cascade,
  requester_id uuid references public.profiles(id) on delete set null,
  requester_name text not null,
  requester_email text not null,
  reason text,
  status public.request_status not null default 'pending',
  requested_at timestamptz not null default now(),
  resolved_at timestamptz,
  admin_notes text
);

create table if not exists public.book_reviews (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references public.books(id) on delete cascade,
  reviewer_id uuid references public.profiles(id) on delete set null,
  reviewer_name text not null,
  rating integer check (rating between 1 and 5),
  review text not null,
  is_public boolean not null default true,
  created_at timestamptz not null default now()
);

-- ============================================================
-- Events / workshops
-- ============================================================

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  event_type text not null,
  starts_at timestamptz,
  ends_at timestamptz,
  location text,
  is_online boolean not null default false,
  meeting_url text,
  capacity integer,
  created_by uuid references public.profiles(id) on delete set null,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_events_updated_at on public.events;

create trigger set_events_updated_at
before update on public.events
for each row
execute function public.set_updated_at();

create table if not exists public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  profile_id uuid references public.profiles(id) on delete set null,
  full_name text not null,
  email text not null,
  registered_at timestamptz not null default now(),
  status public.request_status not null default 'approved'
);

-- ============================================================
-- Resources
-- ============================================================

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  category text not null,
  content_url text,
  external_url text,
  is_published boolean not null default false,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_resources_updated_at on public.resources;

create trigger set_resources_updated_at
before update on public.resources
for each row
execute function public.set_updated_at();

-- ============================================================
-- Contact messages
-- ============================================================

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  subject text,
  message text not null,
  status public.request_status not null default 'pending',
  admin_notes text,
  created_at timestamptz not null default now()
);

-- ============================================================
-- Row Level Security
-- ============================================================

alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.ngo_requests enable row level security;
alter table public.volunteer_applications enable row level security;
alter table public.books enable row level security;
alter table public.book_requests enable row level security;
alter table public.book_reviews enable row level security;
alter table public.events enable row level security;
alter table public.event_registrations enable row level security;
alter table public.resources enable row level security;
alter table public.contact_messages enable row level security;

-- Public read policies for published/public content

drop policy if exists "Public profiles are readable" on public.profiles;
create policy "Public profiles are readable"
on public.profiles
for select
using (is_public = true);

drop policy if exists "Books are publicly readable" on public.books;
create policy "Books are publicly readable"
on public.books
for select
using (true);

drop policy if exists "Public book reviews are readable" on public.book_reviews;
create policy "Public book reviews are readable"
on public.book_reviews
for select
using (is_public = true);

drop policy if exists "Published events are readable" on public.events;
create policy "Published events are readable"
on public.events
for select
using (is_published = true);

drop policy if exists "Published resources are readable" on public.resources;
create policy "Published resources are readable"
on public.resources
for select
using (is_published = true);

-- Own profile policies

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
on public.profiles
for select
using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
on public.profiles
for insert
with check (auth.uid() = id);

-- Public insert policies for forms

drop policy if exists "Anyone can submit contact messages" on public.contact_messages;
create policy "Anyone can submit contact messages"
on public.contact_messages
for insert
with check (true);

drop policy if exists "Anyone can submit NGO requests" on public.ngo_requests;
create policy "Anyone can submit NGO requests"
on public.ngo_requests
for insert
with check (true);

drop policy if exists "Anyone can submit volunteer applications" on public.volunteer_applications;
create policy "Anyone can submit volunteer applications"
on public.volunteer_applications
for insert
with check (true);

drop policy if exists "Anyone can request books" on public.book_requests;
create policy "Anyone can request books"
on public.book_requests
for insert
with check (true);

drop policy if exists "Anyone can register to public events" on public.event_registrations;
create policy "Anyone can register to public events"
on public.event_registrations
for insert
with check (true);

-- Authenticated review insert

drop policy if exists "Authenticated users can create book reviews" on public.book_reviews;
create policy "Authenticated users can create book reviews"
on public.book_reviews
for insert
to authenticated
with check (auth.uid() = reviewer_id);

-- Helpful indexes

create index if not exists idx_books_category on public.books(category);
create index if not exists idx_books_status on public.books(status);
create index if not exists idx_events_starts_at on public.events(starts_at);
create index if not exists idx_events_published on public.events(is_published);
create index if not exists idx_resources_category on public.resources(category);
create index if not exists idx_resources_slug on public.resources(slug);
create index if not exists idx_ngo_requests_status on public.ngo_requests(status);
create index if not exists idx_volunteer_applications_status on public.volunteer_applications(status);
