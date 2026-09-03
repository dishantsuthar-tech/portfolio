import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Recipes App",
      description:
        "A modern recipe management application built with React.js, Vite, Tailwind CSS, and Capacitor.",
      technologies: ["React", "Vite", "Tailwind CSS", "Capacitor"],
      github: "https://github.com/dishantsuthar-tech/recipes-app",
      live: "https://dishantsuthar-tech.github.io/recipes-app/",
    },
    {
      title: "Expense Tracker",
      description:
        "A simple and responsive expense tracker with localStorage support for adding, editing, and deleting expenses.",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/dishantsuthar-tech/expense-tracker",
      live: "https://dishantsuthar-tech.github.io/expense-tracker/",
    },
    {
      title: "E-Commerce Shopping Cart",
      description:
        "A responsive e-commerce website featuring product search, category filtering, cart management, quantity controls, and localStorage persistence.",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/dishantsuthar-tech/ecommerce-shopping-cart",
      live: "https://dishantsuthar-tech.github.io/ecommerce-shopping-cart/",
    },
  ];

  return (
    <main className="projects-page">
      <section className="projects-section">
        <div className="projects-container">
          <p className="section-tag">MY WORK</p>

          <h1 className="projects-title">
            Projects I've built
            <br />
            while learning and growing.
          </h1>

          <p className="projects-intro">
            A selection of projects where I've applied my frontend development
            skills and explored different concepts and technologies.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <h2>{project.title}</h2>

                  <p>{project.description}</p>
                </div>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub size={18} />
                    Code
                  </a>

                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
