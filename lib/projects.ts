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
      "Sistema empresarial para digitalizar la gestión de órdenes de trabajo de un taller mecánico, incluyendo clientes, tareas, usuarios y seguimiento operativo.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker"],
    role: "Individual",
    repo: "https://github.com/gabrielledezma21/rectificadora-backend",
    frontendRepo: "https://github.com/gabrielledezma21/rectificadora-frontend",
    highlights: [
      "Gestión de órdenes de trabajo y estados del proceso",
      "Sistema de usuarios con permisos diferenciados",
      "Asignación y seguimiento de tareas por empleado",
      "Diseño orientado a una necesidad empresarial real",
    ],
  },
  {
    method: "GET",
    name: "Sistema de reservas",
    description:
      "Aplicación full-stack para gestionar turnos, disponibilidad y reservas con panel administrativo y persistencia en base de datos.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    role: "Individual",
    repo: "https://github.com/gabrielledezma21/sistema-turnos",
    demo: "https://sistema-turnos-online.vercel.app/",
    highlights: [
      "Gestión de disponibilidad dinámica",
      "Control de usuarios y permisos mediante autenticación",
      "Validación para evitar conflictos de reservas",
      "Aplicación desplegada y funcional en producción",
    ],
  },
  {
    method: "GET",
    name: "MedIntegral",
    description:
      "Plataforma de gestión médica desarrollada en equipo para administrar afiliados, prestadores y agendas de turnos.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Vite"],
    role: "En equipo",
    repo: "https://github.com/gabrielledezma21/obra-social",
    frontendRepo: "https://github.com/gabrielledezma21/obra-social-frontend",
    demo: "https://obra-social-frontend.vercel.app/",
    highlights: [
      "Desarrollo colaborativo utilizando Git y ramas de trabajo",
      "Integración frontend-backend mediante APIs REST",
      "Persistencia de información en MongoDB Atlas",
      "Resolución de problemas de integridad y validaciones de negocio",
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
      "API REST para una plataforma educativa donde usuarios pueden crear y gestionar tópicos de discusión. Proyecto desarrollado aplicando arquitectura por capas y buenas prácticas de backend.",
    stack: ["Java 21", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Flyway"],
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
