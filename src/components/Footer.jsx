import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 bg-brand-dark text-white relative">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="text-4xl lg:text-6xl font-serif text-brand-accent mb-8 italic">
                   Mohit Parmar
                </div>
                
                <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-12">
                   <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
                   <a href="#projects" className="hover:text-brand-accent transition-colors">Projects</a>
                   <a href="#skills" className="hover:text-brand-accent transition-colors">Skills</a>
                   <a href="#education" className="hover:text-brand-accent transition-colors">Education</a>
                   <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
                </div>

                <p className="text-[10px] font-bold tracking-widest uppercase opacity-20">
                    &copy; 2026 Mohit Parmar . Portfolio Inspired by <a href="https://www.behance.net/gallery/168450357/Portfolio-CV-Graphic-Design-Digital-Marketing" target="_blank" rel="noopener noreferrer" className="italic hover:text-brand-accent transition-colors underline underline-offset-4">Han Nguyen</a>
                </p>
                
                <div className="mt-10 flex justify-center gap-6 text-xl text-white/30">
                    <a href="https://github.com/mohitparmar0602" className="hover:text-brand-accent transition-colors"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/mohitparmar0602" className="hover:text-brand-accent transition-colors"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
