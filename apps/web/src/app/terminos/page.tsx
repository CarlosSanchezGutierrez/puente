import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Términos",
};

export default function TerminosPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#60738c]">
          Puente
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
          Términos de uso
        </h1>

        <div className="mt-10 grid gap-7 text-lg leading-8 text-[#425875]">
          <p>
            Puente es una plataforma comunitaria y tecnológica en desarrollo. Sus recursos,
            formularios, eventos, biblioteca y programas pueden cambiar conforme avance el proyecto.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-[#10233f]">Uso de la plataforma</h2>
            <p className="mt-3">
              El usuario se compromete a enviar información verdadera, respetuosa y relacionada con
              los fines de Puente. Podemos descartar solicitudes incompletas, abusivas, falsas o no
              alineadas con el propósito de la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#10233f]">Programas y colaboraciones</h2>
            <p className="mt-3">
              El envío de una solicitud no garantiza aceptación, desarrollo de software, préstamo de
              libros, participación en eventos o colaboración formal. Cada caso será revisado según
              capacidad, pertinencia, impacto y disponibilidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#10233f]">Recursos y contenido</h2>
            <p className="mt-3">
              Los recursos publicados buscan orientar y compartir conocimiento. No sustituyen asesoría
              profesional, legal, médica, financiera o académica especializada.
            </p>
          </section>

          <p className="rounded-2xl border border-[#d7dedf] bg-white/75 p-5 text-base">
            Este texto es una base inicial y deberá ser revisado legalmente antes de operar
            públicamente a mayor escala.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}