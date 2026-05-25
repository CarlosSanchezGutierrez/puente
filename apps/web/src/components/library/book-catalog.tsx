"use client";

import {
  ArrowRight,
  BookOpenCheck,
  Layers3,
  Library,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { BookRequestForm } from "@/components/forms/book-request-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { PublicBook } from "@/lib/queries/public-content";

type SortMode = "featured" | "title" | "category" | "availability";
type CoverVariant = "card" | "detail" | "mini";

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
    return "border-emerald-200 bg-emerald-50 text-emerald-800";
  }

  if (status === "borrowed" || status === "reserved") {
    return "border-amber-200 bg-amber-50 text-amber-800";
  }

  return "border-slate-200 bg-slate-100 text-slate-700";
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-[#d7dedf] bg-white/75 p-4 shadow-sm md:rounded-[1.4rem] md:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs leading-5 text-[#60738c] md:text-sm md:leading-6">{label}</p>
        <Icon className="size-4 shrink-0 text-[#10233f] md:size-5" />
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-[#10233f] md:mt-3 md:text-3xl">
        {value}
      </p>
    </div>
  );
}

function BookCover({
  book,
  variant = "card",
}: {
  book: PublicBook;
  variant?: CoverVariant;
}) {
  const [hasImageError, setHasImageError] = useState(false);

  const sizeClass =
    variant === "mini"
      ? "h-28 w-20 shrink-0"
      : variant === "detail"
        ? "aspect-[2/3] w-full max-w-sm md:max-w-none"
        : "aspect-[2/3] w-full";

  const radiusClass = variant === "mini" ? "rounded-2xl" : "rounded-[1.35rem]";

  if (book.coverUrl && !hasImageError) {
    return (
      <div className={`${sizeClass} ${radiusClass} overflow-hidden border border-[#d7dedf] bg-white shadow-sm`}>
        <img
          alt={`Portada de ${book.title}`}
          className="h-full w-full object-cover"
          decoding="async"
          loading="lazy"
          onError={() => setHasImageError(true)}
          src={book.coverUrl}
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} ${radiusClass} flex items-center justify-center border border-[#d7dedf] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_38%),#10233f] p-5 text-center text-white shadow-sm`}>
      <div>
        <p className="font-[var(--font-serif)] text-4xl font-semibold md:text-6xl">
          {book.title.slice(0, 1).toUpperCase()}
        </p>
        {variant !== "mini" ? (
          <p className="mx-auto mt-4 max-w-[13rem] text-xs leading-5 text-[#c9d8e8] md:text-sm md:leading-6">
            {book.title}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#60738c]">
        {label}
      </span>
      <select
        className="min-h-12 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3 text-sm text-[#425875] outline-none"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {children}
      </select>
    </label>
  );
}

function FeaturedShelf({
  books,
  onSelect,
}: {
  books: PublicBook[];
  onSelect: (book: PublicBook) => void;
}) {
  if (books.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 rounded-[1.75rem] border border-[#d7dedf] bg-[#10233f] p-5 text-white shadow-sm md:p-6">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7c8dc]">
            Selecci&oacute;n inicial
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
            Libros destacados
          </h2>
        </div>
        <p className="text-sm leading-6 text-[#c9d8e8]">
          Punto de partida recomendado para explorar la biblioteca.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <button
            className="grid grid-cols-[80px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-3 text-left transition hover:bg-white/15"
            key={book.id}
            onClick={() => onSelect(book)}
            type="button"
          >
            <BookCover book={book} variant="mini" />
            <div className="min-w-0">
              <p className="line-clamp-2 font-semibold leading-6">{book.title}</p>
              <p className="mt-1 line-clamp-1 text-sm text-[#c9d8e8]">
                {book.author ?? "Autor por definir"}
              </p>
              <p className="mt-3 text-xs text-[#b7c8dc]">Ver detalles</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function BookCard({
  book,
  onSelect,
}: {
  book: PublicBook;
  onSelect: () => void;
}) {
  return (
    <Card className="overflow-hidden border-[#d7dedf] bg-white/78 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <CardContent className="grid gap-5 p-4 sm:p-5">
        <BookCover book={book} />

        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusTone(book.status)}`}>
              {getStatusLabel(book.status)}
            </span>

            {book.isFeatured ? (
              <span className="rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-1 text-xs font-medium text-[#10233f]">
                Destacado
              </span>
            ) : null}
          </div>

          <h3 className="line-clamp-2 text-xl font-semibold tracking-[-0.035em] text-[#10233f] sm:text-2xl">
            {book.title}
          </h3>

          <p className="mt-1 line-clamp-1 text-sm text-[#60738c]">
            {book.author ?? "Autor por definir"}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge className="max-w-full whitespace-normal text-left" variant="outline">
              {book.category}
            </Badge>
            {book.language ? <Badge variant="outline">{book.language}</Badge> : null}
          </div>

          {book.description ? (
            <p className="mt-5 line-clamp-3 text-sm leading-7 text-[#425875] sm:text-base">
              {book.description}
            </p>
          ) : (
            <p className="mt-5 text-sm leading-7 text-[#60738c] sm:text-base">
              Descripci&oacute;n pendiente.
            </p>
          )}

          <Button
            className="mt-6 w-full rounded-full bg-[#10233f] text-white hover:bg-[#1b365f] sm:w-auto"
            onClick={onSelect}
            type="button"
          >
            Ver detalles
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function BookDetailPanel({
  book,
  onClose,
}: {
  book: PublicBook;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#10233f]/40 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        aria-modal="true"
        className="mx-auto max-w-5xl rounded-[1.5rem] border border-[#d7dedf] bg-[#f7f4ed] p-4 shadow-2xl sm:rounded-[2rem] md:p-6"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#60738c] sm:text-sm">
            Detalle del libro
          </p>

          <button
            className="rounded-full border border-[#d7dedf] bg-white/80 p-2 text-[#10233f]"
            onClick={onClose}
            type="button"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-[320px_1fr] md:gap-8">
          <BookCover book={book} variant="detail" />

          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusTone(book.status)}`}>
                {getStatusLabel(book.status)}
              </span>
              <Badge variant="outline">{getConditionLabel(book.condition)}</Badge>
              {book.isFeatured ? <Badge variant="outline">Destacado</Badge> : null}
            </div>

            <h2 className="font-[var(--font-serif)] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] sm:text-5xl">
              {book.title}
            </h2>

            <p className="mt-4 text-base text-[#60738c] sm:text-lg">
              {book.author ?? "Autor por definir"}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="max-w-full whitespace-normal text-left" variant="outline">
                {book.category}
              </Badge>
              {book.language ? <Badge variant="outline">{book.language}</Badge> : null}
              {book.publisher ? <Badge variant="outline">{book.publisher}</Badge> : null}
              {book.publicationYear ? (
                <Badge variant="outline">A&ntilde;o {book.publicationYear}</Badge>
              ) : null}
            </div>

            <p className="mt-7 text-base leading-8 text-[#425875] sm:mt-8 sm:text-lg">
              {book.description ?? "Descripci\u00f3n pendiente."}
            </p>

            {book.audience ? (
              <div className="mt-6 rounded-[1.25rem] border border-[#d7dedf] bg-white/70 p-4 sm:rounded-[1.35rem] sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c] sm:text-sm">
                  Perfil recomendado
                </p>
                <p className="mt-2 leading-7 text-[#425875]">{book.audience}</p>
              </div>
            ) : null}

            {book.tags.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
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

            <div className="mt-8 rounded-[1.35rem] border border-[#d7dedf] bg-white/75 p-4 sm:rounded-[1.5rem] sm:p-5">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                Solicitar este libro
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#60738c]">
                La solicitud no garantiza disponibilidad inmediata. Puente revisar&aacute; el estado del libro y dar&aacute; seguimiento.
              </p>

              <BookRequestForm bookTitle={book.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BookCatalog({ books }: { books: PublicBook[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [language, setLanguage] = useState("Todos");
  const [status, setStatus] = useState("Todos");
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [selectedBook, setSelectedBook] = useState<PublicBook | null>(null);

  useEffect(() => {
    if (!selectedBook) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedBook(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBook]);

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
  const featuredBooks = books.filter((book) => book.isFeatured).slice(0, 6);
  const activeFilters = [
    query.trim() ? "search" : null,
    category !== "Todas" ? "category" : null,
    language !== "Todos" ? "language" : null,
    status !== "Todos" ? "status" : null,
    sortMode !== "featured" ? "sort" : null,
  ].filter(Boolean).length;

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
          Todav&iacute;a no hay libros publicados en Supabase. Agrega libros desde el panel de Supabase o mediante SQL.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mt-10">
      {selectedBook ? (
        <BookDetailPanel book={selectedBook} onClose={() => setSelectedBook(null)} />
      ) : null}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <StatCard icon={Library} label={"Libros en cat\u00e1logo"} value={String(books.length)} />
        <StatCard icon={BookOpenCheck} label="Disponibles" value={String(totalAvailable)} />
        <StatCard icon={Layers3} label={"Categor\u00edas"} value={String(categories.length - 1)} />
        <StatCard icon={Sparkles} label="Destacados" value={String(totalFeatured)} />
      </div>

      <FeaturedShelf books={featuredBooks} onSelect={setSelectedBook} />

      <div className="mt-8 rounded-[1.5rem] border border-[#d7dedf] bg-white/85 p-4 shadow-sm backdrop-blur-xl sm:rounded-[1.75rem] sm:p-5">
        <div className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#60738c]">
              B&uacute;squeda
            </span>
            <div className="flex min-h-12 items-center gap-3 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3">
              <Search className="size-5 shrink-0 text-[#60738c]" />
              <Input
                className="border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
                onChange={(event) => setQuery(event.target.value)}
                placeholder={"Buscar por t\u00edtulo, autor, tema o etiqueta..."}
                value={query}
              />
            </div>
          </label>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <SelectField label={"Categor\u00eda"} onChange={setCategory} value={category}>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>

            <SelectField label="Idioma" onChange={setLanguage} value={language}>
              {languages.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>

            <SelectField label="Estado" onChange={setStatus} value={status}>
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item === "Todos" ? item : getStatusLabel(item)}
                </option>
              ))}
            </SelectField>

            <SelectField label="Orden" onChange={(value) => setSortMode(value as SortMode)} value={sortMode}>
              <option value="featured">Destacados primero</option>
              <option value="title">{"T\u00edtulo A-Z"}</option>
              <option value="category">{"Categor\u00eda"}</option>
              <option value="availability">Disponibles primero</option>
            </SelectField>

            <div className="flex items-end">
              <Button
                className="min-h-12 w-full rounded-full border-[#d7dedf] bg-white/70 text-[#10233f] hover:bg-white"
                onClick={clearFilters}
                type="button"
                variant="outline"
              >
                <X className="mr-2 size-4" />
                Limpiar
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#60738c]">
          <SlidersHorizontal className="size-4" />
          <span>{filteredBooks.length} libros visibles</span>
          <span>&middot;</span>
          <span>{books.length} libros en cat&aacute;logo</span>
          <span>&middot;</span>
          <span>{totalAvailable} disponibles</span>
          {activeFilters > 0 ? (
            <>
              <span>&middot;</span>
              <span>{activeFilters} filtros activos</span>
            </>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-3">
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
            No encontramos libros con esos filtros. Prueba otra b&uacute;squeda o limpia los filtros.
          </CardContent>
        </Card>
      ) : (
        <div className="mt-10 grid gap-12 md:mt-12 md:gap-14">
          {Object.entries(groupedBooks).map(([groupName, groupBooks]) => (
            <section key={groupName}>
              <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#60738c] sm:text-sm">
                    Secci&oacute;n
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#10233f] sm:text-4xl">
                    {groupName}
                  </h2>
                </div>
                <p className="text-sm text-[#60738c]">{groupBooks.length} libros</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {groupBooks.map((book) => (
                  <BookCard
                    book={book}
                    key={book.id}
                    onSelect={() => setSelectedBook(book)}
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