import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { TestimonialCard } from './TestimonialCard';
import { useCarousel } from '../../hooks/useCarousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Head of Sales",
    company: "DigitalBoost",
    content: "O trabalho da equipe da CodeFlux foi incrível! A campanha de tráfego pago gerou um aumento significativo nas nossas conversões em apenas um mês.",
    rating: 5,
    image: "assets/images/mulher1.avif"
  },
  {
    name: "Roberto Lima",
    role: "Gerente de E-commerce",
    company: "ShopMax",
    content: "Graças ao serviço de tráfego pago da CodeFlux, conseguimos expandir nossa presença online e aumentar o ROI das nossas campanhas em 50%.",
    rating: 5,
    image: "assets/images/homem1.jpeg"
  },
  {
    name: "Ana Silva",
    role: "CEO",
    company: "TechStart",
    content: "A equipe da CodeFlux superou todas as nossas expectativas. O aplicativo que desenvolveram revolucionou nossa operação.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Carlos Santos",
    role: "Diretor de Marketing",
    company: "InnovateCorp",
    content: "Excelente trabalho no desenvolvimento do nosso site. A otimização SEO trouxe resultados impressionantes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Mariana Costa",
    role: "Product Owner",
    company: "EasyDelivery",
    content: "O aplicativo de delivery desenvolvido pela equipe é intuitivo e performático. Nossos clientes adoraram!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Lucas Almeida",
    role: "CEO",
    company: "TechSolutions",
    content: "A parceria com a equipe foi fundamental para o sucesso do nosso projeto. Eles entregaram mais do que prometido!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Fernanda Souza",
    role: "Marketing Manager",
    company: "ShopMaster",
    content: "Excelente serviço! A equipe foi muito atenciosa e conseguimos alcançar os resultados desejados rapidamente.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Carlos Pereira",
    role: "CTO",
    company: "FintechX",
    content: "Trabalhar com esta equipe foi uma experiência incrível. A qualidade do código e o cumprimento dos prazos foram excepcionais.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  }
];

export function Testimonials() {
  const { currentIndex, next, previous } = useCarousel(testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-6">
        <SectionTitle
          title="Depoimentos"
          subtitle="O que nossos clientes dizem sobre nós"
        />
        
        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}