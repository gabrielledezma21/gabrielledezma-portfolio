export type Project = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  name: string;
  description: string;
  stack: string[];
  role: "Individual" | "En equipo";
  repo: string;
  frontendRepo?: string;
  demo?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    method: "POST",
    name: "Rectificadora - Sistema de gestión",
    description:
      "Sistema empresarial para digitalizar la operación de un taller mecánico: clientes, vehículos, órdenes de trabajo, tareas, pagos, usuarios, auditoría y respaldos.",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JPA / Hibernate",
      "Docker",
    ],
    role: "Individual",
    repo: "https://github.com/gabrielledezma21/rectificadora-backend",
    frontendRepo: "https://github.com/gabrielledezma21/rectificadora-frontend",
    demo: "https://rectificadora-frontend-gabrielledezma21s-projects.vercel.app/",
    highlights: [
      "JWT, BCrypt y permisos granulares para administración, operadores y empleados",
      "Flujo controlado de órdenes y tareas con historial y una única tarea activa por empleado",
      "PostgreSQL persistente, migraciones Flyway y respaldos automáticos",
      "Docker Compose y validación automática con Maven + GitHub Actions",
    ],
  },
  {
    method: "GET",
    name: "Sistema de reservas",
    description:
      "Aplicación full-stack de turnos con reserva pública, disponibilidad dinámica y dashboard profesional para administrar agenda, servicios y estados.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    role: "Individual",
    repo: "https://github.com/gabrielledezma21/sistema-turnos",
    demo: "https://sistema-turnos-online.vercel.app/",
    highlights: [
      "Row Level Security y separación de permisos entre usuarios y administración",
      "Prevención de dobles reservas mediante restricciones en base de datos",
      "Reservas públicas con token privado, reprogramación y cancelación",
      "Dashboard con agenda, filtros, métricas y configuración de disponibilidad",
    ],
  },
  {
    method: "GET",
    name: "MedIntegral",
    description:
      "Plataforma de gestión médica desarrollada en equipo para administrar afiliados, prestadores, centros y agendas de turnos.",
    stack: ["Node.js", "Express", "MongoDB Atlas", "React", "Vite"],
    role: "En equipo",
    repo: "https://github.com/gabrielledezma21/obra-social",
    frontendRepo: "https://github.com/gabrielledezma21/obra-social-frontend",
    demo: "https://obra-social-frontend.vercel.app/",
    highlights: [
      "Desarrollo colaborativo utilizando Git y ramas de trabajo",
      "Integración frontend-backend mediante APIs REST",
      "Persistencia de información relacionada en MongoDB Atlas",
      "Resolución de problemas de integridad, domicilios compartidos y reglas de negocio",
    ],
  },
  {
    method: "PUT",
    name: "UnaHur Anti-Social Net",
    description:
      "Red social full-stack desarrollada en equipo con publicaciones, imágenes persistentes, comentarios y etiquetas, con foco principal en el diseño e implementación del backend.",
    stack: ["Node.js", "Express", "MongoDB Atlas", "React", "Vite", "Vercel"],
    role: "En equipo",
    repo: "https://github.com/gabrielledezma21/anti-social-mongo-4-bits",
    frontendRepo: "https://github.com/gabrielledezma21/red-social-frontend",
    demo: "https://red-social-frontend-lake.vercel.app/",
    highlights: [
      "CRUD completo de usuarios, publicaciones, comentarios, etiquetas e imágenes",
      "Relaciones bidireccionales con validaciones de integridad referencial",
      "Persistencia de imágenes en MongoDB y exposición mediante la API",
      "Trabajo colaborativo e integración frontend-backend desplegada en producción",
    ],
  },
  {
    method: "POST",
    name: "Foro Hub API",
    description:
      "API REST para una plataforma educativa donde usuarios pueden crear y gestionar tópicos de discusión, aplicando arquitectura por capas y buenas prácticas de backend.",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Flyway",
    ],
    role: "Individual",
    repo: "https://github.com/gabrielledezma21/foro",
    highlights: [
      "Autenticación JWT y manejo seguro de contraseñas con BCrypt",
      "Separación de responsabilidades mediante Controller, Service y Repository",
      "Persistencia relacional con migraciones versionadas",
      "Documentación de endpoints mediante Swagger/OpenAPI",
    ],
  },
];
