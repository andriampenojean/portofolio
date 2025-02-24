// src/components/Footer.tsx
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">&copy; 2025 Mon Portfolio - Tous droits réservés</p>
                </div>
                <div className="flex space-x-4 text-sm">
                    <NavLink to="/about" className="hover:underline">À propos</NavLink>
                    <NavLink to="/services" className="hover:underline">Services</NavLink>
                    <NavLink to="/projects" className="hover:underline">Projets</NavLink>
                    <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-sm">Suivez-moi sur :
                        <a href="#" className="ml-2 hover:underline">LinkedIn</a>
                        <a href="#" className="ml-2 hover:underline">GitHub</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
