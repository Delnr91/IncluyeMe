import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: 'Política de Privacidad | IncluyeMeApp',
  description: 'Conoce cómo IncluyeMeApp protege tu información personal y los datos que recolectamos. Tu privacidad es nuestra prioridad.',
  openGraph: {
    title: 'Política de Privacidad de IncluyeMeApp',
    description: 'Información detallada sobre la privacidad de datos en IncluyeMeApp.',
    url: 'https://www.tudominio.cl/politica-privacidad',
    siteName: 'IncluyeMeApp',
    // Puedes añadir una imagen OG específica si quieres
    locale: 'es_CL',
    type: 'article',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      
      <main className="flex-grow py-16 sm:py-24"> {/* Añadir padding a main */}
        {children}
      </main>
      
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </>
  )
}