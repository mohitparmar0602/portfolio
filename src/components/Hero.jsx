import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-6 pt-20 pb-10">
            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 90, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, -90, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10"
            />

            {/* Floating Tech Icons */}
            <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-[10%] md:left-[20%] text-5xl md:text-6xl opacity-30 hover:opacity-100 hover:scale-110 transition-all blur-[2px] hover:blur-none z-0 cursor-default"
            >
                <i className="fab fa-react text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"></i>
            </motion.div>
            
            <motion.div
                animate={{ y: [20, -20, 20], rotate: [0, -15, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-[10%] md:right-[15%] text-5xl md:text-6xl opacity-30 hover:opacity-100 hover:scale-110 transition-all blur-[2px] hover:blur-none z-0 cursor-default"
            >
                <i className="fab fa-node-js text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"></i>
            </motion.div>
            
            <motion.div
                animate={{ y: [-25, 25, -25], x: [-15, 15, -15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-[15%] md:left-[25%] text-4xl md:text-5xl opacity-30 hover:opacity-100 hover:scale-110 transition-all blur-[1px] hover:blur-none z-0 cursor-default"
            >
                <i className="fas fa-database text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]"></i>
            </motion.div>
            
            <motion.div
                animate={{ y: [15, -15, 15], x: [20, -20, 20] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/5 right-[20%] md:right-[30%] text-5xl md:text-6xl opacity-20 hover:opacity-100 hover:scale-110 transition-all blur-[3px] hover:blur-none z-0 cursor-default"
            >
                <i className="fab fa-python text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"></i>
            </motion.div>
            
            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 20, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-1/2 -translate-x-1/2 text-4xl opacity-20 hover:opacity-100 hover:scale-110 transition-all blur-[2px] hover:blur-none z-0 cursor-default"
            >
                <i className="fas fa-code text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]"></i>
            </motion.div>

            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto z-10 w-full text-center relative">
                
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
                >
                    {HERO_CONTENT.greeting} <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
                        {HERO_CONTENT.name}
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
                >
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-green-500"></span>
                        <span className="text-green-400 font-bold tracking-widest uppercase text-sm md:text-base drop-shadow-sm">
                            Full Stack Developer
                        </span>
                        <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-green-500"></span>
                    </div>
                    <p className="mt-2 text-base md:text-xl opacity-90 drop-shadow-md font-medium text-gray-300/90">{HERO_CONTENT.description}</p>
                </motion.div>
                
                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
                >
                    <a 
                        href="#contact" 
                        className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold tracking-wide rounded transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] w-full sm:w-auto text-center"
                    >
                        Contact Me
                    </a>
                    <a 
                        href={HERO_CONTENT.resumeLink || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-8 py-3 bg-transparent border border-green-500 text-green-400 font-bold tracking-wide rounded hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] w-full sm:w-auto text-center flex items-center justify-center gap-2"
                    >
                        View Resume <i className="fas fa-external-link-alt text-sm"></i>
                    </a>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Hero;
