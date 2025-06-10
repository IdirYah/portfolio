import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import reactImg from '../assets/react.png';
import tailwindImg from '../assets/tailwindcss.png';
import nodeImg from '../assets/NodeJS.png';
import expressImg from '../assets/expressJS.png';
import mongoImg from '../assets/mongodb.png';
import mysqlImg from '../assets/mysql.png';
const skills = [
  { name: "HTML", image: htmlImg },
  { name: "CSS", image: cssImg },
  { name: "React", image: reactImg },
  { name: "Tailwind CSS", image: tailwindImg },
  { name: "Node.js", image: nodeImg },
  { name: "Express", image: expressImg },
  { name: "MongoDB", image: mongoImg },
  { name: "MySQL", image: mysqlImg },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="p-6 justify-center items-center flex"
            >
              <img src={skill.image} width={150} height={150}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
