const About = () => {
  return (
    <main className="about-page">
      <section className="about-section">
        <div className="about-container">
          <p className="section-tag">ABOUT ME</p>

          <h1 className="about-title">
            Building my skills,
            <br />
            one project at a time.
          </h1>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Dishant, an MCA student with a strong interest in web
                development and software engineering.
              </p>

              <p>
                I started my journey with frontend development, learning HTML,
                CSS, JavaScript, and React. I enjoy turning ideas into clean,
                responsive, and user-friendly web applications.
              </p>

              <p>
                Currently, I'm expanding my knowledge by learning backend
                development and improving my problem-solving skills through Data
                Structures and Algorithms.
              </p>
            </div>

            <div className="about-info">
              <div className="info-item">
                <span>Currently</span>
                <p>Learning Backend Development</p>
              </div>

              <div className="info-item">
                <span>Focus</span>
                <p>Full Stack Development</p>
              </div>

              <div className="info-item">
                <span>Education</span>
                <p>Master of Computer Applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="about-container">
          <p className="section-tag">SKILLS</p>

          <h2 className="skills-title">Technologies I'm working with.</h2>

          <div className="skills-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">GitHub</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
