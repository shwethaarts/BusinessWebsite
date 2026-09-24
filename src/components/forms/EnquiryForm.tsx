import { useState, type FormEvent } from "react";

import { services } from "@/content/services";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/contact";

/**
 * Until the backend is enabled, the form hands the enquiry off to WhatsApp with
 * every detail pre-filled. Swapping in a database write later touches only this
 * component.
 */
export function EnquiryForm({ variant = "quote" }: { variant?: "quote" | "contact" }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Hi ${site.name}, I would like to enquire.`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("service") ? `Service: ${data.get("service")}` : "",
      data.get("location") ? `Location: ${data.get("location")}` : "",
      data.get("message") ? `Details: ${data.get("message")}` : "",
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  const field =
    "mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20";
  const label = "block text-sm font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="card-soft space-y-4 p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" required className={field} placeholder="Full name" />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            pattern="[0-9+ ]{8,15}"
            className={field}
            placeholder="10-digit mobile number"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="service">
            Service required
          </label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="location">
            Location
          </label>
          <input id="location" name="location" className={field} placeholder="Area in Bengaluru" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          {variant === "quote" ? "Requirement details" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Sizes, quantity, where it will be installed, any design idea..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
      >
        {variant === "quote" ? "Send my requirement" : "Send message"}
      </button>

      {sent ? (
        <p className="rounded-xl bg-accent p-3 text-sm text-accent-foreground">
          Thank you! Your details have been opened in WhatsApp — press send there and our team
          will reply shortly. You can also call {site.phoneDisplay}.
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">
          Your details are sent to us directly on WhatsApp. We usually reply the same day.
        </p>
      )}
    </form>
  );
}
