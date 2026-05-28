import { ExternalLink, MapPin, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookingLink } from "@/components/site/booking-link";
import { SiteShell } from "@/components/site/site-shell";
import {
  institutionsByCity,
  professionalInviteeFamilies,
  vocationalFamilies,
  vocationalProfiles,
  type VocationalCity,
  type VocationalProfile,
} from "@/lib/vocational-network";

export const metadata = {
  title: "Red de orientadores vocacionales | Puente Vocacional",
  description:
    "Catálogo de estudiantes universitarios, profesores, profesionistas y perfiles académicos para sesiones de orientación vocacional.",
  alternates: {
    canonical: "/eventos/puente-vocacional-2026/red",
  },
  openGraph: {
    title: "Red de orientadores vocacionales | Puente Vocacional",
    description:
      "Perfiles de Monterrey y Tampico organizados por ciudad, institución y familia vocacional.",
    url: "https://puenteimpacto.org/eventos/puente-vocacional-2026/red",
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

function cityId(city: string) {
  return city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
}

function ProfileCard({ profile }: { profile: VocationalProfile }) {
  return (
    <article className="group flex min-h-full flex-col rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#d7dedf] bg-[#10233f] text-lg font-semibold text-white">
          {profile.photo ? (
            <Image
              alt={profile.name}
              className="object-cover"
              fill
              sizes="80px"
              src={profile.photo}
            />
          ) : (
            <span>{initials(profile.name)}</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-[#10233f]">
                {profile.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#425875]">{profile.credential}</p>
            </div>

            {profile.linkedin ? (
              <a
                aria-label={`LinkedIn de ${profile.name}`}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d7dedf] bg-[#f7f4ed] text-[#10233f] transition hover:bg-[#10233f] hover:text-white"
                href={profile.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink className="size-4" />
              </a>
            ) : (
              <span
                aria-label="LinkedIn pendiente"
                className="inline-flex size-9 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-[#d7dedf] bg-[#f7f4ed] text-[#9aa8b5]"
              >
                <ExternalLink className="size-4" />
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-3 py-2 text-sm leading-6 text-[#425875]">
          {profile.institution}
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[#d7dedf] bg-white px-3 py-1.5 text-xs font-semibold text-[#526981]">
            {profile.role}
          </span>
          {profile.badges?.map((badge) => (
            <span
              className="rounded-full bg-[#10233f] px-3 py-1.5 text-xs font-semibold text-white"
              key={badge}
            >
              {badge}
            </span>
          ))}
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
      className="rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
      href={`#${cityId(city)}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">Ciudad</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-[-0.05em] text-[#10233f]">{city}</h2>
        </div>
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#10233f] text-white">
          <MapPin className="size-5" />
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 text-sm">
        <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed] p-4">
          <p className="text-2xl font-semibold tracking-[-0.05em] text-[#10233f]">{profiles.length}</p>
          <p className="mt-1 text-xs text-[#526981]">perfiles</p>
        </div>
        <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed] p-4">
          <p className="text-2xl font-semibold tracking-[-0.05em] text-[#10233f]">{mentorCount}</p>
          <p className="mt-1 text-xs text-[#526981]">mentores</p>
        </div>
        <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed] p-4">
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
    <section className="mx-auto max-w-7xl scroll-mt-8 px-6 py-14 md:py-16" id={cityId(city)}>
      <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#d7dedf] pb-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">Ciudad</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
            {city}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#425875]">
          {city === "Monterrey"
            ? "Perfiles universitarios, académicos y profesionales vinculados principalmente al ecosistema educativo de Monterrey."
            : "Perfiles universitarios, académicos y profesionales de Tampico y la zona regional."}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {institutionsByCity[city].map((institution) => (
          <span
            className="rounded-full border border-[#d7dedf] bg-white/75 px-4 py-2 text-xs font-semibold text-[#425875]"
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
            <span className="rounded-full border border-[#d7dedf] bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#526981]">
              {mentorProfiles.length} perfiles
            </span>
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
            <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#10233f]">
              Profesores y directivos académicos
            </h3>
            <span className="rounded-full border border-[#d7dedf] bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#526981]">
              {academicProfiles.length} perfiles
            </span>
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

export default function VocationalNetworkPage() {
  const totalProfiles = vocationalProfiles.length;
  const totalInstitutions = new Set(Object.values(institutionsByCity).flat()).size;

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
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                href="/eventos/puente-vocacional-2026"
              >
                Volver a Puente Vocacional
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                href="#catalogo"
              >
                Ver perfiles
              </a>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
              <UsersRound className="size-4 text-[#10233f]" />
              Catálogo
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/80 p-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">{totalProfiles}</p>
                <p className="mt-1 text-xs font-medium text-[#526981]">perfiles</p>
              </div>
              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/80 p-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">{cities.length}</p>
                <p className="mt-1 text-xs font-medium text-[#526981]">ciudades</p>
              </div>
              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/80 p-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">{totalInstitutions}</p>
                <p className="mt-1 text-xs font-medium text-[#526981]">instituciones</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#425875]">
              Los perfiles están organizados por ciudad, institución y tipo de participación para facilitar la selección de invitados.
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">Ciudades</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <a
                      className="rounded-full border border-[#d7dedf] bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#10233f] transition hover:bg-white"
                      href={`#${cityId(city)}`}
                      key={city}
                    >
                      {city}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
                  Familias vocacionales
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {vocationalFamilies.map((family) => (
                    <span
                      className="rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3.5 py-2 text-xs font-semibold text-[#425875]"
                      key={family.title}
                    >
                      {family.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16" id="catalogo">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">Perfiles</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              Catálogo por ciudad.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#425875]">
              Cada perfil puede servir para una plática, panel, sesión de preguntas o actividad vocacional con estudiantes de preparatoria.
            </p>
          </div>
        </section>

        {cities.map((city) => (
          <CitySection city={city} key={city} />
        ))}

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="rounded-[1.75rem] border border-[#d7dedf] bg-[#10233f] p-6 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9cce0]">
              Profesionistas invitados
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white">
              Experiencia profesional por familia vocacional.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {professionalInviteeFamilies.map((family) => (
                <span
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white"
                  key={family}
                >
                  {family}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">Siguiente paso</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
                Para preparatorias, orientadores y aliados.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#425875]">
                Comparte ciudad, área vocacional, institución y tipo de participación para revisar cómo integrarlo al programa.
              </p>
            </div>
            <BookingLink />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
