-- Extend books table for Puente library catalog.

alter table public.books
add column if not exists cover_url text,
add column if not exists isbn text,
add column if not exists publisher text,
add column if not exists publication_year int,
add column if not exists condition text not null default 'good',
add column if not exists audience text,
add column if not exists tags text[] not null default '{}',
add column if not exists source text not null default 'manual',
add column if not exists location_hint text,
add column if not exists is_featured boolean not null default false,
add column if not exists sort_order int not null default 0;

create index if not exists idx_books_category_status
on public.books(category, status);

create index if not exists idx_books_is_featured
on public.books(is_featured);

create index if not exists idx_books_sort_order
on public.books(sort_order);