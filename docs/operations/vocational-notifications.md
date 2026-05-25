# Vocational program notifications

The vocational registration form can send email notifications through Resend.

## Required environment variables in Vercel

```txt
RESEND_API_KEY=
PUENTE_NOTIFICATIONS_FROM=
VOCATIONAL_NOTIFICATION_EMAILS=

Example:

PUENTE_NOTIFICATIONS_FROM=Puente Impacto <notificaciones@puenteimpacto.org>
VOCATIONAL_NOTIFICATION_EMAILS=email1@example.com,email2@example.com,email3@example.com
Notes
Keep recipient emails in Vercel environment variables, not hardcoded in the repository.
If Resend variables are missing, the form still saves the record in Supabase.
Phone notifications require a provider such as Twilio, WhatsApp Business API or another notification service. Email notifications are the first implementation.