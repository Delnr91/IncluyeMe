import { Header } from '@/components/Header';
import { Hero } from '@/components/hero';
import { Footer } from '@/components/Footer';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { Impact } from '@/components/Impact';
import { Trust } from '@/components/Trust';
import { Contact } from '@/components/Contact';
// Las importaciones de DonationStorytelling y DonationForm ya no son necesarias aquí

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Impact />
        <Trust />
        <Contact />
      </main>
    
    </div>
  );
}