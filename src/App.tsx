// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Blog from "./components/Blog";
import Galery from "./components/Galery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-zinc-800 flex flex-col">
        <Header />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Service />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Galery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
