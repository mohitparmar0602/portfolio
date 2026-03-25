import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="antialiased selection:bg-green-400 selection:text-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-400 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
