import type { Project } from "@/data/projects";

export default function ProjectCard({ title, course, goal, techStack, outcome, repoUrl, liveUrl, featured }: Project) {
  return (
    <article
      className={`rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-slate-900 ${
        featured
          ? "border-brand-border ring-1 ring-brand-light dark:ring-brand-dark/40"
          : "border-slate-200 dark:border-slate-800"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          {featured && (
            <span className="mb-2 inline-block rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-semibold text-brand-dark dark:bg-brand-dark/25 dark:text-brand-light">
              Capstone
            </span>
          )}
          <h3 className="text-base font-semibold leading-snug text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{course}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-brand-border bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand-dark hover:bg-brand hover:text-white transition-colors dark:border-brand-dark dark:bg-brand-dark/25 dark:text-brand-light dark:hover:bg-brand dark:hover:text-white"
            >
              Live →
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-brand-border hover:text-brand transition-colors dark:border-slate-700 dark:text-slate-300"
          >
            GitHub →
          </a>
        </div>
      </div>

      <div className="space-y-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          <span className="font-semibold text-slate-900 dark:text-slate-100">Goal: </span>
          {goal}
        </p>
        <p>
          <span className="font-semibold text-slate-900 dark:text-slate-100">Outcome: </span>
          {outcome}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
