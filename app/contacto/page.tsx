// app/contacto/page.tsx
export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 pb-16">
      <header className="mb-8 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          Contacto
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Cómo llegar a Romantime
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Estamos en la calle Blanquerna, una de las zonas más vivas de Palma.
          Puedes reservar online, llamarnos o escribirnos por WhatsApp.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-start">
        {/* Mapa */}
        <div className="space-y-3">
          <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-black/40">
            <iframe
              title="Mapa Romantime"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.4152474182506!2d2.643!3d39.582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297925d3b9f0a1d%3A0xXXXXXXXXXXXXXXX!2sCarrer%20de%20Blanquerna%2C%20Palma!5e0!3m2!1ses!2ses!4v1700000000000"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-xs text-neutral-500">
            El mapa muestra la zona de Blanquerna en Palma. Ajustaremos el
            punto exacto cuando tengamos la dirección y ficha de Google
            actualizada.
          </p>
        </div>

        {/* Datos de contacto */}
        <div className="space-y-6 text-sm text-neutral-200">
          <section className="space-y-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Dirección
            </h2>
            <p>
              Romantime Bar
              <br />
              Carrer de Blanquerna
              <br />
              070xx · Palma de Mallorca
            </p>
          </section>

          <section className="space-y-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Horario
            </h2>
            <p>
              Jueves a domingo · 19:00 – 01:00
              <br />
              (Horario orientativo, se puede ajustar según temporada)
            </p>
          </section>

          <section className="space-y-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Contacto
            </h2>
            <p>
              Teléfono: +34 xxx xxx xxx
              <br />
              WhatsApp: +34 xxx xxx xxx
              <br />
              Email: hola@romantime.es
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Enlaces rápidos
            </h2>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="/reservas"
                className="rounded-full border border-neutral-700 px-4 py-1.5 text-neutral-100 hover:border-neutral-400 hover:text-white transition-colors"
              >
                Reservar mesa
              </a>
              <a
                href="/menu"
                className="rounded-full border border-neutral-700 px-4 py-1.5 text-neutral-100 hover:border-neutral-400 hover:text-white transition-colors"
              >
                Ver menú
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-700 px-4 py-1.5 text-neutral-100 hover:border-neutral-400 hover:text-white transition-colors"
              >
                Abrir en Google Maps
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
