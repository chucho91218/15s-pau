'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DiscoBall } from './disco-ball'

export function ClubBackdrop() {
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    const triggerFlash = () => {
      setFlash(true)
      setTimeout(() => setFlash(false), 150)
      const nextTimeout = Math.random() * (7000 - 3000) + 3000
      return setTimeout(triggerFlash, nextTimeout)
    }

    const timer = setTimeout(triggerFlash, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 -z-30 h-full w-full overflow-hidden bg-black select-none pointer-events-none">
      {/* Fondo base NEGRO PURO absoluto para máximo contraste */}
      <div className="absolute inset-0 bg-black" />

      {/* Luces ambientales: Haz de luz azul neón concentrado (Simula iluminación de boliche) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[70vw] w-[70vw] max-w-[650px] max-h-[650px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
      
      {/* Destello azul secundario abajo a la derecha para dar profundidad */}
      <div className="absolute right-[-10%] bottom-[-10%] h-[50vw] w-[50vw] max-w-[450px] max-h-[450px] rounded-full bg-blue-900/[0.06] blur-[120px]" />

      {/* BOLAS DE BOLICHE REALES FLOTANDO EN EL FONDO */}
      {/* Arriba a la derecha */}
      <DiscoBall variant="floating" className="-right-12 top-28 size-64 opacity-[0.035]" />
      {/* Abajo a la izquierda */}
      <DiscoBall variant="floating" className="-left-16 bottom-1/4 size-72 opacity-[0.035]" />

      {/* Efecto estrobo */}
      <motion.div
        animate={{ opacity: flash ? 0.04 : 0 }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className="absolute inset-0 bg-white mix-blend-overlay"
      />

      {/* Partículas de brillo estilo glitter */}
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  )
}