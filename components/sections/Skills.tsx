'use client';

import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skillCategories = {
  Frontend: [
    { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-indigo-600' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-black' },
    { name: 'Tailwind CSS', icon: '💨', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Material UI', icon: '🎯', color: 'from-blue-500 to-indigo-600' },
    { name: 'ShadCN', icon: '🎪', color: 'from-purple-500 to-pink-500' },
    { name: 'DaisyUI', icon: '🌼', color: 'from-green-400 to-green-600' },
  ],
  Backend: [
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'Express.js', icon: '🚀', color: 'from-gray-600 to-gray-800' },
    { name: 'Python', icon: '🐍', color: 'from-blue-400 to-yellow-500' },
    { name: 'REST API', icon: '🔗', color: 'from-indigo-500 to-purple-600' },
    { name: 'Firebase', icon: '🔥', color: 'from-orange-400 to-red-500' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
  ],
  Database: [
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-700' },
  ],
  Tools: [
    { name: 'Git', icon: '📝', color: 'from-orange-600 to-red-600' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-cyan-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-600' },
    { name: 'Vercel', icon: '▲', color: 'from-black to-gray-700' },
    { name: 'Netlify', icon: '🌊', color: 'from-teal-400 to-cyan-500' },
    { name: 'Figma', icon: '🎨', color: 'from-purple-400 to-pink-500' },
  ],
};

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const renderSkillSection = (title: string, skills: Skill[], delay: number) => (
    <div className="animate-slide-up group" style={{ animationDelay: `${delay}s` }}>
      <div className="glass-effect rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
        <h3 className="text-2xl font-bold gradient-text mb-6 text-center group-hover:scale-105 transition-transform duration-300">{title}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group/item relative animate-slide-up"
              style={{ animationDelay: `${delay + index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(`${title}-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative glass-effect rounded-full px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl group-hover/item:bg-white/10 cursor-pointer border border-white/10 hover:border-white/30">
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover/item:opacity-30 rounded-full transition-opacity duration-300`} />

                <div className="text-2xl transform group-hover/item:scale-110 transition-all duration-300 relative z-10 flex-shrink-0 group-hover/item:animate-bounce">
                  {skill.icon}
                </div>

                <div className="text-sm font-medium text-white relative z-10 group-hover/item:gradient-text transition-all duration-300 truncate">
                  {skill.name}
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover/item:opacity-20 rounded-full blur-lg transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/50 to-slate-900/80" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My technical expertise across the full development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {renderSkillSection('Frontend', skillCategories.Frontend, 0.2)}
          {renderSkillSection('Backend', skillCategories.Backend, 0.4)}
          {renderSkillSection('Database', skillCategories.Database, 0.6)}
          {renderSkillSection('Tools', skillCategories.Tools, 0.8)}
        </div>
      </div>
    </section>
  );
}
