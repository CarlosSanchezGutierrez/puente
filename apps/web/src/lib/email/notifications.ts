import { Resend } from "resend";

type AdminNotificationInput = {
  type: string;
  title: string;
  summary: string;
  recordId?: string;
  sourcePath?: string;
};

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  const fromEmail = process.env.NOTIFICATION_FROM_EMAIL ?? "Puente <onboarding@resend.dev>";

  if (!apiKey || !adminEmail) {
    return null;
  }

  return {
    apiKey,
    adminEmail,
    fromEmail,
  };
}

export async function sendAdminNotification(input: AdminNotificationInput) {
  const config = getEmailConfig();

  if (!config) {
    console.log("Admin notification skipped: missing RESEND_API_KEY or ADMIN_EMAIL.");
    return;
  }

  const resend = new Resend(config.apiKey);

  const lines = [
    `Tipo: ${input.type}`,
    `Título: ${input.title}`,
    `Resumen: ${input.summary}`,
    input.recordId ? `ID: ${input.recordId}` : null,
    input.sourcePath ? `Origen: ${input.sourcePath}` : null,
    "",
    "Revisa el panel de administración de Puente para dar seguimiento.",
  ].filter(Boolean);

  const { error } = await resend.emails.send({
    from: config.fromEmail,
    to: config.adminEmail,
    subject: `[Puente] Nueva solicitud: ${input.title}`,
    text: lines.join("\n"),
  });

  if (error) {
    console.error("sendAdminNotification error:", error);
  }
}