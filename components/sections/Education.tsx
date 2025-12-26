'use client';

import { useState } from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  courses: string[];
}

const educationData: EducationItem[] = [
  {
    institution: 'Dhaka Polytechnic Institute',
    degree: 'Diploma of Computer Science and Technology',
    duration: '2022 - 2026',
    gpa: '3.3/4.0',
    courses: [
      'Data Structures',
      'Web Development',
      'Database Systems',
      'Networking',
      'Operating Systems',
      'Computer Organization',
    ],
  },
  {
    institution: 'Ruhitarpar D.M High School',
    degree: ' Secondary School Certificate (SSC)',
    duration: '2020 - 2022',
    gpa: '4.06/5.00',
    courses: [
      'Mathematics',
      'Chemistry',
      'Physics',
      'English',
      'Biology'
    ],
  },
];

export default function Education() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className='relative py-20 px-6 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50' />

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-10 w-4 h-4 border border-indigo-400/30 rotate-45 animate-float' />
        <div className='absolute top-1/3 right-10 w-6 h-6 border border-purple-400/30 animate-float animation-delay-1000' />
        <div className='absolute bottom-1/4 left-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-float animation-delay-2000' />
        <div className='absolute bottom-1/3 right-1/3 w-5 h-5 border border-indigo-400/30 animate-float animation-delay-3000' />
      </div>

      <div className='relative max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold linear-text mb-6'>Education</h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Academic journey and continuous learning path
          </p>
        </div>

        <div className='relative'>
          {/* Timeline line - hidden on mobile */}
          <div className='absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-500 via-purple-500 to-cyan-500 transform -translate-x-0.5 hidden md:block' />

          <div className='space-y-8 md:space-y-12'>
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center group ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Timeline dot - hidden on mobile */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-4 h-4 rounded-full border-4 bg-indigo-500 border-indigo-300 transition-all duration-300 ${
                    hoveredItem === index ? 'scale-150 shadow-lg' : ''
                  } hidden md:block`}
                >
                  <div className='absolute inset-0 rounded-full animate-ping bg-indigo-500 opacity-20' />
                </div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div
                    className={`bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 transition-all duration-500 ${
                      hoveredItem === index
                        ? 'bg-white/10 transform -translate-y-2 shadow-2xl'
                        : ''
                    }`}
                  >
                    {/* Animated background linear */}
                    <div className='absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300' />

                    <div className='relative z-10'>
                      <div className='mb-4'>
                        <h3 className='text-lg md:text-2xl font-bold text-white mb-1 group-hover:linear-text transition-all duration-300'>
                          {item.degree}
                        </h3>
                        <p className='text-base md:text-lg text-indigo-400 font-medium mb-2'>
                          {item.institution}
                        </p>
                        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-2'>
                          <span className='px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs md:text-sm'>
                            {item.duration}
                          </span>
                          {item.gpa && (
                            <span className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs md:text-sm'>
                              GPA: {item.gpa}
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className='text-xs md:text-sm font-semibold text-gray-300 mb-2'>
                          Key Courses
                        </h4>
                        <div className='flex flex-wrap gap-1'>
                          {item.courses.map((course, i) => (
                            <span
                              key={i}
                              className='px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs border border-indigo-500/30 hover:border-indigo-400 transition-colors duration-300'
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating particles effect */}
                    <div className='absolute inset-0 pointer-events-none'>
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className='absolute w-1 h-1 bg-linear-to-r from-indigo-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping'
                          style={{
                            top: `${20 + i * 20}%`,
                            right: `${80 + i * 5}%`,
                            animationDelay: `${i * 200}ms`,
                            animationDuration: '2s',
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
      </div>
    </section>
  );
}
