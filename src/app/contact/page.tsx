import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Farrsited",
  description:
    "Get in touch with Farrsited about a new build, an EPC or a compliance deadline.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-secondary-900 sm:text-4xl">
        Get in touch
      </h1>
      <p className="mt-4 max-w-xl text-secondary-600">
        Tell us about the new build, EPC or compliance deadline you&apos;re
        dealing with, and we&apos;ll tell you exactly what it takes.
      </p>

      <div className="mt-10 max-w-xl">
        <ContactForm />
      </div>

      <dl className="mt-16 grid gap-6 border-t border-secondary-200 pt-10 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wider text-secondary-500">
            Email
          </dt>
          <dd className="mt-1">
            <a
              href="mailto:hello@farrsited.example"
              className="text-lg font-medium text-primary-600 hover:underline"
            >
              hello@farrsited.example
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wider text-secondary-500">
            Phone
          </dt>
          <dd className="mt-1">
            <a
              href="tel:+440000000000"
              className="text-lg font-medium text-primary-600 hover:underline"
            >
              +44 (0)000 000 0000
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
