
Architecture

Puente is structured as a modular monorepo.

The first version avoids a custom backend and uses Supabase as the managed backend layer for authentication, database, storage, and lightweight server-side functions.

Main principle

Build one shared data model and expose it through two primary interfaces:

Web app
Mobile app

Shared packages contain validation, database helpers, configuration, and utilities.
