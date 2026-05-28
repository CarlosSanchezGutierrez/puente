import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Red de orientadores vocacionales | Puente Vocacional",
  description:
    "Catálogo de estudiantes universitarios, profesores, profesionistas y perfiles académicos para sesiones de orientación vocacional.",
  alternates: {
    canonical: "/eventos/puente-vocacional-2026/red-orientadores",
  },
  openGraph: {
    title: "Red de orientadores vocacionales | Puente Vocacional",
    description:
      "Perfiles de Monterrey y Tampico organizados por ciudad, institución y familia vocacional.",
    url: "https://puenteimpacto.org/eventos/puente-vocacional-2026/red-orientadores",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Red de orientadores vocacionales de Puente Vocacional",
      },
    ],
  },
};

import {
  institutionsByCity,
  professionalInviteeFamilies,
  vocationalFamilies,
  vocationalProfiles,
  type VocationalCity,
  type VocationalProfile,
} from "@/lib/vocational-network";



const cities: VocationalCity[] = ["Monterrey", "Tampico"];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function ProfileCard({ profile }: { profile: VocationalProfile }) {
  return (
    <article className="rounded-[1.25rem] border border-[#d7dedf] bg-white/72 p-4 shadow-[0_1px_0_rgba(16,35,63,0.04)] transition hover:bg-white md:p-5">
      <div className="flex gap-4">
        <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-[1rem] border border-[#d7dedf] bg-[#10233f] text-sm font-semibold text-white">
          {profile.photo ? (
            <Image
              alt={profile.name}
              className="object-cover"
              fill
              sizes="64px"
              src={profile.photo}
            />
          ) : (
            <span>{initials(profile.name)}</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold leading-6 tracking-[-0.025em] text-[#10233f]">
                {profile.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#425875]">{profile.credential}</p>
            </div>

            {profile.linkedin ? (
              <a
                aria-label={`LinkedIn de ${profile.name}`}
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#d7dedf] text-[#10233f] transition hover:bg-[#10233f] hover:text-white"
                href={profile.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink className="size-4" />
              </a>
            ) : (
              <span
                aria-label="LinkedIn pendiente"
                className="inline-flex size-8 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-[#d7dedf] text-[#9aa8b5]"
              >
                <ExternalLink className="size-4" />
              </span>
            )}
          </div>

          <p className="mt-3 text-xs leading-5 text-[#526981]">{profile.institution}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#f7f4ed] px-3 py-1 text-xs font-medium text-[#10233f]">
              {profile.role}
            </span>
            {profile.badges?.map((badge) => (
              <span
                className="rounded-full bg-[#10233f] px-3 py-1 text-xs font-medium text-white"
                key={badge}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function EditionSummary({ city }: { city: VocationalCity }) {
  const profiles = vocationalProfiles.filter((profile) => profile.city === city);
  const academicCount = profiles.filter((profile) => profile.role === "Directiva académica").length;
  const mentorCount = profiles.filter((profile) => profile.role === "Mentor universitario").length;

  return (
    <a
      className="rounded-[1.5rem] border border-[#d7dedf] bg-white/70 p-5 transition hover:bg-white"
      href={`#${city.toLowerCase()}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">Edición</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-[-0.05em] text-[#10233f]">{city}</h2>
        </div>
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#10233f] text-white">
          <MapPin className="size-5" />
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 text-sm">
        <div className="rounded-2xl bg-[#f7f4ed] p-4">
          <p className="text-2xl font-semibold tracking-[-0.05em] text-[#10233f]">{profiles.length}</p>
          <p className="mt-1 text-xs text-[#526981]">total</p>
        </div>
        <div className="rounded-2xl bg-[#f7f4ed] p-4">
          <p className="text-2xl font-semibold tracking-[-0.05em] text-[#10233f]">{mentorCount}</p>
          <p className="mt-1 text-xs text-[#526981]">mentores</p>
        </div>
        <div className="rounded-2xl bg-[#f7f4ed] p-4">
          <p className="text-2xl font-semibold tracking-[-0.05em] text-[#10233f]">{academicCount}</p>
          <p className="mt-1 text-xs text-[#526981]">académicos</p>
        </div>
      </div>
    </a>
  );
}

function CitySection({ city }: { city: VocationalCity }) {
  const profiles = vocationalProfiles.filter((profile) => profile.city === city);
  const mentorProfiles = profiles.filter((profile) => profile.role === "Mentor universitario");
  const academicProfiles = profiles.filter((profile) => profile.role === "Directiva académica");

  return (
    <section className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 md:py-16" id={city.toLowerCase()}>
      <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#d7dedf] pb-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">Edición</p>
          <h2 className="mt-2 font-[var(--font-serif)] text-4xl font-semibold leading-none tracking-[-0.055em] text-[#10233f] md:text-6xl">
            {city}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#425875]">
          {city === "Monterrey"
            ? "Base inicial en el ITESM, con integración progresiva de perfiles académicos, universitarios y profesionales de la ciudad."
            : "Red regional con perfiles de ITESM, IEST Anáhuac, UNE y UAT."}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {institutionsByCity[city].map((institution) => (
          <span
            className="rounded-full border border-[#d7dedf] bg-white/70 px-4 py-2 text-xs font-medium text-[#425875]"
            key={institution}
          >
            {institution}
          </span>
        ))}
      </div>

      {mentorProfiles.length ? (
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#10233f]">Mentores universitarios</h3>
            <span className="text-sm text-[#526981]">{mentorProfiles.length}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mentorProfiles.map((profile) => (
              <ProfileCard key={`${profile.city}-${profile.name}-${profile.credential}`} profile={profile} />
            ))}
          </div>
        </div>
      ) : null}

      {academicProfiles.length ? (
        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#10233f]">Profesores y directivos académicos</h3>
            <span className="text-sm text-[#526981]">{academicProfiles.length}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {academicProfiles.map((profile) => (
              <ProfileCard key={`${profile.city}-${profile.name}-${profile.credential}`} profile={profile} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

type ProfileImage = string | StaticImageData;

type OrientadorProfile = Record<string, unknown>;

const orientadorProfiles =  as unknown as OrientadorProfile[];

function getText(profile: OrientadorProfile, keys: string[], fallback = "") {
  for (const key of keys) {
    const value = profile[key];

    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }

    if (typeof value === "number") {
      return String(value);
    }
  }

  return fallback;
}

function getList(profile: OrientadorProfile, keys: string[]) {
  for (const key of keys) {
    const value = profile[key];

    if (Array.isArray(value)) {
      return value
        .map((item) => String(item).trim())
        .filter(Boolean);
    }

    if (typeof value === "string" && value.trim().length > 0) {
      return value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  return [] as string[];
}

function getImage(profile: OrientadorProfile): ProfileImage | null {
  const value =
    profile.image ??
    profile.photo ??
    profile.foto ??
    profile.imagen ??
    profile.avatar ??
    profile.picture;

  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }

  if (value && typeof value === "object" && "src" in value) {
    return value as StaticImageData;
  }

  return null;
}

function getLinkedIn(profile: OrientadorProfile) {
  const value = getText(profile, ["linkedin", "linkedIn", "linkedinUrl", "linkedInUrl", "url", "profileUrl"]);

  if (!value) {
    return "";
  }

  if (value.startsWith("http")) {
    return value;
  }

  return `https://${value}`;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

export default function RedOrientadoresVocacionalesPage() {
  const cities = unique(
    orientadorProfiles.map((profile) =>
      getText(profile, ["city", "ciudad", "location", "ubicacion", "sede"], "Sin ciudad definida"),
    ),
  );

  const families = unique(
    orientadorProfiles.flatMap((profile) =>
      getList(profile, ["families", "familias", "family", "familia", "area", "areas", "areaVocacional"]),
    ),
  );

  const institutions = unique(
    orientadorProfiles.map((profile) =>
      getText(profile, ["institution", "institucion", "universidad", "school", "empresa", "organization"]),
    ),
  );

  const groupedProfiles = cities.map((city) => ({
    city,
    profiles: orientadorProfiles.filter((profile) =>
      getText(profile, ["city", "ciudad", "location", "ubicacion", "sede"], "Sin ciudad definida") === city,
    ),
  }));

  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <Link
              className="text-sm font-semibold text-[#526981] underline-offset-4 hover:text-[#10233f] hover:underline"
              href="/eventos/puente-vocacional-2026"
            >
              Puente Vocacional
            </Link>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
              Red de orientadores vocacionales.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875]">
              Catálogo de estudiantes universitarios, profesores, profesionistas y perfiles académicos que pueden participar en sesiones de orientación vocacional para preparatorias.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f] focus:outline-none focus:ring-2 focus:ring-[#10233f]/30"
                href="/contacto"
              >
                Registrar interés
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#10233f]/20"
                href="#catalogo"
              >
                Ver perfiles
              </a>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Catálogo
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/80 p-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                  {orientadorProfiles.length}
                </p>
                <p className="mt-1 text-xs font-medium text-[#526981]">perfiles</p>
              </div>
              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/80 p-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                  {cities.length}
                </p>
                <p className="mt-1 text-xs font-medium text-[#526981]">ciudades</p>
              </div>
              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/80 p-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                  {families.length}
                </p>
                <p className="mt-1 text-xs font-medium text-[#526981]">áreas</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#425875]">
              Los perfiles se organizan por ciudad, institución y familia vocacional para facilitar la selección de invitados según el contexto de cada escuela.
            </p>
          </aside>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Organización
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                Perfiles agrupados para encontrar invitados más rápido.
              </h2>
            </div>

            <div className="grid gap-5">
              {cities.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
                    Ciudades
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <a
                        className="rounded-full border border-[#d7dedf] bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#10233f] transition hover:bg-white"
                        href={`#${city.toLowerCase().replace(/\s+/g, "-")}`}
                        key={city}
                      >
                        {city}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              {families.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
                    Familias vocacionales
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {families.map((family) => (
                      <span
                        className="rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3.5 py-2 text-xs font-semibold text-[#425875]"
                        key={family}
                      >
                        {family}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16" id="catalogo">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Perfiles
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              Catálogo de orientadores.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#425875]">
              Cada perfil puede servir para una plática, panel, sesión de preguntas o actividad vocacional con estudiantes de preparatoria.
            </p>
          </div>

          <div className="grid gap-12">
            {groupedProfiles.map((group) => (
              <section className="scroll-mt-8" id={group.city.toLowerCase().replace(/\s+/g, "-")} key={group.city}>
                <div className="mb-5 flex flex-col gap-2 border-b border-[#d7dedf] pb-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
                      Ciudad
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                      {group.city}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[#526981]">
                    {group.profiles.length} perfil{group.profiles.length === 1 ? "" : "es"}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.profiles.map((profile, index) => {
                    const name = getText(profile, ["name", "nombre", "fullName", "nombreCompleto", "title"], "Perfil vocacional");
                    const role = getText(profile, ["role", "rol", "career", "carrera", "headline", "perfil", "description"], "Orientador vocacional");
                    const institution = getText(profile, ["institution", "institucion", "universidad", "school", "empresa", "organization"]);
                    const familyList = getList(profile, ["families", "familias", "family", "familia", "area", "areas", "areaVocacional"]);
                    const image = getImage(profile);
                    const linkedin = getLinkedIn(profile);

                    return (
                      <article
                        className="group flex min-h-full flex-col rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                        key={`${name}-${index}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]">
                            {image ? (
                              <Image
                                alt={name}
                                className="h-full w-full object-cover"
                                height={160}
                                src={image}
                                width={160}
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-xl font-semibold text-[#10233f]">
                                {getInitials(name)}
                              </div>
                            )}
                          </div>

                          <div className="min-w-0">
                            <h4 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-[#10233f]">
                              {name}
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-[#425875]">{role}</p>
                          </div>
                        </div>

                        <div className="mt-5 grid gap-2 text-sm">
                          {institution ? (
                            <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-3 py-2 text-[#425875]">
                              {institution}
                            </div>
                          ) : null}

                          {familyList.length ? (
                            <div className="flex flex-wrap gap-2">
                              {familyList.map((family) => (
                                <span
                                  className="rounded-full border border-[#d7dedf] bg-white px-3 py-1.5 text-xs font-semibold text-[#526981]"
                                  key={family}
                                >
                                  {family}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        <div className="mt-auto pt-5">
                          {linkedin ? (
                            <a
                              className="inline-flex w-full items-center justify-center rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-4 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                              href={linkedin}
                              rel="noreferrer"
                              target="_blank"
                            >
                              Ver LinkedIn
                            </a>
                          ) : (
                            <span className="inline-flex w-full items-center justify-center rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-4 py-3 text-sm font-semibold text-[#526981]">
                              Perfil registrado
                            </span>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="bg-[#10233f] px-6 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                Participar
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                ¿Quieres proponer un perfil o registrar una escuela?
              </h2>
            </div>

            <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5">
              <p className="text-base leading-7 text-white/80">
                Comparte la ciudad, área vocacional, institución y tipo de participación. Revisamos el caso para integrarlo al programa o canalizarlo a una sesión específica.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white/90"
                  href="/contacto"
                >
                  Registrar interés
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  href="/eventos/puente-vocacional-2026"
                >
                  Volver a Puente Vocacional
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
