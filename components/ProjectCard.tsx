import type { Project } from "@/data/projects";

export default function ProjectCard({ title, course, goal, techStack, outcome, repoUrl, liveUrl, featured }: Project) {
  return (
    <article
      className={`rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
        featured ? "border-brand-border ring-1 ring-brand-light" : "border-slate-200"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          {featured && (
            <span className="mb-2 inline-block rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-semibold text-brand-dark">
              Capstone
            </span>
          )}
          <h3 className="text-base font-semibold leading-snug text-slate-900">{title}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{course}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-brand-border bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand-dark hover:bg-brand hover:text-white transition-colors"
            >
              Live →
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-brand-border hover:text-brand transition-colors"
          >
            GitHub →
          </a>
        </div>
      </div>

      <div className="space-y-2.5 text-sm leading-relaxed text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">Goal: </span>
          {goal}
        </p>
        <p>
          <span className="font-semibold text-slate-900">Outcome: </span>
          {outcome}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
