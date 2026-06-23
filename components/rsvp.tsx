'use client'

import { Calendar, Info, ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { DiscoBall } from './disco-ball'

export function Rsvp() {
  return (
    <section className="px-6 py-20 sm:py-24 select-none">
      <div className="mx-auto max-w-xl">
        
        {/* Cabecera unificada con la palabra Asistencia en Dorado */}
        <Reveal className="text-center">
          <DiscoBall variant="icon" className="mb-4 text-[#c5a059]" />
          <p className="text-xs uppercase tracking-[0.4em] text-[#c5a059] font-medium">
            Asistencia
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-wide bg-gradient-to-r from-neutral-100 via-white to-neutral-400 bg-clip-text text-transparent sm:text-5xl">
            Confirmá tu Lugar
          </h2>
        </Reveal>

        {/* Bloque Informativo Glassmorphism con bordes y efectos dorados */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-white/[0.06] bg-neutral-950/40 p-6 backdrop-blur-md sm:p-8 space-y-6 hover:border-[#d4af37]/30 transition-all duration-500">
            
            {/* Fecha límite */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4 text-white/80">
              <Calendar className="size-4 text-[#c5a059]" />
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

            {/* Botón de Confirmación con Glow Dorado Premium */}
            <a
              href="https://moha-eventos.web.app/mis-15-pauli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#d4af37]/30 bg-amber-950/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/90 transition-all duration-300 hover:bg-[#d4af37]/20 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]"
            >
              Realizar Reserva de Tarjeta
              <ArrowUpRight className="size-4 opacity-70 text-[#c5a059]" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}