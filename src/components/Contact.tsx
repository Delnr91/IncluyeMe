'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
  fullName: z.string().min(3, "El nombre es requerido"),
  email: z.string().email("Por favor, introduce un email válido"),
  subject: z.string().min(1, "Debes seleccionar un asunto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    alert('Formulario enviado (simulación). Revisa la consola.');
  };

  return (
    <section 
      id="contacto"
      style={{ backgroundImage: "url('/images/backgrounds/fondo3.png')" }}
      className="relative py-20 sm:py-32 bg-cover bg-center lg:bg-fixed"
    >
      <div className="absolute inset-0 bg-secondary/80" />

      <div className="container relative z-10 mx-auto px-6 text-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold md:text-5xl">
            Únete a la Misión. Haz la Inclusión Realidad.
          </h2>
        </div>

        {/* CTA DUAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Petición Donantes */}
          <div id="donar-cta" className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Para Donantes e Inversionistas</h3>
            <p className="mb-6 text-neutral/80">
              Tu apoyo es fundamental para dar el primer paso. Cada contribución nos acerca a la construcción del MVP, la tecnología que transformará el futuro laboral de miles de personas. ¡Súmate al cambio!
            </p>
            <Button href="/donar" size="lg" className="!bg-accent hover:!bg-accent/90">
              Donar Ahora
            </Button>
          </div>
          {/* Petición Socios */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Para Socios y Empresas</h3>
            <p className="mb-6 text-neutral/80">
              Buscamos alianzas estratégicas para financiar y dar vida a nuestra plataforma. Si tu organización quiere liderar el futuro de la inclusión laboral, contáctanos y exploremos oportunidades de inversión.
            </p>
            <Button href="#formulario-contacto" size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20">
              Contactar para Alianza
            </Button>
          </div>
        </div>

        {/* FORMULARIO DE CONTACTO */}
        <div id="formulario-contacto" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">¿Tienes preguntas? Hablemos.</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">Nombre Completo</label>
              <input 
                type="text" 
                id="fullName"
                className="w-full bg-white/10 border border-white/30 rounded-md p-3 focus:ring-accent focus:border-accent"
                aria-required="true"
                {...register('fullName')}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-white/10 border border-white/30 rounded-md p-3 focus:ring-accent focus:border-accent"
                aria-required="true"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Asunto</label>
              <select 
                id="subject"
                className="w-full bg-white/10 border border-white/30 rounded-md p-3 focus:ring-accent focus:border-accent text-white"
                aria-required="true"
                {...register('subject')}
              >
                <option value="" className="bg-secondary">Selecciona un asunto...</option>
                <option value="piloto" className="bg-secondary">Interés en Alianza Estratégica</option>
                <option value="inversion" className="bg-secondary">Oportunidad de Inversión</option>
                <option value="prensa" className="bg-secondary">Prensa y Medios</option>
                <option value="otro" className="bg-secondary">Otro</option>
              </select>
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-white/10 border border-white/30 rounded-md p-3 focus:ring-accent focus:border-accent"
                aria-required="true"
                {...register('message')}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="!bg-accent hover:!bg-accent/90">
                Enviar Mensaje
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};