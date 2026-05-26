# Admin vocational dashboard

Internal route:

```txt
/admin/vocacional

Purpose:

Review vocational program submissions.
Track schools, mentors and students.
See interest areas and status distribution.
Review recent registrations.
Update status for each registration.

Statuses:

new
reviewed
contacted
scheduled
closed

Requirements:

NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY

The route is not added to sitemap.
## CSV export

Internal endpoint:

```txt
/api/admin/vocational/export

Exports up to 5000 vocational registrations as CSV.

The endpoint requires the same admin session cookie used by:

/admin/vocacional
