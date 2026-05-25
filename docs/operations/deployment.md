# Web Deployment

Puente Web is deployed with Vercel.

## Recommended Vercel settings

Import the GitHub repository:

```txt
CarlosSanchezGutierrez/puente

Use these settings:

Framework Preset: Next.js
Root Directory: apps/web
Install Command: pnpm install
Build Command: pnpm build
Output Directory: .next

If Vercel fails to resolve workspace packages such as @puente/brand, enable:

Include source files outside of the Root Directory

or use the repository root as the project root with:

Install Command: pnpm install
Build Command: pnpm --filter web build
Output Directory: apps/web/.next
Required environment variables

Set these in Vercel Project Settings → Environment Variables:

NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
PUENTE_ADMIN_TOKEN=
Production values
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-publishable-or-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
PUENTE_ADMIN_TOKEN=temporary-admin-token
Important

Never commit .env.local.

Never expose SUPABASE_SERVICE_ROLE_KEY to the client.

The service role key is only used in server-side admin routes.