'use client'

import { Calendar, Info, ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { DiscoBall } from './disco-ball'

export function Rsvp() {
  return (
    /* w-screen y márgenes negativos para romper contenedores del layout en compu */
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white text-black px-6 py-20 sm:py-24 select-none border-t border-b border-zinc-100">
      <div className="mx-auto max-w-xl">
        
       {/* Cabecera adaptada para fondo claro con indicador en Negro */}
    <Reveal className="text-center">
      <DiscoBall variant="icon" className="mb-4 text-[#c5a059]" />
      <p className="text-xs uppercase tracking-[0.4em] text-black font-medium">
        Asistencia
      </p>
      <h2 className="mt-3 font-serif text-4xl font-light tracking-wide text-zinc-900 sm:text-5xl">
        Confirmá tu Lugar
      </h2>
    </Reveal>

        {/* Bloque Informativo adaptado a estética minimalista clara */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-zinc-200/60 bg-zinc-50/50 p-6 backdrop-blur-md sm:p-8 space-y-6 hover:border-[#d4af37]/40 transition-all duration-500 shadow-sm">
            
            {/* Fecha límite */}
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-4 text-zinc-700">
              <Calendar className="size-4 text-[#c5a059]" />
              <p className="text-xs uppercase tracking-wider font-sans">
                Confirmación hasta el <span className="font-semibold text-black">09/08/2026</span>
              </p>
            </div>
            
            {/* Precios de las Tarjetas */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 text-zinc-600">
                <Info className="size-4 mt-0.5 shrink-0 text-zinc-400" />
                <div className="text-sm font-sans space-y-2 w-full">
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-2">
                    <span className="text-zinc-400">Valor de la tarjeta:</span>
                    <span className="text-zinc-900 font-medium">$68.000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-2">
                    <span className="text-zinc-400">Adolescentes (14 a 16 años):</span>
                    <span className="text-zinc-900 font-medium">$58.000</span>
                  </div>
                  <div className="flex justify-between items-center pt-0.5">
                    <span className="text-zinc-400">Niños (4 a 13 años):</span>
                    <span className="text-zinc-900 font-medium">$30.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota */}
            <p className="text-[11px] text-zinc-400 leading-relaxed pt-2">
              Serás redirigido al sistema de reservas externo gestionado por MOHA Eventos para completar tus datos de asistencia.
            </p>

            {/* Botón de Confirmación con estética minimalista clara */}
            <a
              href="https://moha-eventos.web.app/mis-15-pauli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-4 text-xs uppercase tracking-[0.2em] text-zinc-800 transition-all duration-300 hover:border-[#d4af37]/60 hover:bg-zinc-50 hover:shadow-sm"
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