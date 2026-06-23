import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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

const personalInfo = {
  name: "VIVEKANANTHAN T",
  title: "Computer Science and Engineering Student",
  location: "Perambalur, Tamil Nadu, India",
  email: "vivekananthantech@gmail.com",
  phone: "+91 9514299319",
  github: "github.com/vivekananthan-t",
  linkedin: "linkedin.com/in/vivekananthan-t",
  bio: "B.E. Computer Science and Engineering student at Dhanalakshmi Srinivasan Engineering College (CGPA: 7.77/10.00). Passionate about full-stack web development, AI-powered solutions, and solving real-world problems. Dedicated to continuous learning and building innovative applications."
};

const skills = {
  technical: [
    "C", "C++", "Java", "Python", "HTML", "CSS", 
    "React.js", "Node.js", "Express.js", 
    "SQL", "MongoDB", "Git", "GitHub", "VS Code"
  ],
  soft: [
    "Problem Solving", "Team Collaboration", "Adaptability", "Communication"
  ]
};

export default function AboutPage() {
  return (
    <motion.div 
      className="section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="glass-card mb-8 relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-xl flex-shrink-0">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="heading-1 text-center md:text-left">{personalInfo.name}</h1>
            <h2 className="text-xl md:text-2xl text-primary-600 font-medium mb-4 text-center md:text-left">{personalInfo.title}</h2>
            
            <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
              <div className="flex items-center text-gray-700 gap-1">
                <MapPin size={16} className="text-primary-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center text-gray-700 gap-1">
                <Mail size={16} className="text-primary-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center text-gray-700 gap-1">
                <Phone size={16} className="text-primary-500" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
            
            <div className="flex gap-3 mb-6 justify-center md:justify-start">
              <a 
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a 
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <Mail size={16} />
                <span>Gmail</span>
              </a>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{personalInfo.bio}</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="glass-card mb-8"
        variants={itemVariants}
      >
        <h2 className="heading-3 mb-6">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100/50 text-primary-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="glass-card"
        variants={itemVariants}
      >
        <h2 className="heading-3 mb-6">Soft Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.soft.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 rounded-full text-sm font-medium bg-secondary-100/50 text-secondary-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
