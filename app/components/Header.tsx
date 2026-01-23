"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="border-b border-neutral-900/60 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Logo + nombre */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-romantime.png"
            alt="Bar Romantime"
            className="h-8 w-auto"
          />
          <span className="text-sm font-semibold tracking-[0.25em] uppercase">
            Romantime
          </span>
        </div>

        {/* Navegación escritorio */}
        <div className="hidden gap-6 text-sm md:flex">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <Link href="/menu" className="hover:text-white transition-colors">
            Menú
          </Link>
          <Link
            href="/reservas"
            className="hover:text-white transition-colors"
          >
            Reservas
          </Link>
          <Link
            href="/contacto"
            className="hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Botón reservar (solo escritorio) */}
        <Link
          href="/reservas"
          className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-colors md:inline-flex"
        >
          Reservar mesa
        </Link>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-full border border-neutral-700 p-2 text-neutral-200 hover:border-neutral-400 hover:text-white transition-colors md:hidden"
          aria-label="Abrir menú"
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-transform ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-transform ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="border-t border-neutral-900/60 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-4 gap-3 text-sm">
            <Link
              href="/"
              onClick={closeMenu}
              className="py-2 border-b border-neutral-900/60 hover:text-white transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/menu"
              onClick={closeMenu}
              className="py-2 border-b border-neutral-900/60 hover:text-white transition-colors"
            >
              Menú
            </Link>
            <Link
              href="/reservas"
              onClick={closeMenu}
              className="py-2 border-b border-neutral-900/60 hover:text-white transition-colors"
            >
              Reservas
            </Link>
            <Link
              href="/contacto"
              onClick={closeMenu}
              className="py-2 hover:text-white transition-colors"
            >
              Contacto
            </Link>

            <Link
              href="/reservas"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-colors"
            >
              Reservar mesa
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
