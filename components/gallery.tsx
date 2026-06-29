'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { Reveal } from './reveal'
import { DiscoBall } from './disco-ball'

const IMAGES = [
  { src: '/DSC_4240.jpg', alt: 'Paula Foto 1' },
  { src: '/DSC_4247.jpg', alt: 'Paula Foto 2' },
  { src: '/DSC_4263.jpg', alt: 'Paula Foto 3' },
  { src: '/DSC_4308.jpg', alt: 'Paula Foto 4' },
  { src: '/DSC_4314.jpg', alt: 'Paula Foto 5' },
  { src: '/DSC_4330.jpg', alt: 'Paula Foto 6' },
  { src: '/DSC_4365.jpg', alt: 'Paula Foto 7' },
  { src: '/DSC_4377.jpg', alt: 'Paula Foto 8' },
]

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  return (
    /* Forzamos fondo blanco a pantalla completa rompiendo márgenes del padre */
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white text-black py-32 md:py-40 px-6 select-none border-t border-b border-zinc-100">
      <div className="mx-auto max-w-5xl">
        
       {/* Cabecera adaptada a contraste oscuro con indicador en Negro */}
        <Reveal className="text-center">
          <DiscoBall variant="icon" className="mb-4 text-[#c5a059]" />
          <p className="text-xs uppercase tracking-[0.35em] text-black font-medium">
            Recuerdos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-wide text-zinc-800 sm:text-5xl">
            Book de Fotos
          </h2>
        </Reveal>

        {/* Grilla estilo Mosaico */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.03}>
              <div
                onClick={() => setSelectedImg(img.src)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.15)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-w-768px) 50vw, 25vw"
                  quality={75}
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.95] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="rounded-full bg-black/50 p-3 text-[#d4af37] border border-[#d4af37]/30 backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn className="size-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Visor full screen */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/40 p-3 text-white/80 transition-colors hover:border-[#d4af37]/60 hover:text-white"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative aspect-[3/4] h-full max-h-[85vh] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImg} 
                alt="Paula Vista Completa" 
                fill 
                priority
                quality={90}
                className="object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}