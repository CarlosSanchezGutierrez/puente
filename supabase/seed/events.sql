insert into public.events (
  title,
  description,
  event_type,
  starts_at,
  ends_at,
  location,
  is_online,
  capacity,
  is_published
)
select
  'Taller gratuito: cómo mejorar tu CV',
  'Sesión práctica para crear un CV claro, sobrio y enfocado en oportunidades reales.',
  'Carrera profesional',
  now() + interval '14 days',
  now() + interval '14 days' + interval '90 minutes',
  'Híbrido',
  true,
  50,
  true
where not exists (
  select 1 from public.events where title = 'Taller gratuito: cómo mejorar tu CV'
);

insert into public.events (
  title,
  description,
  event_type,
  starts_at,
  ends_at,
  location,
  is_online,
  capacity,
  is_published
)
select
  'Introducción a LinkedIn para estudiantes',
  'Guía inicial para construir un perfil profesional, conectar con personas y buscar oportunidades.',
  'Carrera profesional',
  now() + interval '21 days',
  now() + interval '21 days' + interval '90 minutes',
  'Online',
  true,
  80,
  true
where not exists (
  select 1 from public.events where title = 'Introducción a LinkedIn para estudiantes'
);

insert into public.events (
  title,
  description,
  event_type,
  starts_at,
  ends_at,
  location,
  is_online,
  capacity,
  is_published
)
select
  'Círculo de lectura: software y sistemas',
  'Grupo de lectura para estudiantes interesados en software, datos, arquitectura y tecnología responsable.',
  'Comunidad',
  now() + interval '28 days',
  now() + interval '28 days' + interval '90 minutes',
  'Zona Tec',
  false,
  25,
  true
where not exists (
  select 1 from public.events where title = 'Círculo de lectura: software y sistemas'
);

insert into public.events (
  title,
  description,
  event_type,
  starts_at,
  ends_at,
  location,
  is_online,
  capacity,
  is_published
)
select
  'Grupo de estudio: entrevistas técnicas',
  'Sesiones comunitarias para practicar fundamentos, LeetCode, comunicación técnica y entrevistas.',
  'Software engineering',
  now() + interval '35 days',
  now() + interval '35 days' + interval '90 minutes',
  'Online',
  true,
  40,
  true
where not exists (
  select 1 from public.events where title = 'Grupo de estudio: entrevistas técnicas'
);