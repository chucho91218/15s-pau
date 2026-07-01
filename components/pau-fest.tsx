'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

export function PauFest() {
  return (
    <section className="relative left-1/2 right-1/2 flex min-h-[75vh] w-screen -ml-[50vw] -mr-[50vw] items-center justify-center overflow-hidden py-24">

      {/* Fondo - Forzando contraste y nitidez absoluta */}
      <div className="pointer-events-none absolute inset-0 -z-20 select-none">
        <img
          src="/portadaoriginal.png"
          alt="Portada Pau Fest"
          className="h-full w-full object-cover object-center brightness-90 contrast-[1.25] saturate-[1.1]"
          style={{ 
            imageRendering: 'crisp-edges',
            filter: 'contrast(1.25) brightness(0.9) saturate(1.1)' 
          }}
        />
      </div>

      {/* Capa oscura limpia */}
      <div className="absolute inset-0 -z-10 bg-black/35" />

      {/* Contenido - Mantiene su ancho centrado y prolijo */}
      <div className="w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-white/15 bg-black/75 p-8 shadow-2xl md:p-12">

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            {/* Izquierda */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">

              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-white">
                  <span className="size-2 animate-pulse rounded-full bg-blue-500" />
                  Canal de Instagram
                </div>
              </Reveal>

              <Reveal className="mt-8">
                {/* Contenedor del logo ampliado para mejor visibilidad */}
                <div className="relative h-32 w-80 md:h-40 md:w-96">
                  <Image
                    src="/Logo.png"
                    alt="PAU Fest"
                    fill
                    priority
                    className="object-contain brightness-200 invert"
                  />
                </div>
              </Reveal>

              <Reveal className="mt-6">
                <p className="max-w-md leading-7 text-white/90">
                  Sumate al canal para vivir cada detalle de la noche:
                  novedades, fotos y los momentos que vamos a compartir
                  juntos.
                </p>
              </Reveal>

              <Reveal className="mt-8">
                <a
                  href="https://ig.me/j/AbaQmkiuvqGsJOsA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Unirme al canal

                  <svg
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </Reveal>

            </div>

            {/* Derecha */}
            <div className="flex justify-center">

              <Reveal>
                <div className="flex flex-col items-center gap-5">
                  <a 
                    href="https://ig.me/j/AbaQmkiuvqGsJOsA/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-3xl bg-white p-5 shadow-xl transition-transform hover:scale-105"
                  >
                    <Image
                      src="/qr.jpeg"
                      alt="Código QR del Canal"
                      width={220}
                      height={220}
                      className="object-contain"
                    />
                  </a>
                  <p className="text-center font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    Tocá o escaneá el código <br className="hidden sm:block" /> para unirte al canal
                  </p>
                </div>
              </Reveal>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}