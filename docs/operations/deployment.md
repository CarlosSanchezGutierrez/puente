# Web Deployment

Puente Web is deployed with Vercel.

## Correct Vercel configuration

Use this configuration:

```txt
Framework Preset: Next.js
Root Directory: apps/web
Install Command: pnpm install
Build Command: pnpm build
Output Directory: leave empty
Important

Do not set:

Output Directory: apps/web/.next

If Root Directory is already apps/web, setting Output Directory to apps/web/.next makes Vercel look for:

apps/web/apps/web/.next

That causes:

Routes Manifest Could Not Be Found
Required environment variables

Set these in Vercel Project Settings → Environment Variables:

NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
PUENTE_ADMIN_TOKEN=
Security rules

Never commit .env.local.

Never expose SUPABASE_SERVICE_ROLE_KEY to the client.

Only variables prefixed with NEXT_PUBLIC_ can be exposed to the browser.

Deployment checklist

Before deploying:

pnpm --filter web build
pnpm --filter mobile typecheck
git status

After deploying, test:

/
 /biblioteca
 /eventos
 /recursos
 /voluntariado
 /ongs
 /contacto
 /admin
 /admin/dashboard
