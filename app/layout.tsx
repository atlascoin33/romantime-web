// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

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
          {/* Nuevo header reutilizable */}
          <Header />

          <main className="flex-1">{children}</main>

          <footer className="border-t border-neutral-900/60 bg-black/90">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p>
                  © {new Date().getFullYear()} Romantime Bar · Carrer de
                  Blanquerna, Palma de Mallorca
                </p>
                <p>
                  Abierto todos los días · 09:30 – 00:00 · Tel: +34 971 58 36 97
                </p>
              </div>
              <p className="text-[11px] text-neutral-600 md:text-right">
                Diseñado por{" "}
                <a
                  href="https://webstudioooo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-300"
                >
                  webstudioooo
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
