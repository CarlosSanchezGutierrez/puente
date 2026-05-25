import { BookOpen, Search } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { books } from "@/lib/mock-data";

export const metadata = {
  title: "Biblioteca",
};

export default function BibliotecaPage() {
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

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {books.map((book) => (
            <Card key={book.title} className="border-[#d7dedf] bg-white/75 shadow-sm">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <BookOpen className="size-7 text-[#10233f]" />
                  <Badge className="bg-[#10233f] text-white">{book.status}</Badge>
                </div>

                <h2 className="text-2xl font-semibold tracking-[-0.02em]">{book.title}</h2>
                <p className="mt-1 text-sm text-[#60738c]">{book.author}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">{book.category}</Badge>
                  <Badge variant="outline">{book.language}</Badge>
                </div>

                <p className="mt-5 leading-7 text-[#425875]">{book.description}</p>

                <Button className="mt-6 rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]">
                  Solicitar libro
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
