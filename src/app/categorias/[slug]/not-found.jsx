import Link from "next/link";

export default function CategoriaNotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-6xl">🤷</p>
      <h1 className="mt-4 text-3xl font-bold">Esa categoria no existe</h1>
      <p className="mt-2 text-zinc-400">Revisa la URL o elegi una de las categorias disponibles.</p>
      <Link
        href="/categorias"
        className="mt-6 rounded-full bg-indigo-500 px-5 py-2 font-medium text-white hover:bg-indigo-400"
      >
        Ver categorias
      </Link>
    </main>
  );
}
