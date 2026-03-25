import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import profileImg from '../assets/profile_img.jpeg';

const About = () => {
    return (
        <section id="about" className="py-20 max-w-6xl mx-auto px-6 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h3 className="text-lg font-bold text-green-400 tracking-widest uppercase mb-4">Who I Am</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Building Solutions with Code & Creativity</h2>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-shrink-0 group"
                >
                    <div className="w-64 h-64 md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.4)] border-4 border-green-500 transition-all duration-500 group-hover:scale-[1.05] group-hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] relative">
                        <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <img src={profileImg} alt="Mohit Parmar" className="w-full h-full object-cover relative z-0" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="glass-card p-8 rounded-2xl border-t border-white/10 flex-1 text-left"
                >
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                        I am a Computer Science student at Lovely Professional University with a deep-seated passion for building scalable, user-centric web applications. My journey into development began with a curiosity for how data moves across the web, leading me to master the MERN stack (MongoDB, Express, React, and Node.js) and backend systems.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        Beyond writing clean, efficient code in C++ and Python, I focus on solving complex problems through Data Structures and Algorithms—a discipline I’ve honed through rigorous logic-building training at LPU. I pride myself on my soft skills, including adaptability and being a strong team player, which allow me to bridge the gap between complex backend logic and seamless, responsive frontend experiences. My goal is to build digital solutions that are not just functional, but impactful.
                    </p>
                    
                    {/* Action Links */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-8">
                        <a href="#projects" className="px-6 py-2.5 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-colors shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] text-center w-full sm:w-auto">
                            VIEW PROJECTS
                        </a>
                        <a href="https://drive.google.com/uc?export=download&id=1g-3Jp4cArmmwWyztsBA8_hscxp2lBEXG" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-transparent border-2 border-green-500 text-green-400 font-bold rounded hover:bg-green-500/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                            <i className="fas fa-download"></i> DOWNLOAD CV
                        </a>
                        <div className="flex gap-4 sm:ml-auto mt-4 sm:mt-0 text-2xl">
                            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110"><i className="fab fa-github"></i></a>
                            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all hover:scale-110"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
