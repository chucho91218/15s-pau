'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Image from 'next/image'

export function InvitationShell({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function handleEnter() {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.4
      audio.play().catch(() => {
        /* autoplay blocked — ignore silently */
      })
    }
    setEntered(true)
  }

  return (
    <>
      {/* Música de fondo */}
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />

      <AnimatePresence>
        {!entered && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black px-6 text-center select-none"
          >
            {/* IMAGEN DE BIENVENIDA REAL - DSC_4300.jpg a pantalla completa */}
            <div className="absolute inset-0 h-full w-full pointer-events-none">
              <Image
                src="/DSC_4300.jpg"
                alt="Paula Welcome"
                fill
                priority
                className="object-cover object-center opacity-40 brightness-[0.6] contrast-[1.1]"
              />
              {/* Degradados oscuros integrados */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)]" />
            </div>

            {/* Resplandor ambiental azul noche por detrás */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-night/25 blur-[150px]"
            />

            {/* Contenido en Blanco y Plata */}
            <div className="relative z-10 flex flex-col items-center max-w-md">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs uppercase tracking-[0.45em] text-muted-foreground font-sans"
              >
                Estás invitado a
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-serif text-5xl font-light italic tracking-wide text-silver sm:text-6xl"
              >
                Los XV de Paula
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="my-6 h-px w-24 bg-gradient-to-r from-transparent via-silver/30 to-transparent"
              />

              {/* Botón en Blanco y Plata */}
              <motion.button
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEnter}
                className="group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-full border border-silver/40 bg-black/60 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-silver backdrop-blur-md transition-all duration-300 hover:border-silver/80 hover:bg-black hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] sm:text-xs"
              >
                <Mail className="size-4 opacity-80 group-hover:scale-110 transition-transform" />
                Ingresar a la Invitación
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animación de entrada al contenido principal */}
      <motion.div
        initial={false}
        animate={{
          opacity: entered ? 1 : 0,
          scale: entered ? 1 : 0.98,
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  )
}