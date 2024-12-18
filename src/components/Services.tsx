import React from 'react';
import { Globe, Code2, Smartphone, TrendingUp, Check } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-6">
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Soluções completas para seu negócio"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <ServiceCard
            icon={<TrendingUp  />}
            title="Tráfego Pago"
            price="A partir de R$ 1.500"
            features={[
              'Google Ads, MetaAds, entre outros',
              'Relatórios Semanais',
              'Segmentação Precisa',
              'Monitoramento Diário',
              'Aumento de ROI'
            ]}
          />

          <ServiceCard
            icon={<Globe />}
            title="Website"
            price="A partir de R$ 2.000"
            features={[
              'Design Responsivo',
              'Otimização SEO',
              'Painel Administrativo',
              'Integração com Redes Sociais',
              'Suporte Técnico'
            ]}
          />
          
          <ServiceCard
            icon={<Code2 />}
            title="WebApp"
            price="A partir de R$ 6.000"
            features={[
              'Desenvolvimento Personalizado',
              'Interface Intuitiva',
              'Banco de Dados Seguro',
              'API RESTful',
              'Escalabilidade'
            ]}
          />
          
          <ServiceCard
            icon={<Smartphone />}
            title="MobileApp"
            price="A partir de R$ 8.000"
            features={[
              'iOS e Android',
              'UI/UX Nativo',
              'Push Notifications',
              'Integração com APIs',
              'Performance Otimizada'
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  price, 
  features
}: { 
  icon: React.ReactNode; 
  title: string; 
  price: string; 
  features: string[]; 
  featured?: boolean;
}) {
  return (
    <div className={`
      rounded-xl p-8 transition-transform hover:-translate-y-1
      ${'bg-white text-gray-900 shadow-lg'}
    `}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6
        ${'bg-indigo-50 text-indigo-600'}
      `}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`text-sm mb-6 ${'text-gray-600'}`}>{price}</p>
      
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${'text-indigo-600'}`} />
            <span className={'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a
        href={`https://wa.me/5551996081669?text=${encodeURIComponent(`Olá, estou interessado no serviço de ${title}.`)}`
        }
        className={`
        mt-8 w-full py-3 rounded-lg font-medium transition-colors
        bg-indigo-600 text-white hover:bg-indigo-700 flex items-center justify-center
        `}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicitar Proposta
      </a>
    </div>
  );
}