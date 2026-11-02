import { useEffect } from "react";
import "./App.css";

function App() {
  // Scroll Reveal Animation
  useEffect(() => {
    const sections = document.querySelectorAll(".content-section");

    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    sections.forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Rushdha<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome-text">WELCOME TO MY PORTFOLIO</p>

          <h1>
            <span className="greeting">Hi, I'm </span>
            <span className="name">M.I.F. Rushdha</span>
          </h1>

          <h2>Software Developer</h2>

          <p className="hero-description">
            I am a passionate technology enthusiast with an
            interest in software development, problem-solving
            and creating meaningful digital experiences.
            I enjoy learning new technologies and turning
            ideas into practical solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/FathimaRushdha26"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <span>•</span>

            <a href="#education">My Education</a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-circle">R</div>

            <h3>M.I.F. Rushdha</h3>
            <p>Software Developer</p>

            <div className="profile-tags">
              <span>Java</span>
              <span>React</span>
              <span>PHP</span>
              <span>Spring Boot</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="content-section" id="about">
        <div className="section-heading">
          <p className="section-label">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="section-subtitle">
            A little introduction about my background and interests.
          </p>
        </div>

        <div className="about-card">
          <div className="about-mark">R.</div>

          <div className="about-text">
            <h3>Curious Mind. Creative Thinker. Future Developer.</h3>

            <p>
              I am M.I.F. Rushdha, a technology enthusiast with
              an academic background in Software Technology and
              Biological Science.
            </p>

            <p>
              I am interested in software development, database
              management and building practical applications.
              Through academic work and personal projects, I
              continue to develop my programming and
              problem-solving skills.
            </p>

            <p>
              I believe in continuous learning, creativity and
              using technology to develop useful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        className="content-section education-section"
        id="education"
      >
        <div className="section-heading">
          <p className="section-label">MY ACADEMIC JOURNEY</p>

          <h2>
            My <span>Education</span>
          </h2>

          <p className="section-subtitle">
            My educational background and areas of study.
          </p>
        </div>

        <div className="education-grid">

          <div className="education-card">
            <div className="education-icon">01</div>

            <p className="education-type">
              UNDERGRADUATE DEGREE
            </p>

            <h3>Bachelor of Technology</h3>
            <h4>Software Technology</h4>

            <p className="institution">
              University of Vocational Technology
            </p>

            <p className="education-description">
              Academic focus on software development,
              programming, information technology and
              practical computing skills.
            </p>
          </div>

          <div className="education-card">
            <div className="education-icon">02</div>

            <p className="education-type">
              UNDERGRADUATE DEGREE
            </p>

            <h3>Bachelor of Science</h3>
            <h4>Biological Science</h4>

            <p className="institution">
              The Open University of Sri Lanka
            </p>

            <p className="education-description">
              Studying biological sciences and developing
              scientific knowledge, analytical thinking
              and research skills.
            </p>
          </div>

        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="content-section" id="skills">

        <div className="section-heading">
          <p className="section-label">
            MY TECHNICAL EXPERTISE
          </p>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <p className="section-subtitle">
            Technologies and tools I have used in my academic
            work and software development projects.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-card-heading">
              <span className="skill-symbol">01</span>
              <h3>Programming Languages</h3>
            </div>

            <div className="skill-list">
              <span>Java</span>
              <span>PHP</span>
              <span>JavaScript</span>
              <span>C</span>
              <span>C++</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-heading">
              <span className="skill-symbol">02</span>
              <h3>Frontend Development</h3>
            </div>

            <div className="skill-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>React</span>
              <span>AJAX</span>
              <span>Fetch API</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-heading">
              <span className="skill-symbol">03</span>
              <h3>Backend Development</h3>
            </div>

            <div className="skill-list">
              <span>PHP</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>MVC Architecture</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-heading">
              <span className="skill-symbol">04</span>
              <h3>Database Technologies</h3>
            </div>

            <div className="skill-list">
              <span>MySQL</span>
              <span>PDO</span>
              <span>Spring Data JPA</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-heading">
              <span className="skill-symbol">05</span>
              <h3>Development Tools</h3>
            </div>

            <div className="skill-list">
              <span>IntelliJ IDEA</span>
              <span>VS Code</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>XAMPP</span>
              <span>Android Studio</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-heading">
              <span className="skill-symbol">06</span>
              <h3>Security Concepts</h3>
            </div>

            <div className="skill-list">
              <span>Password Hashing</span>
              <span>SQL Injection Prevention</span>
              <span>XSS Protection</span>
              <span>CSRF Protection</span>
              <span>RBAC</span>
              <span>Session Management</span>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section
        className="content-section education-section"
        id="projects"
      >
        <div className="section-heading">
          <p className="section-label">MY RECENT WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="section-subtitle">
            A collection of applications and software projects
            developed through learning and practical experience.
          </p>
        </div>

        <div className="projects-grid">

          {/* Project 01 */}
          <div className="project-card">
            <div className="project-number">PROJECT 01</div>

            <h3>Student Management System</h3>

            <p>
              A web-based application designed to manage
              student information and academic records.
            </p>

            <div className="project-tech">
              <span>PHP</span>
              <span>MySQL</span>
            </div>

            <a
              href="https://github.com/FathimaRushdha26/student-management-system"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </div>

          {/* Project 02 */}
          <div className="project-card">
            <div className="project-number">PROJECT 02</div>

            <h3>Expense Tracker</h3>

            <p>
              A Java desktop application for recording,
              organizing and managing personal expenses.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Java Swing</span>
              <span>MySQL</span>
            </div>

            <a
              href="https://github.com/FathimaRushdha26/java-expense-tracker"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </div>

          {/* Project 03 */}
          <div className="project-card">
            <div className="project-number">PROJECT 03</div>

            <h3>Library Management System</h3>

            <p>
              A web application developed to support
              library operations and information management.
            </p>

            <div className="project-tech">
              <span>PHP</span>
              <span>MySQL</span>
            </div>

            <a
              href="https://github.com/FathimaRushdha26/library-management-system"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </div>

          {/* Project 04 */}
          <div className="project-card">
            <div className="project-number">PROJECT 04</div>

            <h3>Task Manager REST API</h3>

            <p>
              A backend application providing RESTful
              endpoints for task management using Spring Boot.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>

            <a
              href="https://github.com/FathimaRushdha26/task-manager-rest-api"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </div>

          {/* Project 05 - Featured BookIt */}
          <div className="project-card featured-project">
            <div className="project-number">
              PROJECT 05 · FEATURED
            </div>

            <h3>BookIt – Online Booking Management System</h3>

            <p>
              A full-featured online booking platform with
              customer and administrator modules, real-time
              appointment availability, booking management
              and analytics.
            </p>

            <div className="project-tech">
              <span>PHP 8</span>
              <span>MySQL</span>
              <span>JavaScript</span>
              <span>AJAX</span>
              <span>PDO</span>
              <span>MVC</span>
            </div>

            {/* Aligned Project Highlights */}
           <div className="project-highlights">
  <p><span className="highlight-check">✓</span><span>Customer registration and authentication</span></p>
  <p><span className="highlight-check">✓</span><span>Real-time booking availability</span></p>
  <p><span className="highlight-check">✓</span><span>Admin dashboard and analytics</span></p>
  <p><span className="highlight-check">✓</span><span>Security features and access control</span></p>
</div>

            <a
              href="https://github.com/FathimaRushdha26/bookit-"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Explore BookIt on GitHub ↗
            </a>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="content-section" id="certifications">

        <div className="section-heading">
          <p className="section-label">MY ACHIEVEMENTS</p>

          <h2>
            Certifi<span>cations</span>
          </h2>

          <p className="section-subtitle">
            Professional learning and training credentials.
          </p>
        </div>

        <div className="certifications-grid">

          {/* AWS Cloud Architecting */}
          <div className="certificate-card">

            <div className="certificate-top">
              <div className="aws-icon">AWS</div>
              <span className="certificate-label">
                TRAINING BADGE
              </span>
            </div>

            <h3>AWS Academy Graduate</h3>
            <h4>Cloud Architecting</h4>

            <p className="certificate-issuer">
              Amazon Web Services (AWS Academy)
            </p>

            <div className="certificate-details">
              <span>Issued: September 26, 2026</span>
              <span>Recipient: M.I.F. Rushdha</span>
            </div>

            <a
              href="https://www.credly.com/go/cgtXC8Bq"
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Credential ↗
            </a>

          </div>

          {/* AWS Cloud Foundations */}
          <div className="certificate-card">

            <div className="certificate-top">
              <div className="aws-icon">AWS</div>
              <span className="certificate-label">
                TRAINING BADGE
              </span>
            </div>

            <h3>AWS Academy Graduate</h3>
            <h4>Cloud Foundations</h4>

            <p className="certificate-issuer">
              Amazon Web Services (AWS Academy)
            </p>

            <div className="certificate-details">
              <span>Issued: August 15, 2026</span>
              <span>Duration: 20 Hours</span>
              <span>Recipient: M.I.F. Rushdha</span>
            </div>

            <a
              href="https://www.credly.com/go/E7KPcxJ"
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Credential ↗
            </a>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section" id="contact">

        <div className="section-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Contact <span>Me</span>
          </h2>

          <p className="section-subtitle">
            Have a project idea or an opportunity? Feel free to contact me.
          </p>
        </div>

        <div className="contact-container">

          <div className="contact-card">
            <div className="contact-icon">✉</div>

            <h3>Email</h3>

            <p>Let's connect through email.</p>

            <a href="mailto:fathimarushdha26@gmail.com">
              fathimarushdha26@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">⌘</div>

            <h3>GitHub</h3>

            <p>Explore my projects and code.</p>

            <a
              href="https://github.com/FathimaRushdha26"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub Profile ↗
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 M.I.F. Rushdha. All Rights Reserved.</p>

        <a
          href="https://github.com/FathimaRushdha26"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </footer>

    </div>
  );
}

export default App;