'use client'

import { Calendar, Info, ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

export function Rsvp() {
  return (
    <section className="px-6 py-20 sm:py-24 select-none">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Asistencia
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-wide bg-gradient-to-r from-neutral-100 via-white to-neutral-400 bg-clip-text text-transparent sm:text-5xl">
            Confirmá tu Lugar
          </h2>
        </Reveal>

        {/* Bloque Informativo Glassmorphism */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-white/[0.06] bg-neutral-950/40 p-6 backdrop-blur-md sm:p-8 space-y-6 hover:border-blue-500/20 transition-all duration-500">
            
            {/* Fecha límite */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4 text-white/80">
              <Calendar className="size-4 text-blue-400" />
              <p className="text-xs uppercase tracking-wider font-sans">
                Confirmación hasta el <span className="font-semibold text-white">09/08/2026</span>
              </p>
            </div>
            
            {/* Precios de las Tarjetas */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 text-white/60">
                <Info className="size-4 mt-0.5 shrink-0 text-white/20" />
                <div className="text-sm font-sans space-y-2 w-full">
                  <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                    <span className="text-white/40">Valor de la tarjeta:</span>
                    <span className="text-white font-medium">$68.000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                    <span className="text-white/40">Adolescentes (14 a 16 años):</span>
                    <span className="text-white font-medium">$58.000</span>
                  </div>
                  <div className="flex justify-between items-center pt-0.5">
                    <span className="text-white/40">Niños (4 a 13 años):</span>
                    <span className="text-white font-medium">$30.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota */}
            <p className="text-[11px] text-white/30 leading-relaxed pt-2">
              Serás redirigido al sistema de reservas externo gestionado por MOHA Eventos para completar tus datos de asistencia.
            </p>

            {/* Botón de Confirmación con Glow */}
            <a
              href="https://moha-eventos.web.app/mis-15-pauli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-950/20 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/90 transition-all duration-300 hover:bg-blue-600/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
            >
              Realizar Reserva de Tarjeta
              <ArrowUpRight className="size-4 opacity-70" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}