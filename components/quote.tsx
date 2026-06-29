'use client'

import { motion } from 'framer-motion'
import { Reveal } from './reveal'
import { Sparkles } from 'lucide-react'

export function Quote() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex w-screen flex-col items-center justify-center overflow-hidden border-b border-t border-zinc-100 bg-white px-6 py-28 text-center text-black select-none">
      
      {/* Fondo Aesthetic: Gradiente muy sutil y comilla gigante de agua */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(248,248,250,1)_0%,rgba(255,255,255,1)_100%)]">
        <span className="absolute -translate-y-4 select-none font-serif text-[24rem] leading-none text-zinc-100/70 md:text-[32rem]">
          “
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <div className="flex flex-col items-center justify-center">
            
            {/* Detalle premium en dorado */}
            <Sparkles strokeWidth={1.2} className="mb-8 size-6 text-[#c5a059] opacity-90" />

            {/* Comilla de apertura */}
            <span className="font-serif text-5xl leading-none text-black/80 select-none">
              “
            </span>

            {/* Texto principal */}
            <p className="mt-6 font-serif text-xl italic leading-relaxed tracking-wide text-zinc-800 sm:text-2xl md:text-[1.65rem] md:leading-loose">
              Cada etapa de la vida trae momentos inolvidables, y hoy llegó uno que soñé durante mucho tiempo. Quiero celebrar mis XV rodeada de personas que son importantes para mí, compartiendo risas, emociones y una noche que quedará para siempre en nuestros recuerdos.
            </p>

            {/* Comilla de cierre */}
            <span className="mt-6 font-serif text-5xl leading-none text-black/80 select-none">
              ”
            </span>

            {/* Divisor sutil */}
            <div className="mt-12 h-px w-20 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}