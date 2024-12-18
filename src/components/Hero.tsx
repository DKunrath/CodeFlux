import React from 'react';
import { ArrowRight, Code, Smartphone, Globe, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Da sua ideia à execução:{' '}
              <span className="text-indigo-600">soluções digitais</span> feitas sob medida para o <span className="text-indigo-600">seu sucesso!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Soluções tecnológicas inovadoras para o seu negócio, com pagamento só na entrega!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#services"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              <ServiceCard
                icon={<Globe className="w-8 h-8 text-indigo-600" />}
                title="Websites"
                description="Sites modernos e responsivos"
              />
              <ServiceCard
                icon={<Code className="w-8 h-8 text-indigo-600" />}
                title="WebApps"
                description="Sistemas web escaláveis"
              />
              <ServiceCard
                icon={<Smartphone className="w-8 h-8 text-indigo-600" />}
                title="MobileApps"
                description="Apps iOS e Android"
              />
              <ServiceCard
                icon={<TrendingUp className="w-8 h-8 text-indigo-600" />}
                title="Marketing"
                description="Tráfego pago otimizado"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}