import { BarChart, UserX, FileText } from 'lucide-react';

export const Problem = () => {
  const stats = [
    {
      icon: <UserX size={48} className="text-accent" />,
      value: "56% de Deserción",
      description: "Causa principal: Falta de apoyo y seguimiento post-contratación.",
    },
    {
      icon: <FileText size={48} className="text-accent" />,
      value: "36.4% de Cumplimiento",
      description: "De la Ley 21.015, demostrando una brecha regulatoria y cultural.",
    },
    {
      icon: <BarChart size={48} className="text-accent" />,
      value: "$7.000M en Multas",
      description: "Acumuladas por empresas, evidenciando el riesgo financiero de no actuar.",
    },
  ];

  return (
    <section 
      id="problema" 
      // CAMBIO: Usamos CSS para el fondo fijo, igual que en Hero
      style={{ backgroundImage: "url('/images/backgrounds/problem.png')" }}
      className="relative py-20 sm:py-32 bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-secondary/80" />
      
      <div className="container relative z-10 mx-auto px-6 text-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold md:text-5xl">
            El Problema: "No es un problema de capacidad, es de acompañamiento."
          </h2>
          <p className="mt-6 text-lg text-neutral/80">
            La inclusión real no termina con la firma de un contrato. Comienza el verdadero desafío: la permanencia. Historias como la de María, llena de potencial pero abandonada a su suerte, o la del joven en Osorno, cuyo sueño fue truncado por falta de apoyo, son el reflejo de un sistema que falla en lo más importante: el seguimiento continuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center border border-white/20"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-accent">{stat.value}</h3>
              <p className="mt-2 text-neutral/80">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-sm text-neutral/60">
          Fuente: Dirección del Trabajo y SENADIS, 2023
        </p>
      </div>
    </section>
  );
};