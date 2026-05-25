"use client";

import {
  BookOpenCheck,
  Layers3,
  Library,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { BookRequestForm } from "@/components/forms/book-request-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { PublicBook } from "@/lib/queries/public-content";

type SortMode = "featured" | "title" | "category" | "availability";

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

function getStatusTone(status: string) {
  if (status === "available") {
    return "bg-emerald-50 text-emerald-800 border-emerald-200";
  }

  if (status === "borrowed" || status === "reserved") {
    return "bg-amber-50 text-amber-800 border-amber-200";
  }

  return "bg-slate-100 text-slate-700 border-slate-200";
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Library;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm leading-6 text-[#60738c]">{label}</p>
        <Icon className="size-5 text-[#10233f]" />
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
        {value}
      </p>
    </div>
  );
}

function BookCover({ book }: { book: PublicBook }) {
  if (book.coverUrl) {
    return (
      <div
        aria-label={`Portada de ${book.title}`}
        className="h-72 rounded-[1.35rem] border border-[#d7dedf] bg-cover bg-center shadow-sm"
        role="img"
        style={{ backgroundImage: `url(${book.coverUrl})` }}
      />
    );
  }

  return (
    <div className="flex h-72 items-center justify-center rounded-[1.35rem] border border-[#d7dedf] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_38%),#10233f] p-6 text-center text-white shadow-sm">
      <div>
        <p className="font-[var(--font-serif)] text-6xl font-semibold">
          {book.title.slice(0, 1).toUpperCase()}
        </p>
        <p className="mx-auto mt-5 max-w-[14rem] text-sm leading-6 text-[#c9d8e8]">
          {book.title}
        </p>
      </div>
    </div>
  );
}

function BookCard({
  book,
  isRequestOpen,
  onToggleRequest,
}: {
  book: PublicBook;
  isRequestOpen: boolean;
  onToggleRequest: () => void;
}) {
  return (
    <Card className="overflow-hidden border-[#d7dedf] bg-white/78 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <CardContent className="grid gap-6 p-5">
        <BookCover book={book} />

        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusTone(
                book.status,
              )}`}
            >
              {getStatusLabel(book.status)}
            </span>

            {book.isFeatured ? (
              <span className="rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-1 text-xs font-medium text-[#10233f]">
                Destacado
              </span>
            ) : null}
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
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
            <p className="mt-5 line-clamp-4 leading-7 text-[#425875]">{book.description}</p>
          ) : (
            <p className="mt-5 leading-7 text-[#60738c]">
              Descripci\u00f3n pendiente.
            </p>
          )}

          <div className="mt-4 grid gap-1 text-sm text-[#60738c]">
            {book.publisher ? <p>Editorial: {book.publisher}</p> : null}
            {book.publicationYear ? <p>A\u00f1o: {book.publicationYear}</p> : null}
            {book.audience ? <p>Perfil recomendado: {book.audience}</p> : null}
          </div>

          {book.tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {book.tags.slice(0, 6).map((tag) => (
                <span
                  className="rounded-full bg-[#f3efe6] px-3 py-1 text-xs text-[#425875]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-6">
            <Button
              className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]"
              onClick={onToggleRequest}
              type="button"
            >
              {isRequestOpen ? "Cerrar solicitud" : "Solicitar libro"}
            </Button>
          </div>

          {isRequestOpen ? (
            <div className="mt-6 rounded-[1.35rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
              <BookRequestForm bookTitle={book.title} />
            </div>
          ) : null}
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
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [openRequestBookId, setOpenRequestBookId] = useState<string | null>(null);

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

  const categoryCounts = useMemo(() => {
    return books.reduce<Record<string, number>>((acc, book) => {
      acc[book.category] = (acc[book.category] ?? 0) + 1;
      return acc;
    }, {});
  }, [books]);

  const filteredBooks = useMemo(() => {
    const normalizedQuery = normalize(query);

    const result = books.filter((book) => {
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

    return result.sort((a, b) => {
      if (sortMode === "title") {
        return a.title.localeCompare(b.title, "es");
      }

      if (sortMode === "category") {
        return a.category.localeCompare(b.category, "es") || a.title.localeCompare(b.title, "es");
      }

      if (sortMode === "availability") {
        return Number(b.status === "available") - Number(a.status === "available") || a.title.localeCompare(b.title, "es");
      }

      return (
        Number(b.isFeatured) - Number(a.isFeatured) ||
        a.sortOrder - b.sortOrder ||
        a.title.localeCompare(b.title, "es")
      );
    });
  }, [books, category, language, query, sortMode, status]);

  const groupedBooks = useMemo(() => {
    return filteredBooks.reduce<Record<string, PublicBook[]>>((groups, book) => {
      const key = book.category || "Sin categor\u00eda";
      groups[key] = groups[key] ?? [];
      groups[key].push(book);
      return groups;
    }, {});
  }, [filteredBooks]);

  const totalAvailable = books.filter((book) => book.status === "available").length;
  const totalFeatured = books.filter((book) => book.isFeatured).length;

  function clearFilters() {
    setQuery("");
    setCategory("Todas");
    setLanguage("Todos");
    setStatus("Todos");
    setSortMode("featured");
  }

  if (books.length === 0) {
    return (
      <Card className="mt-10 border-[#d7dedf] bg-white/75 shadow-sm">
        <CardContent className="p-7 text-[#425875]">
          Todav\u00eda no hay libros publicados en Supabase. Agrega libros desde el panel de Supabase o mediante SQL.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mt-10">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={Library} label="Libros en cat\u00e1logo" value={String(books.length)} />
        <StatCard icon={BookOpenCheck} label="Disponibles" value={String(totalAvailable)} />
        <StatCard icon={Layers3} label="Categor\u00edas" value={String(categories.length - 1)} />
        <StatCard icon={Sparkles} label="Destacados" value={String(totalFeatured)} />
      </div>

      <div className="mt-8 rounded-[1.75rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm">
        <div className="grid gap-4 xl:grid-cols-[1fr_220px_180px_180px_180px_auto]">
          <div className="flex items-center gap-3 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3">
            <Search className="size-5 text-[#60738c]" />
            <Input
              className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              onChange={(event) => setQuery(event.target.value)}
              placeholder={"Buscar por t\u00edtulo, autor, tema, editorial o etiqueta..."}
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

          <select
            className="rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3 text-sm text-[#425875] outline-none"
            onChange={(event) => setSortMode(event.target.value as SortMode)}
            value={sortMode}
          >
            <option value="featured">Destacados primero</option>
            <option value="title">T\u00edtulo A-Z</option>
            <option value="category">Categor\u00eda</option>
            <option value="availability">Disponibles primero</option>
          </select>

          <Button
            className="rounded-full border-[#d7dedf] bg-white/70 text-[#10233f] hover:bg-white"
            onClick={clearFilters}
            type="button"
            variant="outline"
          >
            <X className="mr-2 size-4" />
            Limpiar
          </Button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#60738c]">
          <SlidersHorizontal className="size-4" />
          <span>{filteredBooks.length} libros visibles</span>
          <span>&middot;</span>
          <span>{books.length} libros en cat&aacute;logo</span>
          <span>&middot;</span>
          <span>{totalAvailable} disponibles</span>
        </div>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
              category === item
                ? "border-[#10233f] bg-[#10233f] text-white"
                : "border-[#d7dedf] bg-white/70 text-[#425875] hover:bg-white"
            }`}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
          >
            {item}
            {item !== "Todas" ? (
              <span className="ml-2 opacity-70">{categoryCounts[item] ?? 0}</span>
            ) : null}
          </button>
        ))}
      </div>

      {filteredBooks.length === 0 ? (
        <Card className="mt-10 border-[#d7dedf] bg-white/75 shadow-sm">
          <CardContent className="p-7 text-[#425875]">
            No encontramos libros con esos filtros. Prueba otra b\u00fasqueda o limpia los filtros.
          </CardContent>
        </Card>
      ) : (
        <div className="mt-12 grid gap-14">
          {Object.entries(groupedBooks).map(([groupName, groupBooks]) => (
            <section key={groupName}>
              <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#60738c]">
                    Secci&oacute;n
                  </p>
                  <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] text-[#10233f]">
                    {groupName}
                  </h2>
                </div>
                <p className="text-sm text-[#60738c]">{groupBooks.length} libros</p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {groupBooks.map((book) => (
                  <BookCard
                    book={book}
                    isRequestOpen={openRequestBookId === book.id}
                    key={book.id}
                    onToggleRequest={() =>
                      setOpenRequestBookId((current) => (current === book.id ? null : book.id))
                    }
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}