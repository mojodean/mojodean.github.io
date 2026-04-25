"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/ms-applied-ai", label: "M.S. Applied AI" },
  { href: "https://github.com/mojodean", label: "GitHub", external: true },
  { href: "https://deanpsimmer.com", label: "Newsletter", external: true },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-900 hover:text-brand transition-colors"
        >
          Dean P. Simmer
        </Link>
        <nav className="flex items-center gap-6">
          {links.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href
                    ? "font-semibold text-brand"
                    : "font-medium text-slate-600 hover:text-slate-900"
                }`}
              >
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
