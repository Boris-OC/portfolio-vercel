import React from 'react';

function Competences() {
  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Mes compétences</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Front-end */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Front-end</h3>
            <ul className="text-gray-700 space-y-2">
              <li>HTML5 / CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Back-end */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Back-end</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>API REST</li>
            </ul>
          </div>

          {/* Outils */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Outils</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competences;
