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
          <p className="mt-2 max-w-2xl text-secondary-600">
            Illustrative examples — placeholder details, standing in until
            real case studies are supplied.
          </p>
        </RevealOnScroll>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delayMs={index * 100}>
              <article className="flex h-full flex-col overflow-hidden bg-white shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                    {project.sector}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-secondary-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-secondary-600">
                    {project.challenge}
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary-900">
                    {project.outcome}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
