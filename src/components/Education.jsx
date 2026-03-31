import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const EducationCard = ({ edu, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="bg-behance-dark text-behance-cream p-12 md:p-16 rounded-[4rem] relative overflow-hidden group hover:scale-[1.01] transition-all shadow-2xl flex flex-col md:flex-row justify-between gap-12"
  >
    <div className="space-y-10 relative z-10 w-full md:w-3/4">
      <div className="space-y-2">
        <span className="text-behance-mustard font-accent font-bold tracking-[0.5em] uppercase text-[10px]">Academic</span>
        <h3 className="text-5xl md:text-6xl font-serif leading-none tracking-tight">
          {edu.degree}
        </h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-2xl md:text-3xl font-serif text-white/90">
           {edu.institution}
        </p>
        {edu.score && (
          <p className="inline-block px-4 py-2 bg-behance-coral/20 text-behance-coral text-[11px] font-accent font-bold tracking-[0.2em] uppercase rounded-lg">
             {edu.score}
          </p>
        )}
        <div className="w-16 h-1 bg-behance-mustard rounded-full group-hover:w-32 transition-all duration-700"></div>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        {edu.courses && edu.courses.map((course, i) => (
           <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-[9px] font-accent font-bold tracking-widest uppercase opacity-60">
              {course}
           </span>
        ))}
      </div>
    </div>

    <div className="md:text-right relative z-10 flex flex-col justify-center">
       <span className="text-4xl md:text-5xl font-serif text-white leading-none mb-2">
          {edu.duration}
       </span>
       <p className="text-[10px] font-accent font-bold tracking-[0.4em] uppercase text-behance-mustard">Duration</p>
    </div>

    {/* Background Decorative Element */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] -skew-x-12 translate-x-20 group-hover:translate-x-10 transition-transform duration-1000"></div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-behance-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 space-y-4"
        >
          <span className="text-behance-coral font-accent font-bold tracking-[0.5em] uppercase text-[10px] block text-center md:text-left">Knowledge</span>
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-serif text-behance-dark leading-[0.8] tracking-tighter">Education</h2>
            <div className="w-24 h-2 bg-behance-mustard rounded-full hidden md:block"></div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {EDUCATION.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
