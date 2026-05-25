# SEO and Sharing Setup

Production domain:

```txt
https://puenteimpacto.org

Required Vercel environment variable:

NEXT_PUBLIC_SITE_URL=https://puenteimpacto.org

Generated routes:

/manifest.webmanifest
/robots.txt
/sitemap.xml
/opengraph-image
/twitter-image

Sharing preview should use:

Title: Puente Impacto
Description: Biblioteca comunitaria, voluntariado, recursos abiertos y software para impacto social.
Image: /opengraph-image

Robots blocks:

/admin
/api/debug

After changing NEXT_PUBLIC_SITE_URL in Vercel, redeploy without cache.