import ApiConsole from "@/components/ApiConsole";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const STACK = {
  "Backend principal": [
    "Java 21",
    "Spring Boot",
    "Spring Security",
    "JPA / Hibernate",
    "APIs REST",
    "JWT",
  ],
  "Datos y persistencia": [
    "PostgreSQL",
    "MySQL",
    "MongoDB Atlas",
    "Flyway",
    "Modelado relacional",
  ],
  "Stack complementario": [
    "Node.js",
    "Express.js",
    "TypeScript",
    "React",
    "Next.js",
  ],
  "Calidad y entrega": [
    "Docker",
    "Maven",
    "Git / GitHub",
    "GitHub Actions",
    "Swagger / OpenAPI",
    "Postman",
  ],
};

const NAV = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
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

      <section className="grid-bg relative overflow-hidden border-b border-line px-6 pb-20 pt-16 sm:pt-24">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="mb-4 font-mono text-sm text-signal">
              Backend Developer Jr · Java &amp; Spring Boot
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Gabriel Ledezma
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              Desarrollo <span className="text-ink">APIs REST y sistemas de gestión</span>{" "}
              con foco en seguridad, reglas de negocio y persistencia. Mi especialidad
              es el backend con Java y Spring Boot; uso frontend cuando hace falta para
              integrar, probar y entregar productos completos.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-ink-muted">
              <span className="rounded-full border border-line bg-bg-surface px-3 py-1.5">
                Técnico Universitario en Programación
              </span>
              <span className="rounded-full border border-line bg-bg-surface px-3 py-1.5">
                Lic. en Informática · en curso
              </span>
              <span className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1.5 text-signal">
                Disponible para oportunidades Backend
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="rounded bg-signal px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Ver proyectos
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielagustinledezma/"
                target="_blank"
                rel="noreferrer"
                className="rounded border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-signal/40"
              >
                LinkedIn ↗
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

      <section id="proyectos" className="border-b border-line px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-mono text-sm text-signal">/proyectos</p>
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold text-ink sm:text-4xl">
                Proyectos seleccionados
              </h2>
              <p className="mt-4 max-w-2xl text-ink-muted">
                Ordenados del más reciente al más antiguo. Incluyen desarrollos
                individuales y proyectos construidos en equipo.
              </p>
            </div>
            <span className="font-mono text-xs text-ink-faint">
              {projects.length} proyectos
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="como-trabajo" className="border-b border-line px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-mono text-sm text-signal">/como-trabajo</p>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Del requisito a una solución verificable
          </h2>
          <p className="mb-10 mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Busco que cada capa tenga una responsabilidad clara y que las reglas de
            negocio se mantengan consistentes desde la API hasta la base de datos.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                code: "01",
                title: "Modelo y API",
                text: "Entidades, DTOs, endpoints REST, validaciones y separación de responsabilidades.",
              },
              {
                code: "02",
                title: "Seguridad",
                text: "Autenticación, JWT, roles, permisos y protección de operaciones sensibles.",
              },
              {
                code: "03",
                title: "Persistencia",
                text: "JPA/Hibernate, PostgreSQL, migraciones y reglas de integridad sobre datos relacionados.",
              },
              {
                code: "04",
                title: "Entrega",
                text: "Pruebas, documentación, Docker, CI e integración con frontend y despliegues.",
              },
            ].map((item) => (
              <article
                key={item.code}
                className="rounded-lg border border-line bg-bg-surface p-6"
              >
                <span className="font-mono text-xs text-signal">{item.code}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="border-b border-line px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-mono text-sm text-signal">/stack</p>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Stack técnico
          </h2>
          <p className="mb-12 mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Java y Spring Boot son mi foco principal. El resto del stack complementa
            ese trabajo para persistir datos, integrar interfaces y llevar una
            aplicación hasta un entorno utilizable.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {Object.entries(STACK).map(([category, items], index) => (
              <article
                key={category}
                className={`rounded-lg border bg-bg-surface p-6 ${
                  index === 0 ? "border-signal/35" : "border-line"
                }`}
              >
                <h3 className="mb-5 font-mono text-sm font-semibold text-signal">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-line bg-bg-raised px-2.5 py-1.5 font-mono text-xs text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="border-b border-line px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-2 font-mono text-sm text-signal">/sobre-mi</p>
            <h2 className="mb-6 text-3xl font-bold text-ink sm:text-4xl">Sobre mí</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">
              Soy Técnico Universitario en Programación y estudiante de la Licenciatura
              en Informática en la UNAHUR. Me interesa especialmente resolver problemas
              que cruzan varias capas: permisos, validaciones, relaciones entre
              entidades y persistencia. Trabajo principalmente con Java y Spring Boot,
              y complemento ese perfil con Node.js y tecnologías frontend cuando el
              proyecto requiere una solución de extremo a extremo.
            </p>
          </div>

          <div className="space-y-3">
            <article className="rounded-lg border border-line bg-bg-surface p-5">
              <p className="font-mono text-xs text-signal">Formación</p>
              <p className="mt-2 font-semibold text-ink">
                Técnico Universitario en Programación
              </p>
              <p className="mt-1 text-sm text-ink-muted">UNAHUR</p>
            </article>
            <article className="rounded-lg border border-line bg-bg-surface p-5">
              <p className="font-mono text-xs text-signal">En curso</p>
              <p className="mt-2 font-semibold text-ink">Licenciatura en Informática</p>
              <p className="mt-1 text-sm text-ink-muted">UNAHUR</p>
            </article>
            <article className="rounded-lg border border-line bg-bg-surface p-5">
              <p className="font-mono text-xs text-signal">Experiencia académica</p>
              <p className="mt-2 font-semibold text-ink">
                Ayudante de Programación Orientada a Objetos
              </p>
              <p className="mt-1 text-sm text-ink-muted">UNAHUR</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 font-mono text-sm text-signal">/contacto</p>
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl">
            ¿Buscás un Backend Developer Jr?
          </h2>
          <p className="mb-8 text-ink-muted">
            Estoy abierto a oportunidades donde pueda aportar con Java, Spring Boot y
            desarrollo de APIs, mientras sigo creciendo dentro de un equipo técnico.
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
            <a
              href="mailto:gabrielledezma@outlook.com"
              className="rounded bg-signal px-4 py-2 font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Escribirme
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
        Gabriel Ledezma · Backend Developer · Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
