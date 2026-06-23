'use client'

import { QRCodeSVG } from 'qrcode.react'
import { Radio, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from './reveal'

const CHANNEL_URL = 'https://whatsapp.com/channel/paufest'

export function PauFest() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl">
        {/* Contenedor Glassmorphism Oscuro con Glow Azul */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-neutral-950/40 p-8 backdrop-blur-md sm:p-12 hover:border-blue-500/20 transition-all duration-500">
          
          {/* Luz ambiental interna azul */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-blue-500/10 blur-3xl"
          />
          
          <div className="relative flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
  <div className="text-center sm:text-left">
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-neutral-900/50 px-4 py-1.5">
      <Radio className="size-3.5 text-blue-400 animate-pulse" strokeWidth={2} />
      <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
        Canal de Instagram
      </span>
    </div>
    {/* Título de la sección cambiado a dorado premium */}
    <h2 className="font-serif text-5xl font-light text-[#c5a059] sm:text-6xl">
      Pau Fest
    </h2>
    <p className="mt-4 max-w-sm text-pretty leading-relaxed text-white/50 text-sm">
      Sumate al canal para vivir cada detalle de la noche: novedades,
      fotos y los momentos que vamos a compartir juntos.
    </p>
              
              {/* Botón interactivo con glow azul */}
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/20 px-6 py-3 text-sm tracking-wide text-white/90 transition-all duration-300 hover:bg-blue-600/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              >
                Unirme al canal
                <ArrowUpRight className="size-4 opacity-80" />
              </a>
            </div>

            {/* Contenedor QR premium blanco puro */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="shrink-0 rounded-2xl border border-white/10 bg-white p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            >
              <QRCodeSVG
                value={CHANNEL_URL}
                size={160}
                level="M"
                bgColor="transparent"
                fgColor="#000000"
              />
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}