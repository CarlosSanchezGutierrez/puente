-- Library catalog normalization and indexes.
-- This keeps public.books as the main table, but adds normalized categories and authors.

create extension if not exists pg_trgm;

create table if not exists public.library_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null unique,
  description text,
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.library_categories enable row level security;

drop policy if exists "Library categories are publicly readable" on public.library_categories;

create policy "Library categories are publicly readable"
on public.library_categories
for select
to anon, authenticated
using (is_active = true);

create table if not exists public.book_authors (
  id uuid primary key default gen_random_uuid(),
  full_name text not null unique,
  created_at timestamptz not null default now()
);

alter table public.book_authors enable row level security;

drop policy if exists "Book authors are publicly readable" on public.book_authors;

create policy "Book authors are publicly readable"
on public.book_authors
for select
to anon, authenticated
using (true);

create table if not exists public.book_author_links (
  book_id uuid not null references public.books(id) on delete cascade,
  author_id uuid not null references public.book_authors(id) on delete cascade,
  author_order int not null default 0,
  created_at timestamptz not null default now(),
  primary key (book_id, author_id)
);

alter table public.book_author_links enable row level security;

drop policy if exists "Book author links are publicly readable" on public.book_author_links;

create policy "Book author links are publicly readable"
on public.book_author_links
for select
to anon, authenticated
using (true);

alter table public.books
add column if not exists category_id uuid references public.library_categories(id),
add column if not exists access_level text not null default 'general',
add column if not exists cover_storage_path text,
add column if not exists notes text;

insert into public.library_categories (slug, name, description, sort_order)
values
  ('ti-software-ciencia-de-datos', 'TI, Software y Ciencia de Datos', 'Libros sobre software, arquitectura, datos, inteligencia artificial, APIs e ingenieria profesional.', 10),
  ('impacto-social', 'Impacto social', 'Libros sobre pobreza, salud, etica, procesos, bienestar humano e innovacion social.', 20),
  ('educacion-idiomas', 'Educacion e idiomas', 'Material educativo, diccionarios, idiomas, apoyo escolar y recursos academicos.', 30),
  ('literatura-clasica-cultura-universal', 'Literatura clasica y cultura universal', 'Clasicos literarios, cultura universal, memoria historica y obras fundamentales.', 40),
  ('literatura-juvenil', 'Literatura juvenil', 'Narrativa accesible, literatura juvenil, terror juvenil y primeras lecturas largas.', 50),
  ('ciencia-universo-naturaleza', 'Ciencia, universo y naturaleza', 'Divulgacion cientifica, astronomia, cuerpo humano, dinosaurios y naturaleza.', 60),
  ('emprendimiento-desarrollo-profesional', 'Emprendimiento y desarrollo profesional', 'Negocios, finanzas, inversion, liderazgo, biografias y vida profesional.', 70),
  ('habitos-organizacion-desarrollo-personal', 'Habitos, organizacion y desarrollo personal', 'Habitos, productividad, orden, disciplina, estoicismo y vida practica.', 80),
  ('comics-cultura-pop', 'Comics y cultura pop', 'Comics, superheroes, cultura pop y lectura recreativa.', 90),
  ('fitness', 'Fitness', 'Nutricion, entrenamiento, hipertrofia y salud fisica.', 100),
  ('infantil', 'Infantil', 'Cuentos infantiles, primeras lecturas, colorear, abecedario y aprendizaje basico.', 110)
on conflict (slug) do update
set
  name = excluded.name,
  description = excluded.description,
  sort_order = excluded.sort_order,
  is_active = true;

update public.books b
set category_id = c.id
from public.library_categories c
where b.category = c.name
  and b.category_id is null;

insert into public.book_authors (full_name)
select distinct trim(author_name) as full_name
from public.books b,
lateral regexp_split_to_table(coalesce(b.author, ''), '\s*;\s*') as author_name
where trim(author_name) <> ''
  and trim(author_name) <> 'Por confirmar'
on conflict (full_name) do nothing;

insert into public.book_author_links (book_id, author_id, author_order)
select
  b.id as book_id,
  a.id as author_id,
  row_number() over (partition by b.id order by a.full_name) as author_order
from public.books b
join lateral regexp_split_to_table(coalesce(b.author, ''), '\s*;\s*') as author_name on true
join public.book_authors a on a.full_name = trim(author_name)
where trim(author_name) <> ''
  and trim(author_name) <> 'Por confirmar'
on conflict (book_id, author_id) do nothing;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'books_status_check'
      and conrelid = 'public.books'::regclass
  ) then
    alter table public.books
    add constraint books_status_check
    check (status in ('available', 'borrowed', 'reserved', 'unavailable'))
    not valid;
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'books_condition_check'
      and conrelid = 'public.books'::regclass
  ) then
    alter table public.books
    add constraint books_condition_check
    check (condition in ('new', 'good', 'used', 'fragile'))
    not valid;
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'books_access_level_check'
      and conrelid = 'public.books'::regclass
  ) then
    alter table public.books
    add constraint books_access_level_check
    check (access_level in ('general', 'supervised', 'special_collection'))
    not valid;
  end if;
end $$;

create index if not exists idx_books_category_id_status
on public.books(category_id, status);

create index if not exists idx_books_category_status
on public.books(category, status);

create index if not exists idx_books_access_level
on public.books(access_level);

create index if not exists idx_books_featured_sort
on public.books(is_featured desc, sort_order asc, title asc);

create index if not exists idx_books_tags_gin
on public.books using gin(tags);

create index if not exists idx_books_title_trgm
on public.books using gin(title gin_trgm_ops);

create index if not exists idx_books_author_trgm
on public.books using gin(author gin_trgm_ops);

create index if not exists idx_book_author_links_author
on public.book_author_links(author_id);

create index if not exists idx_library_categories_sort
on public.library_categories(sort_order, name);