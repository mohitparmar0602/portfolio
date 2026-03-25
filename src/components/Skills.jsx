import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="skills" className="py-20 bg-[#080808] scroll-mt-24 relative overflow-hidden">
            {/* Background glowing blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Skills</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">A comprehensive overview of my technical expertise, tools, and technologies.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILLS.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                            className={`glass-card p-8 rounded-2xl border border-white/5 hover:border-green-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,197,94,0.1)] group relative overflow-hidden ${skillGroup.category === "Databases" ? "md:col-span-2 lg:col-span-1" : ""}`}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <h4 className="text-white text-xl font-bold mb-6 flex items-center gap-3">
                                {skillGroup.category}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full cursor-default text-gray-300 hover:border-green-400/50 hover:bg-green-400/10 hover:text-white transition-all duration-300 flex items-center shadow-sm"
                                    >
                                        <i className={`${skill.icon} ${skill.color} mr-2 text-lg`}></i>
                                        <span className="font-medium text-sm">{skill.name}</span>
                                    </motion.span>
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
