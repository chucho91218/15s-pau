'use client'

import { motion } from 'framer-motion'

interface DiscoBallProps {
  variant?: 'icon' | 'floating' | 'divider'
  className?: string
  color?: 'gold' | 'white'
}

// Ahora 'white' es el valor por defecto si no le pasás la propiedad
export function DiscoBall({ variant = 'icon', className = '', color = 'white' }: DiscoBallProps) {
  
  // Si es blanca, usamos blanco puro (#ffffff). Si es gold, el gradiente.
  const mainStroke = color === 'white' ? '#ffffff' : 'url(#gold-metallic-premium)'
  
  // Fondo transparente para la versión blanca, así no genera un parche negro redondo
  const ballBackground = color === 'white' ? 'transparent' : '#000000'

  const BallSvg = ({ size = "100%" }) => (
    <svg
      viewBox="0 0 100 100"
      className="text-current"
      style={{ width: size, height: size }}
    >
      <defs>
        {/* Gradiente dorado premium */}
        <linearGradient id="gold-metallic-premium" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="35%" stopColor="#fbbf24" />
          <stop offset="70%" stopColor="#c5a059" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>

      {/* Cadena / Sostén de la bola */}
      <line x1="50" y1="0" x2="50" y2="15" stroke={mainStroke} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="50" cy="15" r="1.5" fill={mainStroke} />
      
      {/* Esfera Principal */}
      <circle cx="50" cy="55" r="35" fill={ballBackground} stroke={mainStroke} strokeWidth="1.6" />
      
      <mask id="ball-mask-clip">
        <circle cx="50" cy="55" r="34.2" fill="#ffffff" />
      </mask>
      
      {/* Cuadrícula de Espejos */}
      <g mask="url(#ball-mask-clip)" stroke={mainStroke} strokeWidth="0.7" fill="none" opacity="0.95">
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
      <g className="animate-pulse" fill={mainStroke} opacity="1">
        <path d="M 12 25 L 14 27 M 14 25 L 12 27" stroke={mainStroke} strokeWidth="1.2" />
        <path d="M 86 28 L 88 30 M 88 28 L 86 30" stroke={mainStroke} strokeWidth="1.2" />
        <path d="M 82 78 L 84 80 M 84 78 L 82 80" stroke={mainStroke} strokeWidth="1.2" />
        <path d="M 14 74 L 16 76 M 16 74 L 14 76" stroke={mainStroke} strokeWidth="1.2" />
      </g>
    </svg>
  )

  if (variant === 'floating') {
    return (
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className={`absolute pointer-events-none select-none opacity-[0.06] mix-blend-screen [filter:drop-shadow(0_0_20px_rgba(255,255,255,0.5))_blur(0.5px)] ${className}`}
      >
        <BallSvg />
      </motion.div>
    )
  }

  if (variant === 'divider') return null

  return (
    <div className={`mx-auto size-10 [filter:drop-shadow(0_0_20px_rgba(255,255,255,0.3))] ${className}`}>
      <BallSvg />
    </div>
  )
}