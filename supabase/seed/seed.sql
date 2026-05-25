-- Puente seed data
-- Safe sample content for local/dev environments.

insert into public.books (title, author, category, language, description, status, location_label)
values
  ('Clean Architecture', 'Robert C. Martin', 'Tecnología, software y datos', 'Inglés', 'Arquitectura de software, separación de responsabilidades y diseño mantenible.', 'available', 'Biblioteca Puente'),
  ('Designing Data-Intensive Applications', 'Martin Kleppmann', 'Tecnología, software y datos', 'Inglés', 'Sistemas distribuidos, datos, consistencia y escalabilidad.', 'available', 'Biblioteca Puente'),
  ('Atomic Habits', 'James Clear', 'Desarrollo personal y finanzas', 'Inglés', 'Hábitos, sistemas personales y mejora incremental.', 'available', 'Biblioteca Puente'),
  ('Sapiens', 'Yuval Noah Harari', 'Ciencia, historia y exploración', 'Español', 'Historia amplia de la humanidad y civilizaciones.', 'available', 'Biblioteca Puente')
on conflict do nothing;

insert into public.resources (title, slug, description, category, is_published)
values
  ('Guía básica para crear un CV', 'guia-cv-basico', 'Recurso gratuito para estructurar un CV claro, sobrio y profesional.', 'Carrera profesional', true),
  ('Guía inicial de LinkedIn', 'guia-linkedin-inicial', 'Recurso gratuito para mejorar perfil, narrativa y búsqueda de oportunidades.', 'Carrera profesional', true),
  ('Guía para vivir en Zona Tec', 'guia-zona-tec', 'Recurso comunitario para estudiantes que buscan vivienda y adaptación en Zona Tec.', 'Vida universitaria', true)
on conflict (slug) do nothing;
