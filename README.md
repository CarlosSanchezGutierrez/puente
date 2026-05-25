# Puente

A civic technology platform for social software, open-source tools, community learning, and research projects.

## Core areas

- **Puente Systems** — software, apps, open-source tools, and digital infrastructure for social organizations.
- **Puente Lab** — research, ODS-oriented studies, data projects, and prototypes.
- **Puente Comunidad** — learning circles, books, mentoring, workshops, and student/professional community.
- **Puente Media** — human-centered stories, interviews, documentaries, and educational content.

## Initial architecture

```txt
puente/
  apps/
    web/
    mobile/

  packages/
    database/
    schemas/
    config/
    utils/

  supabase/
    migrations/
    functions/
    seed/

  docs/
  content/
Tech direction
Web: Next.js, TypeScript, Tailwind CSS, shadcn/ui
Mobile: Expo, React Native, TypeScript
Backend: Supabase
Hosting: Vercel
Repo: GitHub monorepo
Backend strategy

Puente starts without a custom backend. Supabase is used as the managed backend for authentication, PostgreSQL, storage, row level security, and lightweight functions when needed.

The first workflows are:

NGO/social software requests
Volunteer applications
Book catalogue and requests
Event registrations
Public resources
Contact messages
