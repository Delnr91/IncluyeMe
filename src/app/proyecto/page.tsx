import { Header } from '@/components/Header';
import { Hero } from '@/components/hero';
import { Footer } from '@/components/Footer';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { Impact } from '@/components/Impact';
import { Trust } from '@/components/Trust';
import { Contact } from '@/components/Contact';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 top-0 left-0 bg-accent text-white p-4">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Impact />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}