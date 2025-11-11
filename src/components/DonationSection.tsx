import { DonationForm } from '@/components/DonationForm';
import { HandHelping, Heart, Lightbulb, TrendingUp } from 'lucide-react';

export const DonationSection = () => {
  return (
    <section 
      id="donaciones" 
      style={{ backgroundImage: "url('/images/backgrounds/fondodonate.png')" }} 
      className="relative py-12 sm:py-24 bg-cover bg-center lg:bg-fixed text-white"
    >
      <div className="absolute inset-0 bg-secondary/80" /> {/* Overlay oscuro */}
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl"> {/* Contenedor principal "el cuadro" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna del Storytelling (más discreta) */}
          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/20 text-center lg:text-left">
            <h2 className="text-3xl font-bold md:text-4xl mb-6 text-accent">Tu Apoyo Transforma Vidas</h2> {/* Título en verde */}
            <p className="text-lg text-white/90 mb-8">
              En IncluyeMeApp, cada donación es un paso hacia una inclusión laboral real y duradera.
              Conoce el impacto directo de tu generosidad.
            </p>
            {/* Cards de storytelling dentro del cuadro */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HandHelping size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">El Potencial Incompleto</h3>
                  <p className="text-sm text-white/80">Andrea, talentosa, enfrenta barreras invisibles. Tu apoyo puede cambiar su historia.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lightbulb size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">El Desafío Silencioso</h3>
                  <p className="text-sm text-white/80">Más del 56% de contratos fracasan. Costos altos, vidas truncadas. Necesitamos un cambio.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">IncluyeMeApp, la Solución</h3>
                  <p className="text-sm text-white/80">Un tutor digital 360° para acompañar, conectar y proteger. Convirtiendo inclusión en retención.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrendingUp size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Tu Poder de Transformación</h3>
                  <p className="text-sm text-white/80">Tu donación financia tecnología, estabilidad y una sociedad más justa. Invierte en futuro.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna del Formulario de Donación */}
          <div>
            <DonationForm />
          </div>
        </div>
      </div>
    </section>
  );
};