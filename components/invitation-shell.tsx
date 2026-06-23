'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import { DiscoBall } from './disco-ball'

export function InvitationShell({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [showFlash, setShowFlash] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function handleEnter() {
    if (isConnecting) return
    setIsConnecting(true)

    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.4
      audio.play().catch(() => {
        /* autoplay blocked — ignore silently */
      })
    }

    setTimeout(() => {
      setShowFlash(true)
    }, 1500)

    setTimeout(() => {
      setEntered(true)
    }, 1800)
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
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black px-6 text-center select-none"
          >
            {/* IMAGEN DE BIENVENIDA REAL */}
            <div className="absolute inset-0 h-full w-full pointer-events-none">
              <Image
                src="/DSC_4300.jpg"
                alt="Paula Welcome"
                fill
                priority
                className="object-cover object-center opacity-40 brightness-[0.6] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)]" />
            </div>

            {/* Resplandor ambiental azul noche por detrás */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900/25 blur-[150px]"
            />

            {/* Contenido en Blanco y Plata */}
            <div className="relative z-10 flex flex-col items-center max-w-md">
              
              {/* Bola de boliche en blanco neón puro */}
              <AnimatePresence>
                {isConnecting && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    animate={{ opacity: 1, scale: 1.2, y: 0 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    className="mb-6 [filter:drop-shadow(0_0_25px_rgba(255,255,255,0.7))]"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                      className="size-16 text-white"
                    >
                      <DiscoBall variant="icon" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.p
                animate={{ opacity: isConnecting ? 0 : 1 }}
                className="text-xs uppercase tracking-[0.45em] text-muted-foreground font-sans"
              >
                Estás invitado a
              </motion.p>

              <motion.h2
                animate={{ 
                  scale: isConnecting ? 0.95 : 1,
                  opacity: isConnecting ? 0.4 : 1,
                  filter: isConnecting ? "blur(4px)" : "blur(0px)"
                }}
                transition={{ duration: 0.5 }}
                className="mt-4 font-serif text-5xl font-light italic tracking-wide text-white/90 sm:text-6xl"
              >
                Los XV de Paula
              </motion.h2>

              <motion.div
                animate={{ opacity: isConnecting ? 0 : 1 }}
                className="my-6 h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              {/* Botón Dinámico en Blanco/Plata */}
              <motion.button
  disabled={isConnecting}
  onClick={handleEnter}
  animate={{
    // Si está cargando: fondo blanco puro. Si no: fondo negro transparente original.
    backgroundColor: isConnecting ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0.6)",
    border: isConnecting ? "1px solid rgba(255, 255, 255, 1)" : "1px solid rgba(255, 255, 255, 0.4)",
  }}
  whileHover={!isConnecting ? { scale: 1.03 } : {}}
  whileTap={!isConnecting ? { scale: 0.98 } : {}}
  className="group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.3em] backdrop-blur-md transition-all duration-300 sm:text-xs text-white/80"
>
  {!isConnecting ? (
    <>
      <Mail className="size-4 opacity-80 group-hover:scale-110 transition-transform" />
      Ingresar a la Invitación
    </>
  ) : (
    // Texto negro puro cuando está cargando
    <span className="text-black font-semibold tracking-[0.4em] animate-pulse">
      Iniciando fiesta...
    </span>
  )}
              </motion.button>
            </div>

            {/* Cortina / Destello Flash Blanco a Pantalla Completa */}
            <AnimatePresence>
              {showFlash && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 0.4, times: [0, 0.15, 0.4, 1] }}
                  className="absolute inset-0 z-50 bg-white"
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
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