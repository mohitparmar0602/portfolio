import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-brand-green relative overflow-hidden">
      {/* Decorative large background text */}
      <h2 className="absolute top-1/2 left-0 w-full text-center text-[10vw] font-serif uppercase text-hollow text-white/5 pointer-events-none select-none">
        My Expertise
      </h2>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-brand-cream">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-brand-cream mb-6">My Skills</h2>
          <p className="text-brand-cream/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technical expertise, tools, and technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-dark/40 border border-white/5 p-8 rounded-2xl hover:border-brand-accent/50 transition-all group"
            >
              <h3 className="text-brand-accent text-xs uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-accent/30 group-hover:w-12 transition-all"></span>
                {cat.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-3 px-4 py-2 bg-brand-cream/5 rounded-full border border-white/5 hover:bg-brand-accent hover:text-brand-dark transition-all cursor-default"
                  >
                    <i className={`${skill.icon} ${skill.color || 'text-brand-accent'} text-sm`}></i>
                    <span className="text-sm font-semibold tracking-wide">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
