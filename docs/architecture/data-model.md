# Puente Data Model

## Core entities

- profiles
- organizations
- ngo_requests
- volunteer_applications
- books
- book_requests
- book_reviews
- events
- event_registrations
- resources
- contact_messages

## Design decision

Puente starts with Supabase as a managed backend.

This avoids building a custom API server too early while keeping a relational database model through PostgreSQL.

## First workflows

1. A visitor submits an NGO/social software request.
2. A student applies as a volunteer.
3. A user requests a book.
4. A user registers for an event.
5. Admins review requests manually and continue the serious process through WhatsApp, email or direct contact.
