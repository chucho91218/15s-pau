'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    audioRef.current = new Audio('/documento.mp3')
    audioRef.current.loop = true

    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            cleanListeners()
          })
          .catch((err) => console.log("Bloqueado hasta interacción:", err))
      }
    }

    const cleanListeners = () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
    }

    window.addEventListener('click', handleFirstInteraction)
    window.addEventListener('touchstart', handleFirstInteraction)

    return () => {
      cleanListeners()
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 select-none pointer-events-auto">
      <button
        onClick={togglePlay}
        className="flex size-12 items-center justify-center rounded-full border border-white/[0.08] bg-neutral-950/60 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-950/20 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        aria-label={isPlaying ? "Mutear música" : "Reproducir música"}
      >
        {isPlaying ? (
          /* Ecualizador de boliche activo (Barras con rebote independiente) */
          <div className="flex items-end gap-[2.5px] h-3.5">
            <motion.div 
              animate={{ height: [4, 14, 6, 14, 4] }} 
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }} 
              className="w-[2px] bg-current rounded-full" 
            />
            <motion.div 
              animate={{ height: [10, 4, 14, 4, 10] }} 
              transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }} 
              className="w-[2px] bg-current rounded-full" 
            />
            <motion.div 
              animate={{ height: [6, 14, 4, 12, 6] }} 
              transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }} 
              className="w-[2px] bg-current rounded-full" 
            />
            <motion.div 
              animate={{ height: [12, 6, 12, 4, 12] }} 
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} 
              className="w-[2px] bg-current rounded-full" 
            />
          </div>
        ) : (
          /* Estado pausado (Líneas chatas indicando que está frenado) */
          <div className="flex items-end gap-[2.5px] h-3.5 opacity-40">
            <div className="w-[2px] h-1 bg-current rounded-full" />
            <div className="w-[2px] h-1 bg-current rounded-full" />
            <div className="w-[2px] h-1 bg-current rounded-full" />
            <div className="w-[2px] h-1 bg-current rounded-full" />
          </div>
        )}
      </button>
    </div>
  )
}