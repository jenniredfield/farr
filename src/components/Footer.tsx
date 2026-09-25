import Link from "next/link";

// TODO: replace with the real company page URL.
const LINKEDIN_URL = "https://www.linkedin.com/company/farrsited";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary-200 bg-secondary-900 text-secondary-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">Farrsited</p>
            <p className="mt-2 text-sm text-secondary-400">
              Energy consultancy and compliance for residential and
              commercial property.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Navigate</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-white">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-2 space-y-1 text-sm text-secondary-400">
              <li>hello@farrsited.example</li>
              <li>+44 (0)000 000 0000</li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                    className="h-4 w-4"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-secondary-800 pt-6 text-xs text-secondary-500">
          © {year} Farrsited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
