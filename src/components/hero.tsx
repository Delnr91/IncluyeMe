import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      style={{ backgroundImage: "url('/images/backgrounds/hero.png')" }}
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Más del 56% de los contratos para personas con discapacidad fracasan. Es hora de cambiar la inclusión por retención.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          IncluyeMeApp: El tutor digital 360° que garantiza la permanencia, el bienestar y el cumplimiento legal de la inclusión laboral en Chile.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button 
            href="/donar" // Apunta a la nueva ruta
            size="lg" 
            variant="primary" 
            className="!bg-accent hover:!bg-accent/90"
          >
            Donar para el MVP
          </Button>
          <Button 
            href="#solucion" 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/20"
          >
            Conocer la Solución
          </Button>
        </div>
      </div>
    </section>
  );
};