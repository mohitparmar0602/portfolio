import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import profileImg from '../assets/profile_img.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-behance-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Circular Profile Image */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="flex justify-center items-center"
        >
           <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden shadow-2xl border flex-shrink-0 border-behance-dark/5 group">
               <img 
                   src={profileImg} 
                   alt="Mohit Parmar" 
                   className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
               />
               {/* Inner shadow overlay for depth */}
               <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
           </div>
        </motion.div>

        {/* Right: Detailed Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <span className="text-behance-coral font-accent font-bold tracking-[0.4em] uppercase text-xs block">Background</span>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight text-behance-dark">
              Full-stack developer with a eye for detail.
            </h3>
            <p className="text-behance-dark/70 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-behance-mustard pl-6">
              "Code is my canvas, and logic is my brush."
            </p>
          </div>

          <div className="space-y-6 text-behance-dark/70 text-lg leading-relaxed font-accent">
            <p>{ABOUT_TEXT.main}</p>
            <p>{ABOUT_TEXT.sub}</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
