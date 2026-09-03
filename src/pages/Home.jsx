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
            MCA STUDENT · ASPIRING FULL STACK DEVELOPER
          </p>

          <h1>
            Hi, I'm <span>Dishant.</span>
            <br />I build for the web.
          </h1>

          <p className="hero-description">
            I'm an MCA student focused on building clean, responsive web
            applications. Currently strengthening my frontend skills while
            learning backend development and Data Structures & Algorithms.
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
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/dishantsuthar/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
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
