/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-4 h-4 border border-indigo-400/30 rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-10 w-6 h-6 border border-purple-400/30 animate-float animation-delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-float animation-delay-2000" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-start animate-slide-up animation-delay-200">
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main photo container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden glass-effect transition-all duration-500 group-hover:scale-105 animate-glow">
                {/* Profile Image - Replace src with your actual image */}
                <img
                  src="/imglogo.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Fallback gradient (hidden by default) */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-8xl">👨‍💻</span>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform duration-500">
                    <p className="text-lg font-semibold gradient-text">Full Stack Developer</p>
                    <p className="text-sm opacity-90">Passionate about creating amazing web experiences</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500/80 rounded-full group-hover:animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/80 rounded-full group-hover:animate-bounce animation-delay-200" />
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-500/80 rounded-full group-hover:animate-bounce animation-delay-400" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-slide-up animation-delay-400">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 3 years of experience
                  creating digital solutions that make a difference. I love turning complex
                  problems into simple, beautiful designs that users love to interact with.
                </p>
                <p>
                  My expertise spans across modern web technologies, from crafting responsive
                  frontends with React and Next.js to building robust backend systems.
                  I believe in writing clean, maintainable code and following best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open source projects, mentoring fellow developers,
                  or sharing knowledge with the developer community through blogs and talks.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
