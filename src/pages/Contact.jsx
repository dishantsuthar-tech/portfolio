import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-container">
          <p className="section-tag">CONTACT</p>

          <h1 className="contact-title">
            Let's work
            <br />
            together.
          </h1>

          <p className="contact-description">
            I'm always open to discussing new opportunities, projects, and
            ideas. Feel free to reach out.
          </p>

          <a
            href="mailto:dishantsuthar.tech@gmail.com"
            className="contact-button"
          >
            Send me an email
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-grid">
            <a
              href="mailto:dishantsuthar.tech@gmail.com"
              className="contact-card"
            >
              <Mail size={20} />

              <div>
                <span>Email</span>
                <p>dishantsuthar.tech@gmail.com</p>
              </div>
            </a>

            <a href="tel:+916355508439" className="contact-card">
              <Phone size={20} />

              <div>
                <span>Phone</span>
                <p>+91 6355508439</p>
              </div>
            </a>
          </div>

          <div className="contact-socials">
            <p>Find me online</p>

            <div>
              <a
                href="https://github.com/dishantsuthar-tech"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/dishantsuthar/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/dishant_tech"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
