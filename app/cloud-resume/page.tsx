import type { Metadata } from "next";
import { crcProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Cloud Resume Challenge — Dean P. Simmer",
  description:
    "A full-stack serverless resume site built on AWS, provisioned with Terraform and deployed via GitHub Actions.",
};

const stack = [
  { label: "Frontend", items: "S3 · CloudFront · Route53" },
  { label: "Backend", items: "Lambda · DynamoDB · API Gateway" },
  { label: "IaC", items: "Terraform · HCP Terraform" },
  { label: "CI/CD", items: "GitHub Actions" },
];

export default function CloudResume() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <section className="mb-16">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand">
          Side Project
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Cloud Resume Challenge
        </h1>
        <p className="mt-2 text-xl font-medium text-slate-600">AWS · Terraform · GitHub Actions</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700">
          The{" "}
          <a
            href="https://cloudresumechallenge.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand hover:text-brand-dark underline underline-offset-2"
          >
            Cloud Resume Challenge
          </a>{" "}
          is a hands-on project that requires building a resume website entirely from cloud-native
          services — no managed hosting allowed. It covers the full stack: static frontend, serverless
          API, NoSQL database, infrastructure-as-code, and a CI/CD pipeline.
        </p>

        {/* Stack overview */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stack.map(({ label, items }) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
              <p className="mt-1 text-sm font-medium text-slate-700">{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Repos */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-slate-800">Repositories</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {crcProjects.map((project) => (
            <ProjectCard key={project.repoUrl} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
