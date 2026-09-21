export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: { src: string; alt: string };
  /** Stand-in content — see GOAL.md "Placeholder content (interim)". */
  placeholder: true;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Farrsited took our ESOS submission from a scramble to a non-event. Deadlines, evidence, sign-off — all handled.",
    name: "Alex Whitfield",
    role: "Operations Director",
    company: "Northfield Manufacturing",
    avatar: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      alt: "Portrait of Alex Whitfield",
    },
    placeholder: true,
  },
  {
    quote:
      "We needed a scheme registration done right first time. Farrsited delivered exactly that, with no back-and-forth.",
    name: "Priya Shah",
    role: "Sustainability Lead",
    company: "Ridgeway Logistics",
    avatar: {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      alt: "Portrait of Priya Shah",
    },
    placeholder: true,
  },
  {
    quote:
      "Clear reporting, no jargon, and they know the regulatory detail cold. Exactly what we needed for our audit.",
    name: "Tom Ellard",
    role: "Site Manager",
    company: "Calder Processing Group",
    avatar: {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      alt: "Portrait of Tom Ellard",
    },
    placeholder: true,
  },
];
