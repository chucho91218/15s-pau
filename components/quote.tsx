'use client'

import { motion } from 'framer-motion'
import { Reveal } from './reveal'

export function Quote() {
  return (
    /* w-screen y los márgenes negativos en la compu rompen cualquier max-w del padre */
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white text-black py-28 px-6 text-center select-none border-t border-b border-zinc-100">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex flex-col items-center justify-center">
            {/* Comilla de apertura cambiada a Negro */}
            <span className="font-serif text-5xl text-black/80 leading-none select-none">
              “
            </span>

            {/* Texto original con contraste optimizado para fondo blanco */}
            <p className="mt-6 font-serif text-xl italic leading-relaxed tracking-wide text-zinc-800 sm:text-2xl md:text-[1.65rem] md:leading-loose">
              Cada etapa de la vida trae momentos inolvidables, y hoy llegó uno que soñé durante mucho tiempo. Quiero celebrar mis XV rodeada de personas que son importantes para mí, compartiendo risas, emociones y una noche que quedará para siempre en nuestros recuerdos.
            </p>

            {/* Comilla de cierre cambiada a Negro */}
            <span className="font-serif text-5xl text-black/80 leading-none select-none mt-6">
              ”
            </span>

            {/* Divisor sutil oscuro */}
            <div className="mt-12 h-px w-20 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}