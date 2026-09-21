export interface Service {
  slug: string;
  name: string;
  summary: string;
  image: { src: string; alt: string };
}

export const services: Service[] = [
  {
    slug: "developments-and-investments",
    name: "Developments and Investments",
    summary:
      "New builds, conversions, renovations, and deal packaging and sourcing.",
    image: {
      src: "https://images.unsplash.com/photo-1621983209348-7b5a63f23866",
      alt: "Row of newly built brick houses",
    },
  },
  {
    slug: "sap-calculations-epcs",
    name: "SAP Calculations & On-Construction EPCs",
    summary:
      "SAP calculations for new build developments, conversion projects and extensions.",
    image: {
      src: "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c",
      alt: "Architectural blueprints spread out on a surface",
    },
  },
  {
    slug: "epcs-existing-property",
    name: "EPCs for Existing Property",
    summary: "Residential EPCs from £65.00. Commercial EPCs from £225.00.",
    image: {
      src: "https://images.unsplash.com/photo-1730807908064-c087959dd52c",
      alt: "House with solar panels on the roof",
    },
  },
];
