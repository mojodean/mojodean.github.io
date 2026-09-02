import Link from "next/link";

const links = [
  { href: "https://github.com/mojodean", label: "GitHub" },
  { href: "https://deanpsimmer.com", label: "Newsletter" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-900 transition-colors hover:text-brand dark:text-slate-100"
        >
          Dean P. Simmer
        </Link>
        <nav className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
