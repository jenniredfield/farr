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
        <p className="mt-2 max-w-2xl text-secondary-600">
          Illustrative quotes — placeholder testimonials, standing in until
          real client feedback is cleared for publication.
        </p>
      </RevealOnScroll>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <RevealOnScroll key={testimonial.name} delayMs={index * 100}>
            <figure className="flex h-full flex-col bg-white p-6 shadow-lg">
              <blockquote className="flex-1 text-sm text-secondary-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-secondary-500">
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
