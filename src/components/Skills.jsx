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
        <section id="skills" className="py-10 bg-[#080808] scroll-mt-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-white mb-10 border-l-4 border-green-400 pl-4"
                >
                    Technical Skills
                </motion.h3>

                <div className="grid md:grid-cols-2 gap-8">
                    {SKILLS.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                            className={skillGroup.category === "Databases" ? "md:col-span-2" : ""}
                        >
                            <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">{skillGroup.category}</h4>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={itemVariants}
                                        className={`px-4 py-2 glass-card rounded ${skill.name === 'React.js' ? 'text-green-400 border-green-400/30' : 'text-gray-300'}`}
                                    >
                                        <i className={`${skill.icon} ${skill.color} mr-2`}></i>{skill.name}
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
