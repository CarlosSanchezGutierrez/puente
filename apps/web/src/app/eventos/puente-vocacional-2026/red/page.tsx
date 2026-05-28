import { ArrowRight, ExternalLink, MapPin, UsersRound } from "lucide-react";
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
  title: "Red de Orientadores Vocacionales",
  description:
    "Red de orientadores de Puente Vocacional 2026 para las ediciones Monterrey y Tampico.",
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

export default function VocationalNetworkPage() {
  const totalProfiles = vocationalProfiles.length;
  const totalInstitutions = new Set(Object.values(institutionsByCity).flat()).size;

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7dedf] bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
              <UsersRound className="size-4 text-[#10233f]" />
              Puente Vocacional 2026
            </div>
            <h1 className="max-w-4xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Red de Orientadores Vocacionales.
            </h1>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#425875]">
              Perfiles universitarios, académicos y profesionales organizados por ciudad, institución y familia vocacional.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="/eventos/puente-vocacional-2026"
              >
                Volver a Puente Vocacional
              </Link>
              <BookingLink />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[1.25rem] border border-[#d7dedf] bg-white/70 p-5">
            <p className="text-3xl font-semibold tracking-[-0.055em] text-[#10233f]">{totalProfiles}</p>
            <p className="mt-1 text-sm text-[#526981]">perfiles iniciales</p>
          </div>
          <div className="rounded-[1.25rem] border border-[#d7dedf] bg-white/70 p-5">
            <p className="text-3xl font-semibold tracking-[-0.055em] text-[#10233f]">2</p>
            <p className="mt-1 text-sm text-[#526981]">ediciones</p>
          </div>
          <div className="rounded-[1.25rem] border border-[#d7dedf] bg-white/70 p-5">
            <p className="text-3xl font-semibold tracking-[-0.055em] text-[#10233f]">{totalInstitutions}</p>
            <p className="mt-1 text-sm text-[#526981]">instituciones</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {cities.map((city) => (
            <EditionSummary city={city} key={city} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-wrap gap-2 border-y border-[#d7dedf] py-5">
          {vocationalFamilies.map((family) => (
            <span
              className="rounded-full border border-[#d7dedf] bg-white/70 px-4 py-2 text-xs font-semibold text-[#10233f]"
              key={family.title}
            >
              {family.title}
            </span>
          ))}
        </div>
      </section>

      {cities.map((city) => (
        <CitySection city={city} key={city} />
      ))}

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[1.75rem] border border-[#d7dedf] bg-[#10233f] p-6 text-white md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9cce0]">Profesionistas invitados</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white">
            Experiencia profesional por familia vocacional.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {professionalInviteeFamilies.map((family) => (
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold text-white" key={family}>
                {family}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-white/72 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">Siguiente paso</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
              Para preparatorias, mentores y aliados.
            </h2>
          </div>
          <BookingLink />
        </div>
      </section>
    </SiteShell>
  );
}
