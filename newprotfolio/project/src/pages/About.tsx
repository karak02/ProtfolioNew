import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Brain, Database, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'AI & Automation', items: ['Machine Learning', 'OpenAI API', 'Automation Scripts', 'Data Analysis'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Figma', 'Linux'] }
  ];

  const experiences = [
    {
      title: 'Senior Fullstack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Leading development of AI-powered web applications and automation systems.'
    },
    {
      title: 'AI Automation Engineer',
      company: 'Innovation Labs',
      period: '2021 - 2022',
      location: 'San Francisco, CA',
      description: 'Developed intelligent automation solutions and machine learning models.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      location: 'New York, NY',
      description: 'Created responsive web applications and user interfaces for various clients.'
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      period: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'MIT',
      period: '2014 - 2018',
      description: 'Focus on Full-Stack Development and System Design'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-red-400 to-orange-500 rounded-2xl -rotate-6 opacity-20"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate AI Automation Engineer and Fullstack Developer with expertise in creating 
            intelligent solutions that bridge the gap between cutting-edge AI technology and practical 
            business applications.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                With over 5 years of experience in software development, I specialize in creating 
                innovative solutions that combine the power of artificial intelligence with robust 
                full-stack development practices. My journey began with a fascination for how 
                technology can solve real-world problems.
              </p>
              <p className="mb-4">
                I've had the privilege of working with startups and established companies, helping 
                them automate complex processes, build scalable web applications, and implement 
                AI-driven features that enhance user experiences and business efficiency.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest AI research, contributing 
                to open-source projects, or mentoring aspiring developers in the community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  {skillGroup.category === 'Frontend' && <Code className="w-5 h-5 text-orange-500 mr-2" />}
                  {skillGroup.category === 'Backend' && <Database className="w-5 h-5 text-orange-500 mr-2" />}
                  {skillGroup.category === 'AI & Automation' && <Brain className="w-5 h-5 text-orange-500 mr-2" />}
                  {skillGroup.category === 'Tools & Others' && <Award className="w-5 h-5 text-orange-500 mr-2" />}
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-orange-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <span className="text-orange-500 font-medium">{exp.period}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <span className="font-medium">{exp.company}</span>
                  <MapPin className="w-4 h-4 mx-2" />
                  <span>{exp.location}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-orange-500 font-medium">{edu.school}</span>
                  <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;