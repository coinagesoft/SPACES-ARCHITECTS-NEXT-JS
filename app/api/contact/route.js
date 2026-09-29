import nodemailer from "nodemailer";

// Nodemailer needs the Node.js runtime (not the Edge runtime).
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{10}$/;

// trim + cap length so nobody can post a huge payload
const clean = (value, max = 2000) => String(value ?? "").trim().slice(0, max);
// for use inside email headers (subject / reply-to name): no line breaks or quotes
const headerSafe = (value) => value.replace(/[\r\n"<>]+/g, " ").trim();
const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field, bots usually do.
  // Pretend it worked so bots don't retry, but send nothing.
  if (clean(body.website)) {
    return Response.json({ ok: true });
  }

  const data = {
    firstName: clean(body.firstName, 100),
    lastName: clean(body.lastName, 100),
    email: clean(body.email, 200),
    phone: clean(body.phone, 30),
    company: clean(body.company, 200),
    designation: clean(body.designation, 200),
    message: clean(body.message, 3000),
    purpose: clean(body.purpose, 200),
  };

  // Same rules as the form on the page (never trust the browser alone).
  if (!data.firstName) return bad("First name is required.");
  if (!data.lastName) return bad("Last name is required.");
  if (!EMAIL_RE.test(data.email)) return bad("Enter a valid email address.");
  if (data.phone && !PHONE_RE.test(data.phone)) return bad("Enter a valid 10-digit phone number.");
  if (!data.purpose) return bad("Please select a purpose of enquiry.");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP_HOST / SMTP_USER / SMTP_PASS are not set in the environment.");
    return Response.json(
      { ok: false, error: "Email is not configured on the server yet." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT) || 587;
  const to = process.env.CONTACT_TO || "prasad.a1405@gmail.com";
  const from = process.env.CONTACT_FROM || SMTP_USER;
  const fullName = headerSafe(`${data.firstName} ${data.lastName}`);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows = [
    ["Name", fullName],
    ["Email", data.email],
    ["Phone", data.phone ? `+91 ${data.phone}` : "-"],
    ["Company", data.company || "-"],
    ["Designation", data.designation || "-"],
    ["Purpose of enquiry", data.purpose],
    ["Message", data.message || "-"],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `
    <h2 style="font-family:Arial,sans-serif">New website enquiry</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#666;vertical-align:top"><b>${escapeHtml(label)}</b></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>`;

  try {
    await transporter.sendMail({
      from: `"Spaces Architects " <${from}>`,
      to,
      replyTo: `"${fullName}" <${data.email}>`, // hitting Reply answers the enquirer
      subject: headerSafe(`New website enquiry: ${data.purpose} - ${fullName}`),
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    const detail =
      process.env.NODE_ENV !== "production" && error?.message
        ? ` (${error.message})`
        : "";
    return Response.json(
      { ok: false, error: `We could not send your message. Please try again later.${detail}` },
      { status: 500 }
    );
  }
}

function bad(message) {
  return Response.json({ ok: false, error: message }, { status: 400 });
}