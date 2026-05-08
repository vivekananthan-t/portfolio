import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, BookOpen } from 'lucide-react';

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

// Placeholder data - replace with your information
const internships = [
  {
    id: 1,
    company: "EDU TANTR",
    role: "Full Stack Developer Intern",
    duration: "Aug 2025 – Nov 2025",
    keyLearnings: [
      "Worked on frontend and backend development tasks.",
      "Gained hands-on experience in building and deploying full-stack features in a real-world project."
    ]
  },
  {
    id: 2,
    company: "InternPe",
    role: "Web Developer Intern",
    duration: "Sept 2024 – Nov 2024",
    keyLearnings: [
      "Developed responsive web pages.",
      "Improved UI and application performance."
    ]
  }
];

const Certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "EDU TANTR",
    date: "Aug 2025 – Nov 2025",
    skills: ["Frontend", "Backend", "Full Stack Development"]
  },
  {
    id: 2,
    title: "Python Programming Training",
    issuer: "Coursera",
    date: "May 2023 – July 2023",
    skills: ["Python", "Programming Basics"]
  }
];

const expoWorkshops = [
  {
    id: 1,
    title: "Smart India Hackathon 2025",
    role: "Participant",
    event: "Hackathon",
    date: "2025",
    description: "Participated in Smart India Hackathon 2025."
  },
  {
    id: 2,
    title: "MongoDB Campus Summit 2026",
    role: "Participant",
    event: "Summit",
    date: "2026",
    description: "Participated in MongoDB Campus Summit 2026."
  },
  {
    id: 3,
    title: "Workshop in Material Data Science",
    role: "Participant",
    event: "IIT Madras",
    date: "March 2024",
    description: "Attended Workshop in Material Data Science at IIT Madras."
  }
];

export default function CertificationsPage() {
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
        <h1 className="heading-2 mb-4">Certifications & Achievements</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          A collection of professional certifications, internships, and workshop participation
          that demonstrate my expertise and continuous learning journey.
        </p>
      </motion.div>

      {/* Internships */}
      <motion.div
        className="glass-card mb-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase size={24} className="text-primary-600" />
          <h2 className="heading-3">Internships</h2>
        </div>

        <div className="space-y-6">
          {internships.map((internship) => (
            <div key={internship.id} className="border-l-4 border-primary-500 pl-4 py-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{internship.company}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {internship.duration}
                </div>
              </div>
              <p className="text-primary-600 font-medium mb-2">{internship.role}</p>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">Key Learnings:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {internship.keyLearnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Professional Certifications */}
      <motion.div
        className="glass-card mb-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-6">
          <Award size={24} className="text-primary-600" />
          <h2 className="heading-3">Professional Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Certifications.map((cert) => (
            <div key={cert.id} className="bg-white/50 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h3>
              <div className="flex items-center justify-between mb-3">
                <p className="text-primary-600">{cert.issuer}</p>
                <p className="text-sm text-gray-600">{cert.date}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100/50 text-primary-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Events & Workshops */}
      <motion.div
        className="glass-card mb-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={24} className="text-primary-600" />
          <h2 className="heading-3">Workshops & Events</h2>
        </div>

        <div className="space-y-6">
          {expoWorkshops.map((expo) => (
            <div key={expo.id} className="border-l-4 border-secondary-500 pl-4 py-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{expo.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <p className="text-secondary-600 font-medium">{expo.role} at {expo.event}</p>
                {expo.date && <p className="text-sm text-gray-500 mt-1 md:mt-0">{expo.date}</p>}
              </div>
              <p className="text-gray-700">{expo.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        className="glass-card"
        variants={itemVariants}
      >
        <h2 className="heading-3 mb-4">Education</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-500 pl-4 py-1">
            <h3 className="text-xl font-semibold text-gray-900">B.E. Computer Science and Engineering</h3>
            <p className="text-primary-600 font-medium">Dhanalakshmi Srinivasan Engineering College (Autonomous)</p>
            <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
              <span>2023 – 2027</span>
              <span>CGPA: 7.77 / 10.00</span>
            </div>
          </div>
          <div className="border-l-4 border-secondary-500 pl-4 py-1">
            <h3 className="text-xl font-semibold text-gray-900">HSC – Tamil Nadu State Board</h3>
            <p className="text-secondary-600 font-medium">Government Higher Secondary School</p>
            <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
              <span>2022 – 2023</span>
              <span>Percentage: 65%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}