import React from 'react';
import { CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 max-w-4xl mx-auto px-6 scroll-mt-24">

            <div className="mb-20">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center text-center md:text-left"
                >
                    <div>
                        <h4 className="text-2xl font-bold text-white">Lovely Professional University</h4>
                        <p className="text-gray-400">Bachelor of Technology - Computer Science</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                        <p className="text-green-400 font-bold text-xl">CGPA: 6.55</p>
                        <p className="text-gray-500 text-sm">2023 - Present</p>
                    </div>
                </motion.div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h3>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-10 rounded-2xl border border-green-400/20 text-center"
            >
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                    I am currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded transition text-white">
                        <i className="fas fa-envelope text-green-400"></i> {CONTACT_INFO.email}
                    </a>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded transition text-white">
                        <i className="fas fa-phone text-green-400"></i> {CONTACT_INFO.phone}
                    </a>
                </div>

                <div className="flex justify-center gap-6 text-3xl">
                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><i className="fab fa-github"></i></a>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition"><i className="fab fa-linkedin"></i></a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
