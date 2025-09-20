import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'AI Automation';
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
  {
    id: 1,
    title: 'NeoPost - Image Generation Tool',
    description: 'A full-stack image generation platform with customizable templates, AI-driven enhancements, and social-ready exports.',
    category: 'Fullstack',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Real-time Chat Bot',
    description: 'A real-time chat application with AI integration, enabling instant messaging, live support, and conversational automation.',
    category: 'Fullstack',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC'],
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true
  },
  {
    id: 3,
    title: 'NeoCrawl - Web Scraper',
    description: 'Automated web scraper that collects structured data from multiple sources for analysis and AI pipelines.',
    category: 'Backend',
    techStack: ['Node.js', 'Puppeteer', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: false
  },
  {
    id: 4,
    title: 'NeoGeo - Map Scraper',
    description: 'Geolocation data scraper for extracting business and location insights directly from maps.',
    category: 'Backend',
    techStack: ['Python', 'FastAPI', 'Selenium', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: false
  },
  {
    id: 5,
    title: 'Invoice Generator',
    description: 'Automated invoice generator with PDF export, tax calculation, and client record management.',
    category: 'Backend',
    techStack: ['Node.js', 'Express', 'PDFKit', 'MySQL'],
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: false
  },
  {
    id: 6,
    title: 'LangChain FAQ Chatbot',
    description: 'An AI-powered FAQ bot built with LangChain for dynamic query answering and knowledge base integration.',
    category: 'AI Automation',
    techStack: ['LangChain', 'Python', 'FastAPI', 'VectorDB'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true
  },
  {
    id: 7,
    title: 'E-commerce Chatbot',
    description: 'An intelligent chatbot built with n8n for product search, order management, and checkout automation.',
    category: 'AI Automation',
    techStack: ['n8n', 'Telegram API', 'Google Sheets', 'Supabase'],
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true
  },
  {
    id: 8,
    title: 'Content Generator',
    description: 'AI-driven content generation pipeline using n8n workflows for blogs, social media, and marketing copy.',
    category: 'AI Automation',
    techStack: ['n8n', 'OpenAI API', 'Google Docs', 'Zapier'],
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: false
  },
  {
    id: 9,
    title: 'Content Gen + Auto Twitter Posting',
    description: 'Automates AI content creation and schedules posts directly to Twitter via n8n.',
    category: 'AI Automation',
    techStack: ['n8n', 'Twitter API', 'OpenAI API'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: false
  },
  {
    id: 10,
    title: 'Lead Generation & Auto Mail',
    description: 'Automated workflow that scrapes leads, enriches data, and sends personalized email campaigns.',
    category: 'AI Automation',
    techStack: ['n8n', 'SMTP', 'Google Sheets', 'OpenAI API'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: false
  },
  {
    id: 11,
    title: 'Product View Assistance Bot',
    description: 'LangChain-powered bot that helps users explore and understand product details in natural conversation.',
    category: 'AI Automation',
    techStack: ['LangChain', 'OpenAI API', 'VectorDB', 'Supabase'],
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: false
  },
  {
    id: 12,
    title: 'NeoVersine - Frontend',
    description: 'Modern frontend interface for Neoversine with smooth UI/UX, Tailwind styling, and responsive design.',
    category: 'Frontend',
    techStack: ['React', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true
  }
];


  const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'AI Automation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-red-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my work spanning frontend development, backend systems, full-stack applications, 
              and AI-powered automation solutions.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400'
                }`}
              >
                <div className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-900 dark:text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;