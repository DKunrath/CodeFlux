import React from 'react';
import { Clock, Users, Sparkles, Target } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';
import {SiTypescript, SiMongodb, SiReact } from 'react-icons/si';
import { FaNode, FaHtml5, FaCss3, FaAws } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { VscAzure } from "react-icons/vsc";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-6">
        <SectionTitle
          title="Sobre Nós"
          subtitle="Conheça nossa história e valores"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transformando ideias em realidade digital desde 2022
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa jornada começou com uma visão clara: criar soluções digitais que não apenas atendam às necessidades atuais, mas também antecipem os desafios do futuro.
            </p>
            <p className="text-gray-600 mb-8">
              Com uma equipe apaixonada por tecnologia e inovação, desenvolvemos projetos que impactam positivamente os negócios de nossos clientes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Stat number="100+" label="Projetos Entregues" />
              <Stat number="98%" label="Clientes Satisfeitos" />
              <Stat number="10+" label="Especialistas" />
              <Stat number="2+" label="Anos no Mercado" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <ValueCard
              icon={<Clock className="w-8 h-8" />}
              title="Compromisso"
              description="Entrega pontual e qualidade garantida"
            />
            <ValueCard
              icon={<Users className="w-8 h-8" />}
              title="Colaboração"
              description="Parceria próxima com clientes"
            />
            <ValueCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Inovação"
              description="Tecnologias de ponta"
            />
            <ValueCard
              icon={<Target className="w-8 h-8" />}
              title="Resultados"
              description="Foco em objetivos"
            />
          </div>
        </div>

        {/* New Tech Stack Section */}
        <div className="mt-20">
          <SectionTitle title="Algumas Tecnologias que Utilizamos" subtitle="As ferramentas que ajudam a construir soluções inovadoras" />
          <div className="flex flex-wrap gap-6 justify-center mt-6">
            <TechIcon icon={<FaNode className="w-12 h-12 text-green-600" />} label="Node.js" />
            <TechIcon icon={<SiTypescript className="w-12 h-12 text-blue-600" />} label="Typescript" />
            <TechIcon icon={<FaHtml5 className="w-12 h-12 text-red-600" />} label="HTML5" />
            <TechIcon icon={<FaCss3 className="w-12 h-12 text-green-600" />} label="CSS3" />
            <TechIcon icon={<IoLogoJavascript className="w-12 h-12 text-yellow-600" />} label="JavaScript" />
            <TechIcon icon={<SiMongodb className="w-12 h-12 text-green-700" />} label="MongoDB" />
            <TechIcon icon={<SiReact className="w-12 h-12 text-cyan-600" />} label="React" />
            <TechIcon icon={<TbApi className="w-12 h-12 text-indigo-600" />} label="RestAPI" />
            <TechIcon icon={<FaFlutter className="w-12 h-12 text-blue-600" />} label="Flutter" />
            <TechIcon icon={<FaAws className="w-12 h-12 text-black-600" />} label="AWS" />
            <TechIcon icon={<VscAzure className="w-12 h-12 text-blue-600" />} label="Azure" />
            {/* Add more icons as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-600">{number}</p>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-indigo-50 p-6 rounded-xl hover:bg-indigo-100 transition-colors">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// New TechIcon component to display each technology's icon and label
function TechIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">{icon}</div>
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}
