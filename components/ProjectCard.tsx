import type { Project } from "@/lib/projects";

const METHOD_STYLES: Record<Project["method"], string> = {
  GET: "text-method-get border-method-get/40 bg-method-get/10",
  POST: "text-method-post border-method-post/40 bg-method-post/10",
  PUT: "text-method-put border-method-put/40 bg-method-put/10",
  DELETE: "text-method-delete border-method-delete/40 bg-method-delete/10",
};

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative rounded-lg border bg-bg-surface p-6 transition-colors hover:border-signal/40 sm:p-7 ${
        featured ? "border-signal/40 md:col-span-2" : "border-line"
      }`}
    >
      {featured && (
        <div className="absolute right-5 top-5 rounded-full border border-signal/30 bg-signal/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-signal">
          Proyecto más reciente
        </div>
      )}

      <div className={`mb-4 flex items-center gap-3 ${featured ? "pr-36" : "justify-between"}`}>
        <span
          className={`rounded border px-2 py-0.5 font-mono text-xs font-bold ${METHOD_STYLES[project.method]}`}
        >
          {project.method}
        </span>
        <span className="font-mono text-xs text-ink-faint">{project.role}</span>
      </div>

      <div className={featured ? "lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10" : ""}>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-ink sm:text-xl">
            {project.name}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.stack.map((stackItem) => (
              <span
                key={stackItem}
                className="rounded border border-line bg-bg-raised px-2 py-1 font-mono text-[11px] text-ink-muted"
              >
                {stackItem}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            Qué demuestra
          </p>
          <ul className="mb-6 space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-line/70 pt-5">
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
            {project.frontendRepo ? "Backend" : "Repositorio"}
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
