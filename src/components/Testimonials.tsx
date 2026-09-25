import Image from "next/image";
import { testimonials } from "@/lib/content/testimonials";
import { RevealOnScroll } from "./RevealOnScroll";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <RevealOnScroll>
        <h2 className="text-3xl font-semibold tracking-tight text-secondary-900">
          Success stories
        </h2>
        <p className="mt-2 max-w-2xl text-secondary-700">
          Illustrative quotes — placeholder testimonials, standing in until
          real client feedback is cleared for publication.
        </p>
      </RevealOnScroll>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <RevealOnScroll key={testimonial.name} delayMs={index * 100}>
            <figure className="flex h-full flex-col bg-white p-8 shadow-lg sm:p-10">
              <blockquote className="flex-1 text-xl leading-relaxed text-secondary-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-secondary-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-secondary-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
