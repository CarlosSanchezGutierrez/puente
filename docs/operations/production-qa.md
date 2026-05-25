# Production QA

Puente includes a basic production verification flow.

## Health endpoint

```txt
/api/health

The health endpoint checks:

required environment variables
Supabase server-side connectivity
basic database access
Smoke test

Run:

pnpm smoke:web https://your-deployment-url.vercel.app

The smoke test checks:

/
 /biblioteca
 /eventos
 /recursos
 /voluntariado
 /ongs
 /contacto
 /privacidad
 /terminos
 /admin
 /api/health
After every deploy
Open the Vercel deployment URL.
Run the smoke test.
Submit one test form.
Confirm the record appears in Supabase.
Confirm the record appears in /admin/dashboard.
Change status from pending to reviewing.
Confirm the status changed in Supabase.
Required production environment variables
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
PUENTE_ADMIN_TOKEN
Notes

The health endpoint must not expose secrets.

It only reports whether required variables exist, not their values.