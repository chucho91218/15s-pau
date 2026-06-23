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
    <section className="px-6 py-32 md:py-40 select-none bg-transparent">
      <div className="mx-auto max-w-5xl">
        
        {/* Cabecera con bola de boliche integrada */}
        <Reveal className="text-center">
          <DiscoBall variant="icon" className="mb-4 text-[#c5a059]" />
          <p className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
            Recuerdos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-wide text-silver sm:text-5xl">
            Book de Fotos
          </h2>
        </Reveal>

        {/* Grilla estilo Mosaico */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.03}>
              <div
                onClick={() => setSelectedImg(img.src)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-[#d4af37]/10 bg-black/40 transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_0_30px_-10px_var(--night)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-w-768px) 50vw, 25vw"
                  quality={75} // Ajustamos calidad balanceada para que carguen al instante en 4G/5G
                  loading="lazy" // <--- Clave: No consume RAM ni datos hasta estar cerca del viewport
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
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
              className="absolute right-6 top-6 rounded-full border border-[#d4af37]/30 bg-black/40 p-3 text-silver/80 transition-colors hover:border-[#d4af37]/60 hover:text-silver"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative aspect-[3/4] h-full max-h-[85vh] w-full max-w-xl overflow-hidden rounded-2xl border border-[#d4af37]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImg} 
                alt="Paula Vista Completa" 
                fill 
                priority // <--- Forzamos carga inmediata solo al clickear para máxima nitidez
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