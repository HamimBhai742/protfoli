/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse animation-delay-3000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-indigo-400/30' :
              i % 3 === 1 ? 'bg-purple-400/30' : 'bg-cyan-400/30'
            }`} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm text-gray-300 mb-4">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Hamim</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-gray-300">
              {text}
              <span className="animate-pulse text-indigo-400">|</span>
            </span>
          </h1>
        </div>

        <div className="animate-slide-up animation-delay-200">
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with modern technologies.
            I transform ideas into beautiful, functional, and user-centered solutions.
          </p>
        </div>

        <div className="animate-slide-up animation-delay-400">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 glass-effect rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40"
            >
              Get In Touch
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-slide-up animation-delay-600">
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">3+</div>
              <div className="text-xs md:text-sm text-gray-400">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">100%</div>
              <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="animate-slide-up animation-delay-600 pb-6">
          <div className="flex justify-center space-x-4">
            {[
              { name: 'GitHub', icon: '🐙', href: '#' },
              { name: 'LinkedIn', icon: '💼', href: '#' },
              { name: 'Twitter', icon: '🐦', href: '#' },
              { name: 'Email', icon: '📧', href: '#' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-white/30"
                title={social.name}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
