import React from 'react';
import { CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="py-20 max-w-4xl mx-auto px-6">

            <div id="education" className="mb-24 scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Education</span>
                    </h3>
                </motion.div>

                <div className="relative max-w-4xl mx-auto px-4 md:px-0">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-green-500/50 via-green-500/10 to-transparent -translate-x-1/2 rounded-full hidden sm:block"></div>

                    <div className="flex flex-col gap-12 md:gap-8">
                        {/* Item 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative flex flex-col md:flex-row md:justify-between items-center w-full group"
                        >
                            {/* Dot */}
                            <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-[5px] border-[#080808] z-10 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300 hidden sm:block"></div>
                            
                            {/* Content Left */}
                            <div className="hidden md:block w-5/12 text-right pr-14">
                                <p className="text-green-400 font-bold text-3xl font-mono tracking-tight drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">CGPA: 6.55</p>
                                <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-bold">2023 - Present</p>
                            </div>
                            
                            {/* Content Right */}
                            <div className="w-full sm:pl-20 md:pl-14 md:w-5/12">
                                <div className="glass-card p-8 rounded-2xl border border-white/5 group-hover:border-green-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,197,94,0.15)] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <h4 className="text-2xl font-bold text-white mb-3 flex items-start sm:items-center gap-4 flex-col sm:flex-row">
                                        <i className="fas fa-university text-green-400 bg-green-400/10 w-12 h-12 flex items-center justify-center rounded-xl shrink-0"></i>
                                        Lovely Professional University
                                    </h4>
                                    <p className="text-gray-400/90 text-base font-medium">Bachelor of Technology - Computer Science</p>
                                    
                                    {/* Mobile Meta */}
                                    <div className="md:hidden mt-6 pt-5 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-green-400 font-bold font-mono text-xl">CGPA: 6.55</span>
                                        <span className="text-gray-500 text-xs uppercase font-bold text-right ml-2">2023 - Present</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Item 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative flex flex-col md:flex-row-reverse md:justify-between items-center w-full group"
                        >
                            {/* Dot */}
                            <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-600 group-hover:bg-green-400 rounded-full border-4 border-[#080808] z-10 transition-colors duration-300 hidden sm:block"></div>
                            
                            {/* Content Right */}
                            <div className="hidden md:block w-5/12 text-left pl-14">
                                <p className="text-gray-300 group-hover:text-green-400 font-bold text-3xl font-mono tracking-tight transition-colors">78%</p>
                                <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-bold">Apr' 21 - Mar' 22</p>
                            </div>
                            
                            {/* Content Left */}
                            <div className="w-full sm:pl-20 md:pl-0 md:pr-14 md:w-5/12">
                                <div className="glass-card p-8 rounded-2xl border border-white/5 group-hover:border-white/20 hover:border-green-400/20 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                                    <h4 className="text-2xl font-bold text-white mb-3 flex items-start sm:items-center gap-4 flex-col sm:flex-row lg:flex-row-reverse lg:text-right">
                                        <i className="fas fa-school text-gray-500 group-hover:text-green-400 transition-colors bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl shrink-0"></i>
                                        <span className="flex-1">Vaish Sr. Sec. School</span>
                                    </h4>
                                    <p className="text-gray-400/90 text-base font-medium lg:text-right">Intermediate (PCM)</p>
                                    
                                    {/* Mobile Meta */}
                                    <div className="md:hidden mt-6 pt-5 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-gray-300 font-bold font-mono text-xl group-hover:text-green-400 transition-colors">78%</span>
                                        <span className="text-gray-500 text-xs uppercase font-bold text-right ml-2">Apr' 21 - Mar' 22</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Item 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative flex flex-col md:flex-row md:justify-between items-center w-full group"
                        >
                            {/* Dot */}
                            <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-600 group-hover:bg-green-400 rounded-full border-4 border-[#080808] z-10 transition-colors duration-300 hidden sm:block"></div>
                            
                            {/* Content Left */}
                            <div className="hidden md:block w-5/12 text-right pr-14">
                                <p className="text-gray-300 group-hover:text-green-400 font-bold text-3xl font-mono tracking-tight transition-colors">87.4%</p>
                                <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-bold">Apr' 19 - Mar' 20</p>
                            </div>
                            
                            {/* Content Right */}
                            <div className="w-full sm:pl-20 md:pl-14 md:w-5/12">
                                <div className="glass-card p-8 rounded-2xl border border-white/5 group-hover:border-white/20 hover:border-green-400/20 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                                    <h4 className="text-2xl font-bold text-white mb-3 flex items-start sm:items-center gap-4 flex-col sm:flex-row">
                                        <i className="fas fa-book text-gray-500 group-hover:text-green-400 transition-colors bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl shrink-0"></i>
                                        <span className="flex-1">Vaish Sr. Sec. School</span>
                                    </h4>
                                    <p className="text-gray-400/90 text-base font-medium">Matriculation</p>
                                    
                                    {/* Mobile Meta */}
                                    <div className="md:hidden mt-6 pt-5 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-gray-300 font-bold font-mono text-xl group-hover:text-green-400 transition-colors">87.4%</span>
                                        <span className="text-gray-500 text-xs uppercase font-bold text-right ml-2">Apr' 19 - Mar' 20</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id="contact" className="scroll-mt-24 mb-10">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h3>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-10 rounded-2xl border border-green-400/20 lg:w-1/2 flex flex-col justify-center"
                    >
                        <p className="text-gray-300 mb-8 sm:text-lg leading-relaxed">
                            I am currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition text-white border border-white/5 hover:border-green-400/30 group">
                                <span className="bg-green-500/20 p-3 rounded-full text-green-400 group-hover:scale-110 transition-transform"><i className="fas fa-envelope"></i></span> 
                                <span className="break-all">{CONTACT_INFO.email}</span>
                            </a>
                            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition text-white border border-white/5 hover:border-green-400/30 group">
                                <span className="bg-green-500/20 p-3 rounded-full text-green-400 group-hover:scale-110 transition-transform"><i className="fas fa-phone"></i></span> 
                                <span>{CONTACT_INFO.phone}</span>
                            </a>
                        </div>

                        <div className="flex gap-4 text-xl">
                            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all hover:scale-105"><i className="fab fa-github"></i></a>
                            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full text-gray-400 hover:text-blue-500 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all hover:scale-105"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-10 rounded-2xl border border-green-400/20 lg:w-1/2"
                    >
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const name = e.target.name.value;
                            const email = e.target.email.value;
                            const message = e.target.message.value;
                            window.location.href = `mailto:${CONTACT_INFO.email}?subject=Message from ${name}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
                        }} className="flex flex-col gap-5">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 text-sm font-semibold mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:bg-white/10 focus:outline-none focus:border-green-400 transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 text-sm font-semibold mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:bg-white/10 focus:outline-none focus:border-green-400 transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-400 text-sm font-semibold mb-2">Your Message</label>
                                <textarea id="message" name="message" rows="4" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:bg-white/10 focus:outline-none focus:border-green-400 transition-all resize-none" placeholder="Hello Mohit, I'd like to talk about..."></textarea>
                            </div>
                            <button type="submit" className="mt-2 w-full py-3 px-6 bg-green-500 hover:bg-green-400 text-black font-bold tracking-wide rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] flex justify-center items-center gap-2">
                                Send Message <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
