# SEO and Sharing Setup

Puente includes:

- manifest.ts
- robots.ts
- sitemap.ts
- opengraph-image.tsx
- twitter-image.tsx
- public SVG icons
- page-level metadata

## Required production environment variable

Set this in Vercel:

```txt
NEXT_PUBLIC_SITE_URL=https://your-domain.com

Examples:

NEXT_PUBLIC_SITE_URL=https://puente.vercel.app
NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com

This is used by sitemap and canonical URL generation.

Routes included in sitemap
/
/biblioteca
/ongs
/voluntariado
/eventos
/recursos
/contacto
/privacidad
/terminos
Routes blocked in robots
/admin
/api/debug