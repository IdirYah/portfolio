import { ArrowRight, ExternalLink, Github } from "lucide-react";
import transporti from "../assets/transporti.jpg";
import weather from "../assets/weather.png";
import converter from "../assets/converter.png";
import chat from "../assets/chat.png";

const projects = [
  {
    id: 1,
    title: "Chat Application",
    image: chat,
    tags: ["React", "TailwindCSS","ExpressJS","Socket.io","MongoDB"],
    demoUrl: "https://chat-application-x1tc.onrender.com/",
    githubUrl: "https://github.com/IdirYah",
  },
  {
    id: 2,
    title: "Currency Converter",
    image: converter,
    tags: ["React", "CSS"],
    demoUrl: "https://currency-converter-front-end-tan.vercel.app/",
    githubUrl: "https://github.com/IdirYah",
  },
  {
    id: 3,
    title: "Weather Application",
    image: weather,
    tags: ["React" , "CSS"],
    demoUrl: "https://meteo-information.vercel.app/",
    githubUrl: "https://github.com/IdirYah",
  },
  {
    id: 4,
    title: "Transporti Frontend",
    image: transporti,
    tags: ["React", "CSS"],
    demoUrl: "https://transporti.vercel.app/",
    githubUrl: "https://github.com/IdirYah",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/IdirYah"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
