'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const EVENT_DATE = new Date('2026-08-15T21:30:00-03:00')

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, EVENT_DATE.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const segments = [
    { value: time ? String(time.days).padStart(2, '0') : '00', label: 'Días' },
    { value: time ? String(time.hours).padStart(2, '0') : '00', label: 'Horas' },
    { value: time ? String(time.minutes).padStart(2, '0') : '00', label: 'Min' },
    { value: time ? String(time.seconds).padStart(2, '0') : '00', label: 'Seg' },
  ]

  return (
    <div className="flex w-full select-none flex-col items-center justify-center">
      {/* Números sueltos en BLANCO PURO */}
      <div className="flex items-center justify-center font-serif text-4xl font-light tracking-wide text-white sm:text-5xl md:text-6xl">
        {segments.map((seg, i) => (
          <div key={seg.label} className="flex items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="tabular-nums drop-shadow-md"
            >
              {seg.value}
            </motion.span>
            
            {/* Dos puntos en blanco con un poco de transparencia para no competir con los números */}
            {i < segments.length - 1 && (
              <span className="mx-2 -translate-y-[2px] font-sans text-3xl font-extralight text-white/50 sm:mx-3 sm:text-4xl md:text-5xl">
                :
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Etiquetas alineadas abajo en blanco sutil */}
      <div className="mt-2.5 grid w-full max-w-[240px] grid-cols-4 px-1 sm:max-w-[340px] md:max-w-[420px]">
        {segments.map((seg) => (
          <span
            key={seg.label + '-lbl'}
            className="text-center text-[9px] uppercase tracking-[0.25em] text-white/80 sm:text-[10px]"
          >
            {seg.label}
          </span>
        ))}
      </div>
    </div>
  )
}