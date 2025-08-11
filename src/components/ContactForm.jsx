"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzpbrwb"; // your endpoint

export default function ContactForm() {
  const [state, setState] = useState({ loading: false, ok: false, error: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot

    setState({ loading: true, ok: false, error: "" });
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok)
        throw new Error(json?.errors?.[0]?.message || "Failed to send");
      setState({ loading: false, ok: true, error: "" });
      form.reset();
    } catch (err) {
      setState({
        loading: false,
        ok: false,
        error: err.message || "Failed to send",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="_subject" value="Portfolio contact" />

      <label className="grid gap-2">
        <span className="text-sm text-red-200">Your name</span>
        <input
          name="name"
          required
          className="rounded-lg border border-red-500/40 bg-black/40 p-3 text-white placeholder-gray-400"
          placeholder="Ada Lovelace"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm text-red-200">Email</span>
        <input
          name="email"
          type="email"
          required
          className="rounded-lg border border-red-500/40 bg-black/40 p-3 text-white placeholder-gray-400"
          placeholder="you@example.com"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm text-red-200">Message</span>
        <textarea
          name="message"
          rows={6}
          required
          className="rounded-lg border border-red-500/40 bg-black/40 p-3 text-white placeholder-gray-400"
          placeholder="Feel free to ask me anything!"
        />
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        disabled={state.loading}
        className="rounded-lg bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-600 disabled:opacity-60"
      >
        {state.loading ? "Sending…" : "Send"}
      </button>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {state.ok && (
          <p className="text-green-400 text-sm">
            Thanks! Your message was sent.
          </p>
        )}
        {state.error && (
          <p className="text-red-400 text-sm">Error: {state.error}</p>
        )}
      </div>
    </form>
  );
}
