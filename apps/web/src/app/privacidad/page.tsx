import {
  Database,
  FileText,
  LockKeyhole,
  Mail,
  RefreshCcw,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de Privacidad de Puente Impacto sobre tratamiento de datos personales, finalidades, derechos y canales de contacto.",
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

export default function PrivacidadPage() {
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
                Aviso de Privacidad.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
                Este aviso explica c&oacute;mo Puente recaba, usa, conserva y protege los datos
                personales proporcionados mediante formularios, solicitudes, registros y medios de contacto.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
              <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
                <ShieldCheck className="mb-10 size-8 text-[#d7e7f6]" />
                <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em]">
                  Puente debe tratar los datos con claridad, proporcionalidad y finalidad definida.
                </p>
                <p className="mt-6 leading-7 text-[#c9d8e8]">
                  Este documento es una base operativa y p&uacute;blica. Puede actualizarse conforme
                  Puente formalice su estructura legal, procesos y responsables.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <SummaryCard
              description="Puente recaba datos necesarios para responder solicitudes, coordinar participacion y dar seguimiento a actividades."
              icon={UserCheck}
              title="Datos proporcionales"
            />
            <SummaryCard
              description="Los datos se usan para finalidades relacionadas con comunidad, biblioteca, voluntariado, eventos, recursos y apoyo a organizaciones."
              icon={Database}
              title="Finalidades claras"
            />
            <SummaryCard
              description="Las solicitudes relacionadas con privacidad pueden enviarse mediante los canales de contacto disponibles en la plataforma."
              icon={Mail}
              title="Canal de privacidad"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-14 md:py-20">
        <LegalSection title="1. Responsable del tratamiento">
          <p>
            Puente es una iniciativa comunitaria y tecnol&oacute;gica en desarrollo orientada a
            software, educaci&oacute;n, biblioteca, voluntariado, recursos abiertos, eventos y apoyo
            a organizaciones sociales.
          </p>
          <p>
            Para efectos de este aviso, Puente act&uacute;a como responsable del tratamiento de los
            datos personales que recibe directamente mediante esta plataforma y sus canales asociados.
            Mientras la iniciativa concluye su formalizaci&oacute;n legal, las comunicaciones de privacidad
            se atender&aacute;n mediante la p&aacute;gina de contacto.
          </p>
          <p>
            Canal de contacto:{" "}
            <Link className="font-medium text-[#10233f] underline underline-offset-4" href="/contacto">
              /contacto
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="2. Datos personales que podemos recabar">
          <p>
            Seg&uacute;n el formulario o canal utilizado, Puente puede recabar las siguientes categor&iacute;as
            de datos:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Nombre y datos de contacto, como correo electr&oacute;nico o tel&eacute;fono.</li>
            <li>Datos de identificaci&oacute;n de una organizaci&oacute;n, instituci&oacute;n, grupo o proyecto.</li>
            <li>Informaci&oacute;n sobre intereses de voluntariado, habilidades, disponibilidad o experiencia.</li>
            <li>Solicitudes relacionadas con libros, eventos, recursos, talleres o grupos de estudio.</li>
            <li>Informaci&oacute;n descriptiva sobre problemas operativos, sociales, educativos o tecnol&oacute;gicos.</li>
            <li>Datos t&eacute;cnicos b&aacute;sicos derivados del uso del sitio, cuando sean necesarios para seguridad, mantenimiento o anal&iacute;tica.</li>
          </ul>
          <p>
            Puente no solicita datos sensibles de manera general. Si una persona comparte datos
            sensibles de forma voluntaria dentro de un mensaje abierto, Puente procurar&aacute; tratarlos
            solo en la medida necesaria para responder o canalizar la solicitud.
          </p>
        </LegalSection>

        <LegalSection title="3. Finalidades del tratamiento">
          <p>Los datos personales pueden utilizarse para las siguientes finalidades principales:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Responder mensajes enviados mediante la p&aacute;gina de contacto.</li>
            <li>Evaluar solicitudes de organizaciones sociales o proyectos comunitarios.</li>
            <li>Coordinar postulaciones de voluntariado y posibles formas de participaci&oacute;n.</li>
            <li>Gestionar solicitudes relacionadas con libros, biblioteca comunitaria y c&iacute;rculos de lectura.</li>
            <li>Registrar inter&eacute;s en eventos, talleres, pl&aacute;ticas o grupos de estudio.</li>
            <li>Enviar seguimiento relacionado con una solicitud enviada por la persona titular.</li>
            <li>Mejorar la operaci&oacute;n, seguridad, trazabilidad y administraci&oacute;n de la plataforma.</li>
            <li>Documentar aprendizajes internos para mejorar procesos y continuidad de proyectos.</li>
          </ul>
          <p>
            Puente no vende datos personales ni los utiliza para fines ajenos a la operaci&oacute;n de
            la plataforma, sus proyectos comunitarios o el seguimiento solicitado.
          </p>
        </LegalSection>

        <LegalSection title="4. Transferencias y encargados">
          <p>
            Puente puede utilizar proveedores tecnol&oacute;gicos para operar la plataforma, almacenar
            informaci&oacute;n, enviar notificaciones, hospedar el sitio, proteger la seguridad del servicio
            o administrar formularios.
          </p>
          <p>
            Estos proveedores act&uacute;an como encargados o prestadores de servicios necesarios para
            la operaci&oacute;n. Puente no pretende transferir datos personales a terceros para fines
            comerciales independientes.
          </p>
          <p>
            Cuando una solicitud requiera canalizaci&oacute;n con aliados, voluntarios, mentores, profesores,
            organizaciones o colaboradores, Puente procurar&aacute; compartir &uacute;nicamente la informaci&oacute;n
            necesaria para atender el caso.
          </p>
        </LegalSection>

        <LegalSection title="5. Conservaci&oacute;n de datos">
          <p>
            Los datos se conservar&aacute;n durante el tiempo razonablemente necesario para atender la
            solicitud, dar seguimiento, documentar la operaci&oacute;n y cumplir responsabilidades internas
            de administraci&oacute;n, seguridad o continuidad.
          </p>
          <p>
            Cuando los datos ya no sean necesarios para las finalidades informadas, Puente podr&aacute;
            eliminarlos, anonimizarlos o conservarlos en forma hist&oacute;rica cuando resulte razonable
            para trazabilidad del proyecto.
          </p>
        </LegalSection>

        <LegalSection title="6. Derechos ARCO y solicitudes de privacidad">
          <p>
            La persona titular puede solicitar acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n
            respecto de sus datos personales, as&iacute; como revocar su consentimiento cuando sea aplicable.
          </p>
          <p>
            Para hacer una solicitud, se recomienda escribir mediante la p&aacute;gina de contacto indicando:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Nombre de la persona solicitante.</li>
            <li>Medio de contacto para recibir respuesta.</li>
            <li>Formulario, evento, solicitud o contexto relacionado con los datos.</li>
            <li>Derecho o acci&oacute;n solicitada.</li>
            <li>Informaci&oacute;n suficiente para localizar los datos correspondientes.</li>
          </ul>
        </LegalSection>

        <LegalSection title="7. Seguridad">
          <p>
            Puente implementa medidas razonables de seguridad administrativas, t&eacute;cnicas y
            organizativas para proteger los datos contra acceso no autorizado, p&eacute;rdida, alteraci&oacute;n
            o uso indebido.
          </p>
          <p>
            Ninguna plataforma conectada a Internet puede garantizar seguridad absoluta. Sin embargo,
            Puente procurar&aacute; reducir riesgos mediante buenas pr&aacute;cticas de desarrollo, control de
            accesos, configuraci&oacute;n de servicios, revisi&oacute;n de permisos y mejora continua.
          </p>
        </LegalSection>

        <LegalSection title="8. Cookies, anal&iacute;tica y tecnolog&iacute;as similares">
          <p>
            El sitio puede utilizar cookies, almacenamiento local o herramientas de anal&iacute;tica para
            operar correctamente, entender uso general del sitio, mejorar experiencia de navegaci&oacute;n
            y detectar errores.
          </p>
          <p>
            La persona usuaria puede gestionar o bloquear cookies desde la configuraci&oacute;n de su
            navegador. Algunas funciones podr&iacute;an no operar correctamente si se bloquean componentes
            necesarios para el funcionamiento del sitio.
          </p>
        </LegalSection>

        <LegalSection title="9. Menores de edad">
          <p>
            Puente puede publicar recursos educativos o comunitarios &uacute;tiles para estudiantes y
            j&oacute;venes. Sin embargo, si una persona menor de edad desea enviar datos personales,
            se recomienda que lo haga con conocimiento y acompa&ntilde;amiento de su madre, padre,
            tutor o responsable legal.
          </p>
        </LegalSection>

        <LegalSection title="10. Cambios al aviso">
          <p>
            Puente puede modificar este Aviso de Privacidad para reflejar cambios operativos, legales,
            tecnol&oacute;gicos o de estructura del proyecto. Las actualizaciones se publicar&aacute;n en esta
            misma p&aacute;gina.
          </p>
          <p className="text-sm text-[#60738c]">
            &Uacute;ltima actualizaci&oacute;n: 2026.
          </p>
        </LegalSection>

        <Card className="border-[#d7dedf] bg-[#10233f] text-white shadow-sm">
          <CardContent className="grid gap-5 p-6 md:grid-cols-[56px_1fr] md:p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
              <LockKeyhole className="size-6 text-[#d7e7f6]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Nota de revisi&oacute;n legal
              </h2>
              <p className="mt-3 leading-8 text-[#c9d8e8]">
                Este documento funciona como base profesional de transparencia para Puente. Cuando
                exista raz&oacute;n social, domicilio legal, representante y estructura fiscal definitiva,
                debe revisarse y ajustarse con asesor&iacute;a legal.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteShell>
  );
}