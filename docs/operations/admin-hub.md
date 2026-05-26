# Admin hub

Internal route:

```txt
/admin

Purpose:

Central hub for internal operations.
Quick access to vocational dashboard.
Quick access to field services dashboard.
CSV exports.
General metrics.

Related routes:

/admin/login
/admin
/admin/vocacional
/admin/servicios

Required environment variables:

NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ADMIN_ACCESS_PASSWORD

The route is not added to sitemap.