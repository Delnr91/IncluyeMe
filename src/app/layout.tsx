'use client'; // Necesario para detectar la ruta actual

import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="es">
      <head>
        {/*
          He movido tus metadatos originales aquí.
          La exportación "metadata" no funciona con 'use client', 
          así que esta es la forma de conservarlos.
        */}
        <title>IncluyeMe | Inclusión Laboral Real en Chile</title>
        <meta name="description" content="Apoyamos la inclusión y permanencia laboral de personas con discapacidad a través de tecnología y acompañamiento. Conoce nuestro proyecto y cómo puedes ayudar." />
      </head>
      <body className={inter.className}>
        {isHomePage ? (
          // Si es la página de inicio, se muestra solo el contenido.
          <>{children}</>
        ) : (
          // Para el resto de páginas, se muestra la estructura completa.
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        )}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}