import Link from "next/link";

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
                <Link href="/#services" className="hover:text-white">
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
