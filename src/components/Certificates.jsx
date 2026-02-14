import React from 'react';
import { CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 bg-[#080808] scroll-mt-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-white mb-10 border-l-4 border-green-400 pl-4"
                >
                    Certifications
                </motion.h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-5 rounded border-l border-green-400"
                        >
                            <p className="text-gray-500 text-xs mb-1">{cert.date}</p>
                            <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                            <p className="text-sm text-gray-400 mt-2">{cert.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
