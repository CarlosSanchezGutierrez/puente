# Library Catalog

Puente uses a lightly normalized library catalog.

## Main table

```txt
public.books

This remains the main operational table.

Supporting tables
public.library_categories
public.book_authors
public.book_author_links
Why light normalization

The catalog needs to support:

many books
consistent categories
multiple authors
filters
cover images
access levels
search
future CSV imports

But the frontend can still read from public.books without breaking.

Final categories
TI, Software y Ciencia de Datos
Impacto social
Educacion e idiomas
Literatura clasica y cultura universal
Literatura juvenil
Ciencia, universo y naturaleza
Emprendimiento y desarrollo profesional
Habitos, organizacion y desarrollo personal
Comics y cultura pop
Fitness
Infantil
Availability status

Internal values:

available
borrowed
reserved
unavailable

UI labels:

Disponible
Prestado
Reservado
No disponible
Physical condition

Internal values:

new
good
used
fragile

UI labels:

Nuevo
Buen estado
Usado
Delicado
Access level

Internal values:

general
supervised
special_collection

Meaning:

general            → prestamo normal
supervised         → consulta o prestamo con revision
special_collection → coleccion especial, no prestamo abierto
Cover images

Use:

cover_url

Recommended workflow:

Upload cover to Supabase Storage.
Make the object public or generate a public URL.
Paste the URL into public.books.cover_url.
Notes

Keep internal database values simple and stable.

Use Spanish labels in the UI.