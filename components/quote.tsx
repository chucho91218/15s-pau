'use client'

import { motion } from 'framer-motion'
import { Reveal } from './reveal'

export function Quote() {
  return (
    <section className="px-6 py-28 text-center select-none bg-transparent">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex flex-col items-center justify-center">
            {/* Comilla de apertura en Oro Premium Fino */}
            <span className="font-serif text-5xl text-amber-400/40 leading-none select-none">
              “
            </span>

            {/* Texto con espaciado optimizado para fondo oscuro */}
            <p className="mt-6 font-serif text-xl italic leading-relaxed tracking-wide text-neutral-200 sm:text-2xl md:text-[1.65rem] md:leading-loose">
              Cada etapa de la vida trae momentos inolvidables, y hoy llegó uno que soñé durante mucho tiempo. Quiero celebrar mis XV rodeada de personas que son importantes para mí, compartiendo risas, emociones y una noche que quedará para siempre en nuestros recuerdos.
            </p>

            {/* Comilla de cierre */}
            <span className="font-serif text-5xl text-amber-400/40 leading-none select-none mt-6">
              ”
            </span>

            {/* Divisor sutil */}
            <div className="mt-12 h-px w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}