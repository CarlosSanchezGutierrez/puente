"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const allowedTables = [
  "volunteer_applications",
  "ngo_requests",
  "book_requests",
  "event_registrations",
  "contact_messages",
] as const;

const allowedStatuses = [
  "pending",
  "reviewing",
  "approved",
  "rejected",
  "completed",
  "cancelled",
] as const;

type AllowedTable = (typeof allowedTables)[number];
type AllowedStatus = (typeof allowedStatuses)[number];

function isAllowedTable(value: string): value is AllowedTable {
  return allowedTables.includes(value as AllowedTable);
}

function isAllowedStatus(value: string): value is AllowedStatus {
  return allowedStatuses.includes(value as AllowedStatus);
}

export async function updateAdminRequestStatus(formData: FormData) {
  await requireAdmin();

  const table = String(formData.get("table") ?? "");
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  const adminNotes = String(formData.get("admin_notes") ?? "").trim();

  if (!isAllowedTable(table)) {
    throw new Error("Invalid table.");
  }

  if (!isAllowedStatus(status)) {
    throw new Error("Invalid status.");
  }

  if (!id) {
    throw new Error("Missing record id.");
  }

  const supabase = createSupabaseAdminClient();

  const payload: Record<string, string> = {
    status,
  };

  if (
    table === "volunteer_applications" ||
    table === "ngo_requests" ||
    table === "contact_messages"
  ) {
    payload.admin_notes = adminNotes;
  }

  const { error } = await supabase.from(table).update(payload).eq("id", id);

  if (error) {
    console.error("updateAdminRequestStatus error:", error);
    throw new Error("Could not update request.");
  }

  revalidatePath("/admin/dashboard");
}