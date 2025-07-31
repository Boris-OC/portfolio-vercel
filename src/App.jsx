import React from 'react';
import Header from './components/Header';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';


function App() {
  return (
    <div className="font-sans bg-light text-secondary">
      <Header />
      <Accueil />
      <APropos />
      <Competences />
      <Projets />
      <Contact />
      <main className="p-10 text-center">
        <h2 className="text-3xl font-semibold mt-10 text-gray-800" id="accueil">
          Bienvenue sur mon portfolio !
        </h2>
      </main>
    </div>
  );
}

export default App;
