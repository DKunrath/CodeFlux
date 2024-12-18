import React from 'react';
import { SectionTitle } from './common/SectionTitle';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container px-6">
        <SectionTitle
          title="Portfólio"
          subtitle="Conheça alguns dos nossos projetos"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ProjectCard
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            title="Venda de Infoprodutos"
            category="Tráfego Pago"
            description="Solução de problemas com segmentação de públicos e aumento considerável do ROI."
          />
          
          <ProjectCard
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
            title="Aplicativo de Delivery"
            category="MobileApp"
            description="Aplicativo de delivery com rastreamento em tempo real e pagamento integrado com Mercado Pago."
          />
          
          <ProjectCard
            image="/assets/images/site_real_estate.webp"
            title="Site de Imóveis"
            category="Website"
            description="Site institucional com sistema de busca avançada de imóveis."
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  image, 
  title, 
  category, 
  description 
}: { 
  image: string; 
  title: string; 
  category: string; 
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <span className="text-sm font-medium text-indigo-600">{category}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}