import React from 'react';

function Accueil() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-24 text-white bg-animated-gradient"
    >
      <div className="z-10 max-w-4xl w-full animate-fade-in">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-title uppercase tracking-tight text-black mb-6 leading-tight">
          Hey, moi c’est Boris
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 px-2 sm:px-0">
          Développeur web fullstack, je conçois des expériences web fluides, modernes et engageantes.
        </p>

        <a
          href="#projets"
          className="inline-block px-8 py-3 bg-white text-black rounded-full font-semibold text-lg shadow-md hover:bg-gray-200 transition"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}

export default Accueil;
