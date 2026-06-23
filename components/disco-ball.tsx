'use client'

import { motion } from 'framer-motion'

interface DiscoBallProps {
  variant?: 'icon' | 'floating'
  className?: string
}

export function DiscoBall({ variant = 'icon', className = '' }: DiscoBallProps) {
  // SVG optimizado con gradientes metálicos y destellos neón azul
  const BallSvg = ({ size = "100%" }) => (
    <svg
      viewBox="0 0 100 100"
      className="text-current"
      style={{ width: size, height: size }}
    >
      <defs>
        {/* Gradiente dorado premium para los bordes y reflejos espejo */}
        <linearGradient id="gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Cadena/Sostén estilizada */}
      <line x1="50" y1="0" x2="50" y2="15" stroke="url(#gold-metallic)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="50" cy="15" r="1.5" fill="url(#gold-metallic)" />
      
      {/* Esfera Principal */}
      <circle cx="50" cy="55" r="35" fill="#000000" stroke="url(#gold-metallic)" strokeWidth="1.5" />
      <mask id="ball-mask">
        <circle cx="50" cy="55" r="34.2" fill="#ffffff" />
      </mask>
      
      {/* Cuadrícula de Espejos */}
      <g mask="url(#ball-mask)" stroke="url(#gold-metallic)" strokeWidth="0.6" fill="none" opacity="0.85">
        {/* Líneas Horizontales curvas */}
        <path d="M 15 55 Q 50 70 85 55" />
        <path d="M 16 45 Q 50 60 84 45" />
        <path d="M 19 35 Q 50 50 81 35" />
        <path d="M 25 25 Q 50 40 75 25" />
        <path d="M 16 65 Q 50 80 84 65" />
        <path d="M 19 75 Q 50 90 81 75" />
        <path d="M 25 85 Q 50 100 75 85" />
        
        {/* Líneas Verticales curvas gajadas */}
        <path d="M 50 20 Q 30 55 50 90" />
        <path d="M 50 20 Q 10 55 50 90" />
        <path d="M 50 20 Q -10 55 50 90" />
        <path d="M 50 20 Q 70 55 50 90" />
        <path d="M 50 20 Q 90 55 50 90" />
        <path d="M 50 20 Q 110 55 50 90" />
        <g strokeDasharray="1.5,2.5">
          <line x1="50" y1="20" x2="50" y2="90" strokeWidth="1" />
        </g>
      </g>
      
      {/* Destellos / Brillo exterior estilo glitter */}
      <g className="animate-pulse" fill="url(#gold-metallic)" opacity="0.9">
        <path d="M 12 25 L 14 27 M 14 25 L 12 27" stroke="url(#gold-metallic)" strokeWidth="1.2" />
        <path d="M 86 28 L 88 30 M 88 28 L 86 30" stroke="url(#gold-metallic)" strokeWidth="1.2" />
        <path d="M 82 78 L 84 80 M 84 78 L 82 80" stroke="url(#gold-metallic)" strokeWidth="1.2" />
        <path d="M 14 74 L 16 76 M 16 74 L 14 76" stroke="url(#gold-metallic)" strokeWidth="1.2" />
      </g>
    </svg>
  )

  // Variante flotando de fondo (Rotación infinita hiper sutil)
  if (variant === 'floating') {
    return (
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className={`absolute pointer-events-none select-none opacity-[0.06] mix-blend-screen [filter:drop-shadow(0_0_20px_rgba(59,130,246,0.5))_blur(0.5px)] ${className}`}
      >
        <BallSvg />
      </motion.div>
    )
  }

  // Variante Icono (Arriba de títulos)
  return (
    <div className={`mx-auto size-10 [filter:drop-shadow(0_0_12px_rgba(251,191,36,0.2))] ${className}`}>
      <BallSvg />
    </div>
  )
}