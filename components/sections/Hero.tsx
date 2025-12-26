/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ArrowDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Junior Developer',
    'Frontend Developer',
    'Backend Developer',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-linear-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90' />

        {/* Floating Orbs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse animation-delay-1000' />
        <div className='absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse animation-delay-2000' />
        <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse animation-delay-3000' />

        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className='absolute animate-float'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                i % 3 === 0
                  ? 'bg-indigo-400/30'
                  : i % 3 === 1
                  ? 'bg-purple-400/30'
                  : 'bg-cyan-400/30'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-6 max-w-6xl mx-auto'>
        <div className='animate-slide-up'>
          <div className='mb-6'>
            <span className='inline-block px-4 py-2 glass-effect rounded-full text-sm text-gray-300 mb-4'>
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight'>
            <span className='text-white'>Hi, I&apos;m </span>
            <span className='linear-text'>Hamim</span>
            <br />
            <span className='text-2xl md:text-4xl lg:text-5xl text-gray-300'>
              {text}
              <span className='animate-pulse text-indigo-400'>|</span>
            </span>
          </h1>
        </div>

        <div className='animate-slide-up animation-delay-200'>
          <p className='text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
            Passionate about creating exceptional digital experiences with
            modern technologies. I transform ideas into beautiful, functional,
            and user-centered solutions.
          </p>
        </div>

        <div className='animate-slide-up animation-delay-400'>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <a
              href='#projects'
              className='group relative px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden'
            >
              <span className='relative z-10'>View My Work</span>
              <div className='absolute inset-0 bg-linear-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </a>

            <a
              target='_blank'
              href='https://drive.google.com/file/d/1Uvvlyse3QMtuTiAxezODG4ByeFLYfaVU/view?usp=sharing'
              className='group flex items-center gap-2 px-8 py-4 glass-effect rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40'
            >
              Download CV
              <span className=' text-sm'>
                <ArrowDown className='w-5 h-5' />
              </span>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className='animate-slide-up animation-delay-600 pb-6'>
          <div className='flex justify-center space-x-4'>
            {[
              {
                name: 'Facebook',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                href: 'https://facebook.com/hamimdev742'
              },
              {
                name: 'Instagram',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-4.262 1.781c-1.297 0-2.345 1.048-2.345 2.345s1.048 2.345 2.345 2.345 2.345-1.048 2.345-2.345-1.048-2.345-2.345-2.345z"/>
                  </svg>
                ),
                href: 'https://instagram.com/hamim_742'
              },
              {
                name: 'Twitter',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                ),
                href: 'https://twitter.com/hamim742'
              },
              {
                name: 'LinkedIn',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                href: 'https://linkedin.com/in/md-hamim42'
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className='w-12 h-12 glass-effect rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-white/30'
                title={social.name}
              >
                <span className='group-hover:scale-110 transition-transform duration-300'>
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse' />
          </div>
        </div>
      </div>
    </section>
  );
}
