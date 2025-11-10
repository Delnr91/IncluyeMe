'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Problema', href: '/proyecto#problema' }, // CAMBIO: Ruta completa
    { name: 'Solución', href: '/proyecto#solucion' }, // CAMBIO: Ruta completa
    { name: 'Impacto', href: '/proyecto#impacto' },   // CAMBIO: Ruta completa
    { name: 'Contacto', href: '/proyecto#contacto' }, // CAMBIO: Ruta completa
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              IncluyeMe
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-secondary transition-colors hover:text-primary">
                  {link.name}
                </Link>
              ))}
            </nav>
            <Button href="/donar" variant="primary" className="!bg-accent hover:!bg-accent/90">
              Donar Ahora
            </Button>
          </div>

          <div className="md:hidden">
            <Button size="sm" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Menú Overlay para Móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-medium text-secondary transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button href="/donar" size="lg" className="!bg-accent hover:!bg-accent/90" onClick={() => setIsMenuOpen(false)}>
              Donar Ahora
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};