import React from 'react';
import { CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 bg-[#080808] scroll-mt-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Certifi<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">cations</span>
                    </h3>
                    <p className="text-gray-400 mt-3 text-lg">Verified credentials from online learning platforms.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-7">
                    {CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="glass-card p-7 rounded-2xl border border-white/5 hover:border-green-400/30 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(34,197,94,0.1)] flex flex-col group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex items-center justify-between mb-5">
                                <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-xl">
                                    <i className="fas fa-certificate text-green-400 text-2xl"></i>
                                </div>
                                <span className="text-xs font-mono font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">{cert.date}</span>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">{cert.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed flex-1">{cert.desc}</p>

                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-green-500 border border-white/10 hover:border-green-400 text-gray-300 hover:text-black font-bold text-sm rounded-lg transition-all duration-300"
                                >
                                    View Credential <i className="fas fa-external-link-alt text-xs"></i>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

