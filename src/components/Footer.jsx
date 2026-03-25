import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-[#060606] mt-10">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <a href="#" className="text-2xl font-black tracking-wider text-white">
                            MOHIT<span className="text-green-400">.DEV</span>
                        </a>
                        <p className="text-gray-500 text-sm mt-3 leading-relaxed">Full Stack Developer building scalable, production-ready web applications.</p>
                        <div className="flex gap-3 mt-5">
                            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110">
                                <i className="fab fa-github text-sm"></i>
                            </a>
                            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300 hover:scale-110">
                                <i className="fab fa-linkedin text-sm"></i>
                            </a>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-all duration-300 hover:scale-110">
                                <i className="fas fa-envelope text-sm"></i>
                            </a>
                        </div>
                    </div>



                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-500 text-sm flex items-center gap-2">
                                <i className="fas fa-envelope text-green-400 w-4"></i> {CONTACT_INFO.email}
                            </li>
                            <li className="text-gray-500 text-sm flex items-center gap-2">
                                <i className="fas fa-phone text-green-400 w-4"></i> {CONTACT_INFO.phone}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/5 py-5 text-center text-gray-600 text-xs">
                © 2026 <span className="text-green-400 font-semibold">Mohit Parmar</span>. All rights reserved. Built with React & Vite.
            </div>
        </footer>
    );
};

export default Footer;

