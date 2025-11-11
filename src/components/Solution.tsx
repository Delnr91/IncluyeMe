'use client'; 

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import { Users, Shield, Building, HeartPulse } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Solution = () => {
  const mockups = [
    { src: '/images/mockups/inicio.PNG', alt: 'Pantalla de inicio de la aplicación IncluyeApp.' },
    { src: '/images/mockups/login.PNG', alt: 'Pantalla de login con opciones de accesibilidad.' },
    { src: '/images/mockups/tareas.PNG', alt: 'Vista de gestión de tareas diarias para el usuario.' },
  ];
  
  const features = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Trabajador PCD",
      description: "Herramientas para la autonomía, gestión de rutinas y desarrollo de habilidades psicosociales para una transición exitosa a la vida laboral independiente."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Red de Apoyo y Empresa",
      description: "Sistema de acompañamiento multiparte que conecta en tiempo real a la familia, cuidadores, empleador y especialistas de apoyo de forma segura."
    },
    {
      icon: <Building className="w-8 h-8 text-accent" />,
      title: "Cumplimiento y Prevención",
      description: "Digitalización y acceso a protocolos de las leyes 21.015 y Karín, con canales seguros para la prevención y denuncia del acoso laboral."
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-accent" />,
      title: "Salud Mental y Bienestar",
      description: "Módulo con herramientas de primeros auxilios psicológicos, manejo del estrés y registro del estado emocional para abordar causas de deserción."
    }
  ];

  return (
    <section 
      id="solucion"
      style={{ backgroundImage: "url('/images/backgrounds/solved.png')" }}
      className="relative py-16 sm:py-24 bg-cover bg-center lg:bg-fixed"
    >
      <div className="absolute inset-0 bg-background/80" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* CAMBIO: Título más pequeño y responsivo */}
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-secondary">
            Nuestra Solución: Un Ecosistema de Apoyo Digital 360°
          </h2>
        </div>

        {/* CAMBIO: Carrusel un poco más bajo */}
        <div className="w-full max-w-5xl mx-auto mb-12 h-[220px] sm:h-[350px] md:h-[450px] rounded-lg bg-secondary/10 shadow-2xl p-2">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            loop={true}
            className="w-full h-full rounded-md"
          >
            {mockups.map((mockup, index) => (
              <SwiperSlide key={index}>
                <Image 
                  src={mockup.src} 
                  alt={mockup.alt} 
                  width={1200} 
                  height={800} 
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-neutral">
              <div className="flex items-center gap-4 mb-3">
                {feature.icon}
                <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
              </div>
              {/* CAMBIO: Texto de descripción más pequeño */}
              <p className="text-sm text-secondary/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};