import React from 'react';
import ProjectCard from './ProjectCard';

function Projets() {
  return (
    <section id="projets" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Mes projets</h2>

        <div className="grid gap-10 md:grid-cols-2">
          <ProjectCard
            title="Booki"
            description="Refonte responsive d’un site de réservation de logements."
            challenges="Créer une interface 100 % responsive accessible à tous les appareils."
            solutions="Utilisation de Flexbox, media queries, et vérification via Lighthouse."
            skills="HTML5, CSS3, responsive design, accessibilité"
            link="https://boris-oc.github.io/Projet-2-Booki-OC/"
            code="https://github.com/Boris-OC/Projet-2-Booki-OC"
          />

          <ProjectCard
            title="Optimisation du site photographe"
            description="Optimisation technique, SEO et performance du site d’une photographe."
            challenges="Réduire les temps de chargement et améliorer le score Lighthouse."
            solutions="Compression d’images, lazy loading, SEO on-page, ARIA."
            skills="SEO, performance web, accessibilité, HTML/CSS"
            link="https://boris-oc.github.io/Nina-optimisation-du-site/"
            code="https://github.com/Boris-OC/Nina-optimisation-du-site"
          />

          <ProjectCard
            title="Mon Vieux Grimoire (Back-end)"
            description="Développement de l'API REST sécurisée d'une bibliothèque de livres notés."
            challenges="Authentification, sécurisation des routes et gestion des images."
            solutions="Mise en place de JWT, protection middleware, Sharp pour les images."
            skills="Node.js, Express, MongoDB, Auth, Mongoose, sécurité"
            code="https://github.com/Boris-OC/boris-books-api"
          />
        </div>
      </div>
    </section>
  );
}

export default Projets;
