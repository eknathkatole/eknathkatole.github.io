import {
  GitBranch as Github,
  Network as Linkedin,
  Mail,
  Moon,
  Sun,
  ExternalLink,
  Download,
  MapPin,
  Code2,
  Award,
  Send,
  Briefcase,
  Menu,
  X as CloseMenu
} from "lucide-react";
import { FolderKanban } from "lucide-react";
import { useState } from "react";

import profileImage from "../assets/profile.png";

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>;
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.45v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.57V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" /></svg>;
}

function XIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.24 2H21.9l-8 9.14L23.3 22h-7.2l-5.64-7.35L4.02 22H.35l8.55-9.77L.9 2h7.38l5.1 6.72L18.24 2Zm-1.28 17.93h2.03L6.98 3.95H4.8l12.16 15.98Z" /></svg>;
}

export function SectionTitle({ icon, title }) {
  return (
    <div className="section-title">
      <div className="title-icon">{icon}</div>
      <h2>{title}</h2>
    </div>
  );
}

export function Navbar({ darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = [
    ["Home", "#home"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"]
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`} id="mobile-navigation">
        {navigationItems.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </div>
      <div className="nav-social">
        <a href="https://github.com/eknathkatole" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
        <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
        <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter">
          <XIcon />
        </a>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <CloseMenu size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <span className="availability"><span className="green-dot" />Open to new opportunities</span>
        <h1>Hi, I'm <span>Eknath</span></h1>
        <h2>Java Developer & Cloud / DevOps Enthusiast</h2>
        <p>
          B.Tech Information Technology graduate passionate about software development,
          cloud computing and DevOps. I enjoy building useful applications and learning
          modern technologies.
        </p>
        <div className="location"><MapPin size={15} />Pune, Maharashtra, India</div>
        <div className="hero-buttons">
          <a className="primary-btn" href="/resume.pdf" download><Download size={16} />Download CV</a>
          <a className="secondary-btn" href="#contact"><Mail size={16} />Get in Touch</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/eknathkatole" target="_blank" rel="noreferrer"><Github size={19} /></a>
          <a href="#contact"><Linkedin size={19} /></a>
          <a href="#contact"><Mail size={19} /></a>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-circle"><img src={profileImage} alt="Eknath Katole" /></div>
        <div className="floating-badge badge-one">Java</div>
        <div className="floating-badge badge-two">AWS</div>
      </div>
    </section>
  );
}

export function Experience({ experiences }) {
  return (
    <section id="experience" className="section">
      <SectionTitle icon={<Briefcase size={18} />} title="Experience" />
      <div className="experience-container">
        {experiences.map((experience) => (
          <div className="experience-card" key={`${experience.role}-${experience.company}`}>
            <div className="experience-header">
              <div className="company-icon"><Briefcase size={18} /></div>
              <div><h3>{experience.role}</h3><p className="company">{experience.company}</p></div>
              <span className="duration">{experience.duration}</span>
            </div>
            <div className="experience-body">
              <div>
                <h4>Key Responsibilities</h4>
                <ul>{experience.description.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="impact"><h4>Impact</h4><p>Contributed to development, automation and business objectives.</p></div>
            </div>
            <div className="technology-list">
              {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section section">
      <div className="skills-title">
        <Code2 size={28} />
        <h2>Skills & Technologies</h2>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            className={`skill-card ${index === 4 ? "skill-card-wide" : ""}`}
            key={skill.title}
          >
            <div className="skill-card-header">
              <div className="skill-main-icon">{skill.icon}</div>
              <div className="skill-heading">
                <h3>{skill.title}</h3>
                <p>{skill.subtitle}</p>
              </div>
            </div>
            <div className="technology-grid">
              {skill.items.map((item) => (
                <div className="technology-box" key={item.name}>
                  <div className="technology-icon">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return <section className="stats">{[["10+", "Technologies"], ["3+", "Projects"], ["2+", "Internships"], ["3+", "Certifications"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>;
}

export function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Full Stack", "Frontend", "Backend"];
  const visibleProjects = projects.filter((project) => (
    activeFilter === "All" || project.category === activeFilter
  ));

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-title">
        <FolderKanban size={28} />
        <h2>Featured Projects</h2>
      </div>
      <div className="project-filters">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "active" : ""}
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project) => <article className="project-card" key={project.title}>
          <div className="project-image-container">
            <img src={project.image} alt={project.title} className="project-image" loading="lazy" decoding="async" />
            <span className="project-status">{project.live ? "Live" : "Project"}</span>
            <span className="project-category">{project.category}</span>
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((technology) => <span className="technology-tag" key={technology}>{technology}</span>)}
            </div>
            <div className="project-features">
              <h4><span />Key Features</h4>
              <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </div>
            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noreferrer" className="project-button"><Github size={17} />View Code</a>
              {project.live && project.demo !== "#" && <a href={project.demo} target="_blank" rel="noreferrer" className="project-button primary"><ExternalLink size={17} />Live Demo</a>}
            </div>
          </div>
        </article>)}
      </div>
    </section>
  );
}

export function Certifications({ certifications }) {
  return (
    <section className="section">
      <SectionTitle icon={<Award size={18} />} title="Certifications" />
      <p className="section-description">Continuous learning and professional development through industry-recognized certifications.</p>
      <div className="certifications-grid">
        {certifications.map((certificate) => <div className="certificate-card" key={certificate.title}>
          <div className="certificate-image"><img src={certificate.image} alt={certificate.title} loading="lazy" decoding="async" /></div>
          <div className="certificate-content"><span className="certificate-label">Certification</span><h3>{certificate.title}</h3><p>{certificate.issuer}</p><div className="certificate-bottom"><span>{certificate.year}</span><a href="#">View Certificate</a></div></div>
        </div>)}
      </div>
      <div className="certificate-stats">{[["3", "Total Certifications"], ["3", "Verified"], ["1", "Pending"], ["15+", "Skills Validated"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    </section>
  );
}

export function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    setIsSending(true);
    setFormStatus("Sending your message...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/katoleeknath7@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name}`,
          _captcha: "false"
        })
      });

      if (!response.ok) {
        throw new Error("Message request failed");
      }

      event.currentTarget.reset();
      setFormStatus("Message sent successfully. Thank you!");
    } catch {
      setFormStatus("Unable to send online. Please email katoleeknath7@gmail.com directly.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <SectionTitle icon={<Mail size={18} />} title="Contact Me" />
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-eyebrow">Have a project in mind?</span>
          <h2>Let's build something together.</h2>
          <p>I'm open to opportunities, collaborations, internships and interesting projects.</p>
          <div className="contact-links">
            <a href="mailto:katoleeknath7@gmail.com"><Mail size={17} />katoleeknath7@gmail.com</a>
            <a href="https://github.com/eknathkatole" target="_blank" rel="noreferrer"><Github size={17} />github.com/eknathkatole</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" placeholder="Your name" required />
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" placeholder="your@email.com" required />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="5" placeholder="Your message..." required />
          <button type="submit" disabled={isSending}>
            <Send size={15} />
            {isSending ? "Sending..." : "Send Message"}
          </button>
          <span className="contact-status" role="status">{formStatus}</span>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return <footer><span>© 2026 Eknath Katole. All rights reserved.</span><div><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="https://github.com/eknathkatole"><Github size={15} /></a></div></footer>;
}
