import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80"
          alt="Rolex de lujo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="mb-8">
            <span className="inline-block text-gold font-medium tracking-wider text-sm mb-2">
              EXPERTOS EN ADQUISICIÓN DE RELOJES DE LUJO
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight drop-shadow-lg">
              Soluciones Corporativas para Stock de Alta Relojería
            </h1>
          </div>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Empresa líder especializada en la adquisición estratégica de inventarios premium 
            de relojes de lujo. Ofrecemos valoraciones profesionales y transacciones 
            inmediatas con total discreción.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-8 py-4 text-lg font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              Solicitar Valoración
            </a>
            <a
              href="#about"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium rounded-md hover:bg-white/10 transition-colors text-center"
            >
              Conocer Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}