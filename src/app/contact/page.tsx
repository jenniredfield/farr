import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Farrsited",
  description:
    "Get in touch with Farrsited about a new build, an EPC or a compliance deadline.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-secondary-900 sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 max-w-xl text-secondary-700">
          Tell us about the new build, EPC or compliance deadline you&apos;re
          dealing with, and we&apos;ll tell you exactly what it takes.
        </p>

        <div className="mt-10 max-w-xl">
          <ContactForm />
        </div>

        <dl className="mt-16 grid gap-6 border-t border-secondary-200 pt-10 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-secondary-600">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href="mailto:hello@farrsited.example"
                className="text-lg font-medium text-primary-800 hover:underline"
              >
                hello@farrsited.example
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-secondary-600">
              Phone
            </dt>
            <dd className="mt-1">
              <a
                href="tel:+440000000000"
                className="text-lg font-medium text-primary-800 hover:underline"
              >
                +44 (0)000 000 0000
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative hidden lg:block">
        <div className="sticky top-24 aspect-[4/5] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1787672357715-46d73872fe79"
            alt="Brick house under construction with a metal roof and covered porch"
            fill
            priority
            sizes="(min-width: 1152px) 536px, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
