
import { useInView } from 'react-intersection-observer';

const App = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen bg-blue-100">
      {/* Header / Introduction */}
      <header className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white text-center py-16">
        <h1
          ref={ref}
          className={`text-5xl font-bold mb-4 transition-all duration-1000 transform ${
            inView ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          Bienvenue sur Mon Portfolio
        </h1>
        <p
          className={`text-xl transition-all duration-1000 transform ${
            inView ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          Je suis un développeur passionné avec une expérience dans le développement web.
        </p>
      </header>

      {/* Compétences */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold mb-8">Mes Compétences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {/* HTML */}
          <div
            className={`transition-transform duration-500 transform ${
              inView ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <h3 className="text-2xl font-semibold text-blue-600">HTML</h3>
            <p className="text-lg text-gray-700">Structurer le contenu web avec des balises sémantiques.</p>
          </div>

          {/* CSS */}
          <div
            className={`transition-transform duration-500 transform ${
              inView ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <h3 className="text-2xl font-semibold text-blue-600">CSS</h3>
            <p className="text-lg text-gray-700">Créer des interfaces esthétiques et responsives.</p>
          </div>

          {/* JavaScript */}
          <div
            className={`transition-transform duration-500 transform ${
              inView ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <h3 className="text-2xl font-semibold text-blue-600">JavaScript</h3>
            <p className="text-lg text-gray-700">Développer des applications interactives avec JS et ES6+.</p>
          </div>

          {/* React */}
          <div
            className={`transition-transform duration-500 transform ${
              inView ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <h3 className="text-2xl font-semibold text-blue-600">React</h3>
            <p className="text-lg text-gray-700">Construire des interfaces utilisateurs dynamiques et réactives.</p>
          </div>

          {/* Tailwind */}
          <div
            className={`transition-transform duration-500 transform ${
              inView ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <h3 className="text-2xl font-semibold text-blue-600">TailwindCSS</h3>
            <p className="text-lg text-gray-700">Utiliser des utilitaires pour créer des designs modernes et rapides.</p>
          </div>

          {/* Node.js */}
          <div
            className={`transition-transform duration-500 transform ${
              inView ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <h3 className="text-2xl font-semibold text-blue-600">Node.js</h3>
            <p className="text-lg text-gray-700">Développer des serveurs backend avec Node.js et Express.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-8">
        <p>&copy; 2025 Mon Portfolio - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default App;
