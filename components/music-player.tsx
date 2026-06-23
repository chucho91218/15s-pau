'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Inicializar el audio apuntando al archivo en la carpeta public
    audioRef.current = new Audio('/photograp.mp3')
    audioRef.current.loop = true

    // Intentar reproducir automáticamente ante cualquier primer clic en la pantalla
    // Esto puentea el bloqueo de reproducción automática del navegador
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            cleanListeners()
          })
          .catch((err) => console.log("Reproducción automática bloqueada hasta más interacción:", err))
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
    // Botón flotante premium en la esquina inferior izquierda
    <div className="fixed bottom-6 left-6 z-50 select-none pointer-events-auto">
      <button
        onClick={togglePlay}
        className="flex size-10 items-center justify-center rounded-full border border-white/[0.08] bg-neutral-950/60 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-950/20 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        aria-label={isPlaying ? "Mutear música" : "Reproducir música"}
      >
        {isPlaying ? (
          <Volume2 className="size-4 animate-pulse" strokeWidth={1.5} />
        ) : (
          <VolumeX className="size-4 opacity-60" strokeWidth={1.5} />
        )}
      </button>
    </div>
  )
}