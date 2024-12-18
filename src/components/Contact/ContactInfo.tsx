import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
        <p className="text-gray-600">
          Estamos prontos para ajudar você a transformar suas ideias em realidade. Entre em contato conosco!
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Email</p>
            <a href="mailto:suporte.codeflux@gmail.com" className="text-indigo-600 hover:text-indigo-700">
            suporte.codeflux@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Telefone</p>
            <a href="tel:+5551996081669" className="text-indigo-600 hover:text-indigo-700">
              (51) 99608-1669
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Endereço</p>
            <p className="text-gray-600">
              Rua Osvaldo Aranha 245<br />
              Campo Bom - RS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}