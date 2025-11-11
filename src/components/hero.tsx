import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      style={{ backgroundImage: "url('/images/backgrounds/hero.png')" }}
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h1 className="text-2xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Diseñamos el primer ecosistema digital de Chile para la retención laboral de personas con discapacidad.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          Nuestra plataforma multiparte conecta en tiempo real al trabajador, su red de apoyo y la empresa para reducir la deserción y asegurar una inclusión exitosa.
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