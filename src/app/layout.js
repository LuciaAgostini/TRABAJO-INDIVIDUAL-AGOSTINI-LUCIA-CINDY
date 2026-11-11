```jsx
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
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-