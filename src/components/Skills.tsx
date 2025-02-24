import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'HTML', description: 'Structurer le contenu web avec des balises sémantiques.' },
  { name: 'CSS', description: 'Créer des interfaces esthétiques et responsives.' },
  { name: 'JavaScript', description: 'Développer des applications interactives avec JS et ES6+.' },
  { name: 'React', description: 'Construire des interfaces utilisateurs dynamiques et réactives.' },
  { name: 'TailwindCSS', description: 'Utiliser des utilitaires pour créer des designs modernes et rapides.' },
  { name: 'Node.js', description: 'Développer des serveurs backend avec Node.js et Express.' },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold mb-8">Mes Compétences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={ref}
            className={`transition-transform duration-500 transform ${
              inView ? 'translate-x-0' : `${index % 2 === 0 ? '-translate-x-full' : 'translate-x-full'}`
            }`}
          >
            <h3 className="text-2xl font-semibold text-blue-600">{skill.name}</h3>
            <p className="text-lg text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
