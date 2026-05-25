-- Harden public form inserts
-- Public visitors should submit forms through Next.js Server Actions only.
-- Server Actions use the Supabase service role key server-side.
-- This prevents direct anonymous inserts through the public Supabase anon key.

drop policy if exists "Anyone can submit contact messages" on public.contact_messages;
drop policy if exists "Anyone can submit NGO requests" on public.ngo_requests;
drop policy if exists "Anyone can submit volunteer applications" on public.volunteer_applications;
drop policy if exists "Anyone can request books" on public.book_requests;
drop policy if exists "Anyone can register to public events" on public.event_registrations;

-- Keep public read policies for catalog/public content:
-- books
-- published events
-- published resources
-- public book reviews
-- public profiles

-- Keep authenticated review insert policy:
-- authenticated users can create book reviews