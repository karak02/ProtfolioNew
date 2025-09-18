import React from 'react';
import { Calendar, MapPin, Award, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3'],
    'Backend': ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase'],
    'AI & Automation': ['OpenAI API', 'LangChain', 'Python', 'Machine Learning', 'Automation Tools'],
    'DevOps': ['Docker', 'AWS', 'Vercel', 'Git', 'CI/CD', 'Linux']
  };

  const experiences = [
    {
      title: 'Senior Fullstack Developer',
      company: 'Tech Innovation Corp',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Lead development of AI-powered web applications, managing full project lifecycle from conception to deployment.'
    },
    {
      title: 'AI Automation Specialist',
      company: 'Digital Solutions Ltd',
      period: '2020 - 2022',
      location: 'San Francisco, CA',
      description: 'Developed intelligent automation systems that reduced manual processes by 70% using AI and machine learning.'
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Studio',
      period: '2018 - 2020',
      location: 'New York, NY',
      description: 'Built responsive, user-centric web applications using React and modern frontend technologies.'
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      period: '2016 - 2018',
      description: 'Specialized in Artificial Intelligence and Machine Learning'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'MIT',
      period: '2012 - 2016',
      description: 'Focus on Full-Stack Web Development and System Design'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-6">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-3 border-blue-200 dark:border-blue-800 shadow-lg"
                />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I'm a passionate developer who bridges the gap between innovative AI technology and practical web solutions. 
              With over 6 years of experience, I specialize in creating intelligent applications that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A comprehensive toolkit for building modern applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.school}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {edu.period}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;