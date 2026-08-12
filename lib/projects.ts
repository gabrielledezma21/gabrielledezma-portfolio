export type Project = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  name: string;
  description: string;
  stack: string[];
  role: "Individual" | "En equipo";
  repo: string;
  demo?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    method: "POST",
    name: "Sistema de reservas",
    description:
      "Plataforma full-stack de turnos con disponibilidad en tiempo real, reservas de invitado y panel de administración por roles.",
    stack: ["Next.js 14", "Supabase", "Tailwind CSS"],
    role: "Individual",
    repo: "https://github.com/gabrielledezma21/sistema-turnos",
    demo: "https://sistema-turnos-online.vercel.app/",
    highlights: [
      "Auth con Supabase y políticas RLS por rol",
      "Calendario propio con slots de disponibilidad dinámica",
      "Dashboard admin con métricas mensuales y agenda semanal",
      "Reservas sin cuenta (guest bookings)",
    ],
  },
  {
    method: "GET",
    name: "MedIntegral — Backend",
    description:
      "API REST para una plataforma médica integral: gestión de afiliados, prestadores y agendas de turnos, con reportes de situación terapéutica.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Vite"],
    role: "En equipo",
    repo: "https://github.com/gabrielledezma21/obra-social",
    demo: "https://obra-social-frontend.vercel.app/",
    highlights: [
      "Modelado relacional de afiliados, prestadores y agendas",
      "Migraciones y seeders con Sequelize CLI",
      "Entorno containerizado con Docker Compose",
      "Documentación de endpoints con Swagger",
    ],
  },
  {
    method: "POST",
    name: "Foro Hub API",
    description:
      "API para centralizar dudas de alumnos sobre distintos cursos — desafío final del programa Oracle Next Education (Alura + Oracle).",
    stack: ["Java 21", "Spring Boot 3.4", "Spring Security", "JWT", "PostgreSQL", "Flyway"],
    role: "Individual",
    repo: "https://github.com/gabrielledezma21/foro",
    highlights: [
      "Autenticación JWT y hashing de contraseñas con BCrypt",
      "Arquitectura en capas: controller / domain / infra",
      "Migraciones versionadas con Flyway",
      "Documentación interactiva con Swagger/OpenAPI",
    ],
  },
  {
    method: "PUT",
    name: "UnaHur Anti-Social Net",
    description:
      "Backend de una red social: publicaciones con imágenes opcionales, comentarios con visibilidad configurable por antigüedad, y etiquetas.",
    stack: ["Node.js", "MongoDB", "Swagger"],
    role: "En equipo",
    repo: "https://github.com/gabrielledezma21/anti-social-mongo-4-bits",
    highlights: [
      "Modelado documental de posts, comentarios, tags e imágenes",
      "Reglas de negocio configurables vía variables de entorno",
      "CRUD completo con validaciones de integridad referencial",
      "Documentación de la API en formato Swagger/YAML",
    ],
  },
];
