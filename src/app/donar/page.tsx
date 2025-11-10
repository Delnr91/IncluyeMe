import { DonationSection } from '@/components/DonationSection';

// La metadata ya está definida en layout.tsx, no es necesario duplicarla aquí.
// Sin embargo, si deseas metadata específica de la página, puedes definirla así:
export const metadata = {
  title: "Donaciones | IncluyeMe",
  description: "Apoya nuestra misión de crear un futuro laboral inclusivo. Tu donación impulsa la tecnología y el acompañamiento que transforma vidas.",
};

export default function DonacionesPage() { // Cambiado a DonacionesPage para evitar confusión con el layout
  return (
    <main>
      <DonationSection />
    </main>
  );
}