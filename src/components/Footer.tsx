import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Contenido principal del footer */}
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-neutral/80">
            © {new Date().getFullYear()} IncluyeMeApp. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="/politica-privacidad" className="text-sm hover:underline text-neutral/80 hover:text-white">Política de Privacidad</Link>
            <Link href="/terminos" className="text-sm hover:underline text-neutral/80 hover:text-white">Términos</Link>
            <Link href="#contacto" className="text-sm hover:underline text-neutral/80 hover:text-white">Contacto</Link>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <hr className="my-6 border-neutral/20" />
        
        {/* Mención a Lattice Startup */}
        <div className="text-center text-sm text-neutral/60">
          <p>
            Desarrollado con ♥ por <a href="https://www.latticestartup.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white underline">Lattice Startup</a>
          </p>
        </div>
      </div>
    </footer>
  );
};