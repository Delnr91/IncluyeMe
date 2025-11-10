import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: 'IncluyeMeApp | Ecosistema Digital para la Retención Laboral de Personas con Discapacidad',
  description: 'El primer ecosistema digital de Chile para la retención laboral de personas con discapacidad. Conectamos al trabajador, su red de apoyo y la empresa en tiempo real para reducir la deserción.',
  openGraph: {
    title: 'IncluyeMeApp | Ecosistema Digital para la Retención e Inclusión Laboral',
    description: 'Plataforma multiparte que conecta en tiempo real al trabajador, su red de apoyo y la empresa, garantizando el éxito de la inclusión.',
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