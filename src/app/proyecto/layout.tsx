import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: 'IncluyeMeApp | Solución para la Retención e Inclusión Laboral en Chile',
  description: 'Combatimos el 56% de deserción laboral en PCD con tecnología. Garantiza cumplimiento (Ley 21.015, Ley Karín) y bienestar. Dona o únete a nuestra misión.',
  openGraph: {
    title: 'IncluyeMeApp | Retención e Inclusión Laboral',
    description: 'Tecnología para garantizar el bienestar y la permanencia de personas con discapacidad en el trabajo.',
    url: 'https://www.tudominio.cl', // Reemplaza con tu dominio real
    siteName: 'IncluyeMeApp',
    images: [
      {
        url: 'https://www.tudominio.cl/og-image.png', // Reemplaza con una URL a una imagen para compartir
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
};

export default function ProyectoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <GoogleAnalytics gaId="G-TU_ID_DE_GA4" /> {/* Reemplaza con tu ID de Google Analytics */}
    </>
  )
}