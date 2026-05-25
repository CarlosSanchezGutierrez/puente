import { BookCatalog } from "@/components/library/book-catalog";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { listPublicBooks } from "@/lib/queries/public-content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Biblioteca",
  description: "Catalogo comunitario de libros sobre tecnologia, idiomas, ciencia, literatura, educacion, desarrollo profesional e impacto social.",
};

export default async function BibliotecaPage() {
  const books = await listPublicBooks();

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Badge className="mb-6 rounded-full border-[#c7d2df] bg-white/70 px-4 py-1 text-[#10233f]">
          Puente Comunidad
        </Badge>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#60738c]">
              CatÃ¡logo vivo
            </p>
            <h1 className="mt-4 font-[var(--font-serif)] text-6xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-8xl">
              Biblioteca comunitaria.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Un catÃ¡logo de libros para aprender, compartir conocimiento y formar cÃ­rculos de lectura
            alrededor de tecnologÃ­a, idiomas, ciencia, historia, cultura, carrera profesional y
            desarrollo personal.
          </p>
        </div>

        <BookCatalog books={books} />
      </section>
    </SiteShell>
  );
}