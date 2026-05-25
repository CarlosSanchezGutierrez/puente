import { logoutAdmin } from "@/app/admin/actions/auth";
import { requireAdmin } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const metadata = {
  title: "Dashboard Admin",
};

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "Sin fecha";
  }

  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

async function getDashboardData() {
  const supabase = createSupabaseAdminClient();

  const [
    volunteerApplications,
    ngoRequests,
    bookRequests,
    eventRegistrations,
    contactMessages,
  ] = await Promise.all([
    supabase
      .from("volunteer_applications")
      .select("id,full_name,email,area,status,created_at")
      .order("created_at", { ascending: false })
      .limit(10),

    supabase
      .from("ngo_requests")
      .select("id,organization_name,contact_name,contact_email,status,created_at")
      .order("created_at", { ascending: false })
      .limit(10),

    supabase
      .from("book_requests")
      .select("id,requester_name,requester_email,status,requested_at")
      .order("requested_at", { ascending: false })
      .limit(10),

    supabase
      .from("event_registrations")
      .select("id,full_name,email,status,registered_at")
      .order("registered_at", { ascending: false })
      .limit(10),

    supabase
      .from("contact_messages")
      .select("id,full_name,email,subject,status,created_at")
      .order("created_at", { ascending: false })
      .limit(10),
  ]);

  return {
    volunteerApplications: volunteerApplications.data ?? [],
    ngoRequests: ngoRequests.data ?? [],
    bookRequests: bookRequests.data ?? [],
    eventRegistrations: eventRegistrations.data ?? [],
    contactMessages: contactMessages.data ?? [],
  };
}

function Section({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-[#d7dedf] bg-white/80 p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
        <span className="rounded-full bg-[#10233f] px-3 py-1 text-sm text-white">
          {count}
        </span>
      </div>

      {children}
    </section>
  );
}

function EmptyState() {
  return <p className="text-sm text-[#60738c]">Todavía no hay registros.</p>;
}

export default async function AdminDashboardPage() {
  await requireAdmin();

  const data = await getDashboardData();

  return (
    <main className="min-h-screen bg-[#f7f4ed] px-6 py-10 text-[#10233f]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#60738c]">
              Puente Admin
            </p>
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em]">
              Solicitudes recibidas
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-[#425875]">
              Panel temporal para revisar registros enviados desde formularios públicos.
            </p>
          </div>

          <form action={logoutAdmin}>
            <button
              className="rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-medium text-[#10233f]"
              type="submit"
            >
              Cerrar sesión
            </button>
          </form>
        </header>

        <div className="grid gap-5">
          <Section
            title="Voluntariado"
            count={data.volunteerApplications.length}
          >
            {data.volunteerApplications.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-3">
                {data.volunteerApplications.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[#e1e5e8] bg-[#fbfaf7] p-4">
                    <p className="font-semibold">{item.full_name}</p>
                    <p className="text-sm text-[#60738c]">{item.email}</p>
                    <p className="mt-2 text-sm text-[#425875]">Área: {item.area}</p>
                    <p className="mt-1 text-xs text-[#60738c]">
                      {item.status} · {formatDate(item.created_at)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section title="ONG's y proyectos sociales" count={data.ngoRequests.length}>
            {data.ngoRequests.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-3">
                {data.ngoRequests.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[#e1e5e8] bg-[#fbfaf7] p-4">
                    <p className="font-semibold">{item.organization_name}</p>
                    <p className="text-sm text-[#60738c]">
                      {item.contact_name} · {item.contact_email}
                    </p>
                    <p className="mt-1 text-xs text-[#60738c]">
                      {item.status} · {formatDate(item.created_at)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section title="Solicitudes de libros" count={data.bookRequests.length}>
            {data.bookRequests.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-3">
                {data.bookRequests.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[#e1e5e8] bg-[#fbfaf7] p-4">
                    <p className="font-semibold">{item.requester_name}</p>
                    <p className="text-sm text-[#60738c]">{item.requester_email}</p>
                    <p className="mt-1 text-xs text-[#60738c]">
                      {item.status} · {formatDate(item.requested_at)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section title="Registros a eventos" count={data.eventRegistrations.length}>
            {data.eventRegistrations.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-3">
                {data.eventRegistrations.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[#e1e5e8] bg-[#fbfaf7] p-4">
                    <p className="font-semibold">{item.full_name}</p>
                    <p className="text-sm text-[#60738c]">{item.email}</p>
                    <p className="mt-1 text-xs text-[#60738c]">
                      {item.status} · {formatDate(item.registered_at)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section title="Mensajes de contacto" count={data.contactMessages.length}>
            {data.contactMessages.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-3">
                {data.contactMessages.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[#e1e5e8] bg-[#fbfaf7] p-4">
                    <p className="font-semibold">{item.full_name}</p>
                    <p className="text-sm text-[#60738c]">{item.email}</p>
                    <p className="mt-2 text-sm text-[#425875]">{item.subject ?? "Sin asunto"}</p>
                    <p className="mt-1 text-xs text-[#60738c]">
                      {item.status} · {formatDate(item.created_at)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Section>
        </div>
      </div>
    </main>
  );
}