import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content/services";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services | Farrsited",
  description:
    "Developments and investments, SAP calculations, on-construction EPCs and EPCs for existing residential and commercial property.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-20">
        <div className="relative h-72 w-full overflow-hidden sm:h-[32rem]">
          <Image
            src="https://images.unsplash.com/photo-1773665230660-161c58f76c5f"
            alt="Row of period brick terraced houses on a UK residential street at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <RevealOnScroll className="mx-auto mt-12 grid max-w-6xl gap-8 px-6 sm:grid-cols-2 sm:gap-16">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-secondary-900 sm:text-4xl">
              Energy compliance for every stage of a property&apos;s life
            </h1>
          </div>
          <div className="space-y-4 text-secondary-700">
            <p>
              Farrsited provides energy consultancy and compliance for
              residential and commercial property — SAP calculations, EPCs and
              on-construction assessments for new builds and existing
              buildings alike.
            </p>
            <p>
              Each service is scoped to what your project is actually required
              to do, so your development stays on track.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-white pb-24">
        <ul className="mx-auto max-w-6xl px-6">
          {services.map((service, index) => (
            <li key={service.slug} id={service.slug} className="scroll-mt-16">
              <RevealOnScroll delayMs={index * 100}>
                <div className="grid grid-cols-[6rem_1fr] items-center gap-x-6 gap-y-3 py-10 sm:grid-cols-[8rem_1fr_1.5fr_auto] sm:gap-x-10">
                  <div className="relative row-span-2 aspect-square w-24 overflow-hidden sm:row-span-1 sm:w-32">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 640px) 192px, 144px"
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-secondary-900">
                    {service.name}
                  </h2>
                  <p className="text-secondary-700">{service.summary}</p>
                  <Link
                    href="/contact"
                    aria-label={`Enquire about ${service.name}`}
                    className="col-start-2 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-secondary-900 hover:text-primary-800 sm:col-start-auto"
                  >
                    Enquire
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
