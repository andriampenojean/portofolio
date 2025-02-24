// src/components/Header.tsx
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/skills", label: "Compétences" },
    { path: "/projects", label: "Projets" },
    { path: "/experience", label: "Expérience" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Témoignages" },
    { path: "/timeline", label: "Chronologie" },
    { path: "/blog", label: "Blog" },
    { path: "/gallery", label: "Galerie" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-gray-800 text-white shadow-md fixed top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="text-white hover:text-gray-400">
            Mon Portfolio
          </NavLink>
        </div>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-yellow-400" : "text-white hover:text-gray-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
