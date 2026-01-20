// app/page.tsx
export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 pb-16">
      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        {/* Texto principal */}
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Bar & Coctelería · Blanquerna · Palma
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
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
              className="rounded-full border border-neutral-700 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-100 hover:border-neutral-400 hover:text-white transition-colors"
            >
              Ver menú
            </a>
          </div>

          <div className="flex flex-col gap-1 text-xs text-neutral-400">
            <span>Jueves a domingo · 19:00 – 01:00</span>
            <span>Carrer de Blanquerna · Palma de Mallorca</span>
          </div>
        </div>

        {/* Bloque visual / “card” lateral */}
        <div className="relative">
          <div className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-black/90 p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Esta noche en Romantime
            </div>
            <p className="text-sm text-neutral-200">
              Reserva una mesa junto a la ventana, disfruta de nuestros
              cócteles de autor y déjate llevar por el ambiente de Blanquerna.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-neutral-400">
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
    </div>
  );
}
