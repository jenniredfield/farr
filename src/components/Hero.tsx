import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-secondary-900">
      <Image
        src="https://images.unsplash.com/photo-1773665230660-161c58f76c5f"
        alt="Row of period brick terraced houses on a UK residential street at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-secondary-900/20" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-300">
            Energy consultancy &amp; compliance
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Compliance handled, so your development stays on track.
          </h1>
          <p className="mt-6 text-lg text-secondary-200">
            Farrsited provides energy consultancy and compliance for
            residential and commercial property — SAP calculations, EPCs and
            on-construction assessments for new builds and existing buildings
            alike.
          </p>
        </div>
      </div>
    </section>
  );
}
