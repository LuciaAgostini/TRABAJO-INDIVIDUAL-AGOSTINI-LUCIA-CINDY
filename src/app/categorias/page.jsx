import Link from "next/link";
import { categorias, getNotasPorCategoria } from "@/data/notas";

export const metadata = {
  title: "Categorias | Notas Next.js",
};

export default function CategoriasPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Categorias</h1>
      <p className="mt-3 text-zinc-400">
        Elegi una categoria para ver todas las notas que pertenecen a ella.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((categoria) => {
          const cantidad = getNotasPorCategoria(categoria.slug).length;
          return (
            <Link
              key={categoria.slug}
              href={`/categorias/${categoria.slug}`}
              className="group rounded-xl border border-zinc-700 bg-zinc-800 p-6 transition hover:-translate-y-1 hover:border-indigo-500"
            >
              <span className="text-3xl">{categoria.emoji}</span>
              <h2 className="mt-3 text-xl font-semibold group-hover:text-indigo-400">
                {categoria.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{categoria.description}</p>
              <p className="mt-4 text-sm font-medium text-indigo-400">
                {cantidad} {cantidad === 1 ? "nota" : "notas"} &rarr;
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
