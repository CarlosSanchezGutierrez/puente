type VocationalNotificationPayload = {
  participantType: string;
  fullName: string;
  email: string;
  phone: string | null;
  organization: string | null;
  city: string | null;
  roleOrCareer: string | null;
  interestAreas: string[];
  message: string | null;
  preferredContactMethod: string;
};

function getRecipients() {
  return (process.env.VOCATIONAL_NOTIFICATION_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatParticipantType(value: string) {
  if (value === "school") {
    return "Preparatoria";
  }

  if (value === "mentor") {
    return "Mentor vocacional";
  }

  if (value === "student") {
    return "Estudiante";
  }

  return value;
}

function formatList(values: string[]) {
  if (values.length === 0) {
    return "Sin areas seleccionadas";
  }

  return values.join(", ");
}

function buildText(payload: VocationalNotificationPayload) {
  return [
    "Nuevo registro en Puente Vocacional 2026",
    "",
    `Tipo: ${formatParticipantType(payload.participantType)}`,
    `Nombre: ${payload.fullName}`,
    `Correo: ${payload.email}`,
    `Telefono: ${payload.phone ?? "No proporcionado"}`,
    `Organizacion: ${payload.organization ?? "No proporcionada"}`,
    `Ciudad o zona: ${payload.city ?? "No proporcionada"}`,
    `Carrera o area: ${payload.roleOrCareer ?? "No proporcionada"}`,
    `Areas de interes: ${formatList(payload.interestAreas)}`,
    `Metodo de contacto preferido: ${payload.preferredContactMethod}`,
    "",
    "Mensaje:",
    payload.message ?? "Sin mensaje",
  ].join("\n");
}

function buildHtml(payload: VocationalNotificationPayload) {
  const rows = [
    ["Tipo", formatParticipantType(payload.participantType)],
    ["Nombre", payload.fullName],
    ["Correo", payload.email],
    ["Telefono", payload.phone ?? "No proporcionado"],
    ["Organizacion", payload.organization ?? "No proporcionada"],
    ["Ciudad o zona", payload.city ?? "No proporcionada"],
    ["Carrera o area", payload.roleOrCareer ?? "No proporcionada"],
    ["Areas de interes", formatList(payload.interestAreas)],
    ["Metodo de contacto preferido", payload.preferredContactMethod],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px;border-bottom:1px solid #d7dedf;color:#60738c;font-weight:600;">${escapeHtml(label)}</td>
          <td style="padding:12px;border-bottom:1px solid #d7dedf;color:#10233f;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;background:#f7f4ed;padding:24px;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #d7dedf;border-radius:24px;overflow:hidden;">
        <div style="background:#10233f;color:white;padding:24px;">
          <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#c9d8e8;">Puente Vocacional 2026</p>
          <h1 style="margin:0;font-size:28px;line-height:1.15;">Nuevo registro recibido</h1>
        </div>

        <div style="padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            ${tableRows}
          </table>

          <div style="margin-top:24px;padding:16px;border-radius:16px;background:#fbfaf7;border:1px solid #d7dedf;">
            <p style="margin:0 0 8px 0;color:#60738c;font-weight:700;">Mensaje</p>
            <p style="margin:0;color:#10233f;line-height:1.6;">${escapeHtml(payload.message ?? "Sin mensaje")}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function sendVocationalInterestNotification(
  payload: VocationalNotificationPayload,
) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.PUENTE_NOTIFICATIONS_FROM;
  const recipients = getRecipients();

  if (!apiKey || !from || recipients.length === 0) {
    console.warn("Vocational notification skipped: missing RESEND_API_KEY, PUENTE_NOTIFICATIONS_FROM or VOCATIONAL_NOTIFICATION_EMAILS.");
    return;
  }

  const subject = `Puente Vocacional 2026: ${formatParticipantType(payload.participantType)} - ${payload.fullName}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      subject,
      text: buildText(payload),
      html: buildHtml(payload),
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.error("Resend notification failed:", response.status, body);
  }
}