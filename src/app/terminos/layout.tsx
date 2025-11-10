import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: 'Términos y Condiciones | IncluyeMeApp',
  description: 'Conoce los Términos y Condiciones que rigen el uso de IncluyeMeApp, sus servicios y tu interacción con nuestra plataforma.',
  openGraph: {
    title: 'Términos y Condiciones de IncluyeMeApp',
    description: 'Información sobre los términos de servicio de IncluyeMeApp.',
    url: 'https://www.tudominio.cl/terminos',
    siteName: 'IncluyeMeApp',
    // Puedes añadir una imagen OG específica si quieres
    locale: 'es_CL',
    type: 'article',
  },
};

export default function TermsLayout({
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