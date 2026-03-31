import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Intersection Observer for Scroll-Spy
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of the viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections defined in NAV_LINKS plus the home section
        const sections = ['home', ...NAV_LINKS.map(link => link.id.replace('#', ''))];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                <a href="#" className="text-3xl font-serif font-bold tracking-tighter transition-colors text-brand-dark hover:text-brand-accent">
                    Mohit
                </a>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-brand-dark/70' : 'text-brand-cream/70'}`}>
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.id.replace('#', '');
                        return (
                            <a 
                                key={link.id} 
                                href={link.id} 
                                className={`transition-colors relative group ${isActive ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Trigger */}
                <div className="md:hidden">
                    <button
                        className={`text-2xl focus:outline-none p-2 transition-colors ${scrolled ? 'text-brand-dark' : 'text-brand-cream'}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <motion.i 
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          className={`fas ${isOpen ? 'fa-times' : 'fa-bars-staggered'}`}
                        ></motion.i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-brand-cream z-50 md:hidden flex flex-col items-center justify-center space-y-8 text-2xl font-serif p-10"
                    >
                        <button onClick={toggleMenu} className="absolute top-8 right-8 text-3xl font-sans">&times;</button>
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.id.replace('#', '');
                            return (
                                <a
                                    key={link.id}
                                    href={link.id}
                                    className={`transition-colors py-2 ${isActive ? 'text-brand-accent font-bold' : 'text-brand-dark hover:text-brand-accent'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

