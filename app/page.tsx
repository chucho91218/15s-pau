import { Hero } from '@/components/hero'
import { Quote } from '@/components/quote'
import { EventDetails } from '@/components/event-details'
import { Gallery } from '@/components/gallery'
import { PauFest } from '@/components/pau-fest'
import { Rsvp } from '@/components/rsvp'
import { InvitationShell } from '@/components/invitation-shell'
import { ClubBackdrop } from '@/components/club-backdrop'
import { DiscoBall } from '@/components/disco-ball' 
import { MusicPlayer } from '@/components/music-player'


export default function Page() {
  return (
    <InvitationShell>
      <ClubBackdrop />
      
      <MusicPlayer />
      <main className="relative w-full">
        
        <Hero />
        
        <div className="mx-auto w-full max-w-5xl">
          <Quote />
          <EventDetails />
          <Gallery />
          <PauFest />
          
          {/* DIVISOR TEMÁTICO DE BOLICHE ANTES DEL RSVP */}
          <DiscoBall variant="divider" className="my-16 px-6" />
          
          <Rsvp />
          
          {/* Footer Festa */}
          <footer className="px-6 pb-20 pt-12 text-center select-none bg-transparent">
            <div className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="flex flex-col items-center justify-center space-y-4">
              <a 
                href="https://instagram.com/festa_invitaciones" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground/60 hover:text-[#d4af37] transition-colors duration-300 font-sans"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                @festa_invitaciones
              </a>
              <h3 className="text-xs uppercase tracking-[0.4em] font-medium text-silver/80">
                Diseño exclusivo para eventos
              </h3>
              <p className="font-serif text-sm italic text-muted-foreground/50">
                Hecho con amor por Festa
              </p>
            </div>
          </footer>
        </div>

      </main>
    </InvitationShell>
  )
}