// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romantime Bar – Blanquerna, Palma",
  description:
    "Cócteles y tapas de autor en la calle Blanquerna, Palma de Mallorca.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-neutral-900/60 bg-black/80 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
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
              <div className="hidden gap-6 text-sm md:flex">
                <a href="/" className="hover:text-white transition-colors">
                  Inicio
                </a>
                <a href="/menu" className="hover:text-white transition-colors">
                  Menú
                </a>
<a href="/reservas" className="hover:text-white transition-colors">
  Reservas
</a>
                <a
                  href="/contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </div>
              <a
                href="/reservas"
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-colors"
              >
                Reservar mesa
              </a>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-neutral-900/60 bg-black/90">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
<p>
  © {new Date().getFullYear()} Romantime Bar · Carrer de Blanquerna, Palma de Mallorca
</p>
<p>
  Abierto todos los días · 09:30 – 00:00 · Tel: +34 971 58 36 97
</p>
           
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

