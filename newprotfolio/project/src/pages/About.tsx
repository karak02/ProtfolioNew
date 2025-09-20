import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Code,
  Brain,
  Database,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      items: [
        "Python",
        "FastAPI",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Supabase",
        "MongoDB",
      ],
    },
    {
      category: "AI & Automation",
      items: [
        "LangChain",
        "LangGraph",
        "RAG Systems",
        "n8n Workflows",
        "OpenAI API",
        "Machine Learning",
        "Data Automation",
      ],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "Linux", "AWS", "Vercel", "Figma"],
    },
  ];

  const experiences = [
    {
      title: "Founder & AI Automation Engineer",
      company: "Neoversine",
      period: "2024 - Present",
      location: "Remote",
      description:
        "Building intelligent automation systems, AI chatbots, and RAG-powered applications using Python, LangChain, LangGraph, and n8n. Delivered real-world solutions like NeoPost (AI content & image generator) and E-commerce AI Chatbots.",
    },
    {
      title: "Fullstack & AI Developer",
      company: "Freelance / Client Projects",
      period: "2023 - 2024",
      location: "Remote",
      description:
        "Developed scalable fullstack applications with FastAPI, PostgreSQL/Supabase, and React. Implemented AI-powered workflows, automation scripts, and data pipelines to help businesses optimize operations.",
    },
    {
      title: "Frontend Developer",
      company: "Freelance / Open Source",
      period: "2021 - 2023",
      location: "Remote",
      description:
        "Built responsive UIs with React, Next.js, and Tailwind CSS. Contributed to open-source projects and gained hands-on experience in creating modern, user-focused web applications.",
    },
  ];

  const education = [
    {
      degree:
        "Bachelor of Technology (B.Tech) in Electronics and Communication Engineering",
      school: "Academy of Technology",
      period: "2021 - 2025",
      description:
        "Focused on software engineering, Python development, AI automation, and fullstack projects alongside core ECE curriculum.",
    },
    {
      degree: "Higher Secondary (Class 12)",
      school: "Uluberia High School, West Bengal Board",
      period: "2019 - 2021",
      description:
        "Science stream with a focus on Mathematics and Computer Science.",
    },
    {
      degree: "Secondary (Class 10)",
      school: "Uluberia High School, West Bengal Board",
      period: "2018 - 2019",
      description:
        "Completed with distinction, building strong foundations in STEM subjects.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-20"
        >
          <div className="relative inline-block mb-8">
            <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-red-400 to-orange-500 rounded-2xl -rotate-6 opacity-20"></div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://res.cloudinary.com/dtlavehqu/image/upload/v1758307719/Generated_Image_September_20_2025_-_12_10AM_z3bd74.png"
                  alt="Profile"
                  className=" object-cover"
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
            I'm Ankon, a passionate AI Automation Engineer and Fullstack
            Developer with expertise in creating intelligent solutions that
            bridge the gap between cutting-edge AI technology and practical
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Story
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                My journey in technology started with a passion for solving
                real-world problems through code. Over time, I discovered the
                power of combining{" "}
                <strong>
                  Python development, full-stack engineering, and AI automation
                </strong>{" "}
                to craft intelligent digital solutions.
              </p>
              <p className="mb-4">
                I’ve worked on projects ranging from{" "}
                <strong>
                  agentic AI systems, RAG-based applications, and workflow
                  automation with n8n
                </strong>{" "}
                to building scalable backends with
                <strong>FastAPI, PostgreSQL, and Supabase</strong>. Whether it’s
                developing AI-powered chatbots, intelligent scrapers, or
                automation tools, I thrive on turning ideas into impactful
                products.
              </p>
              <p>
                Beyond coding, I actively explore the latest advancements in{" "}
                <strong>AI and automation</strong>, contribute to open-source,
                and share knowledge with developers who want to build the next
                wave of intelligent applications.
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
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
                  {skillGroup.category === "Frontend" && (
                    <Code className="w-5 h-5 text-orange-500 mr-2" />
                  )}
                  {skillGroup.category === "Backend" && (
                    <Database className="w-5 h-5 text-orange-500 mr-2" />
                  )}
                  {skillGroup.category === "AI & Automation" && (
                    <Brain className="w-5 h-5 text-orange-500 mr-2" />
                  )}
                  {skillGroup.category === "Tools & Others" && (
                    <Award className="w-5 h-5 text-orange-500 mr-2" />
                  )}
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Experience
            </h2>
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-orange-500 font-medium">
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <span className="font-medium">{exp.company}</span>
                  <MapPin className="w-4 h-4 mx-2" />
                  <span>{exp.location}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-orange-500 font-medium">
                    {edu.school}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
