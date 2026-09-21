"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-secondary-200 bg-secondary-50 p-6 text-secondary-700">
        Thanks — your message has been sent. We&apos;ll get back to you
        shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-bold text-secondary-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          className="mt-1 w-full border border-secondary-400 px-3 py-2 text-secondary-900 focus:border-secondary-900 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-bold text-secondary-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="mt-1 w-full border border-secondary-400 px-3 py-2 text-secondary-900 focus:border-secondary-900 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="text-sm font-bold text-secondary-900"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          className="mt-1 w-full border border-secondary-400 px-3 py-2 text-secondary-900 focus:border-secondary-900 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-bold text-secondary-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          className="mt-1 w-full border border-secondary-400 px-3 py-2 text-secondary-900 focus:border-secondary-900 focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="border-2 border-secondary-900 bg-secondary-900 px-6 py-3 text-sm font-semibold text-white hover:bg-secondary-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
