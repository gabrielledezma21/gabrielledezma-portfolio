import ApiConsole from "@/components/ApiConsole";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const STACK = {
  Backend: ["Java", "Spring Boot", "Spring Security", "Node.js", "Express.js", "Python"],
  "Bases de datos": ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  Herramientas: ["Docker", "Git", "Maven", "Swagger", "Postman", "AWS", "Azure"],
};

const NAV = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-mono text-sm font-bold text-ink">
            gabriel<span className="text-signal">.</span>dev
          </span>
          <ul className="hidden gap-8 font-mono text-sm text-ink-muted sm:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="rounded border border-signal/40 bg-signal/10 px-3 py-1.5 font-mono text-xs font-semibold text-signal transition-colors hover:bg-signal/20"
          >
            Contactar
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid-bg relative overflow-hidden border-b border-line px-6 pb-20 pt-16 sm:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-4 font-mono text-sm text-signal">
              200 OK · disponible para nuevas oportunidades
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Gabriel Ledezma
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-muted">
              Backend Developer Jr especializado en{" "}
              <span className="text-ink">Java, Spring Boot y Node.js</span>. Construyo
              APIs REST, arquitecturas backend y modelos de datos que sostienen
              productos reales.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="rounded bg-signal px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Ver proyectos
              </a>
              <a
                href="https://github.com/gabrielledezma21"
                target="_blank"
                rel="noreferrer"
                className="rounded border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-ink-muted"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ApiConsole />
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="border-b border-line px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-mono text-sm text-signal">/proyectos</p>
          <h2 className="mb-12 text-3xl font-bold text-ink sm:text-4xl">
            Proyectos destacados
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-b border-line px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-mono text-sm text-signal">/stack</p>
          <h2 className="mb-12 text-3xl font-bold text-ink sm:text-4xl">
            Tecnologías
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(STACK).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-4 font-mono text-sm font-semibold text-ink-muted">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="border-b border-line px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 font-mono text-sm text-signal">/sobre-mi</p>
          <h2 className="mb-6 text-3xl font-bold text-ink sm:text-4xl">Sobre mí</h2>
          <p className="text-lg leading-relaxed text-ink-muted">
            Técnico Universitario en Programación y estudiante de la Licenciatura en
            Informática (UNAHUR). Me enfoco en arquitectura backend, diseño de APIs
            REST, testing y contenedores. Actualmente profundizando en Spring Boot,
            Docker y buenas prácticas de arquitectura, mientras busco mi primera
            oportunidad como Backend Developer.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 font-mono text-sm text-signal">/contacto</p>
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl">
            Hablemos
          </h2>
          <p className="mb-8 text-ink-muted">
            Abierto a oportunidades como Backend Developer Jr. Escribime por
            cualquiera de estos canales.
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
            <a
              href="mailto:gabrielledezma@outlook.com"
              className="rounded border border-line px-4 py-2 text-ink transition-colors hover:border-signal/40"
            >
              gabrielledezma@outlook.com
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielagustinledezma/"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-line px-4 py-2 text-ink transition-colors hover:border-signal/40"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/gabrielledezma21"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-line px-4 py-2 text-ink transition-colors hover:border-signal/40"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-8 text-center font-mono text-xs text-ink-faint">
        gabriel.dev — construido con Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
