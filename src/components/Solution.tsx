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
      description: "Tutor digital, comunicación accesible y chatbot de apoyo 'Ayudín' para una gestión autónoma de tareas y bienestar."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Cuidador",
      description: "Monitoreo no intrusivo con geocercas y alertas en tiempo real para garantizar la seguridad y tranquilidad."
    },
    {
      icon: <Building className="w-8 h-8 text-accent" />,
      title: "Empresa",
      description: "Motor de cumplimiento legal, gestión de ajustes razonables y un canal de denuncia digital seguro."
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-accent" />,
      title: "Especialista",
      description: "Acceso a herramientas de bienestar como primeros auxilios psicológicos y ejercicios de relajación."
    }
  ];

  return (
    <section 
      id="solucion"
      style={{ backgroundImage: "url('/images/backgrounds/solved.png')" }}
      className="relative py-16 sm:py-24 bg-cover bg-center bg-fixed"
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