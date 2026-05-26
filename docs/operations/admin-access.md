# Admin access

Internal admin routes are protected with an HTTP-only cookie created after password login.

## Routes

```txt
/admin/login
/admin/vocacional
/api/admin/login
/api/admin/logout
Required environment variable
ADMIN_ACCESS_PASSWORD=

Set this variable in Vercel and in local development.

Local example
ADMIN_ACCESS_PASSWORD=change-this-password

Do not commit real passwords to the repository.