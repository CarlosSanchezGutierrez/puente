import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Aviso de Privacidad",
};

export default function PrivacidadPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#60738c]">
          Puente
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
          Aviso de privacidad
        </h1>

        <div className="mt-10 grid gap-7 text-lg leading-8 text-[#425875]">
          <p>
            Este aviso explica cómo Puente recopila y utiliza los datos enviados a través de
            sus formularios de contacto, voluntariado, biblioteca, eventos y solicitudes de
            organizaciones sociales.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-[#10233f]">Datos que podemos recopilar</h2>
            <p className="mt-3">
              Podemos recopilar nombre, correo electrónico, ciudad, institución, área de interés,
              datos de organización, mensajes, solicitudes, registros a eventos y cualquier
              información que el usuario decida compartir voluntariamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#10233f]">Finalidad</h2>
            <p className="mt-3">
              Usamos esta información para dar seguimiento a solicitudes, coordinar voluntariado,
              gestionar biblioteca comunitaria, organizar eventos, responder mensajes y evaluar
              posibles colaboraciones con organizaciones sociales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#10233f]">Conservación y seguridad</h2>
            <p className="mt-3">
              La información se almacena en servicios digitales utilizados por Puente para operar
              la plataforma. El acceso se limita a personas autorizadas para dar seguimiento a los
              formularios recibidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#10233f]">Derechos y contacto</h2>
            <p className="mt-3">
              Puedes solicitar corrección, eliminación o revisión de tus datos escribiendo desde
              la página de contacto de Puente.
            </p>
          </section>

          <p className="rounded-2xl border border-[#d7dedf] bg-white/75 p-5 text-base">
            Este texto es una base operativa inicial y deberá ser revisado por un abogado antes de
            que Puente opere públicamente a mayor escala.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}