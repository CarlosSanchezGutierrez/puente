# Form Security

Puente uses server-side form submissions.

## Current flow

```txt
Client form
↓
React Hook Form
↓
Zod validation
↓
Next.js Server Action
↓
Rate limit check
↓
Supabase service role insert
Rate limiting

A lightweight table stores form submission events:

public.rate_limit_events

The current default limit is:

5 attempts per 10 minutes per form action + email + IP
RLS hardening

Public anonymous inserts are disabled for form tables.

Forms should only insert through Server Actions.

Later improvements
Turnstile or hCaptcha
Better IP-based protection
Email verification for certain flows
Admin notifications
Audit logging