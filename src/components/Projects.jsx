import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="projects" className="py-20 max-w-7xl mx-auto px-6 scroll-mt-24">
            <div className="flex justify-between items-end mb-14">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-sm font-bold text-green-400 tracking-widest uppercase mb-2">Portfolio</h3>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Projects</span>
                    </h2>
                </motion.div>
                <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    href="https://github.com/mohitparmar0602" target="_blank" rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-300"
                >
                    <i className="fab fa-github"></i> All Projects
                </motion.a>
            </div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -8 }}
                        className="group glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-green-400/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(34,197,94,0.12)] flex flex-col"
                    >
                        {/* Card top banner */}
                        {project.image ? (
                            <div className="relative bg-[#0d1a0e] flex items-center justify-center border-b border-white/5 group-hover:border-green-400/20 transition-all duration-500" style={{minHeight: '160px'}}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full"
                                    style={{ objectFit: 'contain', maxHeight: '200px', display: 'block' }}
                                />
                            </div>
                        ) : (
                            <div className="relative h-16 bg-gradient-to-br from-green-900/30 via-[#111] to-[#0a0a0a] flex items-center justify-between px-6 border-b border-white/5 group-hover:from-green-800/30 transition-all duration-500">
                                <i className={`${project.icon} text-4xl text-gray-700 group-hover:text-green-400 transition-colors duration-300`}></i>
                                <span className="text-xs font-mono font-bold text-gray-600 bg-white/5 px-3 py-1 rounded-full border border-white/5">{project.date}</span>
                            </div>
                        )}

                        {/* Card body */}
                        <div className="p-7 flex flex-col flex-1">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">{project.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 font-medium">{tag}</span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white/5 hover:bg-green-500 border border-white/10 hover:border-green-400 text-gray-300 hover:text-black font-bold text-sm rounded-lg transition-all duration-300 group/btn"
                            >
                                View Project
                                <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;

