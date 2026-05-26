# Admin field services dashboard

Internal route:

```txt
/admin/servicios

Purpose:

Review field service requests.
Track audiovisual, technical and combined requests.
Track drone interest.
Review most requested services.
Update request status.
Export CSV.

Related routes:

/servicios/solicitud
/api/field-service-requests
/api/field-service-requests/[id]/status
/api/admin/field-services/export

Required environment variables:

NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ADMIN_ACCESS_PASSWORD

The route is not added to sitemap.