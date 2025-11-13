'use client';
import Image from 'next/image';
import { Button } from './ui/Button';
import { useState, useEffect } from 'react'; // <-- IMPORTA useState y useEffect

export const Home = () => {
  const [isIOS, setIsIOS] = useState(false); // <-- NUEVO ESTADO

  useEffect(() => {
    // Esta detección solo corre en el cliente (navegador)
    const userAgent = typeof window.navigator === 'undefined' ? '' : window.navigator.userAgent;
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 z-0">
        {isIOS ? ( 
          <Image
            src="/images/backgrounds/home-poster.png" 
            alt="Fondo estático"
            fill
            priority
            className="object-cover"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            suppressHydrationWarning
            poster="/images/backgrounds/home-poster.png"
            className="w-full h-full object-cover"
          >
            <source src="/images/backgrounds/home.mp4" type="video/mp4" />
            {/* <source src="/images/backgrounds/home.webm" type="video/webm" /> */}
            Tu navegador no soporta el tag de video.
          </video>
        )}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Contenido principal - con el ajuste vertical que hicimos */}
      <div className="container relative z-20 flex flex-col items-center px-4 text-center transform translate-y-16">
        {/* Título nuevo con degradado de color */}
        <h1 className="mb-12 text-7xl font-bold tracking-tighter text-transparent drop-shadow-lg md:text-9xl 
                       bg-clip-text bg-gradient-to-r from-primary to-accent">
          IncluyeMe
        </h1>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Botón "Ir al Proyecto" */}
          <Button 
            href="/proyecto" 
            size="lg"
            variant="outline"
            className="min-w-[200px] text-center text-lg font-semibold border-2 border-white text-white 
                     hover:bg-white/20 hover:transform hover:scale-105 transition-all duration-200"
          >
            Ir al Proyecto
          </Button>
          
          {/* Botón Donar para la página de inicio */}
          <Button
            href="/donar" // Apunta a la nueva ruta
            size="lg"
            variant="primary"
            className="min-w-[200px] text-center text-lg font-semibold !bg-accent hover:!bg-accent/90 
                     hover:transform hover:scale-105 transition-transform duration-200"
          >
            Donar Ahora
          </Button>
        </div>
      </div>
    </main>
  );
};