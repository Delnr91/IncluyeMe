import Image from 'next/image';
import { Lock, Fingerprint, Shield, Accessibility } from 'lucide-react';

export const Trust = () => {
  return (
    <section 
      id="confianza"
      style={{ backgroundImage: "url('/images/backgrounds/fondo1.png')" }}
      className="relative py-20 sm:py-32 bg-cover bg-center md:bg-fixed"
    >
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-secondary">
            Construido sobre Confianza y Seguridad.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna de Seguridad Técnica */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-neutral">
            <h3 className="text-2xl font-bold text-primary mb-6">Seguridad Técnica y Cumplimiento</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary">Leyes 21.015 y Karín</h4>
                  <p className="text-sm text-secondary/80">Digitalizamos y hacemos accesibles los protocolos de cumplimiento, proporcionando canales seguros para la prevención y denuncia del acoso.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Fingerprint className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary">Conexión Segura y Coordinada</h4>
                  <p className="text-sm text-secondary/80">Garantizamos una comunicación cifrada y en tiempo real entre el trabajador, su red de apoyo y la empresa.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Accessibility className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary">Perfiles de Adaptabilidad</h4>
                  <p className="text-sm text-secondary/80">Personalizamos la plataforma para distintos tipos de discapacidad (cognitiva, motora, sensorial), asegurando una experiencia de usuario universal.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Columna del Equipo - ACTUALIZADA */}
          <div className="text-center">
            <Image
              src="/images/Isabeu Valverde.jpeg"
              alt="Foto de perfil de Isabeu Valverde, CEO y Founder de IncluyeMeApp"
              width={192} // 12rem
              height={192} // 12rem
              className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-accent mb-6"
            />
            <h3 className="text-2xl font-bold text-secondary">Detrás de IncluyeMeApp</h3>
            <p className="text-lg font-semibold text-primary mt-2">Isabeu Valverde - CEO y Founder</p>
            <p className="mt-4 text-secondary/80 max-w-md mx-auto">
              "Mi misión es transformar la inclusión de una métrica a una realidad vivida. Con experiencia en desarrollo y una profunda conexión personal con la causa, lidero este proyecto para asegurar que nadie se quede atrás."
            </p>
            {/* Mención a Laticce */}
            <div className="mt-8">
              <p className="text-sm text-secondary/60 mb-2">Con el apoyo de:</p>
              <p className="font-bold text-xl text-primary">Lattice Startup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};