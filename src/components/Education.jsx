import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const EducationCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative flex flex-col md:flex-row gap-8 bg-white/40 backdrop-blur-md border border-brand-dark/5 p-8 md:p-10 rounded-sm hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-500 mb-8 last:mb-0"
  >
    {/* Large Year Column */}
    <div className="md:w-1/4 flex flex-col justify-start">
      <span className="text-4xl md:text-5xl font-serif text-brand-accent group-hover:text-brand-accent/50 transition-colors duration-500 leading-none">
        {item.date.split(' - ')[1] || item.date}
      </span>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mt-2">
        {item.date.split(' - ')[0]}
      </span>
    </div>

    {/* Content Column */}
    <div className="md:w-3/4 space-y-4">
      <div>
        <h4 className="text-2xl md:text-3xl font-serif text-brand-dark mb-1 leading-tight group-hover:translate-x-2 transition-transform duration-500">
          {item.institution}
        </h4>
        <p className="text-brand-accent text-xs font-bold tracking-widest uppercase italic">
          {item.degree}
        </p>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand-dark/70">
        {item.subtitle && (
          <span className="flex items-center gap-2">
            <i className="fas fa-chart-line text-brand-accent/60"></i>
            {item.subtitle}
          </span>
        )}
        {item.location && (
          <span className="flex items-center gap-2">
            <i className="fas fa-location-dot text-brand-accent/60"></i>
            {item.location}
          </span>
        )}
      </div>
    </div>

    {/* Decorative corner element */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-accent/5 -mr-8 -mt-8 rounded-full blur-2xl group-hover:bg-brand-accent/20 transition-all"></div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative large background text */}
      <h2 className="absolute top-1/2 left-0 w-full text-center text-[15vw] font-serif uppercase text-hollow text-brand-dark/5 pointer-events-none select-none">
        Education
      </h2>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-serif mb-4 text-brand-dark leading-none">
            Education
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 opacity-30"></div>
        </motion.div>

        <div className="space-y-6">
          {EDUCATION.map((item, idx) => (
            <EducationCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
