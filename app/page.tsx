import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home" className="animate-slide-up">
        <Hero />
      </section>
      <section id="about" className="animate-slide-up animation-delay-200">
        <About />
      </section>
      {/* <section id="experience" className="animate-slide-up animation-delay-400">
        <Experience />
      </section> */}
      <section id="education" className="animate-slide-up animation-delay-600">
        <Education />
      </section>
      <section id="skills" className="animate-slide-up animation-delay-800">
        <Skills />
      </section>
      <section id="projects" className="animate-slide-up animation-delay-1000">
        <Projects />
      </section>
      <section id="contact" className="animate-slide-up animation-delay-1200">
        <Contact />
      </section>
    </div>
  );
}
