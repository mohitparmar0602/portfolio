import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-behance-cream relative overflow-hidden">
      {/* Decorative large background text */}
      <h2 className="absolute top-1/2 left-0 w-full text-center text-[12vw] font-serif uppercase text-behance-dark/5 pointer-events-none select-none -z-0">
        SKILLS
      </h2>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-behance-dark mb-6">My Skills</h2>
          <p className="text-behance-dark/60 text-lg md:text-xl max-w-2xl mx-auto font-medium font-accent">
            A comprehensive overview of my technical expertise and creative toolkit.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {SKILLS.map((cat, index) => {
            // Bento spans logic
            let colSpan = "md:col-span-4";
            let rowSpan = "";
            let cardStyle = "bg-white border border-behance-dark/5";

            if (index === 0) { // Programming
                colSpan = "md:col-span-8";
                cardStyle = "bg-behance-teal text-white";
            } else if (index === 1) { // Web Tech
                colSpan = "md:col-span-4";
                rowSpan = "md:row-span-2";
                cardStyle = "bg-behance-sage text-white";
            } else if (index >= 4) { // DB, Soft Skills & Tools
                colSpan = "md:col-span-4";
            }

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colSpan} ${rowSpan} ${cardStyle} relative p-5 md:p-6 rounded-[1.5rem] hover:shadow-2xl transition-all group overflow-hidden flex flex-col justify-between`}
              >
                <div className="relative z-10">
                  <h3 className={`text-[11px] uppercase tracking-[0.4em] font-bold mb-8 flex items-center gap-3 ${index < 2 ? "text-behance-mustard" : "text-behance-coral"}`}>
                    <span className={`w-8 h-px transition-all ${index < 2 ? "bg-behance-mustard/50" : "bg-behance-coral/50"}`}></span>
                    {cat.category}
                  </h3>
                  
                  <div className={`space-y-6 ${index === 1 ? "md:space-y-8" : ""}`}>
                    {cat.items.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="space-y-2 group/skill"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <i className={`${skill.icon} text-2xl transition-transform group-hover/skill:scale-125 duration-500 ${index < 2 ? "text-behance-mustard" : "text-behance-teal"}`}></i>
                            <span className="text-sm font-accent font-bold tracking-wider group-hover/skill:translate-x-2 transition-transform">{skill.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative background icons for the hero tiles */}
                {(index === 0 || index === 1) && (
                   <div className={`absolute -bottom-10 -right-10 text-[18rem] text-white/5 pointer-events-none -rotate-12 group-hover:rotate-0 transition-transform duration-1000`}>
                      <i className={cat.items[0].icon}></i>
                   </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
