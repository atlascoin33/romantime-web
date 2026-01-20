// app/reservas/page.tsx
"use client";

import { FormEvent, useState } from "react";

type ReservaFormData = {
  nombre: string;
  telefono: string;
  fecha: string;
  hora: string;
  personas: string;
  mensaje: string;
};

export default function ReservasPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setHasSubmitted(false);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data: ReservaFormData = {
      nombre: form.nombre.value,
      telefono: form.telefono.value,
      fecha: form.fecha.value,
      hora: form.hora.value,
      personas: form.personas.value,
      mensaje: form.mensaje.value,
    };

    try {
      console.log("Reserva Romantime:", data);
      setHasSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Ha ocurrido un error al enviar la reserva. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pt-14 pb-24">
      <header className="mb-8 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          Reservas
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Reserva tu mesa
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Completa el formulario y te confirmaremos la reserva lo antes posible.
          Para grupos grandes o eventos especiales, añade los detalles en el
          mensaje.
        </p>
      </header>

      <form className="space-y-6 max-w-xl" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1 text-sm">
            <label className="block text-neutral-300" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-100 outline-none ring-0 placeholder:text-neutral-500 focus:border-neutral-400"
              placeholder="Nombre y apellidos"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-neutral-300" htmlFor="telefono">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="w-full rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-100 outline-none ring-0 placeholder:text-neutral-500 focus:border-neutral-400"
              placeholder="+34 ..."
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1 text-sm">
            <label className="block text-neutral-300" htmlFor="fecha">
              Fecha
            </label>
            <input
              id="fecha"
              name="fecha"
              type="date"
              required
              className="w-full rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-100 outline-none ring-0 focus:border-neutral-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-neutral-300" htmlFor="hora">
              Hora
            </label>
            <input
              id="hora"
              name="hora"
              type="time"
              required
              className="w-full rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-100 outline-none ring-0 focus:border-neutral-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-neutral-300" htmlFor="personas">
              Personas
            </label>
            <input
              id="personas"
              name="personas"
              type="number"
              min={1}
              max={10}
              required
              className="w-full rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-100 outline-none ring-0 focus:border-neutral-400"
              placeholder="2"
            />
          </div>
        </div>

        <div className="space-y-1 text-sm">
          <label className="block text-neutral-300" htmlFor="mensaje">
            Mensaje (opcional)
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            className="w-full rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-100 outline-none ring-0 placeholder:text-neutral-500 focus:border-neutral-400"
            placeholder="¿Aniversario, celebración, alguna petición especial...?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-neutral-200 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Enviando..." : "Enviar solicitud de reserva"}
        </button>

        {hasSubmitted && !error && (
          <p className="text-xs text-emerald-400">
            Hemos recibido tu solicitud. Te contactaremos para confirmar la
            reserva.
          </p>
        )}

        {error && (
          <p className="text-xs text-red-400">
            {error}
          </p>
        )}

        <p className="text-xs text-neutral-500">
          Las reservas no se consideran confirmadas hasta que recibas una
          respuesta por WhatsApp, llamada o email.
        </p>
      </form>
    </div>
  );
}
