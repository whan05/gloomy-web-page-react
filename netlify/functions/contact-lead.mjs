import axios from "axios";

const jsonHeaders = {
  "Content-Type": "application/json",
};

const createResponse = (statusCode, body) => ({
  statusCode,
  headers: jsonHeaders,
  body: JSON.stringify(body),
});

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const sendEmail = async ({ apiKey, payload }) => {
  await axios.post("https://api.resend.com/emails", payload, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      ...jsonHeaders,
    },
  });
};

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return createResponse(405, { error: "Method not allowed." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  const replyTo = process.env.CONTACT_REPLY_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return createResponse(500, {
      error: "Resend configuration is incomplete on the server.",
    });
  }

  try {
    const payload = JSON.parse(event.body ?? "{}");
    const name = payload.name?.trim();
    const email = payload.email?.trim().toLowerCase();
    const phone = payload.phone?.trim();
    const website = payload.website?.trim();
    const message = payload.message?.trim();

    if (!name || !email || !message) {
      return createResponse(400, {
        error: "Missing required contact form fields.",
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeWebsite = escapeHtml(website || "Not provided");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await sendEmail({
      apiKey,
      payload: {
        from,
        to: [to],
        reply_to: replyTo || email,
        subject: `New contact form submission from ${name}`,
        html: `
          <h1>New contact request</h1>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Website:</strong> ${safeWebsite}</p>
          <p><strong>Message:</strong><br />${safeMessage}</p>
        `,
      },
    });

    await sendEmail({
      apiKey,
      payload: {
        from,
        to: [email],
        reply_to: replyTo || to,
        subject: "We received your message",
        html: `
          <p>Hi ${safeName},</p>
          <p>We received your message and will get back to you soon.</p>
          <p><strong>Your message:</strong><br />${safeMessage}</p>
          <p>Gloomy Studios</p>
        `,
      },
    });

    return createResponse(200, { ok: true });
  } catch (error) {
    const resendError =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Unable to send email via Resend.";

    return createResponse(500, {
      error: resendError,
    });
  }
};
