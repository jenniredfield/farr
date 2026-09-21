import { Hero } from "@/components/Hero";
import { ServiceList } from "@/components/ServiceList";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceList />
      <ProjectShowcase />
      <Testimonials />
      <CtaBand />
    </>
  );
}
