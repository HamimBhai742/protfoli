import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import Experience from '../components/sections/Experience';

export const metadata = {
  title: "Hamim | Backend Developer",
  description: "Portfolio of Hamim - Next.js, React, Node.js Developer",
  keywords: ["Next.js developer", "React developer", "Full stack developer", "Backend developer", "MERN stack developer"],
  authors: [{ name: "Hamim" }],
  openGraph: {
    title: "Hamim | Developer Portfolio",
    description: "Building scalable web apps with Next.js and React.",
    url: "https://hamim-protfolio.vercel.app",
    siteName: "Hamim Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <section id='home' className='animate-slide-up'>
        <Hero />
      </section>
      <section id='about' className='animate-slide-up animation-delay-200'>
        <About />
      </section>
      <section id='skills' className='animate-slide-up animation-delay-800'>
        <Skills />
      </section>
      <section id='projects' className='animate-slide-up animation-delay-1000'>
        <Projects />
      </section>
      <section id='experience' className='animate-slide-up animation-delay-400'>
        <Experience />
      </section>
      <section id='education' className='animate-slide-up animation-delay-600'>
        <Education />
      </section>
      <section id='contact' className='animate-slide-up animation-delay-1200'>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
