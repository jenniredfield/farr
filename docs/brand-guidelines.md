# Farrsited Brand Guidelines

Version 0.2 (draft). Sections marked **[Confirm]** are inferred from the current website and need sign-off from Farrsited.

## 1. Who we are

Farrsited provides energy consultancy and compliance for residential and commercial property: SAP calculations, EPCs and on-construction assessments for new builds and existing buildings.

- **Positioning [Confirm]:** compliance handled, so a client's development stays on track.
- **Audience [Confirm]:** developers, housebuilders and property owners who have compliance deadlines.
- **Personality [Confirm]:** precise, dependable, plain-spoken.

## 2. Logo

**Current state:** there is no drawn logo yet. The brand appears as a text wordmark plus a favicon.

| Asset | Description | File |
|---|---|---|
| Wordmark | "Farrsited" in Roboto, semibold, tight tracking, slate 900 | Header (`src/components/Header.tsx`) |
| Icon | Bold "F" in a square border, slate 900 on white | `src/app/icon.svg` |

**Rules**
- Keep corners square. Do not round the icon.
- Use slate 900 on light backgrounds and white on dark backgrounds.
- Leave clear space around the mark equal to the height of the F's top bar.
- Do not stretch, recolour, outline or add effects.

**To do [Confirm]:** decide whether to commission a proper logo, or keep the wordmark and icon as the identity. Produce horizontal, stacked and icon-only versions in SVG and PNG.

## 3. Colour

The palette is defined in `tailwind.config.ts`. Change values there and the whole site follows.

### Neutral (secondary, slate)
| Token | Hex | Typical use |
|---|---|---|
| 50 | `#f8fafc` | Subtle section backgrounds (projects) |
| 100 | `#f1f5f9` | Feature section background (homepage services), button hover on light fills |
| 200 | `#e2e8f0` | Header divider, secondary text on dark (hero) |
| 300 | `#cbd5e1` | Secondary text on dark (CTA band) |
| 400 | `#94a3b8` | Footer text on dark only |
| 600 | `#475569` | Small captions and labels (testimonial roles, contact labels) |
| **700** | **`#334155`** | **Body and supporting text; button hover on dark fills** |
| **900** | **`#0f172a`** | **Headings, buttons, dark sections, icon** |

### Accent (primary, blue)
| Token | Hex | Typical use |
|---|---|---|
| **800** | **`#1e40af`** | **The only accent in use: contact links, link hover colour** |

Other steps (50 to 950) are defined in the config for tints and shades.

**Rules**
- Slate 900 and white carry most of the site. Use blue sparingly, as an accent, not as a background.
- Body text must meet WCAG AA contrast (4.5:1). Slate 700 and slate 600 on white both pass. Do not use slate 400 or lighter for text on light backgrounds; on slate 900, slate 200 to 400 are fine.

**Note [Confirm]:** these are the standard Tailwind blue and slate scales. They work, but they are not distinctive. If Farrsited wants ownable colour, choose a custom accent and replace the `primary` scale.

## 4. Typography

| Role | Font | Weights | Source |
|---|---|---|---|
| Everything (headings, body, UI) | Roboto (variable) | 400, 500, 600, 700 in use | Google Fonts via `next/font` |

One family only. Do not add a separate heading or monospace font.

**Scale in use**
| Use | Class | Notes |
|---|---|---|
| Hero / feature heading | `text-4xl` to `sm:text-5xl`, semibold, tight tracking | Homepage hero and homepage services block |
| Page heading | `text-3xl` to `sm:text-4xl`, semibold, tight tracking | Services and Contact pages, one per page |
| Section heading | `text-3xl`, semibold, tight tracking | |
| Quote | `text-xl`, relaxed leading | Testimonials |
| Item title | `text-lg`, semibold | Projects, service rows |
| Lead paragraph | `text-lg` | Hero intro |
| Body | Base size, slate 700 | |
| Caption | `text-sm`, slate 600 or 700 | Project outcomes, testimonial roles |
| Text link | `text-sm`, semibold, uppercase, wide tracking, slate 900, hover blue 800 | "Enquire" on the Services page |
| UI text | `text-sm`, medium or semibold | Buttons and navigation |

**No eyebrow labels.** Sections open with their heading. Do not add small uppercase titles above headings or card titles.

## 5. Shape, spacing and components

- **Corners:** square for buttons, images and cards. The one exception is testimonial avatars, which are circles.
- **Borders:** kept to a minimum. Images have no frame, and lists of items are separated by space, not divider lines. The header keeps a faint bottom line.
- **Cards:** only testimonials use a card: white background, `shadow-lg`, no border, generous padding (`p-8`, `sm:p-10`).
- **Projects:** no card. The image (4:3) sits directly on the section background, with the title and a single sentence (the outcome) underneath.
- **Buttons**
  - On light backgrounds: slate 900 fill, white text, 2px slate 900 border, hover slate 700.
  - On dark backgrounds: white fill, slate 900 text, hover slate 100.
  - Always square. No pill shapes.
  - Button text is `text-sm`, medium or semibold. Padding is `px-4 py-2` in the header and `px-6 py-3` in page sections.
- **Header:** sticky, translucent white (`bg-white/60`) with a strong backdrop blur, so content blurs behind it on scroll. Wordmark on the left; the Services link and "Get in touch" button grouped on the right. The nav links only to pages, never to sections of the homepage.
- **Footer:** slate 900. Columns for the brand line, navigation and contact. Social links sit in the contact column as icon plus label (currently LinkedIn only), with no border or box.
- **Page patterns**
  - *Homepage services block:* heading, one paragraph and a button on the left; one large portrait image (4:5) on the right; slate 100 background.
  - *Services page:* full-width hero image, then heading and intro in two columns, then one row per service (square thumbnail, name, summary, "Enquire" link).
  - *Contact page:* form and contact details on the left, a portrait image on the right (hidden on small screens).
- **Layout:** content is `max-w-6xl` with `px-6` side padding. Full-width images are the exception. Sections use generous vertical space (`py-16` to `py-24`).
- **Motion:** sections fade up on scroll. Motion is disabled for users who prefer reduced motion. Keep it subtle.

## 6. Photography

- Real UK property, ideally the client's own projects.
- Residential streets and construction in natural light. Golden hour and dusk work well.
- Avoid staged stock photos of people in hard hats or generic office scenes.
- Use images at a resolution that suits the frame. Pick portrait images for portrait frames, rather than cropping landscape photos, which loses sharpness.
- Crop wide, with room for text overlays. Darken with the slate 900 gradient when text sits on top.
- Always write descriptive alt text.

**Known gap [Confirm]:** some current stock images do not look like UK property (the homepage services block and the Contact page image). Replace them first when real project photography is available.

## 7. Voice

Drawn from the current site copy **[Confirm]**.

- **Plain English.** Say "what it takes", not "requirements analysis".
- **Direct and confident.** Lead with the client's problem ("Got a compliance deadline coming up?").
- **Specific.** Name the deliverable: SAP calculations, EPCs, on-construction assessments.
- **Short sentences.** One idea each. Summaries are one sentence.
- **No prices on the site.** Describe what is offered and invite an enquiry instead.
- **UK spelling** (organisation, licence).

| We say | We avoid |
|---|---|
| "Tell us what you're dealing with and we'll tell you exactly what it takes." | "We offer holistic, end-to-end solutions." |
| "Compliance handled, so your development stays on track." | "Leading provider of best-in-class services." |

## 8. Where things live

| Item | Location |
|---|---|
| Colours | `tailwind.config.ts` |
| Fonts | `src/app/layout.tsx`, `src/app/globals.css` |
| Icons | `src/app/icon.svg`, `favicon.ico`, `apple-icon.png` |
| Page copy | `src/lib/content/` and `src/components/` |
| Services list (homepage and Services page) | `src/lib/content/services.ts` |
| Social links | `src/components/Footer.tsx` |

## 9. Open decisions

1. Commission a logo, or keep the wordmark and icon?
2. Keep the standard blue accent, or define a custom brand colour?
3. Confirm positioning, audience and voice with the client.
4. Replace stock photography with project photos.
5. Confirm the LinkedIn company page URL (currently a placeholder).
6. Add print and email guidance (letterhead, EPC report cover, email signature) if needed.
