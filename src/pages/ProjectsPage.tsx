import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      duration: 0.5 
    } 
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const projects = [
  {
    id: 1,
    title: "Medoo+ — AI-Powered Healthcare Platform",
    description: "A full-stack healthcare application for doctor consultation, lab booking, and medicine delivery. Features separate Patient and Provider modules and a basic AI symptom checker for recommending suitable doctors to patients.",
    technologies: ["React.js", "Node.js", "FastAPI", "MongoDB", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/vivekananthan-t",
    imageUrl: "/medoo_project.png"
  }
];

export default function ProjectsPage() {
  return (
    <motion.div 
      className="section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="mb-8 text-center"
        variants={itemVariants}
      >
        <h1 className="heading-2 mb-4">Projects & Known Applications</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Here are some of the key projects I've worked on, showcasing my skills and experience
          across different technologies and domains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={itemVariants}
            className="glass-card group overflow-hidden"
          >
            <div className="h-48 overflow-hidden rounded-lg mb-4 relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100/50 text-primary-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
