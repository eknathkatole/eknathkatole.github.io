import { useState } from "react";
import {
  Activity,
  Atom,
  Blocks,
  Box,
  Boxes,
  Braces,
  Brain,
  Bug,
  ClipboardCheck,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  Globe,
  GitBranch,
  GitMerge,
  Layers,
  Monitor,
  Network,
  Package,
  Palette,
  RefreshCw,
  Rocket,
  Route,
  Server,
  Settings2,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Table2,
  Terminal,
  Workflow,
  Zap
} from "lucide-react";
import "./App.css";
import {
  Certifications,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
  Stats
} from "./components/PortfolioSections.jsx";
import GithubActivity from "./components/GithubActivity.jsx";

const experiences = [
  {
    role: "Backend Development Training",
    company: "QSpiders",
    duration: "2026",
    description: [
      "Completed hands-on training in Core Java, Advanced Java, Spring Boot, Hibernate/JPA, REST APIs, MySQL and SQL.",
      "Developed backend applications using Java and Spring Boot following layered architecture and OOP principles.",
      "Built and tested RESTful APIs using Postman and integrated applications with relational databases.",
      "Worked with Hibernate/JPA for ORM, CRUD operations, database mapping, exception handling and validation.",
      "Used Maven, Git and GitHub for project management and version control.",
      "Gained practical exposure to Linux, Docker, AWS (EC2, S3, RDS) and CI/CD fundamentals."
    ],
    technologies: [
      "Core Java", "Advanced Java", "Spring Boot", "Hibernate/JPA", "REST APIs",
      "MySQL", "SQL", "Maven", "Git", "GitHub", "Linux", "Docker", "AWS"
    ]
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
    subtitle: "Building reliable APIs and server-side applications",
    icon: <Server size={25} />,
    items: [
      { name: "Java", icon: <Coffee size={20} /> },
      { name: "Spring Boot", icon: <Zap size={20} /> },
      { name: "Hibernate/JPA", icon: <Layers size={20} /> },
      { name: "REST APIs", icon: <Route size={20} /> },
      { name: "Microservices", icon: <Share2 size={20} /> },
      { name: "Maven", icon: <Package size={20} /> },
      { name: "OOP", icon: <Braces size={20} /> },
      { name: "Validation", icon: <ClipboardCheck size={20} /> }
    ]
  },
  {
    title: "Frontend Development",
    subtitle: "Creating responsive and interactive web experiences",
    icon: <Monitor size={25} />,
    items: [
      { name: "HTML", icon: <Globe size={20} /> },
      { name: "CSS", icon: <Palette size={20} /> },
      { name: "JavaScript", icon: <Code2 size={20} /> },
      { name: "React.js", icon: <Atom size={20} /> },
      { name: "Responsive Design", icon: <Monitor size={20} /> },
      { name: "Component Design", icon: <Blocks size={20} /> },
      { name: "Web Accessibility", icon: <ClipboardCheck size={20} /> },
      { name: "API Integration", icon: <Share2 size={20} /> }
    ]
  },
  {
    title: "Database",
    subtitle: "Working with relational databases and SQL",
    icon: <Database size={25} />,
    items: [
      { name: "MySQL", icon: <Database size={20} /> },
      { name: "Oracle SQL", icon: <Database size={20} /> },
      { name: "PL/SQL", icon: <Code2 size={20} /> },
      { name: "SQL", icon: <Terminal size={20} /> },
      { name: "SQL Joins", icon: <GitMerge size={20} /> },
      { name: "Database Design", icon: <Database size={20} /> },
      { name: "DBMS", icon: <Database size={20} /> },
      { name: "Relational Databases", icon: <Table2 size={20} /> },
      { name: "CRUD Operations", icon: <RefreshCw size={20} /> }
    ]
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Cloud infrastructure, deployment and automation",
    icon: <Cloud size={25} />,
    items: [
      { name: "AWS EC2", icon: <Cloud size={20} /> },
      { name: "AWS S3", icon: <Cloud size={20} /> },
      { name: "AWS RDS", icon: <Database size={20} /> },
      { name: "AWS Cloud Fundamentals", icon: <Cloud size={20} /> },
      { name: "Azure Virtual Machines", icon: <Server size={20} /> },
      { name: "Azure App Service", icon: <Cloud size={20} /> },
      { name: "Azure Storage", icon: <Database size={20} /> },
      { name: "Azure SQL", icon: <Database size={20} /> },
      { name: "Azure Resource Groups", icon: <Boxes size={20} /> },
      { name: "Azure Monitor", icon: <Activity size={20} /> },
      { name: "Azure RBAC", icon: <ShieldCheck size={20} /> },
      { name: "Git", icon: <GitBranch size={20} /> },
      { name: "GitHub", icon: <GitBranch size={20} /> },
      { name: "GitHub Actions", icon: <Workflow size={20} /> },
      { name: "Jenkins", icon: <Settings2 size={20} /> },
      { name: "CI/CD", icon: <Rocket size={20} /> },
      { name: "Docker", icon: <Box size={20} /> },
      { name: "Kubernetes", icon: <Boxes size={20} /> },
      { name: "Terraform", icon: <Blocks size={20} /> },
      { name: "Linux", icon: <Terminal size={20} /> },
      { name: "Infrastructure as Code", icon: <Code2 size={20} /> },
      { name: "Deployment Automation", icon: <Rocket size={20} /> },
      { name: "Cloud-Native Architecture", icon: <Network size={20} /> },
      { name: "DevOps Fundamentals", icon: <Settings2 size={20} /> }
    ]
  },
  {
    title: "Programming & Core CS",
    subtitle: "Strong programming fundamentals and problem-solving",
    icon: <Cpu size={25} />,
    items: [
      { name: "Java", icon: <Coffee size={20} /> },
      { name: "Python - Basic", icon: <Code2 size={20} /> },
      { name: "JavaScript", icon: <Code2 size={20} /> },
      { name: "Data Structures & Algorithms", icon: <Network size={20} /> },
      { name: "Object-Oriented Programming", icon: <Box size={20} /> },
      { name: "Collections Framework", icon: <Boxes size={20} /> },
      { name: "Exception Handling", icon: <ShieldAlert size={20} /> },
      { name: "Problem Solving", icon: <Brain size={20} /> },
      { name: "Debugging", icon: <Bug size={20} /> },
      { name: "SDLC", icon: <Workflow size={20} /> },
      { name: "Agile", icon: <RefreshCw size={20} /> },
      { name: "Computer Networks", icon: <Network size={20} /> },
      { name: "Operating Systems", icon: <Monitor size={20} /> }
    ]
  }
];

const projects = [
  {
    title: "Smart Banking Management System",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    description: "A Java-based banking management application for managing customers, accounts, transactions, deposits, withdrawals and fund transfers.",
    technologies: ["Java", "Hibernate/JPA", "MySQL", "OOP", "Maven"],
    features: [
      "Customer and account management",
      "Account creation and balance inquiry",
      "Deposit and withdrawal operations",
      "Fund transfer and transaction history",
      "Hibernate ORM and database mapping",
      "Exception and error handling",
      "Relational database design"
    ],
    github: "https://github.com/eknathkatole",
    demo: "#",
    live: true
  },
  {
    title: "Employee Management System",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    description: "A responsive employee management application with CRUD operations, search, filtering, pagination and REST API integration.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Axios"],
    features: [
      "Employee dashboard",
      "Add, edit and delete employees",
      "Employee search and department filtering",
      "Sorting and pagination",
      "Form validation",
      "REST API integration",
      "Reusable React components",
      "Loading and error handling"
    ],
    github: "https://github.com/eknathkatole",
    demo: "#",
    live: true
  },
  {
    title: "E-Commerce Shopping Website",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1200&q=80",
    description: "A modern shopping application with product discovery, filtering, cart management, wishlist functionality and checkout UI.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Context API", "REST API"],
    features: [
      "Product catalogue and details",
      "Product search and category filtering",
      "Shopping cart and quantity management",
      "Wishlist functionality",
      "Checkout interface",
      "React Router navigation",
      "Context API state management",
      "Responsive design"
    ],
    github: "https://github.com/eknathkatole",
    demo: "#",
    live: true
  },
  {
    title: "PaanFresh E-Commerce Website",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    description: "A responsive e-commerce website developed for showcasing products with an interactive shopping interface and mobile-friendly design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    features: [
      "Product catalogue", "Product cards", "Product search", "Category filtering",
      "Shopping cart interface", "Responsive navigation", "DOM manipulation",
      "Form validation", "Responsive UI"
    ],
    github: "https://github.com/eknathkatole",
    demo: "#",
    live: true
  },
  {
    title: "Food Delivery API",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    description: "A backend REST API for a food delivery platform with restaurant, menu, customer, cart and order management.",
    technologies: ["Java", "Spring Boot", "REST API", "Hibernate/JPA", "MySQL", "Maven"],
    features: [
      "User registration and authentication",
      "Restaurant management",
      "Restaurant search",
      "Menu management",
      "Food item management",
      "Food category management",
      "Cart management",
      "Add and remove food items",
      "Quantity management",
      "Order creation",
      "Order management",
      "Order status tracking",
      "Customer and address management",
      "Database relationships using JPA",
      "CRUD operations",
      "RESTful API endpoints",
      "Request validation",
      "Exception handling",
      "Global error handling",
      "MySQL database integration",
      "Hibernate ORM",
      "Maven project management",
      "API testing using Postman"
    ],
    github: "https://github.com/eknathkatole",
    demo: "#",
    live: true
  }
];

const certifications = [
  {
    title: "Java Full Stack Development",
    issuer: "Training / Institute",
    year: "2026",
    image: "https://placehold.co/900x500/e8f0ff/1e3a8a?text=Java+Certificate"
  },
  {
    title: "SQL Certification",
    issuer: "Training / Institute",
    year: "2026",
    image: "https://placehold.co/900x500/eafaf1/166534?text=SQL+Certificate"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    image: "https://placehold.co/900x500/fef3c7/92400e?text=AWS+Certificate"
  }
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
