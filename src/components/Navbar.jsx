import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    return (
        <nav className="fixed top-0 w-full glass z-40 border-b border-white/5">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <a href="#" className="text-2xl font-bold tracking-wider text-white">
                    MOHIT<span className="text-green-400">.DEV</span>
                </a>

                <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide uppercase">
                    {NAV_LINKS.map((link) => (
                        <a key={link.id} href={link.id} className="hover:text-green-400 transition text-gray-300">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button
                        className="text-green-400 text-xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="md:hidden glass border-t border-white/5 absolute w-full"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-semibold uppercase">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.id}
                                    className="text-gray-300 hover:text-green-400 transition block py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
