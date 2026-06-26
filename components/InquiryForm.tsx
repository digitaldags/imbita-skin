"use client";

import { useState } from "react";

const inputClass =
  "font-sans text-sm bg-background border border-divider rounded-md px-3 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-maroon";
const labelClass = "font-sans text-xs text-text-muted mb-1 block";

export default function InquiryForm() {
  const [form, setForm] = useState({
    partner1: "",
    partner2: "",
    date: "",
    email: "",
    tier: "Regular",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { partner1, partner2, date, email } = form;
    if (!partner1 || !partner2 || !date || !email) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <hr />
      <section id="inquire" className="py-[72px]">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="font-sans text-xs text-maroon uppercase tracking-[0.08em]">
            Get started
          </p>
          <h2 className="font-serif text-[32px] font-normal text-maroon leading-[1.2] mt-2 mb-2">
            Tell us about your wedding.
          </h2>
          <p className="font-sans text-sm text-text-muted mb-8">
            Fill this out and we&apos;ll get back to you within 24 hours.
          </p>

          {success ? (
            <p className="font-serif text-[22px] font-normal text-text-muted leading-[1.4]">
              Thanks! We&apos;ll be in touch within 24 hours.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Partner 1 name</label>
                  <input
                    type="text"
                    className={inputClass}
                    value={form.partner1}
                    onChange={(e) => set("partner1", e.target.value)}
                    placeholder="Sofia"
                  />
                </div>
                <div>
                  <label className={labelClass}>Partner 2 name</label>
                  <input
                    type="text"
                    className={inputClass}
                    value={form.partner2}
                    onChange={(e) => set("partner2", e.target.value)}
                    placeholder="Marco"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Wedding date</label>
                  <input
                    type="date"
                    className={inputClass}
                    value={form.date}
                    onChange={(e) => set("date", e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>Your email</label>
                  <input
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Tier</label>
                <div className="flex gap-6 mt-1">
                  {["Regular", "Premium"].map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2 cursor-pointer font-sans text-sm text-text-primary"
                    >
                      <input
                        type="radio"
                        name="tier"
                        value={t}
                        checked={form.tier === t}
                        onChange={() => set("tier", t)}
                        className="accent-maroon"
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Anything else?{" "}
                  <span className="text-text-muted/60">(optional)</span>
                </label>
                <textarea
                  className={`${inputClass} min-h-[90px] resize-y`}
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Venue name, guest count, vibe — anything helpful."
                />
              </div>

              {error && (
                <p className="font-sans text-xs text-maroon">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-maroon text-white font-sans text-sm font-medium py-2.5 rounded-xl hover:bg-maroon-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
