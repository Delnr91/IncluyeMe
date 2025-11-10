'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Esquemas de validación con Zod
const datosSchema = z.object({
  nombre: z.string().min(3, "El nombre es requerido"),
  email: z.string().email("Introduce un email válido"),
  numeroWhatsapp: z.string().min(8, "Número de WhatsApp requerido (sin +56)"),
  aceptoActualizaciones: z.boolean().refine(val => val === true, { message: "Debes aceptar las actualizaciones para continuar" }),
});

type DatosFormValues = z.infer<typeof datosSchema>;

export const DonationForm = () => {
  const [paso, setPaso] = useState<'monto' | 'datos' | 'confirmacion'>('monto');
  const [formData, setFormData] = useState({
    monto: '5000',
    montoPersonalizado: '',
    nombre: '',
    email: '',
    numeroWhatsapp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<DatosFormValues>({
    resolver: zodResolver(datosSchema),
    defaultValues: {
      nombre: formData.nombre,
      email: formData.email,
      numeroWhatsapp: formData.numeroWhatsapp,
      aceptoActualizaciones: false,
    },
  });

  const montoSeleccionado = formData.monto;
  const watchAceptoActualizaciones = watch("aceptoActualizaciones");

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, monto: e.target.value, montoPersonalizado: '' }));
  };

  const handleMontoPersonalizadoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, montoPersonalizado: e.target.value }));
  };

  const handleContinueToDatos = () => {
    if ((formData.monto === 'Otro' && (!formData.montoPersonalizado || parseFloat(formData.montoPersonalizado) < 1000)) || (formData.monto !== 'Otro' && !formData.monto)) {
        alert("Por favor, selecciona o ingresa un monto válido (mínimo $1.000 CLP).");
        return;
    }
    setPaso('datos');
  };

  const handleConfirmacion = async (data: DatosFormValues) => {
    setIsSubmitting(true); // Deshabilitar botón
    const makeWebhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;

    if (!makeWebhookUrl) {
      console.error("Make.com Webhook URL is not defined in environment variables.");
      alert("Error en la configuración del sistema de donaciones.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(makeWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: data.nombre,
          email: data.email,
          monto: montoSeleccionado === 'Otro' ? formData.montoPersonalizado : montoSeleccionado,
          numeroWhatsapp: data.numeroWhatsapp,
          // Aquí puedes añadir otros campos si los necesitas en Make.com
        }),
      });

      if (response.ok) {
        setFormData(prev => ({ ...prev, ...data })); // Guardar datos para confirmación
        setPaso('confirmacion');
      } else {
        const errorData = await response.json();
        console.error("Error al enviar a Make.com:", errorData);
        alert('Hubo un error al procesar tu donación. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error("Error de red al enviar donación:", error);
      alert('Hubo un problema de conexión. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false); // Habilitar botón de nuevo
    }
  };

  const resetFormulario = () => {
    setPaso('monto');
    setFormData({
      monto: '5000',
      montoPersonalizado: '',
      nombre: '',
      email: '',
      numeroWhatsapp: '',
    });
    reset(); // Resetear el React Hook Form
    setIsSubmitting(false);
  };

  const displayMonto = montoSeleccionado === 'Otro' ? formData.montoPersonalizado : montoSeleccionado;
  const impactoEspecifico = (monto: string) => {
    switch (monto) {
      case '2000': return '1 mes de tutor digital';
      case '5000': return 'un módulo de psicología';
      case '10000': return 'capacitación para 5 cuidadores';
      default: return 'nuestro MVP';
    }
  };


  return (
    <div id="formulario-donacion-wrapper" className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-neutral/50 text-secondary">
      {paso === 'monto' && (
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-4">¿Cuánto quieres aportar?</h3> {/* Título corregido */}
          <p className="text-center text-secondary/70 mb-8">Elige un monto o personaliza tu donación</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {["2000", "5000", "10000", "Otro"].map(montoOpt => (
              <label 
                key={montoOpt}
                htmlFor={`monto-${montoOpt}`}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border-2 cursor-pointer 
                           ${formData.monto === montoOpt ? 'border-primary bg-primary/10' : 'border-neutral hover:border-primary/50'}`}
              >
                <input
                  type="radio"
                  id={`monto-${montoOpt}`}
                  name="monto"
                  value={montoOpt}
                  checked={formData.monto === montoOpt}
                  onChange={handleMontoChange}
                  className="sr-only"
                />
                <span className="text-xl sm:text-2xl font-bold text-secondary">
                  {montoOpt === "Otro" ? "Otro" : `$${parseInt(montoOpt).toLocaleString('es-CL')} CLP`}
                </span>
                <span className="text-xs sm:text-sm text-secondary/70 mt-1 text-center">
                  {montoOpt === "2000" && "Impulsa un plan de autonomía"}
                  {montoOpt === "5000" && "Kit de Bienestar Emocional"}
                  {montoOpt === "10000" && "Fortalece una red de apoyo"}
                  {montoOpt === "Otro" && "Construye el ecosistema"}
                </span>
              </label>
            ))}
          </div>

          {formData.monto === 'Otro' && (
            <div className="mb-6">
              <label htmlFor="montoPersonalizado" className="sr-only">Monto Personalizado</label>
              <input
                type="number"
                id="montoPersonalizado"
                placeholder="Ingresa tu monto personalizado (mín. $1.000 CLP)"
                value={formData.montoPersonalizado}
                onChange={handleMontoPersonalizadoChange}
                min="1000"
                className="w-full p-3 border border-neutral rounded-md text-secondary focus:ring-primary focus:border-primary"
              />
            </div>
          )}

          <div className="bg-primary/5 p-4 rounded-lg text-primary text-sm mb-8 border border-primary/20">
            <p><strong>Transparencia:</strong> 100% de tu aporte va a MVP. Cero comisiones si usas transferencia directa.</p>
            <p className="text-xs text-secondary/60 mt-2">
              Protección de Datos: Tus datos personales son tratados con confidencialidad y solo para fines de gestión de donaciones y seguimiento del proyecto, conforme a la Ley chilena de protección de datos.
            </p>
          </div>

          <Button
            onClick={handleContinueToDatos}
            disabled={(formData.monto === 'Otro' && (!formData.montoPersonalizado || parseFloat(formData.montoPersonalizado) < 1000)) || (formData.monto !== 'Otro' && !formData.monto)}
            className="w-full !bg-accent hover:!bg-accent/90"
          >
            Continuar <span className="ml-2">→</span>
          </Button>
        </div>
      )}

      {paso === 'datos' && (
        <form onSubmit={handleSubmit(handleConfirmacion)} className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-4">Ingresa tus Datos</h3>
          <p className="text-center text-secondary/70 mb-8">Para procesar tu donación y enviarte las actualizaciones</p>

          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-secondary mb-2">Nombre Completo</label>
            <input
              type="text"
              id="nombre"
              placeholder="Ej: Juan Pérez"
              className="w-full p-3 border border-neutral rounded-md text-secondary focus:ring-primary focus:border-primary"
              aria-required="true"
              {...register('nombre')}
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              className="w-full p-3 border border-neutral rounded-md text-secondary focus:ring-primary focus:border-primary"
              aria-required="true"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="numeroWhatsapp" className="block text-sm font-medium text-secondary mb-2">WhatsApp (Obligatorio)</label>
            <input
              type="text"
              id="numeroWhatsapp"
              placeholder="Ej: 912345678 (sin +56)"
              className="w-full p-3 border border-neutral rounded-md text-secondary focus:ring-primary focus:border-primary"
              aria-required="true"
              {...register('numeroWhatsapp')}
            />
            {errors.numeroWhatsapp && <p className="text-red-500 text-sm mt-1">{errors.numeroWhatsapp.message}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="aceptoActualizaciones"
              className="h-4 w-4 text-primary rounded border-neutral focus:ring-primary"
              {...register('aceptoActualizaciones')}
            />
            <label htmlFor="aceptoActualizaciones" className="ml-2 block text-sm text-secondary">Acepto recibir actualizaciones del proyecto</label>
          </div>
          {errors.aceptoActualizaciones && <p className="text-red-500 text-sm mt-1">{errors.aceptoActualizaciones.message}</p>}

          <div className="flex justify-between gap-4 mt-8">
            <Button type="button" onClick={() => setPaso('monto')} variant="outline" className="flex-grow">
              <ArrowLeft size={16} className="mr-2" /> Atrás
            </Button>
            <Button type="submit" className="w-full !bg-accent hover:!bg-accent/90 flex-grow" disabled={!watchAceptoActualizaciones || isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Donar Ahora'}
            </Button>
          </div>
          <p className="text-xs text-secondary/60 mt-4 text-center">
            Al donar, aceptas nuestra Política de Privacidad y el uso de tus datos para fines de seguimiento del proyecto.
          </p>
        </form>
      )}

      {paso === 'confirmacion' && (
        <div className="text-center">
          <CheckCircle size={80} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">¡Gracias, {formData.nombre}! 💚</h3>
          
          <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg mb-8">
            <p className="text-secondary/80 text-lg">Tu aporte:</p>
            <p className="text-3xl sm:text-4xl font-bold text-primary mt-2">${parseInt(displayMonto).toLocaleString('es-CL')} CLP</p>
            <p className="text-md text-accent font-semibold mt-3">
              Con tu aporte financias {impactoEspecifico(montoSeleccionado === 'Otro' ? 'personalizado' : montoSeleccionado)}.
            </p>
          </div>
          
          <p className="text-md text-secondary/70 mb-6">Recibirás los datos bancarios para tu transferencia por WhatsApp en los próximos 2 minutos.</p>

          <ul className="list-none space-y-3 text-secondary text-left max-w-sm mx-auto mb-10">
            <li className="flex items-center text-md"><CheckCircle size={20} className="text-accent mr-2" />Constancia de donación (PDF descargable)</li>
            <li className="flex items-center text-md"><CheckCircle size={20} className="text-accent mr-2" />Acceso a tracker del proyecto (ver avances)</li>
            <li className="flex items-center text-md"><CheckCircle size={20} className="text-accent mr-2" />Actualizaciones mensuales del MVP</li>
          </ul>

          <Button onClick={resetFormulario} variant="outline" className="w-full md:w-auto">
            ← Hacer otra donación
          </Button>
        </div>
      )}
    </div>
  );
};