'use client'

import { Calendar, Clock, Shirt, MapPin } from 'lucide-react'
import { Reveal } from './reveal'

const DETAILS = [
  {
    icon: Calendar,
    label: 'Fecha',
    value: 'Sábado 15 de Agosto',
    sub: '2026',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: '21:30 hs',
    sub: 'Cena / Fiesta',
  },
  {
    icon: Shirt,
    label: 'Dress Code',
    value: 'Elegante',
    sub: 'Prendas oscuras / Estilo boliche',
  },
  {
    icon: MapPin,
    label: 'Lugar',
    value: 'Centro Comercial e Industrial',
    sub: 'Villa del Rosario, Córdoba',
  },
]

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1699.977527049351!2d-63.53818014264105!3d-31.552848083665495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94332a4b6362f9bb%3A0x70639aaa27ad0a7a!2sCentro%20Comercial%20e%20Industrial%20Villa%20del%20Rosario!5e0!3m2!1ses!2sus!4v1782141363295!5m2!1ses!2sus'

export function EventDetails() {
  return (
    <section className="px-6 py-20 sm:py-24 select-none">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Los Detalles
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-wide bg-gradient-to-r from-neutral-100 via-white to-neutral-400 bg-clip-text text-transparent sm:text-5xl">
            La Celebración
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DETAILS.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.08}>
              {/* Tarjetas Glassmorphism Oscuras con Neon Blue Glow en hover */}
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/[0.06] bg-neutral-950/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-neutral-900/50 text-white/70 transition-all duration-300 group-hover:border-blue-400/40 group-hover:text-blue-400 group-hover:bg-blue-950/20">
                  <d.icon className="size-5" strokeWidth={1.2} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {d.label}
                  </p>
                  <p className="mt-1 font-serif text-xl text-white/90">
                    {d.value}
                  </p>
                  <p className="text-xs mt-0.5 text-white/50">{d.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contenedor del Mapa */}
        <Reveal delay={0.1} className="mt-6">
          <div className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-neutral-950/40 shadow-[0_0_40px_-15px_rgba(0,0,0,0.9)]">
            <iframe
              title="Ubicación del evento"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full grayscale invert opacity-50 contrast-125 transition-all duration-700 group-hover:opacity-85 group-hover:grayscale-[20%] group-hover:invert-0 sm:h-72"
              style={{ border: 0 }}
              allowFullScreen={true}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}