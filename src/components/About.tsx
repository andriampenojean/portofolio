// About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gray-900 py-12 px-6 text-white">
      <div className="mx-auto rounded-lg shadow-xl p-8 space-y-8">
        
        {/* Card 1: Photo de Profil */}
        <div className="card flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
            <img
              src="/path/to/your/photo.jpg" // Mettez ici le chemin vers votre photo
              alt="Votre Nom"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-100">Votre Nom</h2>
          <p className="text-sm text-gray-400">Développeur Front-End & Back-End</p>
        </div>

        {/* Card 2: Description */}
        <div className="card bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">À propos de moi</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Je suis un développeur passionné par la création d'applications web performantes en utilisant React, Vite, Tailwind CSS et TypeScript. 
            Je travaille de manière collaborative, avec une approche full-stack, et j'aime apprendre de nouvelles technologies.
          </p>
        </div>

        {/* Card 3: Compétences et Technologies */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Technologies que j'utilise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* Card React */}
            <div className="card bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <h4 className="text-lg font-semibold text-gray-100">React</h4>
              <p className="text-sm text-gray-400">Bibliothèque JavaScript pour la création d'interfaces utilisateur dynamiques.</p>
            </div>

            {/* Card Vite */}
            <div className="card bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <h4 className="text-lg font-semibold text-gray-100">Vite</h4>
              <p className="text-sm text-gray-400">Build tool moderne et rapide pour des applications web optimisées.</p>
            </div>

            {/* Card Tailwind CSS */}
            <div className="card bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <h4 className="text-lg font-semibold text-gray-100">Tailwind CSS</h4>
              <p className="text-sm text-gray-400">Framework CSS utilitaire pour des conceptions réactives et modernes.</p>
            </div>

            {/* Card TypeScript */}
            <div className="card bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <h4 className="text-lg font-semibold text-gray-100">TypeScript</h4>
              <p className="text-sm text-gray-400">Langage JavaScript avec typage statique pour une meilleure robustesse et maintenabilité.</p>
            </div>
          </div>
        </div>

        {/* Card 4: Citation ou touche personnelle */}
        <div className="card bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <p className="text-sm text-gray-400 italic">
            "Je crois fermement en une collaboration étroite et continue avec mes partenaires pour créer des solutions web performantes et engageantes."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
