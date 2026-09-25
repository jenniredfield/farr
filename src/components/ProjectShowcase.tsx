import Image from "next/image";
import { projects } from "@/lib/content/projects";
import { RevealOnScroll } from "./RevealOnScroll";

export function ProjectShowcase() {
  return (
    <section id="projects" className="bg-secondary-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <h2 className="text-3xl font-semibold tracking-tight text-secondary-900">
            Previous projects
          </h2>
          <p className="mt-2 max-w-2xl text-secondary-700">
            Illustrative examples — placeholder details, standing in until
            real case studies are supplied.
          </p>
        </RevealOnScroll>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delayMs={index * 100}>
              <article>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-secondary-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-secondary-700">
                  {project.outcome}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
