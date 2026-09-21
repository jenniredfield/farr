export interface Project {
  slug: string;
  title: string;
  sector: string;
  challenge: string;
  outcome: string;
  image: { src: string; alt: string };
  /** Stand-in content — see GOAL.md "Placeholder content (interim)". */
  placeholder: true;
}

export const projects: Project[] = [
  {
    slug: "solar-scheme-registration",
    title: "Solar Scheme Registration",
    sector: "Manufacturing",
    challenge:
      "A manufacturing site needed MCS registration completed ahead of a funding deadline.",
    outcome: "Registration approved in one pass; funding secured on schedule.",
    image: {
      src: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      alt: "Rows of solar panels installed on open ground",
    },
    placeholder: true,
  },
  {
    slug: "compliance-audit-programme",
    title: "Multi-Site Compliance Audit",
    sector: "Industrial processing",
    challenge:
      "Group-wide ESOS Phase 3 audit required across multiple production sites.",
    outcome:
      "All sites audited and submitted within the compliance window, with no non-conformances raised.",
    image: {
      src: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9",
      alt: "Interior of a large industrial processing plant",
    },
    placeholder: true,
  },
  {
    slug: "net-zero-roadmap",
    title: "Net Zero Roadmap",
    sector: "Logistics",
    challenge:
      "A logistics operator needed a credible net zero pathway ahead of a client tender.",
    outcome:
      "Roadmap delivered and referenced directly in a successful tender submission.",
    image: {
      src: "https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a",
      alt: "Wind turbines on a green field under a bright sky",
    },
    placeholder: true,
  },
];
