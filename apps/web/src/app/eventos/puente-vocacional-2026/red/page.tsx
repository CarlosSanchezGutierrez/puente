import { ExternalLink, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import {
  vocationalFamilies,
  vocationalProfiles,
  type VocationalCity,
  type VocationalProfile,
} from "@/lib/vocational-network";

export const metadata = {
  title: "Red de Orientadores Vocacionales | Puente Impacto",
  description:
    "Perfiles de Monterrey y Tampico organizados por ciudad, rol y familia vocacional para apoyar a estudiantes de preparatoria.",
  alternates: {
    canonical: "/eventos/puente-vocacional-2026/red",
  },
};

const cities: VocationalCity[] = ["Monterrey", "Tampico"];

const roleSections: Array<{
  role: VocationalProfile["role"];
  title: string;
  description: string;
}> = [
  {
    role: "Mentor universitario",
    title: "Mentores universitarios",
    description:
      "Estudiantes con experiencia cercana a la vida universitaria, proyectos, prácticas y decisiones de carrera.",
  },
  {
    role: "Directiva académica",
    title: "Profesores y directivos académicos",
    description:
      "Perfiles académicos que pueden explicar planes de estudio, áreas profesionales y criterios de decisión.",
  },
  {
    role: "Profesionista invitado",
    title: "Profesionistas invitados",
    description:
      "Experiencias profesionales reales para entender salidas laborales, industria, prácticas y desarrollo profesional.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function cityId(city: VocationalCity) {
  return city.toLowerCase();
}

function ProfileCard({ profile }: { profile: VocationalProfile }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[#d7dedf] bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <div className="flex gap-4 p-4">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-[#d7dedf] bg-[#10233f]">
          {profile.photo ? (
            <Image
              alt={`Foto de ${profile.name}`}
              className="h-full w-full object-cover"
              height={128}
              src={profile.photo}
              width={128}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-white">
              {initials(profile.name)}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526981]">
            {profile.role}
          </p>

          <h3 className="mt-1 text-lg font-semibold leading-tight tracking-[-0.035em] text-[#10233f]">
            {profile.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#425875]">{profile.credential}</p>
        </div>
      </div>

      <div className="mt-auto border-t border-[#d7dedf] px-4 py-3">
        <p className="text-xs leading-5 text-[#526981]">{profile.institution}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-1 text-[0.68rem] font-semibold text-[#425875]">
            {profile.family}
          </span>

          {profile.badges?.map((badge) => (
            <span
              className="rounded-full border border-[#d7dedf] bg-white px-3 py-1 text-[0.68rem] font-semibold text-[#425875]"
              key={`${profile.name}-${badge}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {profile.linkedin ? (
          <a
            className="mt-4 inline-flex items-center text-sm font-semibold text-[#10233f] underline-offset-4 hover:underline"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
            <ExternalLink className="ml-1.5 size-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function CitySection({ city }: { city: VocationalCity }) {
  const profiles = vocationalProfiles.filter((profile) => profile.city === city);
  const total = profiles.length;

  return (
    <section className="border-t border-[#d7dedf]" id={cityId(city)}>
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Edición {city}
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#10233f] md:text-5xl">
              Perfiles de {city}
            </h2>
          </div>

          <div className="rounded-[1.25rem] border border-[#d7dedf] bg-white/65 p-4">
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#425875]">
              <span className="rounded-full bg-[#10233f] px-3 py-1.5 text-white">
                {total} perfiles
              </span>

              {roleSections.map((section) => {
                const count = profiles.filter((profile) => profile.role === section.role).length;

                if (!count) return null;

                return (
                  <span
                    className="rounded-full border border-[#d7dedf] bg-white px-3 py-1.5"
                    key={`${city}-${section.role}`}
                  >
                    {count} {section.title.toLowerCase()}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10">
          {roleSections.map((section) => {
            const sectionProfiles = profiles.filter((profile) => profile.role === section.role);

            if (!sectionProfiles.length) return null;

            return (
              <div key={`${city}-${section.role}`}>
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                    {section.title}
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-[#425875]">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {sectionProfiles.map((profile) => (
                    <ProfileCard key={`${profile.city}-${profile.role}-${profile.name}`} profile={profile} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function VocationalNetworkPage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Puente Vocacional
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
                Red de orientadores vocacionales.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875]">
                Perfiles de Monterrey y Tampico organizados por ciudad, rol y familia vocacional para apoyar a estudiantes de preparatoria.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {cities.map((city) => (
                  <Link
                    className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                    href={`#${cityId(city)}`}
                    key={city}
                  >
                    Ver {city}
                  </Link>
                ))}
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
                <UsersRound className="size-4 text-[#10233f]" />
                Organización
              </div>

              <p className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#10233f]">
                Estudiantes, profesores, directivos y profesionistas invitados en una misma red.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {vocationalFamilies.map((family) => (
                  <span
                    className="rounded-full border border-[#d7dedf] bg-white px-3 py-1.5 text-xs font-semibold text-[#425875]"
                    key={family}
                  >
                    {family}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {cities.map((city) => (
          <CitySection city={city} key={city} />
        ))}
      </main>
    </SiteShell>
  );
}