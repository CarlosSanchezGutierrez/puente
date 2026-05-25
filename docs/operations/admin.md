# Admin Strategy

Puente starts with a temporary internal admin dashboard.

## Current approach

- `/admin` accepts a temporary admin token.
- The token is stored as an HTTP-only cookie.
- `/admin/dashboard` uses a Supabase service role client server-side only.
- The service role key must never be exposed in client code.
- Admins can update request status.
- Admins can add internal notes to tables that support `admin_notes`.

## Required environment variables

```txt
SUPABASE_SERVICE_ROLE_KEY=
PUENTE_ADMIN_TOKEN=
Supported statuses
pending
reviewing
approved
rejected
completed
cancelled
Later

Replace temporary token auth with proper Supabase Auth and role-based authorization.