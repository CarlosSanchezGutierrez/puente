# Admin Notifications

Puente can send internal email notifications when public forms are submitted.

## Provider

The current provider is Resend.

## Required environment variables

```txt
RESEND_API_KEY=
ADMIN_EMAIL=
NOTIFICATION_FROM_EMAIL=
Behavior

If RESEND_API_KEY or ADMIN_EMAIL is missing, notifications are skipped.

The form submission still succeeds.

Current notifications
volunteer applications
NGO requests
book requests
event registrations
contact messages
Recommended production setup

Use a verified sending domain before public launch.

Until then, Resend's onboarding sender can be used for development/testing.