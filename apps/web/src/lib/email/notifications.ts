import { Resend } from "resend";

type AdminNotificationInput = {
  type: string;
  title: string;
  summary: string;
  recordId?: string;
  sourcePath?: string;
};

function parseList(value: string | undefined) {
  if (!value) {
    return [];
  }

  return value
    .split(/[,\n;]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmails = parseList(process.env.ADMIN_EMAILS ?? process.env.ADMIN_EMAIL);
  const fromEmail = process.env.NOTIFICATION_FROM_EMAIL ?? "Puente <onboarding@resend.dev>";

  if (!apiKey || adminEmails.length === 0) {
    return null;
  }

  return {
    apiKey,
    adminEmails,
    fromEmail,
  };
}

function getSmsConfig() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromPhoneNumber = process.env.TWILIO_FROM_PHONE_NUMBER;
  const adminPhoneNumbers = parseList(process.env.ADMIN_PHONE_NUMBERS);

  if (!accountSid || !authToken || !fromPhoneNumber || adminPhoneNumbers.length === 0) {
    return null;
  }

  return {
    accountSid,
    authToken,
    fromPhoneNumber,
    adminPhoneNumbers,
  };
}

function buildNotificationText(input: AdminNotificationInput) {
  const lines = [
    `Tipo: ${input.type}`,
    `Título: ${input.title}`,
    `Resumen: ${input.summary}`,
    input.recordId ? `ID: ${input.recordId}` : null,
    input.sourcePath ? `Origen: ${input.sourcePath}` : null,
    "",
    "Revisa el panel de administración de Puente para dar seguimiento.",
  ].filter(Boolean);

  return lines.join("\n");
}

async function sendEmailNotifications(input: AdminNotificationInput) {
  const config = getEmailConfig();

  if (!config) {
    console.log("Admin email notification skipped: missing RESEND_API_KEY or ADMIN_EMAILS.");
    return;
  }

  const resend = new Resend(config.apiKey);
  const text = buildNotificationText(input);

  const results = await Promise.allSettled(
    config.adminEmails.map((email) =>
      resend.emails.send({
        from: config.fromEmail,
        to: email,
        subject: `[Puente] Nueva solicitud: ${input.title}`,
        text,
      }),
    ),
  );

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(`sendEmailNotifications error for ${config.adminEmails[index]}:`, result.reason);
      return;
    }

    if (result.value.error) {
      console.error(`sendEmailNotifications error for ${config.adminEmails[index]}:`, result.value.error);
    }
  });
}

async function sendSmsNotifications(input: AdminNotificationInput) {
  const config = getSmsConfig();

  if (!config) {
    console.log("Admin SMS notification skipped: missing Twilio configuration.");
    return;
  }

  const message = [
    "Puente: nueva solicitud",
    `${input.type}`,
    `${input.title}`,
    input.sourcePath ? `Origen: ${input.sourcePath}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const auth = Buffer.from(`${config.accountSid}:${config.authToken}`).toString("base64");

  const results = await Promise.allSettled(
    config.adminPhoneNumbers.map(async (phoneNumber) => {
      const body = new URLSearchParams({
        From: config.fromPhoneNumber,
        To: phoneNumber,
        Body: message,
      });

      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${config.accountSid}/Messages.json`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        },
      );

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Twilio SMS failed for ${phoneNumber}: ${response.status} ${errorBody}`);
      }
    }),
  );

  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error("sendSmsNotifications error:", result.reason);
    }
  });
}

export async function sendAdminNotification(input: AdminNotificationInput) {
  await Promise.allSettled([
    sendEmailNotifications(input),
    sendSmsNotifications(input),
  ]);
}