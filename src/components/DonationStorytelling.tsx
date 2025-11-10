import { HandHelping, Heart, Lightbulb, TrendingUp } from 'lucide-react';

export const DonationStorytelling = () => {
  // Los storyActs y stats ya no son necesarios aquí si se manejan en DonationSection
  // Pero los dejo en caso de que necesites reutilizarlos de forma diferente.
  const storyActs = [
    {
      icon: <HandHelping size={32} className="text-primary" />,
      title: "Acto 1: El Potencial Incompleto",
      description: "Imagina a Andrea, talentosa y llena de sueños, enfrentándose a barreras invisibles tras ser contratada. Su capacidad no está en duda, pero la falta de un apoyo continuo amenaza con apagar su potencial."
    },
    {
      icon: <Lightbulb size={32} className="text-primary" />,
      title: "Acto 2: El Desafío Silencioso",
      description: "Más del 56% de los contratos de personas con discapacidad fracasan. No por falta de talento, sino por la ausencia de un ecosistema que garantice su permanencia y bienestar. Es una realidad que cuesta miles de millones en multas y, lo más importante, trunca vidas."
    },
    {
      icon: <Heart size={32} className="text-primary" />,
      title: "Acto 3: IncluyeMeApp, la Solución 360°",
      description: "Creamos IncluyeMeApp, el primer tutor digital 360° en Chile. Una herramienta que acompaña, conecta y protege, asegurando que talentos como el de Andrea florezcan y se mantengan en el tiempo. Convirtiendo la inclusión en retención."
    },
    {
      icon: <TrendingUp size={32} className="text-primary" />,
      title: "Acto 4: Tu Poder de Transformación",
      description: "Con tu donación, no solo financias una tecnología. Invierte en historias de éxito, en estabilidad laboral y en una sociedad más justa. Cada aporte construye un futuro donde el potencial de todos es una realidad."
    }
  ];

  return (
    <div className="hidden">
      {/* Este componente ahora está oculto, su lógica ha sido absorbida por DonationSection */}
      {/* Si quieres que se muestre, necesitaríamos ajustar la lógica en DonationSection */}
    </div>
  );
};