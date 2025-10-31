'use client';

import { useState } from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education';
}

const experienceData: ExperienceItem[] = [
  {
    company: 'Tech Company',
    position: 'Senior Frontend Developer',
    duration: '2023 - Present',
    description: [
      'Led development of responsive web applications using React and Next.js',
      'Improved application performance by 40% through code optimization',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    type: 'work'
  },
  {
    company: 'Startup Inc',
    position: 'Full Stack Developer',
    duration: '2022 - 2023',
    description: [
      'Built scalable web applications from scratch',
      'Implemented RESTful APIs and database design',
      'Collaborated with cross-functional teams'
    ],
    technologies: ['Node.js', 'MongoDB', 'React', 'Express'],
    type: 'work'
  },
  {
    company: 'University Name',
    position: 'Computer Science Degree',
    duration: '2018 - 2022',
    description: [
      'Bachelor of Science in Computer Science',
      'Graduated with honors (3.8 GPA)',
      'Relevant coursework: Data Structures, Algorithms, Web Development'
    ],
    technologies: ['Java', 'Python', 'C++', 'SQL'],
    type: 'education'
  }
];

export default function Experience() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start group"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                  item.type === 'work' 
                    ? 'bg-blue-500 border-blue-300' 
                    : 'bg-purple-500 border-purple-300'
                } ${hoveredItem === index ? 'scale-150 shadow-lg' : ''}`}>
                  <div className={`absolute inset-0 rounded-full animate-ping ${
                    item.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'
                  } opacity-20`} />
                </div>

                {/* Content card */}
                <div className="ml-8 flex-1">
                  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-500 ${
                    hoveredItem === index ? 'bg-white/10 transform -translate-y-2 shadow-2xl' : ''
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {item.position}
                        </h3>
                        <p className="text-lg text-blue-400 font-medium">
                          {item.company}
                        </p>
                      </div>
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                        item.type === 'work' 
                          ? 'bg-blue-500/20 text-blue-300' 
                          : 'bg-purple-500/20 text-purple-300'
                      }`}>
                        {item.duration}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1.5">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 rounded-full text-sm border border-gray-600 hover:border-cyan-400 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
