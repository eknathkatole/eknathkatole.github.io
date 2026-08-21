import { useState } from "react";
import "./App.css";
import {
  Certifications,
  Contact,
  Experience,
  Footer,
  GithubActivity,
  Hero,
  Navbar,
  Projects,
  Skills,
  Stats
} from "./components/PortfolioSections.jsx";

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
  { title: "Backend Development", icon: "Server", items: ["Java", "Python", "SQL", "REST APIs"] },
  { title: "Frontend Development", icon: "Monitor", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Database & Data", icon: "Database", items: ["MySQL", "Oracle SQL", "MongoDB", "Power BI"] },
  { title: "DevOps & Cloud", icon: "Cloud", items: ["AWS", "Docker", "Kubernetes", "Jenkins"] }
];

const projects = [
  {
    title: "PaanFresh E-Commerce Platform",
    description: "A responsive e-commerce website for showcasing and selling PaanFresh products.",
    image: "/projects/paanfresh.png",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/eknathkatole",
    demo: "#"
  },
  {
    title: "Real-Time Currency Converter",
    description: "A responsive currency conversion application using API-based exchange rates.",
    image: "/projects/currency.png",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/eknathkatole",
    demo: "#"
  },
  {
    title: "Developer Portfolio",
    description: "Personal portfolio website showcasing projects, technical skills and experience.",
    image: "/projects/portfolio.png",
    technologies: ["React", "JavaScript", "CSS", "GitHub"],
    github: "https://github.com/eknathkatole",
    demo: "#"
  }
];

const certifications = [
  { title: "Java Full Stack Development", issuer: "Training / Institute", year: "2026", image: "/certificates/java.png" },
  { title: "SQL Certification", issuer: "Training / Institute", year: "2026", image: "/certificates/sql.png" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2026", image: "/certificates/aws.png" }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main>
        <Hero />
        <Experience experiences={experiences} />
        <GithubActivity />
        <Skills skills={skills} />
        <Stats />
        <Projects projects={projects} />
        <Certifications certifications={certifications} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
