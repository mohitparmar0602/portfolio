import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="projects" className="py-20 max-w-7xl mx-auto px-6 scroll-mt-24">
            <div className="flex justify-between items-end mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-sm font-bold text-green-400 tracking-widest uppercase mb-2">Portfolio</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
                </motion.div>
                <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    href="https://github.com/mohitparmar0602" target="_blank" rel="noopener noreferrer"
                    className="hidden md:inline-block text-gray-400 hover:text-white transition"
                >
                    View Github <i className="fab fa-github ml-2"></i>
                </motion.a>
            </div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="glass-card p-6 rounded-xl hover-neon group relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <i className={`${project.icon} text-4xl text-gray-700 group-hover:text-green-400 transition-colors`}></i>
                            <span className="text-xs font-mono text-gray-500">{project.date}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                        <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">{tag}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-400 text-sm font-bold hover:underline">
                            View Project <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
