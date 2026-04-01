import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';

const AchievementCard = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-behance-teal p-8 rounded-[2rem] text-behance-cream group hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between min-h-[320px]"
  >
    <div className="relative z-10">
      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-behance-mustard text-2xl mb-8 group-hover:scale-110 transition-transform">
        <i className={achievement.icon}></i>
      </div>
      <h3 className="text-xl md:text-2xl font-serif leading-tight">
        {achievement.title}
      </h3>
    </div>

    <div className="relative z-10">
       <div className="w-10 h-1 bg-behance-mustard mb-4 group-hover:w-16 transition-all"></div>
       <p className="text-behance-cream/70 font-accent text-[12px] leading-relaxed">
          {achievement.desc || "Recognized for technical excellence and impact in competitive programming."}
       </p>
    </div>

    {/* Big Background Number */}
    <div className="absolute -bottom-6 -right-6 text-[10vw] font-serif text-white/5 pointer-events-none select-none -z-0">
       {index + 1}
    </div>
  </motion.div>
);

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-behance-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="mb-20 space-y-4">
                  <span className="text-behance-coral font-accent font-bold tracking-[0.5em] uppercase text-[10px] block">Milestones</span>
                  <h2 className="text-5xl md:text-7xl font-serif text-behance-teal leading-[0.9] tracking-tight">Achievements</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.map((achievement, index) => (
                        <AchievementCard key={index} achievement={achievement} index={index} />
                    ))}
                </div>
            </div>

            {/* Background Decorative Outline */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif text-behance-dark/[0.02] pointer-events-none select-none -z-0">
                AWARDS
            </div>
        </section>
    );
};

export default Achievements;
