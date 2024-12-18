import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-6">
        <SectionTitle
          title="Contato"
          subtitle="Vamos conversar sobre seu projeto"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}