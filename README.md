# Notas Next

App de notas hecha con **Next.js 16**, **React 19** y **Tailwind CSS 4** para la materia.

## Rutas

| Ruta | Tipo | Archivo |
| --- | --- | --- |
| `/` | Home personalizada | `src/app/page.js` |
| `/notes` | Existente | `src/app/notes/page.jsx` |
| `/notes/create` | Existente | `src/app/notes/create/page.jsx` |
| `/notes/[id]` | Existente (dinamica) | `src/app/notes/[id]/page.jsx` |
| `/about` | Existente | `src/app/about/page.jsx` |
| `/categorias` | **Nueva** | `src/app/categorias/page.jsx` |
| `/notes/favoritas` | **Nueva anidada** (hereda el layout de `/notes`) | `src/app/notes/favoritas/page.jsx` |
| `/categorias/[slug]` | **Nueva dinamica** (lee `params.slug`) | `src/app/categorias/[slug]/page.jsx` |

Toda la navegacion usa el componente `Link` de `next/link`.

## Layout

`src/app/layout.js` incluye el nav con los enlaces a las nuevas rutas y un `<footer>` con informacion del proyecto, navegacion y datos del autor.

## Como correrlo

```bash
npm install
npm run dev
```

Abrir http://localhost:3000
