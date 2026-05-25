# Admin Notifications

Puente can send internal notifications when public forms are submitted.

## Email notifications

Provider:

```txt
Resend

Required variables:

RESEND_API_KEY=
ADMIN_EMAILS=
NOTIFICATION_FROM_EMAIL=

Example:

ADMIN_EMAILS=A01412419@tec.mx,carlossg132004@gmail.com,carlos.sanchez.gtz.it@gmail.com

Puente sends one separate email per recipient so internal emails are not exposed to each other.

SMS notifications

Provider:

Twilio Programmable Messaging

Required variables:

TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_FROM_PHONE_NUMBER=
ADMIN_PHONE_NUMBERS=

Example:

ADMIN_PHONE_NUMBERS=+528333674769
Behavior

If email variables are missing, email notifications are skipped.

If Twilio variables are missing, SMS notifications are skipped.

The form submission still succeeds even if notifications fail.

Current notifications
volunteer applications
NGO requests
book requests
event registrations
contact messages
Production notes

Use a verified Resend domain before public launch.

Use a Twilio sender that is approved for the destination country.

Keep API keys only in Vercel environment variables.