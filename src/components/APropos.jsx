import React from 'react';

function APropos() {
  return (
    <section id="apropos" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>

        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          Je m'appelle <strong>Boris Jekov</strong>, développeur web fullstack passionné.
          J’ai suivi la formation “Développeur Web” avec <strong>OpenClassrooms</strong>,
          où j’ai acquis de solides compétences en développement front-end (HTML, CSS, JavaScript, React)
          ainsi qu’en back-end (Node.js, Express, MongoDB).
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          Mon objectif : créer des expériences web <strong>fluides, performantes et accessibles</strong>.
          J’aime résoudre des problèmes complexes, apprendre en continu et concevoir des interfaces élégantes.
        </p>
      </div>
    </section>
  );
}

export default APropos;