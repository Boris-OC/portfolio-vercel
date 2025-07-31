import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Mon Portfolio</h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#accueil" className="hover:text-blue-600">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-blue-600">À propos</a></li>
          <li><a href="#competences" className="hover:text-blue-600">Compétences</a></li>
          <li><a href="#projets" className="hover:text-blue-600">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Bouton mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 text-gray-700 font-medium space-y-2">
          <li><a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a></li>
          <li><a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a></li>
          <li><a href="#competences" onClick={() => setMenuOpen(false)}>Compétences</a></li>
          <li><a href="#projets" onClick={() => setMenuOpen(false)}>Projets</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </header>
  );
}

export default Header;
