import type { Project } from "@/lib/projects";

const METHOD_STYLES: Record<Project["method"], string> = {
  GET: "text-method-get border-method-get/40 bg-method-get/10",
  POST: "text-method-post border-method-post/40 bg-method-post/10",
  PUT: "text-method-put border-method-put/40 bg-method-put/10",
  DELETE: "text-method-delete border-method-delete/40 bg-method-delete/10",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-lg border border-line bg-bg-surface p-6 transition-colors hover:border-signal/40 sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className={`rounded border px-2 py-0.5 font-mono text-xs font-bold ${METHOD_STYLES[project.method]}`}
        >
          {project.method}
        </span>
        <span className="font-mono text-xs text-ink-faint">{project.role}</span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-ink sm:text-xl">
        {project.name}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <ul className="mb-5 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-ink-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-line bg-bg-raised px-2 py-1 font-mono text-[11px] text-ink-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-signal px-3 py-2 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Ver demo
            <span aria-hidden>↗</span>
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-signal transition-opacity hover:opacity-80"
          >
            Backend
            <span aria-hidden>→</span>
          </a>
        )}
        {project.frontendRepo && (
          <a
            href={project.frontendRepo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-signal transition-opacity hover:opacity-80"
          >
            Frontend
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  );
}
