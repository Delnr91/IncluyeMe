import { Target, TrendingUp, ShieldCheck, Handshake } from 'lucide-react';

export const Impact = () => {
  const metrics = [
    {
      icon: <TrendingUp size={48} className="text-accent" />,
      title: "Ahorro por Multas Evitadas",
      value: "$15-50M+",
      description: "Anuales, al garantizar el cumplimiento de la Ley 21.015 y similares."
    },
    {
      icon: <ShieldCheck size={48} className="text-accent" />,
      title: "Ahorro por Reducción de Rotación",
      value: "$3-10M",
      description: "Anuales, al disminuir la deserción y los costos asociados a nuevas contrataciones."
    },
    {
      icon: <Handshake size={48} className="text-accent" />,
      title: "Impacto Social (ODS)",
      value: "ODS 8 y 10",
      description: "Alineados con Trabajo Decente y Reducción de Desigualdades."
    }
  ];

  return (
    <section 
      id="impacto"
      style={{ backgroundImage: "url('/images/backgrounds/roi.png')" }}
      className="relative py-20 sm:py-32 bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-secondary/80" /> {/* Overlay oscuro */}

      <div className="container relative z-10 mx-auto px-6 text-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold md:text-5xl">
            IncluyeMeApp no es un Gasto, es una Inversión Estratégica.
          </h2>
        </div>
        
        {/* KPI Principal */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center border border-white/20 mb-16">
          <div className="flex justify-center mb-4">
            <Target size={48} className="text-accent" />
          </div>
          <p className="text-xl text-neutral/80 mb-2">KPI Principal</p>
          <h3 className="text-3xl font-bold">
            Reducir en <span className="text-accent">40%</span> la deserción laboral de PCD
          </h3>
        </div>

        {/* Métricas Adicionales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center border border-white/20 flex flex-col"
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <h3 className="text-2xl font-bold">{metric.title}</h3>
              <p className="text-4xl font-bold text-accent my-4">{metric.value}</p>
              <p className="text-neutral/80 mt-auto">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};