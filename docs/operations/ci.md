# Continuous Integration

Puente uses GitHub Actions to verify the monorepo.

## Workflow

```txt
.github/workflows/verify.yml
What it checks
installs dependencies with pnpm
runs web lint
builds the Next.js web app
runs Expo/mobile TypeScript check
Required GitHub repository secrets

Add these in:

GitHub → Repository → Settings → Secrets and variables → Actions → New repository secret

Required for the web build:

NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
PUENTE_ADMIN_TOKEN

Optional notification secrets are not required for CI:

RESEND_API_KEY
ADMIN_EMAILS
NOTIFICATION_FROM_EMAIL
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_FROM_PHONE_NUMBER
ADMIN_PHONE_NUMBERS
Why this matters

Vercel deploys production, but GitHub Actions catches problems earlier and makes the repository safer before merging to main.