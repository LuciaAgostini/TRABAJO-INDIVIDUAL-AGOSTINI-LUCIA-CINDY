import Link from "next/link";
import { notas, getCategoria } from "@/data/notas";

export const metadata = {
  title: "Notas favoritas | Notas Next.js",
};

// Ruta anidada: vive dentro de /notes, por lo que reutiliza app/notes/layout.jsx (el sidebar)
export default function FavoritasPage() {
  const favoritas = notas.filter((nota) => nota.favorita);

  return (
    <main className="w-full max-w-3xl flex-1 px-10 py-16">
      <Link href="/notes" className="text-sm font-semibold text-indigo-400 hover:underline">
        &larr; Back to Notes
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight">⭐ Notas favoritas</h1>
      <p className="mt-2 text-zinc-400">
        {favoritas.length} notas marcadas como favoritas.
      </p>

      <div className="mt-8 space-y-4">
        {favoritas.map((nota) => {
          const categoria = getCategoria(nota.categoria);
          return (
            <article key={nota.id} className="rounded-lg bg-zinc-800 p-6">
              <Link
                href={`/categorias/${categoria.slug}`}
                className="text-xs font-semibold uppercase tracking-wide text-indigo-400 hover:underline"
              >
                {categoria.emoji} {categoria.title}
              </Link>
              <h2 className="mt-1 text-lg font-semibold">{nota.title}</h2>
              <p className="mt-2 text-sm text-zinc-400">{nota.resumen}</p>
              <Link href={`/notes/${nota.id}`} className="mt-3 inline-block text-sm text-blue-500 hover:underline">
                Ver Nota
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
