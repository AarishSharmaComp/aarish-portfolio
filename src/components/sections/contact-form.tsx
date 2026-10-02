"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setState("error");
      setFeedback("Please complete all three fields before sending.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setState("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website: String(data.get("website") ?? ""),
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Request failed");

      form.reset();
      setState("success");
      setFeedback("Message sent. Thanks for reaching out.");
    } catch (error) {
      setState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email me directly instead.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <span className="detail-label">Start a conversation</span>
        <span className="form-code" aria-hidden="true">
          / connect_01
        </span>
      </div>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
        />
      </div>
      <div className="form-field form-message-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Hi Aarish, I'd love to discuss..."
          required
        />
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button
        className="send-button"
        type="submit"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "SENDING..." : "SEND MESSAGE"}
        <span aria-hidden="true">↗</span>
      </button>
      <p
        className={`form-feedback form-feedback-${state}`}
        role={state === "idle" ? undefined : "status"}
        aria-live="polite"
      >
        {feedback}
      </p>
    </form>
  );
}
