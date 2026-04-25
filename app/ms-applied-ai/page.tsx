import type { Metadata } from "next";
import { msAppliedAIProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "M.S. Applied AI — Dean P. Simmer",
  description:
    "Projects from the M.S. in Applied Artificial Intelligence program at the University of San Diego.",
};

const featured = msAppliedAIProjects.filter((p) => p.featured);
const rest = msAppliedAIProjects.filter((p) => !p.featured);

export default function MsAppliedAI() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <section className="mb-16">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand">
          Graduate Studies
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          M.S. Applied Artificial Intelligence
        </h1>
        <p className="mt-2 text-xl font-medium text-slate-600">University of San Diego · 2024–2026</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700">
          A collection of projects completed during my graduate program. The work spans the full
          ML lifecycle — from exploratory modeling and computer vision to MLOps, NLP, and agentic
          systems. I graduated as an{" "}
          <span className="font-medium text-slate-800">Alcalá 100 Honoree</span>.
        </p>
      </section>

      {/* Capstone */}
      {featured.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-bold text-slate-800">Capstone Project</h2>
          <div className="grid gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.repoUrl} {...project} />
            ))}
          </div>
        </section>
      )}

      {/* All other projects */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-700">Coursework Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.repoUrl} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
