import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Notas Next.js",
  description: "App de notas para aprender Next.js: rutas, layouts y componentes.",
};

// Enlaces principales: se usan en el nav y en el footer
const enlaces = [
  { href: "/", label: "Inicio" },
  { href: "/notes", label: "Notes" },
  { href: "/notes/favoritas", label: "Favoritas" },
  { href: "/categorias", label: "Categorias" },
  { href: "/about", label: "About" },
];

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ---------- NAV ---------- */}
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-900/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex size-8 items-center justify-center rounded-md bg-indigo-500">N</span>
              Notas Next
            </Link>

            <div className="flex flex-wrap items-center gap-1">
              {enlaces.map((enlace) => (
                <Link
                  key={enlace.href}
                  href={enlace.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  {enlace.label}
                </Link>
              ))}
              <Link
                href="/notes/create"
                className="ml-2 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                + Nueva nota
              </Link>
            </div>
          </div>
        </nav>

        {/* ---------- CONTENIDO ---------- */}
        <div className="flex flex-1 flex-col">{children}</div>

        {/* ---------- FOOTER ---------- */}
        <footer className="border-t border-white/10 bg-gray-900">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            <div>
              <h2 className="text-lg font-bold text-white">Notas Next</h2>
              <p className="mt-3 text-sm text-gray-400">
                Proyecto de la materia hecho con Next.js, React y Tailwind CSS para
                guardar y organizar apuntes sobre el framework.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
                Navegacion
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {enlaces.map((enlace) => (
                  <li key={enlace.href}>
                    <Link href={enlace.href} className="text-gray-400 hover:text-white">
                      {enlace.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
                Rutas del proyecto
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/categorias" className="text-gray-400 hover:text-white">/categorias (nueva)</Link></li>
                <li><Link href="/notes/favoritas" className="text-gray-400 hover:text-white">/notes/favoritas (anidada)</Link></li>
                <li><Link href="/categorias/rutas" className="text-gray-400 hover:text-white">/categorias/[slug] (dinamica)</Link></li>
                <li><Link href="/notes/create" className="text-gray-400 hover:text-white">/notes/create</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
                Sobre mi
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>👤 Agostini Lucia Cindy</li>
                <li>🎓 Tercer año · Programacion</li>
                <li>✉️ tu-email@ejemplo.com</li>
                <li>
                  <a
                    href="https://github.com/tu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    🐙 github.com/tu-usuario
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Notas Next · Hecho con Next.js 16
          </div>
        </footer>
      </body>
    </html>
  );
}
