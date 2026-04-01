import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
    return (
        <footer className="py-20 bg-behance-cream text-behance-dark border-t border-behance-dark/5 relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute -bottom-10 right-10 text-[10vw] font-serif text-behance-dark/[0.01] pointer-events-none select-none">
                THANKS
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    
                    {/* Brand/Logo */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6"
                    >
                        <div className="w-16 h-16 bg-behance-teal rounded-[1.5rem] rotate-12 flex items-center justify-center text-white text-3xl font-serif">
                            M
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-3xl font-serif leading-none tracking-tight">Mohit Parmar</h3>
                            <p className="text-[10px] font-accent font-bold tracking-[0.3em] uppercase text-behance-coral">Full-Stack Developer</p>
                        </div>
                    </motion.div>

                    {/* Socials */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-right"
                    >
                        <div className="flex justify-center md:justify-end gap-6 text-xl">
                            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-behance-dark/40 hover:text-behance-dark transition-all"><i className="fab fa-github"></i></a>
                            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-behance-dark/40 hover:text-behance-dark transition-all"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </motion.div>

                </div>

                {/* Final modular block line */}
                <div className="w-full h-px bg-behance-dark/10 mt-16 group relative">
                    <div className="absolute top-0 left-0 w-20 h-px bg-behance-mustard"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
