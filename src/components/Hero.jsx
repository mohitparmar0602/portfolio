import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT, CONTACT_INFO } from '../constants';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-32 pb-20 bg-behance-cream relative overflow-hidden flex items-center justify-center">
            {/* Background decorative text */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif text-behance-dark/5 pointer-events-none select-none -z-0">
                HELLO
            </h2>

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full"
                >
                    <div className="space-y-16">
                        <h1 className="text-7xl lg:text-[9rem] font-serif text-behance-dark leading-[0.8] tracking-tighter">
                            Hello, <br />
                            I'm Mohit
                        </h1>
                        
                        <div className="max-w-2xl mx-auto space-y-10 flex flex-col items-center">
                            <p className="text-behance-dark/70 text-xl md:text-2xl font-accent font-medium leading-relaxed italic border-l-4 border-r-4 border-behance-mustard px-8">
                                {HERO_CONTENT.description}
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

