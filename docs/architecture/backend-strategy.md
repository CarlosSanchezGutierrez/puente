# Backend Strategy

Puente will not start with a custom backend.

Instead, the first version uses:

- Supabase Auth
- Supabase Postgres
- Supabase Storage
- Supabase Row Level Security
- Supabase Edge Functions only when needed

## Why

The system does not initially handle payments, medical records, legal case files or critical operations.

Most workflows are discovery, registration, requests, catalogues and community coordination.

## Rule

Use Supabase directly until there is a real operational reason to introduce custom backend services.
