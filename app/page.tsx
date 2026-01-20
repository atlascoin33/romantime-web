import Image from "next/image";

// app/page.tsx
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Fondo con la foto del bar */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/bar-romantime.webp"
          alt="Fachada de Bar Romantime en Blanquerna"
          fill
          className="object-cover opacity-50 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Contenido por encima del fondo */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-14 pb-24">
        <section className="grid gap-12 md:grid-cols-[1.4fr,1fr]">
          {/* Texto principal */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Bar & Coctelería · Blanquerna · Palma
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Romantime Bar
            </h1>

            <p className="max-w-xl text-sm text-neutral-300 sm:text-base">
              Cócteles de autor, tapas para compartir y un ambiente íntimo en una
              de las calles más vivas de Palma. Luces bajas, música suave y un
              espacio pensado para citas y noches especiales.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/reservas"
                className="rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-neutral-200 transition-colors"
              >
                Reservar mesa
              </a>
              <a
                href="/menu"
                className="rounded-full border border-neutral-700 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-100 hover:bg-neutral-900/60 transition-colors"
              >
                Ver menú
              </a>
            </div>

            <div className="flex flex-col gap-1 text-xs text-neutral-400">
              <span>Lunes a domingo · 09:30 – 00:00</span>
              <span>Carrer de Blanquerna · Palma de Mallorca</span>
            </div>
          </div>

          {/* Bloque visual / “card” lateral */}
          <div className="relative">
            <div className="rounded-3xl border border-neutral-800 bg-black/60 p-6 backdrop-blur">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Esta noche en Romantime
              </div>
              <p className="text-sm text-neutral-200">
                Reserva una mesa junto a la ventana, disfruta de nuestros cócteles
                de autor y déjate llevar por el ambiente de Blanquerna.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-neutral-300">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500">
                    Especialidad
                  </p>
                  <p className="mt-1 text-neutral-100">
                    Signature cocktails y tapas de mercado.
                  </p>
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500">
                    Ambiente
                  </p>
                  <p className="mt-1 text-neutral-100">
                    Luces bajas, música suave y mesas íntimas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección info local */}
        <section className="mt-10 rounded-2xl border border-neutral-800 bg-black/70 px-4 py-3 text-xs text-neutral-300 sm:text-sm flex flex-wrap gap-3">
          <span>📍 Carrer de Blanquerna, Palma</span>
          <span>⏰ Abierto todos los días · 09:30 – 00:00</span>
          <span>☎️ +971 58 36 97</span>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Sobre Romantime
            </h2>
            <p className="text-sm text-neutral-300">
              Romantime es un bar de ambiente íntimo en el corazón de Blanquerna,
              pensado para parejas, grupos pequeños y noches tranquilas de
              cócteles, tapas y buena conversación.
            </p>
          </div>
          <div className="space-y-3 text-sm text-neutral-300">
            <p>
              Cuidamos la música, la luz y los detalles para que puedas desconectar
              del día a día. Nuestra carta mezcla clásicos y propuestas propias,
              siempre con producto de calidad.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
