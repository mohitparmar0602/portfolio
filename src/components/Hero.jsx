import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-6 pt-20 pb-10">
            {/* Animated Background Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] -z-10"
            />

            <div className="text-center max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight"
                >
                    {HERO_CONTENT.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">{HERO_CONTENT.name}</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 h-20 md:h-auto"
                >
                    <div className="flex justify-center items-center gap-2">
                        <span>I am a</span>
                        <span className="text-white font-medium">
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'MERN Stack Specialist', 'Creative Coder'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </div>
                    <p className="mt-2 text-base md:text-lg opacity-80">{HERO_CONTENT.description}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 text-sm font-semibold mb-12"
                >
                    <span className="px-4 py-2 bg-gray-900 rounded border border-gray-800 text-gray-300 hover:border-green-400 transition-colors"><i className="fas fa-database text-green-400 mr-2"></i>MongoDB</span>
                    <span className="px-4 py-2 bg-gray-900 rounded border border-gray-800 text-gray-300 hover:border-gray-500 transition-colors"><i className="fas fa-server text-gray-400 mr-2"></i>Express.js</span>
                    <span className="px-4 py-2 bg-gray-900 rounded border border-gray-800 text-gray-300 hover:border-blue-400 transition-colors"><i className="fab fa-react text-blue-400 mr-2"></i>React</span>
                    <span className="px-4 py-2 bg-gray-900 rounded border border-gray-800 text-gray-300 hover:border-green-500 transition-colors"><i className="fab fa-node text-green-500 mr-2"></i>Node.js</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a href="#projects" className="px-8 py-3 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-colors shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)]">
                        VIEW PROJECTS
                    </a>
                    <a href="#contact" className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors">
                        CONTACT ME
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
