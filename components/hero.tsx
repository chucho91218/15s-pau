'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Countdown } from './countdown'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      
      {/* IMAGEN DE FONDO - Reemplazada por DSC_4300.jpg */}
      <div className="absolute inset-0 -z-20 h-full w-full select-none pointer-events-none bg-black">
        <Image
          src="/DSC_4300.jpg"
          alt="Paula Hero"
          fill
          priority
          className="object-cover object-center opacity-40 brightness-[0.65] contrast-[1.15]"
        />
        {/* Capas de fusionado suave para fundir los bordes con el resto de la invitacion */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Brillo ambiental azul noche detrás del texto */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-night/20 blur-[130px]"
      />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-xs uppercase tracking-[0.55em] text-muted-foreground sm:text-sm font-sans"
        >
          Mis XV Años
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-serif text-7xl font-light italic leading-none tracking-normal text-silver [text-shadow:0_0_50px_rgba(255,255,255,0.15)] sm:text-8xl md:text-9xl"
        >
          Paula
        </motion.h1>

        {/* Divisor en degradado Dorado Premium */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="mx-auto mt-8 h-px w-40 origin-center bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-sm tracking-[0.25em] text-[#c5a059] font-sans font-medium"
        >
          15 · AGOSTO · 2026
        </motion.p>

        <div className="mt-16 w-full">
          <Countdown />
        </div>
      </div>
    </section>
  )
}