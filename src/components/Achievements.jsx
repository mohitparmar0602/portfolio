import React from 'react';
import { motion } from 'framer-motion';

import { ACHIEVEMENTS } from '../constants';

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-brand-green relative overflow-hidden text-brand-cream">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif uppercase text-hollow text-white/5 pointer-events-none select-none">
                Awards
            </h2>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h3 className="text-6xl md:text-8xl font-serif mb-4 leading-none text-brand-cream">
                        Achievements
                    </h3>
                    <p className="text-brand-cream/60 max-w-xl mx-auto text-lg font-medium">Badges and recognitions earned through competitive coding challenges.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {ACHIEVEMENTS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-brand-dark/40 p-10 rounded-sm border border-white/5 hover:border-brand-accent transition-all duration-500 group text-center"
                        >
                            <div className={`text-5xl ${item.color} mb-8 transition-transform group-hover:scale-110 duration-500`}>
                                <i className={item.icon}></i>
                            </div>
                            <h4 className="text-2xl font-serif mb-2 tracking-tight">{item.language}</h4>
                            <p className="text-brand-cream/40 text-xs font-bold tracking-widest uppercase mb-4">
                                <i className="fab fa-hackerrank text-brand-accent mr-2"></i> {item.platform}
                            </p>
                            
                            <div className="pt-6 border-t border-white/5 flex flex-col items-center">
                                <div className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-1">
                                    {item.badge}
                                </div>
                                {item.date && <div className="text-white/30 text-[9px] uppercase font-bold tracking-tighter mb-2">{item.date}</div>}
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <i key={i} className={`fas fa-star text-[8px] ${i < item.stars ? 'text-brand-accent' : 'text-white/10'}`}></i>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
