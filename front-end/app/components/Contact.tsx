"use client";

import { FormEvent, useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status) {
      setStatus(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      setStatus({ type: "success", message: data.message });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Une erreur est survenue.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-20 py-20 bg-[#FDFBF7]">
      <div className="rounded-[32px] border border-[#E7D9C4] bg-white p-8 shadow-[0_20px_60px_rgba(93,58,26,0.08)] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A77A4B]">
                Contact
              </p>
              <h2 className="text-4xl font-semibold text-[#2F241C]">
                Discutons de votre projet
              </h2>
              <p className="text-base leading-7 text-[#6B5E54]">
                Pour un diagnostic rapide, un devis ou une visite sur site,
                laissez-nous vos coordonnées. Nous vous recontactons sous 24h.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-[#F1E4D2] bg-[#FDF8F1] p-4">
                <div className="rounded-xl bg-[#F4EFE6] p-2 text-[#5D3A1A]">
                  <FiPhone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2F241C]">Téléphone</p>
                  <p className="text-[#6B5E54]">06 50 39 55 12</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#F1E4D2] bg-[#FDF8F1] p-4">
                <div className="rounded-xl bg-[#F4EFE6] p-2 text-[#5D3A1A]">
                  <FiMail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2F241C]">Email</p>
                  <p className="text-[#6B5E54]">megadacharpente@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#F1E4D2] bg-[#FDF8F1] p-4">
                <div className="rounded-xl bg-[#F4EFE6] p-2 text-[#5D3A1A]">
                  <FiMapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2F241C]">Intervention</p>
                  <p className="text-[#6B5E54]">Île-de-France entière</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#F1E4D2] bg-[#FDF8F1] p-4">
                <div className="rounded-xl bg-[#F4EFE6] p-2 text-[#5D3A1A]">
                  <FiClock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2F241C]">Disponibilité</p>
                  <p className="text-[#6B5E54]">
                    Lundi à vendredi · 8h30 - 18h30
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-[#EDE2D2] bg-[#FDFBF7] p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#2F241C]">
                Nom complet
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="rounded-xl border border-[#E5D7C2] bg-white px-4 py-3 text-sm text-[#2F241C] outline-none transition focus:border-[#D2B48C] focus:ring-2 focus:ring-[#D2B48C]/20"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-[#2F241C]">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  className="rounded-xl border border-[#E5D7C2] bg-white px-4 py-3 text-sm text-[#2F241C] outline-none transition focus:border-[#D2B48C] focus:ring-2 focus:ring-[#D2B48C]/20"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-medium text-[#2F241C]">
              Téléphone
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="06 12 34 56 78"
                className="rounded-xl border border-[#E5D7C2] bg-white px-4 py-3 text-sm text-[#2F241C] outline-none transition focus:border-[#D2B48C] focus:ring-2 focus:ring-[#D2B48C]/20"
              />
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-[#2F241C]">
              Votre projet
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre besoin, la surface, l’emplacement ou l’urgence..."
                required
                rows={5}
                className="rounded-xl border border-[#E5D7C2] bg-white px-4 py-3 text-sm text-[#2F241C] outline-none transition focus:border-[#D2B48C] focus:ring-2 focus:ring-[#D2B48C]/20"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#5D3A1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#4a2d14] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  status.type === "success"
                    ? "text-[#2f6b3f]"
                    : "text-[#9b2c2c]"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
