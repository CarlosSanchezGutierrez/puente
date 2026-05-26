# Admin contact dashboard

Internal routes:

```txt
/admin/contacto
/admin/contacto/[id]

Related API routes:

/api/contact/[id]/status
/api/admin/contact/export

Purpose:

Review general contact messages.
Filter by type and status.
Update status.
Open individual message detail.
Export CSV.
Show contact metrics in /admin.

Required environment variables:

NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ADMIN_ACCESS_PASSWORD
