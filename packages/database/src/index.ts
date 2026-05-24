import { createClient } from "@supabase/supabase-js";

export function createSupabaseBrowserClient(url: string, anonKey: string) {
  return createClient(url, anonKey);
}
