import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const EducationCard = ({ edu, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="bg-behance-dark text-behance-cream p-8 rounded-[2rem] relative overflow-hidden group hover:scale-[1.02] transition-all shadow-xl flex flex-col justify-between h-full border border-white/5"
  >
    <div className="space-y-6 relative z-10 flex-grow">
      <div className="space-y-2">
        <span className="text-behance-mustard font-accent font-bold tracking-[0.4em] uppercase text-[9px]">Academic</span>
        <h3 className="text-2xl md:text-3xl font-serif leading-tight">
          {edu.institution}
        </h3>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm md:text-base font-accent font-bold text-behance-coral uppercase tracking-widest leading-tight">
           {edu.degree}
        </p>
        {edu.score && (
          <p className="inline-block px-3 py-1.5 bg-white/5 text-white/60 text-[10px] font-accent font-bold tracking-wider uppercase rounded-md border border-white/10">
             {edu.score}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {edu.courses && edu.courses.map((course, i) => (
           <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-[8px] font-accent font-bold tracking-widest uppercase opacity-40">
              {course}
           </span>
        ))}
      </div>
    </div>

    <div className="relative z-10 mt-8 pt-6 border-t border-white/5">
       <p className="text-[9px] font-accent font-bold tracking-[0.4em] uppercase text-behance-mustard mb-1">Duration</p>
       <span className="text-xl font-serif text-white block">
          {edu.duration}
       </span>
    </div>

    {/* Background Decorative Element */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-20 group-hover:translate-x-14 transition-transform duration-1000"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUCATION.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
