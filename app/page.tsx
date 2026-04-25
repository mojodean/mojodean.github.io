import Link from "next/link";

const skills = [
  "AWS", "Terraform", "GitHub Actions", "Python", "React", "TypeScript",
  "Machine Learning", "LLMs / Agentic AI", "InfoSec (NIST · SAST · DAST)",
];

const projectSections = [
  {
    href: "/ms-applied-ai",
    label: "M.S. Applied AI",
    sublabel: "University of San Diego · 2024–2026",
    description:
      "Nine projects spanning MLOps, computer vision, NLP, time-series forecasting, and agentic AI — completed during my graduate program.",
    count: "9 projects",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Dean P. Simmer
        </h1>
        <p className="mt-3 text-xl font-medium text-indigo-600">
          VP, Engineering — Client Experiences · Rocket
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Engineering leader, AI/ML practitioner, and lifelong learner based in Detroit.
          I build teams and systems that ship software at scale — and I&apos;m deeply
          interested in how agentic AI changes the way we work.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://deanpsimmer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Blog
          </a>
          <a
            href="https://linkedin.com/in/deanpsimmer"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mojodean"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://mojodean.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
          >
            Résumé
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-20">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projectSections.map(({ href, label, sublabel, description, count }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-indigo-500">
                  {count}
                </span>
                <span className="text-slate-300 group-hover:text-indigo-400 transition-colors">→</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {label}
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">{sublabel}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
            </Link>
          ))}
          {/* Placeholder for future sections */}
          <div className="rounded-xl border border-dashed border-slate-200 p-6 flex items-center justify-center">
            <p className="text-sm text-slate-400">More coming soon</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mb-20">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">About</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                I lead the engineering teams at Rocket that power our digital client experiences —
                from the first unauthenticated visit through qualification, application, and mortgage
                origination. My teams ship web and AI products at scale on AWS, with a focus on
                continuous delivery, reliability, and engineering excellence.
              </p>
              <p>
                I recently completed an{" "}
                <span className="font-medium text-slate-800">
                  M.S. in Applied Artificial Intelligence
                </span>{" "}
                at the University of San Diego, where I was recognized as an{" "}
                <span className="font-medium text-slate-800">Alcalá 100 Honoree</span>. My academic
                work spanned MLOps, computer vision, NLP, and agentic systems.
              </p>
              <p>
                Before engineering leadership, I was a teacher — which shapes how I think about
                mentorship, learning, and team culture. I&apos;m also a distance runner, a student
                of baseball and soccer, and a lover of live symphony and jazz.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Skills &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-700">Education</span>
                </p>
                <ul className="space-y-1 text-xs text-slate-500">
                  <li>M.S. Applied AI — University of San Diego</li>
                  <li>M.A. Religion — Trinity Episcopal</li>
                  <li>B.A. History — Hillsdale College</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
