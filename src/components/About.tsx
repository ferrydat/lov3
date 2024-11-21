import React from 'react';
import { Shield, Clock, BadgeCheck, Lock, Briefcase, Globe, HandshakeIcon } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-wider text-sm block mb-3">
            NUESTRA PROPUESTA DE VALOR
          </span>
          <h2 className="text-4xl font-serif text-primary mb-6">Excelencia en Cada Operación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Libera Stock es sinónimo de profesionalidad y excelencia en el mercado de la alta relojería. 
            Nuestra experiencia y solidez financiera nos permiten ofrecer el mejor servicio del sector.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {[
            {
              icon: Briefcase,
              title: "Solidez Financiera",
              description: "Respaldo económico para operaciones de cualquier volumen"
            },
            {
              icon: HandshakeIcon,
              title: "Servicio Premium",
              description: "Atención personalizada y asesoramiento profesional"
            },
            {
              icon: Globe,
              title: "Presencia Internacional",
              description: "Red exclusiva de distribuidores y coleccionistas premium"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-100 group hover:shadow-lg transition-all">
              <feature.icon className="h-12 w-12 text-gold mb-6 transform transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-serif text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-primary p-8 rounded-lg text-white">
            <Shield className="h-12 w-12 text-gold mb-6" />
            <h3 className="text-2xl font-serif mb-4">Garantías Corporativas</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <BadgeCheck className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <span>Valoraciones profesionales basadas en datos de mercado</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <span>Procesos ágiles y eficientes con pagos inmediatos</span>
              </li>
              <li className="flex items-start space-x-3">
                <Lock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <span>Protocolos estrictos de confidencialidad y seguridad</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <div className="flex items-start space-x-4">
              <Lock className="h-12 w-12 text-gold flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4">Confidencialidad Corporativa</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Como líderes en el sector, entendemos la importancia crítica de la discreción 
                  en las operaciones de alta relojería. Implementamos:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Acuerdos de confidencialidad corporativos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Protocolos de seguridad de nivel bancario</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Gestión privada de cada operación</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}