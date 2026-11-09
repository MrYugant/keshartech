import "server-only";
import type { ContactData } from "@/lib/validations";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL && process.env.CONTACT_TO_EMAIL);
}

/** Sends the enquiry notification through Resend's REST API (no SDK needed). */
export async function sendEnquiryEmail(data: ContactData): Promise<boolean> {
  if (!isEmailConfigured()) return false;

  const rows: [string, string | undefined][] = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", data.service],
    ["Budget", data.budget],
  ];
  const table = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td>${escapeHtml(v!)}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: data.email,
      subject: `New enquiry: ${data.service} — ${data.name}`,
      html: `<h2>New website enquiry</h2><table>${table}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  return res.ok;
}
