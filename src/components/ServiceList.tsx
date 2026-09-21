import Image from "next/image";
import { services } from "@/lib/content/services";
import { RevealOnScroll } from "./RevealOnScroll";

export function ServiceList() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <h2 className="text-3xl font-semibold tracking-tight text-secondary-900">
            Services
          </h2>
          <p className="mt-2 max-w-2xl text-secondary-600">
            Compliance and energy consultancy work, scoped to what your
            organisation is actually required to do.
          </p>
        </RevealOnScroll>

        <div className="mt-12">
          {services.map((service, index) => {
            const imageOnRight = index % 2 === 0;
            return (
              <RevealOnScroll key={service.slug} delayMs={index * 100}>
                <div
                  className={`flex flex-col gap-8 py-12 sm:items-center ${
                    imageOnRight ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                >
                  <div className="relative h-64 w-full overflow-hidden border border-secondary-200 sm:h-80 sm:w-1/2">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="sm:w-1/2">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-secondary-600">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
