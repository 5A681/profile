import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com/heartbox/ecommerce-platform"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    link: "https://github.com/heartbox/task-manager"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that displays current conditions and forecasts for multiple cities with beautiful visualizations.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    link: "https://github.com/heartbox/weather-dashboard"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization, reporting features, and automated insights generation.",
    technologies: ["Angular", "Python", "Django", "D3.js"],
    link: "https://github.com/heartbox/social-analytics"
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency price tracking with portfolio management, alerts, and market analysis tools.",
    technologies: ["React Native", "Redux", "CoinGecko API", "Firebase"],
    link: "https://github.com/heartbox/crypto-tracker"
  },
  {
    id: 6,
    title: "Blog CMS",
    description: "A content management system for bloggers with markdown support, SEO optimization, and multi-author capabilities.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/heartbox/blog-cms"
  }
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on recently</p>
      </div>
      
      <div className={styles.projectsGrid}>
        {mockProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
