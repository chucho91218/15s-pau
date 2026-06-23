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
    <div className="flex flex-col items-center justify-center w-full select-none">
      {/* Números sueltos y separadores de dos puntos */}
      <div className="flex items-center justify-center text-silver/90 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
        {segments.map((seg, i) => (
          <div key={seg.label} className="flex items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="tabular-nums"
            >
              {seg.value}
            </motion.span>
            
            {/* Dos puntos (no se muestran después del último segmento) */}
            {i < segments.length - 1 && (
              <span className="mx-2 sm:mx-3 text-silver/20 font-sans font-extralight text-3xl sm:text-4xl md:text-5xl translate-y-[-2px]">
                :
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Etiquetas alineadas abajo */}
      <div className="grid grid-cols-4 w-full max-w-[240px] sm:max-w-[340px] md:max-w-[420px] mt-2.5 px-1">
        {segments.map((seg) => (
          <span
            key={seg.label + '-lbl'}
            className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center"
          >
            {seg.label}
          </span>
        ))}
      </div>
    </div>
  )
}