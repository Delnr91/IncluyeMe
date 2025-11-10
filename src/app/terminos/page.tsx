export default function TermsAndConditionsPage() {
    return (
      <div className="container mx-auto px-6 max-w-4xl text-secondary">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Términos y Condiciones de IncluyeMeApp</h1>
        <p className="mb-6 text-sm text-neutral/70 text-center">Última actualización: 6 de noviembre de 2025</p>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">1. Aceptación de los Términos</h2>
          <p className="mb-4">
            Al acceder y utilizar el sitio web y los servicios de IncluyeMeApp (en adelante, "la Plataforma"), aceptas cumplir y estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar la Plataforma.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">2. Modificaciones de los Términos</h2>
          <p className="mb-4">
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en la Plataforma. El uso continuado de la Plataforma después de dichas modificaciones constituye tu aceptación de los nuevos términos.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">3. Uso de la Plataforma</h2>
          <h3 className="text-xl font-semibold mb-3 text-primary">3.1. Elegibilidad:</h3>
          <p className="mb-4">
            Debes tener al menos 18 años para realizar donaciones.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-primary">3.2. Conducta del Usuario:</h3>
          <p className="mb-4">Te comprometes a utilizar la Plataforma de manera lícita y ética, y a no:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Publicar contenido ilegal, difamatorio, acosador, abusivo o discriminatorio.</li>
            <li>Intentar obtener acceso no autorizado a sistemas o redes.</li>
            <li>Interferir con el funcionamiento de la Plataforma.</li>
            <li>Realizar actividades que violen los derechos de propiedad intelectual de IncluyeMeApp o de terceros.</li>
          </ul>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">4. Donaciones</h2>
          <p className="mb-4">
            Las donaciones realizadas a través de IncluyeMeApp son voluntarias y se utilizarán exclusivamente para el desarrollo y sostenimiento del MVP de IncluyeMeApp, según lo detallado en nuestra sección de donaciones.
          </p>
          <p className="mb-4">
            Nos comprometemos a la transparencia en el uso de los fondos. Los datos de tu donación serán tratados según nuestra Política de Privacidad.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">5. Propiedad Intelectual</h2>
          <p className="mb-4">
            Todo el contenido de la Plataforma, incluyendo textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de IncluyeMeApp o de sus proveedores de contenido y está protegido por las leyes chilenas e internacionales de derechos de autor y propiedad intelectual.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">6. Limitación de Responsabilidad</h2>
          <p className="mb-4">
            IncluyeMeApp no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar la Plataforma. La Plataforma se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">7. Indemnización</h2>
          <p className="mb-4">
            Te comprometes a indemnizar y eximir de responsabilidad a IncluyeMeApp, sus directores, empleados y agentes, de cualquier reclamo o demanda, incluidos los honorarios razonables de abogados, que surjan de tu uso de la Plataforma o de tu incumplimiento de estos Términos y Condiciones.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">8. Ley Aplicable y Jurisdicción</h2>
          <p className="mb-4">
            Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de Chile. Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Antofagasta, Chile.
          </p>
        </section>
  
        <section>
          <h2 className="text-2xl font-bold mb-4 text-secondary">9. Contacto</h2>
          <p className="mb-4">
            Si tienes preguntas sobre estos Términos y Condiciones, por favor contáctanos en:
          </p>
          <p>Email: incluyemeapp@gmail.com</p>
        </section>
      </div>
    );
  }