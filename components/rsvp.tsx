'use client'

import { Calendar, Info, ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

export function Rsvp() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b border-t border-zinc-100 bg-white px-6 py-20 text-black select-none sm:py-24">
      <div className="mx-auto max-w-xl">
        
        {/* Cabecera adaptada con el ícono de Calendario en negro */}
        <Reveal className="text-center">
          <Calendar strokeWidth={1.5} className="mx-auto mb-4 size-7 text-black" />
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-black">
            Asistencia
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-wide text-zinc-900 sm:text-5xl">
            Confirmá tu Lugar
          </h2>
        </Reveal>

        {/* Bloque Informativo */}
        <Reveal delay={0.1}>
          <div className="mt-12 space-y-6 rounded-2xl border border-zinc-200/60 bg-zinc-50/50 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 sm:p-8">
            
            {/* Fecha límite */}
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-4 text-zinc-700">
              <Calendar className="size-4 text-[#c5a059]" />
              <p className="font-sans text-xs uppercase tracking-wider">
                Confirmación hasta el <span className="font-semibold text-black">09/08/2026</span>
              </p>
            </div>
            
            {/* Precios de las Tarjetas */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 text-zinc-600">
                <Info className="mt-0.5 size-4 shrink-0 text-zinc-400" />
                <div className="w-full space-y-2 font-sans text-sm">
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                    <span className="text-zinc-400">Valor de la tarjeta:</span>
                    <span className="font-medium text-zinc-900">$68.000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                    <span className="text-zinc-400">Adolescentes (14 a 16 años):</span>
                    <span className="font-medium text-zinc-900">$58.000</span>
                  </div>
                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-zinc-400">Niños (4 a 13 años):</span>
                    <span className="font-medium text-zinc-900">$30.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota */}
            <p className="pt-2 text-[11px] leading-relaxed text-zinc-400">
              Serás redirigido al sistema de reservas externo gestionado por MOHA Eventos para completar tus datos de asistencia.
            </p>

            {/* Botón de Confirmación */}
            <a
              href="https://moha-eventos.web.app/mis-15-pauli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-4 text-xs uppercase tracking-[0.2em] text-zinc-800 transition-all duration-300 hover:border-[#d4af37]/60 hover:bg-zinc-50 hover:shadow-sm"
            >
              Realizar Reserva de Tarjeta
              <ArrowUpRight className="size-4 text-[#c5a059] opacity-70" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}