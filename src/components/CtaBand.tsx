import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";

export function CtaBand() {
  return (
    <section className="bg-secondary-900">
      <RevealOnScroll className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Got a compliance deadline coming up?
        </h2>
        <p className="mt-3 text-secondary-300">
          Tell us what you&apos;re dealing with and we&apos;ll tell you
          exactly what it takes.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block border-2 border-secondary-900 bg-white px-6 py-3 text-sm font-semibold text-secondary-900 hover:bg-secondary-100"
        >
          Get in touch
        </Link>
      </RevealOnScroll>
    </section>
  );
}
