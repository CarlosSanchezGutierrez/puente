"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { BookRequestForm } from "@/components/forms/book-request-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { PublicBook } from "@/lib/queries/public-content";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function uniqueSorted(values: Array<string | null | undefined>) {
  return Array.from(
    new Set(
      values
        .map((value) => value?.trim())
        .filter((value): value is string => Boolean(value)),
    ),
  ).sort((a, b) => a.localeCompare(b, "es"));
}

function getStatusLabel(status: string) {
  const labels: Record<string, string> = {
    available: "Disponible",
    unavailable: "No disponible",
    borrowed: "Prestado",
    reserved: "Reservado",
  };

  return labels[status] ?? status;
}

function getConditionLabel(condition?: string | null) {
  const labels: Record<string, string> = {
    new: "Nuevo",
    good: "Buen estado",
    used: "Usado",
    fragile: "Delicado",
  };

  if (!condition) {
    return "Estado por definir";
  }

  return labels[condition] ?? condition;
}

function BookCover({ book }: { book: PublicBook }) {
  if (book.coverUrl) {
    return (
      <div
        aria-label={`Portada de ${book.title}`}
        className="h-64 rounded-[1.35rem] border border-[#d7dedf] bg-cover bg-center shadow-sm"
        role="img"
        style={{ backgroundImage: `url(${book.coverUrl})` }}
      />
    );
  }

  return (
    <div className="flex h-64 items-center justify-center rounded-[1.35rem] border border-[#d7dedf] bg-[#10233f] p-6 text-center text-white shadow-sm">
      <div>
        <p className="font-[var(--font-serif)] text-5xl font-semibold">
          {book.title.slice(0, 1).toUpperCase()}
        </p>
        <p className="mt-4 text-sm leading-6 text-[#c9d8e8]">{book.title}</p>
      </div>
    </div>
  );
}

function BookCard({ book }: { book: PublicBook }) {
  return (
    <Card className="overflow-hidden border-[#d7dedf] bg-white/78 shadow-sm">
      <CardContent className="grid gap-6 p-5">
        <BookCover book={book} />

        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge className="bg-[#10233f] text-white">{getStatusLabel(book.status)}</Badge>
            {book.isFeatured ? <Badge variant="outline">Destacado</Badge> : null}
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#10233f]">
            {book.title}
          </h3>

          <p className="mt-1 text-sm text-[#60738c]">
            {book.author ?? "Autor por definir"}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline">{book.category}</Badge>
            {book.language ? <Badge variant="outline">{book.language}</Badge> : null}
            <Badge variant="outline">{getConditionLabel(book.condition)}</Badge>
          </div>

          {book.description ? (
            <p className="mt-5 leading-7 text-[#425875]">{book.description}</p>
          ) : (
            <p className="mt-5 leading-7 text-[#60738c]">Descripción pendiente.</p>
          )}

          <div className="mt-4 grid gap-1 text-sm text-[#60738c]">
            {book.publisher ? <p>Editorial: {book.publisher}</p> : null}
            {book.publicationYear ? <p>Año: {book.publicationYear}</p> : null}
            {book.audience ? <p>Perfil recomendado: {book.audience}</p> : null}
          </div>

          {book.tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  className="rounded-full bg-[#f3efe6] px-3 py-1 text-xs text-[#425875]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <BookRequestForm bookTitle={book.title} />
        </div>
      </CardContent>
    </Card>
  );
}

export function BookCatalog({ books }: { books: PublicBook[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [language, setLanguage] = useState("Todos");
  const [status, setStatus] = useState("Todos");

  const categories = useMemo(
    () => ["Todas", ...uniqueSorted(books.map((book) => book.category))],
    [books],
  );

  const languages = useMemo(
    () => ["Todos", ...uniqueSorted(books.map((book) => book.language))],
    [books],
  );

  const statuses = useMemo(
    () => ["Todos", ...uniqueSorted(books.map((book) => book.status))],
    [books],
  );

  const filteredBooks = useMemo(() => {
    const normalizedQuery = normalize(query);

    return books.filter((book) => {
      const searchable = normalize(
        [
          book.title,
          book.author,
          book.category,
          book.language,
          book.description,
          book.publisher,
          book.audience,
          ...book.tags,
        ]
          .filter(Boolean)
          .join(" "),
      );

      const matchesQuery = normalizedQuery.length === 0 || searchable.includes(normalizedQuery);
      const matchesCategory = category === "Todas" || book.category === category;
      const matchesLanguage = language === "Todos" || book.language === language;
      const matchesStatus = status === "Todos" || book.status === status;

      return matchesQuery && matchesCategory && matchesLanguage && matchesStatus;
    });
  }, [books, category, language, query, status]);

  const groupedBooks = useMemo(() => {
    return filteredBooks.reduce<Record<string, PublicBook[]>>((groups, book) => {
      const key = book.category || "Sin categoría";
      groups[key] = groups[key] ?? [];
      groups[key].push(book);
      return groups;
    }, {});
  }, [filteredBooks]);

  const totalAvailable = books.filter((book) => book.status === "available").length;

  if (books.length === 0) {
    return (
      <Card className="mt-10 border-[#d7dedf] bg-white/75 shadow-sm">
        <CardContent className="p-7 text-[#425875]">
          Todavía no hay libros publicados en Supabase. Agrega libros desde el panel de Supabase o mediante SQL.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mt-10">
      <div className="rounded-[1.75rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_180px_180px]">
          <div className="flex items-center gap-3 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3">
            <Search className="size-5 text-[#60738c]" />
            <Input
              className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por título, autor, tema, editorial o etiqueta..."
              value={query}
            />
          </div>

          <select
            className="rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3 text-sm text-[#425875] outline-none"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            className="rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3 text-sm text-[#425875] outline-none"
            onChange={(event) => setLanguage(event.target.value)}
            value={language}
          >
            {languages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            className="rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3 text-sm text-[#425875] outline-none"
            onChange={(event) => setStatus(event.target.value)}
            value={status}
          >
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item === "Todos" ? item : getStatusLabel(item)}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#60738c]">
          <SlidersHorizontal className="size-4" />
          <span>{filteredBooks.length} libros visibles</span>
          <span>·</span>
          <span>{books.length} libros en catálogo</span>
          <span>·</span>
          <span>{totalAvailable} disponibles</span>
        </div>
      </div>

      <div className="mt-12 grid gap-14">
        {Object.entries(groupedBooks).map(([groupName, groupBooks]) => (
          <section key={groupName}>
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#60738c]">
                  Sección
                </p>
                <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] text-[#10233f]">
                  {groupName}
                </h2>
              </div>
              <p className="text-sm text-[#60738c]">{groupBooks.length} libros</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {groupBooks.map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}