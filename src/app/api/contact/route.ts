import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { isRateLimited } from "@/lib/contact-rate-limit";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recipient = "aarishcomp@gmail.com";

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const identifier = forwardedFor?.split(",")[0]?.trim() || "unknown-client";

  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  let payload: {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    website?: unknown;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  // The hidden field is intentionally empty for real visitors and catches basic bots.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (
    !name ||
    !email ||
    !message ||
    name.length > 120 ||
    email.length > 320 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Contact delivery is not configured on the server." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from: `Portfolio Contact <${from}>`,
    to: [recipient],
    replyTo: email,
    subject: `New Portfolio Contact — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #17202a; line-height: 1.6; max-width: 680px;">
        <p style="color: #53616d; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">Portfolio contact form</p>
        <h1 style="font-size: 24px; margin: 0 0 24px;">New message from ${escapeHtml(name)}</h1>
        <p><strong>Visitor email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <hr style="border: 0; border-top: 1px solid #d8e0e6; margin: 24px 0;" />
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        <p style="color: #53616d; font-size: 12px; margin-top: 32px;">This message was sent from Aarish Sharma&apos;s portfolio website.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend contact delivery failed", error);
    return NextResponse.json(
      { error: "Unable to send the message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}
