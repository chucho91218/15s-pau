'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Countdown } from './countdown'

function Sparkle({ className = "", delay = 0, duration = 3 }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      animate={{ 
        opacity: [0.1, 0.7, 0.1], 
        scale: [0.7, 1.1, 0.7],
        rotate: [0, 90, 180] 
      }}
      transition={{ 
        repeat: Infinity, 
        duration: duration, 
        delay: delay,
        ease: "easeInOut" 
      }}
      className={`absolute size-4 text-white/60 pointer-events-none ${className}`}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
    </motion.svg>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      
      {/* FONDO UNIFICADO Y OPTIMIZADO */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-black">
        <Image
          src="/portadaoriginal.png"
          alt="Fondo Mis XV Paula"
          fill
          priority
          quality={90}
          className="object-cover md:object-contain object-center opacity-90"
        />
        {/* Overlay para dar contraste y legibilidad */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center justify-center">
        
        {/* Destellos ajustados */}
        <Sparkle className="top-4 -left-4 md:-left-12 opacity-40" delay={0.2} duration={4} />
        <Sparkle className="top-32 -right-2 md:-right-8 size-3 opacity-30" delay={1.5} duration={3} />
        <Sparkle className="bottom-36 -left-6 size-5 opacity-30" delay={0.7} duration={5} />
        <Sparkle className="bottom-16 right-8 size-3.5 opacity-40" delay={2.2} duration={3.5} />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-xs font-sans tracking-[0.55em] text-white/60 uppercase sm:text-sm"
        >
          Mis XV Años
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-serif text-7xl font-light italic leading-none tracking-tight text-white/95 drop-shadow-2xl sm:text-8xl md:text-9xl"
        >
          Paula
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="mx-auto mt-8 h-px w-32 md:w-40 origin-center bg-gradient-to-r from-transparent via-[#c5a059]/70 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 font-sans text-xs sm:text-sm font-medium tracking-[0.25em] text-[#c5a059]"
        >
          15 · AGOSTO · 2026
        </motion.p>

        {/* CONTADOR CON ANIMACIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 w-full"
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  )
}