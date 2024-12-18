import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        'service_6k22iyt', // Your service ID from EmailJS
        'template_k9vo0er', // Your template ID from EmailJS
        e.target as HTMLFormElement, // Explicitly cast to HTMLFormElement
        'e5ZIoog1ciTmF7ZRJ' // Your user ID from EmailJS
      );

      // Show success message and reset form fields
      setPopupMessage('Email foi enviado, entraremos em contato!');
      setValues({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setPopupMessage('');
      }, 5000); // Hide message after 5 seconds
    } catch (error) {
      console.error('Error sending email:', error);
      setPopupMessage('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <div>
      {/* Popup message */}
      {popupMessage && (
        <div className="popup-message bg-green-500 text-white py-2 px-4 rounded-md mb-4">
          {popupMessage}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Serviço</label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Selecione um serviço</option>
            <option value="design">Tráfego Pago</option>
            <option value="website">Website</option>
            <option value="webapp">WebApp</option>
            <option value="mobileapp">MobileApp</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
