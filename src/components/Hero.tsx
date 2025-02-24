// src/components/Hero.tsx
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-[url('/path/to/your/image.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Bienvenue sur Mon Portfolio
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Développeur Full Stack | Spécialiste en React, TypeScript et TailwindCSS
        </p>
        
        <div className="flex space-x-4 justify-center">
          <NavLink
            to="/projects"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Voir Mes Projets
          </NavLink>
          
          <NavLink
            to="/contact"
            className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            Me Contacter
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
