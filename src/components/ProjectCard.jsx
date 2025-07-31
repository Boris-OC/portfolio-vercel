import React from 'react';

function ProjectCard({ title, description, challenges, solutions, skills, link, code }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      <ul className="text-sm text-gray-600 mb-4 space-y-1">
        <li><strong>Problématiques :</strong> {challenges}</li>
        <li><strong>Solutions apportées :</strong> {solutions}</li>
        <li><strong>Compétences développées :</strong> {skills}</li>
      </ul>

      <div className="flex flex-wrap gap-4 mt-4">
        {link && (
          <a
            href={link}
            target="_blank"
            className="px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition"
          >
            Voir le site
          </a>
        )}
        {code && (
          <a
            href={code}
            target="_blank"
            className="px-4 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition"
          >
            Code source
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
