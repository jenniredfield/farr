import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200/60 bg-white/60 backdrop-blur-lg backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-secondary-900"
        >
          Farrsited
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden gap-8 text-sm font-medium text-secondary-700 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-secondary-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="border-2 border-secondary-900 bg-secondary-900 px-4 py-2 text-sm font-medium text-white hover:bg-secondary-700"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
