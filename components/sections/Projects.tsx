'use client';

import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'NeXa BuY - E-commerce Platform',
    description: 'NeXa BuY is a modern, full-stack e-commerce platform built with React and Firebase. It provides a complete shopping experience with user authentication, product management, shopping cart functionality, and secure payment processing. The application features role-based access control for users, sellers, and administrators.',
    image: 'https://res.cloudinary.com/dimczn2y6/image/upload/v1759660611/qdoowour0jbfaqwq4kov.png',
    tech: ["React","React Router","Node.js","Express.js","MongoDB","Jwt","TaailwindCSS","DaisyUI","Firebase"],
    github: 'https://github.com/HamimBhai742/job-task-again-again',
    live: 'https://job-task-again.web.app',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features',
    image: '/project2.jpg',
    tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: '#',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location-based forecasts and interactive data visualizations',
    image: '/project3.jpg',
    tech: ['React', 'API Integration', 'Chart.js', 'CSS3'],
    github: '#',
    live: '#',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Full-featured social platform with real-time messaging and content sharing capabilities',
    image: '/project4.jpg',
    tech: ['Next.js', 'Firebase', 'TypeScript', 'Framer Motion'],
    github: '#',
    live: '#',
    color: 'from-pink-500 to-rose-600'
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/50 to-slate-900/80" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-4 h-4 border border-indigo-400/30 rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-10 w-6 h-6 border border-purple-400/30 animate-float animation-delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing my latest work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative glass-effect rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-white/10 hover:border-white/30">
                {/* Project Image/Preview */}
                <div className="relative h-64 overflow-hidden">
                  {/* Fallback gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />

                  {/* Project image overlay */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Hover overlay with actions */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-6 transition-all duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.github}
                      className="group/btn glass-effect p-4 rounded-full hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/40"
                      title="View Code"
                    >
                      <svg className="w-6 h-6 text-white group-hover/btn:text-indigo-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>

                    <a
                      href={project.live}
                      className="group/btn glass-effect p-4 rounded-full hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/40"
                      title="Live Demo"
                    >
                      <svg className="w-6 h-6 text-white group-hover/btn:text-purple-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  {/* Animated corner accent */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`} />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={tech}
                        className="px-3 py-1 glass-effect rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping`}
                        style={{
                          top: `${20 + i * 25}%`,
                          right: `${10 + i * 15}%`,
                          animationDelay: `${i * 300}ms`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
