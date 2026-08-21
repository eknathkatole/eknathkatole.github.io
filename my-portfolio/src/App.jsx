import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  ExternalLink,
  Download,
  MapPin,
  Code2,
  Database,
  Cloud,
  Monitor,
  Server,
  Award,
  Send,
  Briefcase,
  GraduationCap
} from "lucide-react";

import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Your Company",
      duration: "2026 - Present",
      description: [
        "Developing and maintaining web applications.",
        "Working with Java, SQL and cloud technologies.",
        "Building responsive interfaces and integrating APIs.",
        "Using Git and GitHub for version control."
      ],
      technologies: ["Java", "SQL", "Git", "GitHub", "AWS"]
    },
    {
      role: "Business Development Intern",
      company: "NanoTech Softwares",
      duration: "2026",
      description: [
        "Worked on business development activities.",
        "Interacted with potential clients.",
        "Supported lead generation and client communication.",
        "Assisted in understanding customer requirements."
      ],
      technologies: ["Communication", "CRM", "Digital Marketing"]
    }
  ];

  const skills = [
    {
      title: "Backend Development",
      icon: <Server size={18} />,
      items: ["Java", "Python", "SQL", "REST APIs"]
    },
    {
      title: "Frontend Development",
      icon: <Monitor size={18} />,
      items: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      title: "Database & Data",
      icon: <Database size={18} />,
      items: ["MySQL", "Oracle SQL", "MongoDB", "Power BI"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={18} />,
      items: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    }
  ];

  const projects = [
    {
      title: "PaanFresh E-Commerce Platform",
      description:
        "A responsive e-commerce website for showcasing and selling PaanFresh products.",
      image: "/projects/paanfresh.png",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/eknathkatole",
      demo: "#"
    },
    {
      title: "Real-Time Currency Converter",
      description:
        "A responsive currency conversion application using API-based exchange rates.",
      image: "/projects/currency.png",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/eknathkatole",
      demo: "#"
    },
    {
      title: "Developer Portfolio",
      description:
        "Personal portfolio website showcasing projects, technical skills and experience.",
      image: "/projects/portfolio.png",
      technologies: ["React", "JavaScript", "CSS", "GitHub"],
      github: "https://github.com/eknathkatole",
      demo: "#"
    }
  ];

  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "Training / Institute",
      year: "2026",
      image: "/certificates/java.png"
    },
    {
      title: "SQL Certification",
      issuer: "Training / Institute",
      year: "2026",
      image: "/certificates/sql.png"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2026",
      image: "/certificates/aws.png"
    }
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">EK</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>

        <div className="nav-actions">
          <a
            href="https://github.com/eknathkatole"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <Linkedin size={17} />
          </a>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </nav>

      <main>

        {/* HERO */}
        <section id="home" className="hero section">

          <div className="hero-content">

            <span className="availability">
              <span className="green-dot"></span>
              Open to new opportunities
            </span>

            <h1>
              Hi, I'm <span>Eknath</span>
            </h1>

            <h2>
              Java Developer & Cloud / DevOps Enthusiast
            </h2>

            <p>
              B.Tech Information Technology graduate passionate about
              software development, cloud computing and DevOps.
              I enjoy building useful applications and learning
              modern technologies.
            </p>

            <div className="location">
              <MapPin size={15} />
              Pune, Maharashtra, India
            </div>

            <div className="hero-buttons">

              <a
                className="primary-btn"
                href="/resume.pdf"
                download
              >
                <Download size={16} />
                Download CV
              </a>

              <a className="secondary-btn" href="#contact">
                <Mail size={16} />
                Get in Touch
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/eknathkatole"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} />
              </a>

              <a href="#">
                <Linkedin size={19} />
              </a>

              <a href="#contact">
                <Mail size={19} />
              </a>

            </div>

          </div>

          <div className="hero-image">

            <div className="profile-circle">

              <img
                src="/profile.jpg"
                alt="Eknath Katole"
              />

            </div>

            <div className="floating-badge badge-one">
              Java
            </div>

            <div className="floating-badge badge-two">
              AWS
            </div>

          </div>

        </section>


        {/* EXPERIENCE */}
        <section id="experience" className="section">

          <SectionTitle
            icon={<Briefcase size={18} />}
            title="Experience"
          />

          <div className="experience-container">

            {experiences.map((experience, index) => (

              <div className="experience-card" key={index}>

                <div className="experience-header">

                  <div className="company-icon">
                    <Briefcase size={18} />
                  </div>

                  <div>
                    <h3>{experience.role}</h3>

                    <p className="company">
                      {experience.company}
                    </p>
                  </div>

                  <span className="duration">
                    {experience.duration}
                  </span>

                </div>

                <div className="experience-body">

                  <div>
                    <h4>Key Responsibilities</h4>

                    <ul>
                      {experience.description.map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="impact">

                    <h4>Impact</h4>

                    <p>
                      Contributed to development,
                      automation and business objectives.
                    </p>

                  </div>

                </div>

                <div className="technology-list">

                  {experience.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* GITHUB */}
        <section className="section github-section">

          <SectionTitle
            icon={<Github size={18} />}
            title="GitHub Activity"
          />

          <div className="github-card">

            <div className="contribution-header">
              <span>GitHub Contributions</span>
              <span>Less → More</span>
            </div>

            <div className="contribution-grid">

              {Array.from({ length: 120 }).map(
                (_, index) => (
                  <span
                    key={index}
                    className={`contribution contribution-${index % 5}`}
                  />
                )
              )}

            </div>

            <a
              className="github-button"
              href="https://github.com/eknathkatole"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} />
              View GitHub Profile
            </a>

          </div>

        </section>


        {/* SKILLS */}
        <section id="skills" className="section">

          <SectionTitle
            icon={<Code2 size={18} />}
            title="Skills & Technologies"
          />

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div className="skill-card" key={index}>

                <div className="skill-title">
                  {skill.icon}
                  <div>
                    <h3>{skill.title}</h3>
                    <p>Technologies I work with</p>
                  </div>
                </div>

                <div className="skill-items">

                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* STATS */}
        <section className="stats">

          <div>
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div>
            <strong>3+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>2+</strong>
            <span>Internships</span>
          </div>

          <div>
            <strong>3+</strong>
            <span>Certifications</span>
          </div>

        </section>


        {/* PROJECTS */}
        <section id="projects" className="section">

          <SectionTitle
            icon={<Code2 size={18} />}
            title="Featured Projects"
          />

          <div className="project-filters">

            <button className="active">All</button>
            <button>Web</button>
            <button>Java</button>
            <button>Cloud</button>

          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <div className="project-card" key={index}>

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>

                <div className="project-content">

                  <div className="project-top">

                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>

                    <span className="project-status">
                      Completed
                    </span>

                  </div>

                  <div className="project-tech">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  <div className="project-buttons">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={15} />
                      Code
                    </a>

                    <a href={project.demo}>
                      <ExternalLink size={15} />
                      Demo
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* CERTIFICATIONS */}
        <section className="section">

          <SectionTitle
            icon={<Award size={18} />}
            title="Certifications"
          />

          <p className="section-description">
            Continuous learning and professional development
            through industry-recognized certifications.
          </p>

          <div className="certifications-grid">

            {certifications.map(
              (certificate, index) => (

                <div
                  className="certificate-card"
                  key={index}
                >

                  <div className="certificate-image">

                    <img
                      src={certificate.image}
                      alt={certificate.title}
                    />

                  </div>

                  <div className="certificate-content">

                    <span className="certificate-label">
                      Certification
                    </span>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.issuer}</p>

                    <div className="certificate-bottom">

                      <span>{certificate.year}</span>

                      <a href="#">
                        View Certificate
                      </a>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

          <div className="certificate-stats">

            <div>
              <strong>3</strong>
              <span>Total Certifications</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Verified</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Pending</span>
            </div>

            <div>
              <strong>15+</strong>
              <span>Skills Validated</span>
            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="section contact-section">

          <SectionTitle
            icon={<Mail size={18} />}
            title="Contact Me"
          />

          <div className="contact-container">

            <div className="contact-info">

              <h2>Let's build something together.</h2>

              <p>
                I'm open to opportunities, collaborations,
                internships and interesting projects.
              </p>

              <div className="contact-links">

                <a href="mailto:your-email@gmail.com">
                  <Mail size={17} />
                  your-email@gmail.com
                </a>

                <a href="https://github.com/eknathkatole">
                  <Github size={17} />
                  github.com/eknathkatole
                </a>

              </div>

            </div>

            <form className="contact-form">

              <label>Name</label>

              <input
                type="text"
                placeholder="Your name"
              />

              <label>Email</label>

              <input
                type="email"
                placeholder="your@email.com"
              />

              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Your message..."
              />

              <button type="submit">
                <Send size={15} />
                Send Message
              </button>

            </form>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <span>
          © 2026 Eknath Katole. All rights reserved.
        </span>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="https://github.com/eknathkatole">
            <Github size={15} />
          </a>
        </div>

      </footer>

    </div>
  );
}


function SectionTitle({ icon, title }) {
  return (
    <div className="section-title">
      <div className="title-icon">
        {icon}
      </div>

      <h2>{title}</h2>
    </div>
  );
}

export default App;