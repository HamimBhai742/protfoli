/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className='relative py-20 px-6 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50' />

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 right-10 w-4 h-4 border border-indigo-400/30 rotate-45 animate-float' />
        <div className='absolute bottom-1/3 left-10 w-6 h-6 border border-purple-400/30 animate-float animation-delay-1000' />
        <div className='absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-float animation-delay-2000' />
      </div>

      <div className='relative max-w-6xl mx-auto'>
        <div className='text-center mb-16 animate-slide-up'>
          <h2 className='text-5xl font-bold linear-text mb-6'>About Me</h2>
        </div>

        <div className='grid lg:grid-cols-3 gap-8 items-center'>
          {/* Photo Section */}
          <div className='flex justify-center lg:justify-start animate-slide-up animation-delay-200'>
            <div
              className='relative group cursor-pointer'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main photo container */}
              <div className='relative w-80 h-80 rounded-full overflow-hidden glass-effect transition-all duration-500 group-hover:scale-105 animate-glow'>
                {/* Profile Image - Replace src with your actual image */}
                <img
                  src='/imglogo.jpeg'
                  alt='Profile'
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Fallback linear (hidden by default) */}
                <div
                  className='w-full h-full bg-linear-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center'
                  style={{ display: 'none' }}
                >
                  <span className='text-8xl'>👨‍💻</span>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className='absolute bottom-6 left-6 right-6 text-white transform transition-transform duration-500'>
                    <p className='text-lg font-semibold linear-text'>
                      Full Stack Developer
                    </p>
                    <p className='text-sm opacity-90'>
                      Passionate about creating amazing web experiences
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-indigo-500/80 rounded-full group-hover:animate-bounce' />
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/80 rounded-full group-hover:animate-bounce animation-delay-200' />
              <div className='absolute top-1/2 -right-6 w-4 h-4 bg-cyan-500/80 rounded-full group-hover:animate-bounce animation-delay-400' />
            </div>
          </div>

          {/* Content Section */}
          <div className='space-y-8 col-span-2 animate-slide-up animation-delay-400'>
            <div>
              <h3 className='text-3xl font-bold text-white mb-6'>My Journey</h3>
              <div className='space-y-4 text-gray-300 leading-relaxed'>
                <p>
                  Hello! I’m Hamim, a passionate and curious{' '}
                  <strong>Junior Full-Stack Web Developer</strong> who loves
                  turning ideas into real, usable digital products.
                </p>
                <p>
                  My programming journey began with a strong curiosity about how
                  websites work behind the scenes. What started as learning
                  basic <strong>HTML and CSS</strong> quickly grew into a deep
                  interest in
                  <strong>
                    {' '}
                    JavaScript, and eventually into modern frameworks like
                    React, Next.js, and Node.js
                  </strong>
                  . Over time, I’ve built multiple real-world projects—from
                  e-commerce platforms and booking systems to learning platforms
                  and management systems—which helped me understand not just
                  coding, but problem-solving, architecture, and user
                  experience.
                </p>
                <p>
                  I especially enjoy working on the backend, where I can focus
                  on API design, authentication and authorization, database
                  architecture, business logic, and data flow management. I have
                  hands-on experience working with{' '}
                  <strong> MongoDB, PostgreSQL, Prisma, and Supabase</strong>,
                  and I enjoy building systems that are efficient, secure, and
                  scalable. Solving backend problems and designing clean
                  server-side solutions gives me a strong sense of satisfaction.
                </p>
                <p>
                  What excites me most is learning by building. I enjoy
                  exploring new tools, improving performance, refactoring code,
                  and writing scalable, maintainable solutions. I’m highly
                  motivated, detail-oriented, and enjoy working in collaborative
                  environments where ideas are shared and improved together.
                </p>
                <p>
                  Outside of programming,I like exploring tech content,
                  <strong> improving my English communication</strong> skills,
                  and i also like playing mobile games.
                </p>
                <p>
                  Overall, I see myself as a growth-focused, consistent, and
                  passionate developer, eager to learn, collaborate, and build
                  meaningful software that solves real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
