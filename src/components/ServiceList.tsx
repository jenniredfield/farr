import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";

export function ServiceList() {
  return (
    <section id="services" className="bg-secondary-100 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <RevealOnScroll>
          <h2 className="text-4xl font-semibold tracking-tight text-secondary-900 sm:text-5xl">
            Energy compliance, start to finish
          </h2>
          <p className="mt-6 max-w-md text-secondary-700">
            From new builds and conversions to SAP calculations and EPCs for
            existing property — compliance and energy consultancy work, scoped
            to what your organisation is actually required to do.
          </p>
          <Link
            href="/services"
            className="mt-10 inline-block border-2 border-secondary-900 bg-secondary-900 px-6 py-3 text-sm font-semibold text-white hover:bg-secondary-700"
          >
            View all services
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1657346088167-b982455bf29a"
              alt="Modern three-storey new-build house at dusk"
              fill
              sizes="(min-width: 1152px) 544px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
