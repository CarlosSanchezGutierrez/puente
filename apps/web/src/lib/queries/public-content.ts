import { createClient as createSupabaseServerClient } from "@/lib/supabase/server";

export type PublicBook = {
  id: string;
  title: string;
  author: string | null;
  category: string;
  language: string | null;
  description: string | null;
  status: string;
  coverUrl: string | null;
  isbn: string | null;
  publisher: string | null;
  publicationYear: number | null;
  condition: string | null;
  audience: string | null;
  tags: string[];
  isFeatured: boolean;
  sortOrder: number;
};

export type PublicEvent = {
  id: string;
  title: string;
  description: string | null;
  eventType: string;
  startsAt: string | null;
  endsAt: string | null;
  location: string | null;
  isOnline: boolean;
  capacity: number | null;
};

export type PublicResource = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string;
  contentUrl: string | null;
  externalUrl: string | null;
};

function hasSupabaseEnv() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export async function listPublicBooks(): Promise<PublicBook[]> {
  if (!hasSupabaseEnv()) {
    console.error("listPublicBooks skipped: missing public Supabase env.");
    return [];
  }

  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("books")
    .select(
      "id,title,author,category,language,description,status,cover_url,isbn,publisher,publication_year,condition,audience,tags,is_featured,sort_order",
    )
    .order("is_featured", { ascending: false })
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true })
    .limit(500);

  if (error) {
    console.error("listPublicBooks error:", error);
    return [];
  }

  return data.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
    language: book.language,
    description: book.description,
    status: book.status,
    coverUrl: book.cover_url,
    isbn: book.isbn,
    publisher: book.publisher,
    publicationYear: book.publication_year,
    condition: book.condition,
    audience: book.audience,
    tags: book.tags ?? [],
    isFeatured: book.is_featured ?? false,
    sortOrder: book.sort_order ?? 0,
  }));
}

export async function listPublishedEvents(): Promise<PublicEvent[]> {
  if (!hasSupabaseEnv()) {
    console.error("listPublishedEvents skipped: missing public Supabase env.");
    return [];
  }

  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("events")
    .select("id,title,description,event_type,starts_at,ends_at,location,is_online,capacity")
    .eq("is_published", true)
    .order("starts_at", { ascending: true });

  if (error) {
    console.error("listPublishedEvents error:", error);
    return [];
  }

  return data.map((event) => ({
    id: event.id,
    title: event.title,
    description: event.description,
    eventType: event.event_type,
    startsAt: event.starts_at,
    endsAt: event.ends_at,
    location: event.location,
    isOnline: event.is_online,
    capacity: event.capacity,
  }));
}

export async function listPublishedResources(): Promise<PublicResource[]> {
  if (!hasSupabaseEnv()) {
    console.error("listPublishedResources skipped: missing public Supabase env.");
    return [];
  }

  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("resources")
    .select("id,title,slug,description,category,content_url,external_url")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("listPublishedResources error:", error);
    return [];
  }

  return data.map((resource) => ({
    id: resource.id,
    title: resource.title,
    slug: resource.slug,
    description: resource.description,
    category: resource.category,
    contentUrl: resource.content_url,
    externalUrl: resource.external_url,
  }));
}

export function formatEventDate(value: string | null) {
  if (!value) {
    return "Pr\u00f3ximamente";
  }

  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}