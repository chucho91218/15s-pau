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
      className={`absolute size-4 text-white pointer-events-none ${className}`}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
    </motion.svg>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full max-w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      
      {/* IMAGEN DE FONDO LIMPIA */}
      <div className="absolute inset-0 -z-20 h-full w-full max-w-full select-none pointer-events-none bg-black">
        
        {/* Celular: Enfoque corrido al 25% para mostrar más esferas */}
        <div className="block md:hidden absolute inset-0 h-full w-full">
          <Image
            src="/portadaoriginal1.png"
            alt="Paula Hero Background Mobile"
            fill
            priority
            className="object-cover object-[35%_center]"
          />
        </div>

        <div 
          className="hidden md:block absolute inset-0 h-full w-full"
          style={{
            backgroundImage: "url('/portadaoriginal1.png')",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Sombra ambiental neutra (negro/gris) detrás del texto para contraste */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 blur-[120px]"
      />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl">
        
        <Sparkle className="top-0 -left-6 md:-left-12 size-4 opacity-40" delay={0.2} duration={4} />
        <Sparkle className="top-24 -right-4 size-3 opacity-30" delay={1.5} duration={3} />
        <Sparkle className="bottom-28 -left-8 size-4.5 opacity-30" delay={0.7} duration={5} />
        <Sparkle className="bottom-12 right-12 size-3.5 opacity-40" delay={2.2} duration={3.5} />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-xs uppercase tracking-[0.55em] text-white sm:text-sm font-sans"
        >
          Mis XV Años
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-serif text-7xl font-light italic leading-none tracking-normal text-white [text-shadow:0_0_50px_rgba(255,255,255,0.15)] sm:text-8xl md:text-9xl"
        >
          Paula
        </motion.h1>

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

        <div className="mt-16 w-full text-white">
          <Countdown />
        </div>
      </div>
    </section>
  )
}