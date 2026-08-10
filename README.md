# Portfolio — Gabriel Ledezma

Portfolio personal construido con Next.js 14 (App Router), TypeScript y Tailwind CSS.

## Correr en local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Editar contenido

- **Proyectos**: `lib/projects.ts` — agregá, editá o reordená proyectos acá. Cada uno tiene `method` (badge tipo HTTP), `stack`, `role`, `repo` y `highlights`.
- **Terminal animada del hero**: `components/ApiConsole.tsx`, array `CALLS`.
- **Stack / sección "sobre mí" / contacto**: `app/page.tsx`.
- **Colores y tipografía**: `tailwind.config.ts` (tokens `bg`, `ink`, `signal`, `method`).

## Deploy

La forma más simple es con [Vercel](https://vercel.com) (mismos creadores de Next.js):

1. Subí este proyecto a un repo de GitHub.
2. Entrá a vercel.com → "Add New Project" → importá el repo.
3. Vercel detecta Next.js automáticamente — no hace falta configurar nada más.
4. Cada push a `main` va a redeployar el sitio.

También se puede deployar en Netlify o cualquier hosting compatible con Next.js.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next/font (Inter + JetBrains Mono, sin dependencias externas)
