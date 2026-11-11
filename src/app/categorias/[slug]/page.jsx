import Link from "next/link";
import { notFound } from "next/navigation";
import { categorias, getCategoria, getNotasPorCategoria } from "@/data/notas";

// Pre-genera las paginas de cada categoria en el build
export function generateStaticParams() {
  return categorias.map((categoria) => ({ slug: categoria.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categoria = getCategoria(slug);
  return {
    title: categoria ? `${categoria.title} | Notas Next.js` : "Categoria no encontrada",
  };
}

export default async function CategoriaPage({ params }) {
  // En Next 16 params es una Promise: hay que usar await
  const { slug } = await params;

  const categoria = getCategoria(slug);
  if (!categoria) notFound();

  const notasDeLaCategoria = getNotasPorCategoria(slug);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link href="/categorias" className="text-sm font-semibold text-indigo-400 hover:underline">
        &larr; Todas las categorias
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <span className="text-5xl">{categoria.emoji}</span>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{categoria.title}</h1>
          <p className="mt-1 text-sm text-zinc-500">
            URL actual: <code className="text-zinc-300">/categorias/{slug}</code>
          </p>
        </div>
      </div>
      <p className="mt-4 text-zinc-400">{categoria.description}</p>

      <ul className="mt-10 space-y-4">
        {notasDeLaCategoria.map((nota) => (
          <li key={nota.id} className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-semibold">{nota.title}</h2>
              {nota.favorita && <span title="Favorita">⭐</span>}
            </div>
            <p className="mt-2 text-sm text-zinc-400">{nota.resumen}</p>
            <Link
              href={`/notes/${nota.id}`}
              className="mt-3 inline-block text-sm text-blue-500 hover:underline"
            >
              Ver nota
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
