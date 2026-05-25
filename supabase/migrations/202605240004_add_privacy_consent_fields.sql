-- Add privacy consent metadata to public form tables.

alter table public.volunteer_applications
add column if not exists privacy_accepted_at timestamptz,
add column if not exists source_path text;

alter table public.ngo_requests
add column if not exists privacy_accepted_at timestamptz,
add column if not exists source_path text;

alter table public.book_requests
add column if not exists privacy_accepted_at timestamptz,
add column if not exists source_path text;

alter table public.event_registrations
add column if not exists privacy_accepted_at timestamptz,
add column if not exists source_path text;

alter table public.contact_messages
add column if not exists privacy_accepted_at timestamptz,
add column if not exists source_path text;