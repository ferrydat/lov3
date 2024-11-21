import React from 'react';
import { Watch } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-3">
            <Watch className="h-10 w-10 text-gold" />
            <div>
              <span className="text-2xl font-serif tracking-tight text-primary block">Libera Stock</span>
              <span className="text-sm text-gray-500">Adquisiciones de Stock</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Servicios</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Garantías</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contacto</a>
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover transition-colors"
            >
              Solicitar Valoración
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}