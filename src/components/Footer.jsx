import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <h2>Dishant<span>.</span></h2>
            <p>
              MCA Student & Aspiring Full Stack Developer.
            </p>
          </div>

          <div className="footer-socials">
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

        <div className="footer-bottom">
          <p>
            © {currentYear} Dishant. All rights reserved.
          </p>

          <p>👾</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;