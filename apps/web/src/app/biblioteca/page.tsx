import { BookOpen, Search } from "lucide-react";
import { BookRequestForm } from "@/components/forms/book-request-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { listPublicBooks } from "@/lib/queries/public-content";

export const metadata = {
  title: "Biblioteca",
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
            <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Biblioteca comunitaria.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Un catálogo de libros para aprender, compartir conocimiento y formar círculos
            de lectura alrededor de tecnología, idiomas, ciencia, historia y desarrollo personal.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3 rounded-2xl border border-[#d7dedf] bg-white/75 px-4 py-3">
          <Search className="size-5 text-[#60738c]" />
          <Input
            className="border-0 bg-transparent shadow-none focus-visible:ring-0"
            placeholder="Buscar por título, autor o categoría..."
          />
        </div>

        {books.length === 0 ? (
          <Card className="mt-10 border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="p-7 text-[#425875]">
              Todavía no hay libros publicados en Supabase. Agrega libros desde el seed o desde el panel de Supabase.
            </CardContent>
          </Card>
        ) : (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {books.map((book) => (
              <Card key={book.id} className="border-[#d7dedf] bg-white/75 shadow-sm">
                <CardContent className="p-7">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <BookOpen className="size-7 text-[#10233f]" />
                    <Badge className="bg-[#10233f] text-white">{book.status}</Badge>
                  </div>

                  <h2 className="text-2xl font-semibold tracking-[-0.02em]">{book.title}</h2>
                  <p className="mt-1 text-sm text-[#60738c]">{book.author ?? "Autor por definir"}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">{book.category}</Badge>
                    <Badge variant="outline">{book.language ?? "Idioma por definir"}</Badge>
                  </div>

                  <p className="mt-5 leading-7 text-[#425875]">
                    {book.description ?? "Descripción pendiente."}
                  </p>

                  <BookRequestForm bookTitle={book.title} />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}