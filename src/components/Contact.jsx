import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Me contacter</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto px-4">
        N’hésitez pas à me contacter pour un projet, une collaboration ou simplement échanger.
      </p>

      <div className="flex justify-center gap-6 flex-wrap text-blue-600 font-medium text-lg">
        <a href="mailto:jekovboris@gmail.com" className="hover:underline">
          ✉️ M’envoyer un e-mail
        </a>
        <a href="https://github.com/Boris-OC" target="_blank" className="hover:underline">
          🐙 Mon GitHub
        </a>
        <a href="https://www.linkedin.com/in/boris-jekov-74a939257/" target="_blank" className="hover:underline">
          💼 Mon LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
