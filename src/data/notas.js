// Datos de ejemplo compartidos por varias rutas (home, categorias, favoritas).
// Mas adelante esto se puede reemplazar por un fetch a una API o base de datos.

export const categorias = [
  {
    slug: "rutas",
    title: "Rutas",
    emoji: "🧭",
    description: "Como Next.js convierte carpetas en URLs: rutas simples, anidadas y dinamicas.",
  },
  {
    slug: "componentes",
    title: "Componentes",
    emoji: "🧩",
    description: "Diferencias entre componentes de servidor y de cliente, y cuando usar cada uno.",
  },
  {
    slug: "layouts",
    title: "Layouts",
    emoji: "🏗️",
    description: "Estructuras compartidas entre paginas: el layout root y los layouts anidados.",
  },
];

export const notas = [
  {
    id: 1,
    title: "Componentes de servidor",
    categoria: "componentes",
    favorita: true,
    resumen: "Se ejecutan en el servidor, pueden usar async/await y no envian JavaScript al navegador.",
  },
  {
    id: 2,
    title: "Rutas dinamicas",
    categoria: "rutas",
    favorita: true,
    resumen: "Carpetas con corchetes como [id] o [slug] que leen parametros desde la URL.",
  },
  {
    id: 3,
    title: "Layout root",
    categoria: "layouts",
    favorita: false,
    resumen: "El layout de app/layout.js envuelve a todas las paginas: ideal para nav y footer.",
  },
  {
    id: 4,
    title: "Rutas anidadas",
    categoria: "rutas",
    favorita: true,
    resumen: "Carpetas dentro de carpetas: /notes/favoritas vive dentro de /notes y hereda su layout.",
  },
  {
    id: 5,
    title: "Componentes de cliente",
    categoria: "componentes",
    favorita: false,
    resumen: "Con 'use client' pueden usar estado, efectos y eventos del navegador.",
  },
  {
    id: 6,
    title: "Layouts anidados",
    categoria: "layouts",
    favorita: false,
    resumen: "Cada carpeta puede tener su propio layout.jsx que se apila dentro del layout padre.",
  },
];

export function getCategoria(slug) {
  return categorias.find((c) => c.slug === slug);
}

export function getNotasPorCategoria(slug) {
  return notas.filter((n) => n.categoria === slug);
}
