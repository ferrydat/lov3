import React, { useState } from 'react';
import { Mail, Phone, MapPin, Lock, Building2, Globe2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data as Record<string, string> })
    })
      .then(() => {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      })
      .catch(error => alert("Error: " + error));
  };

  if (submitted) {
    return (
      <div className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif text-primary mb-4">¡Gracias por contactar con nosotros!</h2>
            <p className="text-gray-600 mb-6">
              Hemos recibido su solicitud correctamente. Nuestro equipo revisará los detalles 
              y se pondrá en contacto con usted a la mayor brevedad posible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hover transition-colors"
            >
              Enviar otra solicitud
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider text-sm block mb-3">
            CONTACTO CORPORATIVO
          </span>
          <h2 className="text-4xl font-serif text-primary mb-6">Inicie una Conversación Profesional</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo de expertos está preparado para analizar su portfolio y 
            presentarle una propuesta personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-serif text-primary mb-6">Ventajas Corporativas</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Estructura Profesional</h4>
                    <p className="text-gray-600">Respaldo corporativo y solidez financiera para operaciones de gran volumen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe2 className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Red Premium</h4>
                    <p className="text-gray-600">Conexión directa con los principales actores del mercado de lujo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Máxima Confidencialidad</h4>
                    <p className="text-gray-600">Protocolos estrictos de privacidad en cada operación</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-lg text-white">
              <h3 className="text-xl font-serif mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-gold" />
                  <a href="mailto:libera-stock@libera-stock.com" className="text-gray-200 hover:text-white">
                    libera-stock@libera-stock.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-gold" />
                  <span className="text-gray-200">Contacto directo para partners corporativos</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-gold" />
                  <span className="text-gray-200">Red Internacional de Distribución Premium</span>
                </div>
              </div>
            </div>
          </div>
          
          <form
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Detalles del Portfolio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describa su inventario de relojes (marcas, cantidades, condición)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hover transition-colors"
              >
                Solicitar Valoración Profesional
              </button>

              <div className="flex items-center space-x-2 text-sm text-gray-500 justify-center">
                <Lock className="h-4 w-4" />
                <span>Información tratada con absoluta confidencialidad</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}