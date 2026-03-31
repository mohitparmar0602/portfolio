import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll-spy logic
            const sections = NAV_LINKS.map(link => link.id.replace("#", ""));
            const currentSection = [...sections].reverse().find(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150;
                }
                return false;
            });
            if (currentSection) setActiveSection(`#${currentSection}`);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial call to set active section
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-behance-cream/90 backdrop-blur-xl border-b border-behance-dark/5 py-4" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-3xl font-serif text-behance-dark hover:text-behance-coral transition-colors">
                    Mohit
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.id}
                            className={`text-[11px] font-accent font-bold tracking-[0.3em] uppercase transition-all duration-300 ${
                                activeSection === link.id ? "text-behance-coral" : "text-behance-dark hover:text-behance-coral"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-2xl text-behance-dark"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className={`fas ${isOpen ? "fa-times" : "fa-bars-staggered"}`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 bg-behance-cream z-50 flex flex-col items-center justify-center gap-8"
                    >
                        <button 
                            className="absolute top-8 right-8 text-4xl text-behance-dark"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={link.id}
                                onClick={() => setIsOpen(false)}
                                className={`text-4xl font-serif transition-colors ${
                                    activeSection === link.id ? "text-behance-coral" : "text-behance-dark hover:text-behance-coral"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
