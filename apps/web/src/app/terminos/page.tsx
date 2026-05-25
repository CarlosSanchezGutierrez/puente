import {
  AlertTriangle,
  BookOpen,
  FileText,
  Handshake,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "T&eacute;rminos y Condiciones",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
      <CardContent className="p-6 md:p-8">
        <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
          {title}
        </h2>
        <div className="mt-5 space-y-4 leading-8 text-[#425875]">{children}</div>
      </CardContent>
    </Card>
  );
}

function SummaryCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="border-[#d7dedf] bg-white/75 shadow-sm">
      <CardContent className="p-6">
        <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
          <Icon className="size-6 text-[#10233f]" />
        </div>
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
          {title}
        </h3>
        <p className="mt-3 leading-7 text-[#425875]">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function TerminosPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
            Documento legal
          </Badge>

          <div className="grid gap-10 md:grid-cols-[1fr_0.78fr] md:items-end">
            <div>
              <SectionLabel>Puente</SectionLabel>
              <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
                T&eacute;rminos y Condiciones.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
                Estos t&eacute;rminos regulan el uso de la plataforma Puente, sus recursos, formularios,
                biblioteca, eventos, voluntariado y solicitudes de apoyo.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
              <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
                <Scale className="mb-10 size-8 text-[#d7e7f6]" />
                <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em]">
                  Puente es una plataforma en desarrollo. El uso debe ser responsable, claro y compatible con su finalidad social y educativa.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <SummaryCard
              description="Puente ofrece recursos, formularios, biblioteca, eventos y canales de participacion comunitaria."
              icon={FileText}
              title="Uso informativo y comunitario"
            />
            <SummaryCard
              description="Enviar una solicitud no garantiza aceptacion, prestamo, colaboracion, evento, servicio o respuesta inmediata."
              icon={AlertTriangle}
              title="Sin garantia automatica"
            />
            <SummaryCard
              description="La persona usuaria debe proporcionar informacion veraz y usar la plataforma de forma respetuosa y legal."
              icon={UserCheck}
              title="Responsabilidad del usuario"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-14 md:py-20">
        <LegalSection title="1. Aceptaci&oacute;n de los t&eacute;rminos">
          <p>
            Al acceder o utilizar la plataforma Puente, la persona usuaria acepta estos T&eacute;rminos
            y Condiciones, as&iacute; como el Aviso de Privacidad aplicable.
          </p>
          <p>
            Si una persona no est&aacute; de acuerdo con estos t&eacute;rminos, debe abstenerse de utilizar
            la plataforma, enviar formularios o participar en actividades gestionadas mediante Puente.
          </p>
        </LegalSection>

        <LegalSection title="2. Naturaleza de Puente">
          <p>
            Puente es una iniciativa comunitaria y tecnol&oacute;gica en desarrollo orientada a conectar
            software, educaci&oacute;n, biblioteca, voluntariado, recursos abiertos, eventos y apoyo a
            organizaciones sociales.
          </p>
          <p>
            La plataforma puede cambiar conforme evolucionen sus procesos, alcance, estructura legal,
            equipo, aliados, servicios, proyectos y pol&iacute;ticas internas.
          </p>
        </LegalSection>

        <LegalSection title="3. Servicios y funciones disponibles">
          <p>Puente puede ofrecer, entre otras funciones:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Cat&aacute;logo de biblioteca comunitaria y solicitudes de libros.</li>
            <li>Registro o inter&eacute;s en eventos, talleres, pl&aacute;ticas y grupos de estudio.</li>
            <li>Formularios de voluntariado, contacto y participaci&oacute;n comunitaria.</li>
            <li>Canales para que organizaciones sociales presenten problemas o necesidades digitales.</li>
            <li>Recursos, gu&iacute;as, documentos, materiales educativos o contenido abierto.</li>
            <li>Informaci&oacute;n institucional sobre Puente y sus l&iacute;neas de trabajo.</li>
          </ul>
          <p>
            Puente puede modificar, suspender o eliminar funciones sin previo aviso cuando sea necesario
            por razones operativas, t&eacute;cnicas, legales, de seguridad o de mejora del proyecto.
          </p>
        </LegalSection>

        <LegalSection title="4. Solicitudes de apoyo a organizaciones">
          <p>
            Las organizaciones, grupos o personas que soliciten apoyo mediante Puente deben proporcionar
            informaci&oacute;n veraz, suficiente y clara sobre su contexto, problema, responsables y necesidad.
          </p>
          <p>
            El env&iacute;o de una solicitud no implica aceptaci&oacute;n autom&aacute;tica, obligaci&oacute;n de prestar
            servicios, entrega gratuita, descuento, desarrollo de software, asesor&iacute;a, consultor&iacute;a o
            relaci&oacute;n contractual.
          </p>
          <p>
            Puente podr&aacute; evaluar cada caso seg&uacute;n impacto social, claridad del problema, disponibilidad
            del equipo, viabilidad t&eacute;cnica, urgencia, colaboraci&oacute;n del solicitante y recursos disponibles.
          </p>
        </LegalSection>

        <LegalSection title="5. Biblioteca comunitaria">
          <p>
            La biblioteca de Puente tiene fines educativos, comunitarios y de promoci&oacute;n de lectura.
            La disponibilidad de libros puede cambiar sin previo aviso.
          </p>
          <p>
            Una solicitud de libro no garantiza pr&eacute;stamo inmediato. Puente podr&aacute; establecer reglas
            de pr&eacute;stamo, devoluci&oacute;n, cuidado, reposici&oacute;n, verificaci&oacute;n de identidad, consulta
            supervisada o restricciones para colecciones especiales.
          </p>
          <p>
            La persona que reciba un libro en pr&eacute;stamo deber&aacute; cuidarlo, devolverlo en la fecha acordada
            y responder por da&ntilde;os, p&eacute;rdidas o uso indebido cuando se establezcan reglas espec&iacute;ficas.
          </p>
        </LegalSection>

        <LegalSection title="6. Eventos, talleres y grupos de estudio">
          <p>
            Los eventos publicados en Puente pueden estar sujetos a cupo, cambios de horario, ubicaci&oacute;n,
            modalidad, requisitos de participaci&oacute;n o cancelaci&oacute;n.
          </p>
          <p>
            El registro a un evento no garantiza lugar definitivo salvo confirmaci&oacute;n expresa. Puente podr&aacute;
            priorizar participantes seg&uacute;n cupo, perfil, orden de registro, prop&oacute;sito del evento o criterios
            operativos.
          </p>
        </LegalSection>

        <LegalSection title="7. Voluntariado y colaboraciones">
          <p>
            El env&iacute;o de una solicitud de voluntariado no crea relaci&oacute;n laboral, sociedad, asociaci&oacute;n,
            representaci&oacute;n legal, obligaci&oacute;n econ&oacute;mica ni promesa de participaci&oacute;n.
          </p>
          <p>
            Puente podr&aacute; aceptar, rechazar, pausar o finalizar participaciones voluntarias seg&uacute;n necesidades
            del proyecto, conducta, disponibilidad, seguridad, comunicaci&oacute;n, cumplimiento de compromisos o
            compatibilidad con la finalidad de la plataforma.
          </p>
        </LegalSection>

        <LegalSection title="8. Uso permitido y conducta">
          <p>La persona usuaria se compromete a no utilizar Puente para:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Enviar informaci&oacute;n falsa, fraudulenta, ofensiva, discriminatoria o ilegal.</li>
            <li>Suplantar identidades, organizaciones o representaciones.</li>
            <li>Intentar acceder a sistemas, cuentas, datos o funciones no autorizadas.</li>
            <li>Interferir con la operaci&oacute;n, seguridad o disponibilidad de la plataforma.</li>
            <li>Usar recursos, libros, eventos o contactos para fines abusivos, comerciales no autorizados o ajenos al prop&oacute;sito de Puente.</li>
          </ul>
          <p>
            Puente podr&aacute; restringir acceso, eliminar registros, ignorar solicitudes o tomar medidas razonables
            cuando detecte uso indebido.
          </p>
        </LegalSection>

        <LegalSection title="9. Recursos, contenidos y propiedad intelectual">
          <p>
            Salvo indicaci&oacute;n contraria, los textos, dise&ntilde;os, estructura, documentaci&oacute;n, recursos,
            materiales y elementos publicados por Puente pertenecen a Puente o a sus respectivos autores,
            colaboradores o titulares.
          </p>
          <p>
            El uso de recursos publicados debe respetar la finalidad educativa o comunitaria indicada.
            No se permite atribuirse contenidos de Puente como propios ni reutilizarlos de forma enga&ntilde;osa,
            comercial o contraria a la ley.
          </p>
          <p>
            Las portadas de libros, nombres de obras, marcas, editoriales, personajes o referencias de terceros
            se muestran con fines de identificaci&oacute;n, cat&aacute;logo, divulgaci&oacute;n o referencia.
          </p>
        </LegalSection>

        <LegalSection title="10. Enlaces y servicios de terceros">
          <p>
            Puente puede incluir enlaces a sitios, documentos, plataformas, herramientas o servicios de terceros.
            Puente no controla ni garantiza el contenido, disponibilidad, seguridad, pol&iacute;ticas o exactitud de
            esos servicios externos.
          </p>
          <p>
            El uso de plataformas externas se rige por sus propios t&eacute;rminos, condiciones y avisos de privacidad.
          </p>
        </LegalSection>

        <LegalSection title="11. Limitaci&oacute;n de responsabilidad">
          <p>
            Puente se proporciona en el estado en que se encuentra y conforme a su etapa de desarrollo. Aunque se
            procurar&aacute; mantener informaci&oacute;n clara y funcionamiento estable, no se garantiza disponibilidad
            continua, ausencia de errores, resultados espec&iacute;ficos, aceptaci&oacute;n de solicitudes ni impacto determinado.
          </p>
          <p>
            Puente no sustituye asesor&iacute;a profesional, legal, fiscal, m&eacute;dica, psicol&oacute;gica, financiera,
            educativa o t&eacute;cnica especializada. Cualquier decisi&oacute;n tomada con base en recursos o informaci&oacute;n
            de la plataforma es responsabilidad de la persona usuaria.
          </p>
        </LegalSection>

        <LegalSection title="12. Privacidad y datos personales">
          <p>
            El tratamiento de datos personales se rige por el Aviso de Privacidad de Puente.
          </p>
          <p>
            Puedes consultarlo aqu&iacute;:{" "}
            <Link className="font-medium text-[#10233f] underline underline-offset-4" href="/privacidad">
              Aviso de Privacidad
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="13. Cambios a los t&eacute;rminos">
          <p>
            Puente podr&aacute; modificar estos T&eacute;rminos y Condiciones para reflejar cambios operativos,
            legales, t&eacute;cnicos o de estructura. Las modificaciones se publicar&aacute;n en esta misma p&aacute;gina.
          </p>
          <p className="text-sm text-[#60738c]">
            &Uacute;ltima actualizaci&oacute;n: 2026.
          </p>
        </LegalSection>

        <Card className="border-[#d7dedf] bg-[#10233f] text-white shadow-sm">
          <CardContent className="grid gap-5 p-6 md:grid-cols-[56px_1fr] md:p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
              <Handshake className="size-6 text-[#d7e7f6]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Uso responsable
              </h2>
              <p className="mt-3 leading-8 text-[#c9d8e8]">
                Puente existe para facilitar aprendizaje, comunidad y proyectos con valor social.
                El uso de la plataforma debe respetar ese prop&oacute;sito.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteShell>
  );
}