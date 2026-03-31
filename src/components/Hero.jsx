import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';

const Hero = () => {
    return (
        <section id="home" className="h-screen w-full relative overflow-hidden bg-brand-green lg:bg-split-hero flex items-center justify-center">
            
            {/* Background Decorative Hollow Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-10 lg:opacity-20">
                <motion.h2 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-[15vw] lg:text-[12vw] font-serif leading-none text-hollow text-white uppercase"
                >
                  Portfolio
                </motion.h2>
                <motion.h2 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-[15vw] lg:text-[12vw] font-serif leading-none text-hollow text-white uppercase -mt-[4vw]"
                >
                  Portfolio
                </motion.h2>
                <motion.h2 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-[15vw] lg:text-[12vw] font-serif leading-none text-hollow text-white uppercase -mt-[4vw]"
                >
                  Portfolio
                </motion.h2>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-serif text-white tracking-tighter leading-none mb-4">
                        {HERO_CONTENT.greeting} {HERO_CONTENT.name}
                    </h1>
                    <p className="text-brand-accent text-xs md:text-xl font-bold tracking-[0.3em] uppercase">
                        {HERO_CONTENT.title}
                    </p>
                </motion.div>

                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-12 max-w-lg mx-auto"
                >
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed italic font-light">
                        {HERO_CONTENT.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a 
                          href="#contact" 
                          className="px-8 py-3 bg-brand-accent text-brand-dark font-bold tracking-widest uppercase rounded-full hover:bg-white transition-all shadow-xl transform active:scale-95 text-[10px]"
                        >
                            Contact Me
                        </a>
                        <a 
                          href={HERO_CONTENT.resumeLink} 
                          download="Mohit_Parmar_Resume.pdf"
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-8 py-3 border border-white/20 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-brand-dark transition-all transform active:scale-95 flex items-center gap-2 text-[10px]"
                        >
                            View Resume <i className="fas fa-file-pdf"></i>
                        </a>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
