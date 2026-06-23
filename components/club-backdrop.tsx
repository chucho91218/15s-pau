'use client'

import { DiscoBall } from './disco-ball'

export function ClubBackdrop() {
  return (
    <div className="fixed inset-0 -z-30 h-full w-full overflow-hidden bg-black select-none pointer-events-none">
      {/* Fondo base NEGRO PURO absoluto para máximo contraste */}
      <div className="absolute inset-0 bg-black" />

      {/* Luces ambientales fijos y controlados sin JS */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[70vw] w-[70vw] max-w-[650px] max-h-[650px] rounded-full bg-blue-600/[0.08] [filter:blur(130px)]" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[50vw] w-[50vw] max-w-[450px] max-h-[450px] rounded-full bg-blue-900/[0.06] [filter:blur(120px)]" />

      {/* BOLAS DE BOLICHE REALES FLOTANDO (Ahora estáticas y ultra livianas) */}
      <DiscoBall variant="floating" className="-right-12 top-28 size-64 opacity-[0.035]" />
      <DiscoBall variant="floating" className="-left-16 bottom-1/4 size-72 opacity-[0.035]" />

      {/* Estrobo optimizado con animación CSS Nativa (Inmune al lag) */}
      <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 animate-[strobo_6s_infinite_ease-in-out]" />

      {/* Partículas de brillo estilo glitter */}
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Estilos CSS inyectados para el Keyframe del estrobo */}
      <style jsx global>{`
        @keyframes strobo {
          0%, 48%, 52%, 100% { opacity: 0; }
          50% { opacity: 0.04; }
        }
      `}</style>
    </div>
  )
}