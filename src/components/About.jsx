import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile_img.jpeg';
import { HERO_CONTENT, CONTACT_INFO } from '../constants';

const About = () => {
    return (
        <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-serif text-brand-dark mb-8 leading-tight">
                            Hello, <br />
                            I'm Mohit !
                        </h2>

                        <p className="text-brand-dark/70 text-lg md:text-xl leading-relaxed max-w-xl mb-6 font-medium">
                            I am a Computer Science student at Lovely Professional University with a deep-seated passion for building scalable, user-centric web applications. 
                            My journey into development began with a curiosity for how data moves across the web, leading me to master the MERN stack (MongoDB, Express, React, and Node.js) and backend systems.
                        </p>

                        <p className="text-brand-dark/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-medium">
                            Beyond writing clean, efficient code in C++ and Python, I focus on solving complex problems through Data Structures and Algorithms —a discipline I've honed through rigorous logic-building training at LPU. 
                            I pride myself on my soft skills, including adaptability and being a strong team player, which allow me to bridge the gap between technical details and user experience.
                        </p>

                        {/* Action Buttons: View Projects & Download CV */}
                        <div className="flex flex-wrap gap-6 mt-12">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold text-sm hover:bg-brand-accent hover:text-brand-dark transition-all shadow-lg active:scale-95"
                            >
                                View Projects
                            </a>
                            <a
                                href={HERO_CONTENT.resumeLink}
                                download="Mohit_Parmar_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border-2 border-brand-dark text-brand-dark rounded-full font-bold text-sm hover:bg-brand-dark hover:text-white transition-all shadow-lg active:scale-95 flex items-center gap-2"
                            >
                                Download CV <i className="fas fa-download"></i>
                            </a>
                        </div>

                        {/* Social Links Row */}
                        <div className="flex items-center gap-8 mt-10 ml-4">
                            <a 
                                href={CONTACT_INFO.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-3xl text-brand-dark/40 hover:text-brand-dark hover:scale-110 transition-all"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a 
                                href={CONTACT_INFO.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-3xl text-brand-dark/40 hover:text-brand-dark hover:scale-110 transition-all"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right side: Circular Image with Labels */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Decorative Background Box */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-brand-green/10 -rotate-3 rounded-3xl -z-10"></div>

                        {/* The Circular Profile Image Container */}
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Circular Image */}
                            <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                                <img
                                    src={profileImg}
                                    alt="Mohit Parmar"
                                    className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                                />
                                {/* Orange Filter Overlay Effect (matching reference) */}
                                <div className="absolute inset-0 bg-[#f4a261]/20 mix-blend-multiply pointer-events-none"></div>
                            </div>

                            {/* Optional badge or label could go here */}

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -right-8 bg-brand-accent px-6 py-2 rounded-full shadow-lg text-brand-dark text-xs font-bold"
                            >
                                Full Stack
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
