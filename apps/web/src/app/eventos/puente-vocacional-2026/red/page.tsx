import { ArrowRight, ExternalLink, GraduationCap, MapPin, UsersRound } from "lucide-react";
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
    "Red de estudiantes universitarios, profesores, directivos académicos y profesionistas de Puente Vocacional 2026.",
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
    <article className="rounded-[1.4rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d7dedf] bg-[#f7f4ed] text-base font-semibold text-[#10233f]">
          {profile.photo ? (
            <Image alt={profile.name} className="size-full object-cover" fill sizes="64px" src={profile.photo} />
          ) : (
            initials(profile.name)
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold tracking-[-0.025em] text-[#10233f]">
            {profile.name}
          </h3>
          <p className="mt-1 text-sm leading-6 text-[#425875]">{profile.credential}</p>
          <p className="mt-2 text-xs leading-5 text-[#526981]">{profile.institution}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-1 text-xs font-medium text-[#10233f]">
          {profile.role}
        </span>
        <span className="rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-1 text-xs font-medium text-[#425875]">
          {profile.family}
        </span>
        {profile.badges?.map((badge) => (
          <span
            className="rounded-full border border-[#d7dedf] bg-[#10233f] px-3 py-1 text-xs font-medium text-white"
            key={badge}
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-5">
        {profile.linkedin ? (
          <a
            className="inline-flex items-center text-sm font-semibold text-[#10233f] transition hover:text-[#1b365f]"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
            <ExternalLink className="ml-2 size-4" />
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center text-sm font-semibold text-[#8a9baa]">
            LinkedIn
            <ExternalLink className="ml-2 size-4" />
          </span>
        )}
      </div>
    </article>
  );
}

function CitySection({ city }: { city: VocationalCity }) {
  const profiles = vocationalProfiles.filter((profile) => profile.city === city);
  const academicProfiles = profiles.filter((profile) => profile.role === "Directiva académica");
  const mentorProfiles = profiles.filter((profile) => profile.role === "Mentor universitario");

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="mb-8 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Edición {city}
          </p>
          <h2 className="mt-3 font-[var(--font-serif)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-6xl">
            {city === "Monterrey" ? "Red inicial en Monterrey." : "Red regional en Tampico."}
          </h2>
        </div>
        <p className="text-sm leading-7 text-[#425875]">
          {city === "Monterrey"
            ? "La edición Monterrey inicia con perfiles del Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) e integrará progresivamente perfiles de Universidad de Monterrey (UDEM), Universidad Autónoma de Nuevo León (UANL), profesores, directivos académicos y profesionistas invitados."
            : "La edición Tampico busca reunir perfiles universitarios, académicos y profesionales de distintas instituciones de la región para ofrecer a estudiantes de preparatoria una visión cercana, plural y realista de distintas carreras."}
        </p>
      </div>

      <div className="mb-8 rounded-[1.5rem] border border-[#d7dedf] bg-white/70 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
          Instituciones
        </p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {institutionsByCity[city].map((institution) => (
            <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/70 p-4 text-sm leading-6 text-[#425875]" key={institution}>
              {institution}
            </div>
          ))}
        </div>
      </div>

      {mentorProfiles.length ? (
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
            Mentores universitarios
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mentorProfiles.map((profile) => (
              <ProfileCard key={`${profile.city}-${profile.name}-${profile.credential}`} profile={profile} />
            ))}
          </div>
        </div>
      ) : null}

      {academicProfiles.length ? (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
            Profesores y directivos académicos
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-[#10233f] text-white shadow-sm">
              <UsersRound className="size-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526981]">
              Puente Vocacional 2026
            </p>
            <h1 className="mt-4 max-w-4xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Red de Orientadores Vocacionales.
            </h1>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#425875]">
              Estudiantes universitarios, profesores, directivos académicos y profesionistas compartiendo experiencia real para ayudar a estudiantes de preparatoria a explorar carreras, universidades y rutas profesionales.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="/eventos/puente-vocacional-2026"
              >
                Volver al programa
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <BookingLink />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {cities.map((city) => (
            <div className="rounded-[1.5rem] border border-[#d7dedf] bg-white/72 p-6 shadow-sm" key={city}>
              <MapPin className="mb-5 size-6 text-[#10233f]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
                Edición
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
                {city}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#425875]">
                {city === "Monterrey"
                  ? "Base inicial en el ITESM, con integración progresiva de perfiles de UDEM y UANL."
                  : "Red regional con perfiles de ITESM, IEST Anáhuac, UNE y UAT."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Familias vocacionales
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
            Áreas para orientar mejor la conversación.
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {vocationalFamilies.map((family) => (
              <div className="rounded-[1.2rem] border border-[#d7dedf] bg-[#f7f4ed]/72 p-4" key={family.title}>
                <GraduationCap className="mb-4 size-5 text-[#10233f]" />
                <h3 className="text-base font-semibold tracking-[-0.03em] text-[#10233f]">
                  {family.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#425875]">{family.description}</p>
              </div>
            ))}
          </div>
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
          <h2 className="mt-3 font-[var(--font-serif)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
            Experiencia profesional por familia vocacional.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#dbe7f3]">
            Además de perfiles universitarios y académicos, Puente Vocacional 2026 integrará profesionistas con experiencia en distintas industrias para que los estudiantes puedan conocer cómo se vive cada carrera en el campo laboral.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {professionalInviteeFamilies.map((family) => (
              <div className="rounded-[1.2rem] border border-white/15 bg-white/8 p-4 text-sm font-medium leading-6 text-white" key={family}>
                {family}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-white/72 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Siguiente paso
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
              ¿Quieres participar o recibir el programa?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#425875]">
              Las preparatorias pueden revisar la red disponible por edición y los mentores pueden sumarse conforme avance la convocatoria.
            </p>
          </div>
          <BookingLink />
        </div>
      </section>
    </SiteShell>
  );
}
