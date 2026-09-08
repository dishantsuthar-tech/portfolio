import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Particles from "../components/Particles";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        {/* Particles Background */}
        <div className="particles-background">
          <Particles
            particleColors={["#8b5cf6", "#ffffff"]}
            particleCount={150}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            particleHoverFactor={0.5}
            alphaParticles={true}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Hero Content */}
        <div className="hero-container hero-content">
          <p className="hero-tag">
            MCA STUDENT · REACT DEVELOPER · ASPIRING FULL STACK DEVELOPER
          </p>

          <h1>
            Hi, I'm <span>Dishant Suthar.</span>
            <br />
            I build for the web.
          </h1>

          <p className="hero-description">
            I'm Dishant Suthar, an MCA student and React Developer focused on
            building clean, responsive, and modern web applications using HTML,
            CSS, JavaScript, Tailwind CSS, and React.js. Currently, I'm learning
            Backend Development, the MERN Stack, and Data Structures & Algorithms
            on my journey to becoming a Full Stack Developer.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-btn">
              View Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="secondary-btn">
              Let's Talk
            </Link>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/dishantsuthar-tech"
              target="_blank"
              rel="noreferrer"
              aria-label="Dishant Suthar GitHub Profile"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/dishantsuthar/"
              target="_blank"
              rel="noreferrer"
              aria-label="Dishant Suthar LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
