import Link from "next/link";
import { categorias, notas, getCategoria } from "@/data/notas";

export default function Home() {
  const ultimasNotas = notas.slice(0, 3);

  const caracteristicas = [
    { emoji: "📝", titulo: "Crea notas", texto: "Escribi apuntes con titulo y contenido en segundos.", href: "/notes/create" },
    { emoji: "🗂️", titulo: "Organiza por categoria", texto: "Agrupa tus notas en rutas, componentes y layouts.", href: "/categorias" },
    { emoji: "⭐", titulo: "Marca favoritas", texto: "Tene a mano las notas que mas consultas.", href: "/notes/favoritas" },
  ];

  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-indigo-950/50 to-transparent">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <span className="inline-block rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300">
            Proyecto de clase · Next.js 16
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
            Tus apuntes de <span className="text-indigo-400">Next.js</span>,
            <br /> ordenados y a un click
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Una app de notas para aprender y repasar los conceptos clave del framework:
            rutas, componentes y layouts.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/notes"
              className="rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
            >
              Ver mis notas
            </Link>
            <Link
              href="/notes/create"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/5"
            >
              Crear una nota
            </Link>
          </div>
        </div>
      </section>

      {/* CARACTERISTICAS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Que podes hacer</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caracteristicas.map((c) => (
            <Link
              key={c.titulo}
              href={c.href}
              className="rounded-xl border border-zinc-700 bg-zinc-800/60 p-6 transition hover:-translate-y-1 hover:border-indigo-500"
            >
              <span className="text-4xl">{c.emoji}</span>
              <h3 className="mt-4 text-xl font-semibold">{c.titulo}</h3>
              <p className="mt-2 text-sm text-zinc-400">{c.texto}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="border-y border-white/10 bg-zinc-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">Categorias</h2>
            <Link href="/categorias" className="text-sm text-indigo-400 hover:underline">
              Ver todas &rarr;
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <Link
                key={categoria.slug}
                href={`/categorias/${categoria.slug}`}
                className="rounded-full border border-zinc-600 px-5 py-2 text-sm transition hover:border-indigo-500 hover:text-indigo-300"
              >
                {categoria.emoji} {categoria.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ULTIMAS NOTAS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Ultimas notas</h2>
          <Link href="/notes" className="text-sm text-indigo-400 hover:underline">
            Ver todas &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {ultimasNotas.map((nota) => (
            <article key={nota.id} className="flex flex-col rounded-xl bg-zinc-800 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
                {getCategoria(nota.categoria).title}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{nota.title}</h3>
              <p className="mt-2 flex-1 text-sm text-zinc-400">{nota.resumen}</p>
              <Link href={`/notes/${nota.id}`} className="mt-4 text-sm text-blue-500 hover:underline">
                Ver Nota
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ESTADISTICAS */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid grid-cols-3 gap-4 rounded-2xl border border-zinc-700 bg-zinc-800/60 p-8 text-center">
          <div>
            <p className="text-4xl font-bold text-indigo-400">{notas.length}</p>
            <p className="text-sm text-zinc-400">Notas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-400">{categorias.length}</p>
            <p className="text-sm text-zinc-400">Categorias</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-400">{notas.filter((n) => n.favorita).length}</p>
            <p className="text-sm text-zinc-400">Favoritas</p>
          </div>
        </div>
      </section>
    </main>
  );
}
