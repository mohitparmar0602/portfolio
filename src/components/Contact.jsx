import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
    const [status, setStatus] = useState("IDLE"); // IDLE, SENDING, SUCCESS, ERROR

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("SENDING");

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(CONTACT_INFO.formspree, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
                // Reset status back to IDLE after a few seconds
                setTimeout(() => setStatus("IDLE"), 5000);
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <section id="contact" className="py-24 bg-brand-cream relative overflow-hidden text-brand-dark">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left: Contact Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-tight text-brand-dark">
                            Get in <br/> touch !
                        </h2>
                        <p className="text-brand-dark/60 text-lg md:text-xl leading-relaxed max-w-md mb-12 font-medium">
                            I am currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">Email</div>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-medium hover:text-brand-accent transition-colors">{CONTACT_INFO.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">Phone</div>
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-medium hover:text-brand-accent transition-colors">{CONTACT_INFO.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                                    <i className="fab fa-github"></i>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">GitHub</div>
                                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-brand-accent transition-colors">mohitparmar0602</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">LinkedIn</div>
                                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-brand-accent transition-colors">mohitparmar0602</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-dark p-12 rounded-sm shadow-2xl relative"
                    >
                         
                          <form 
                            onSubmit={handleSubmit}
                            className="space-y-8"
                          >
                             <div className="relative border-b border-white/10 group">
                                 <input type="text" name="name" required placeholder="Your Name" className="w-full bg-transparent py-4 text-white placeholder-white/20 focus:outline-none focus:border-brand-accent transition-colors" />
                             </div>
                             <div className="relative border-b border-white/10 group">
                                 <input type="email" name="email" required placeholder="Your Email" className="w-full bg-transparent py-4 text-white placeholder-white/20 focus:outline-none focus:border-brand-accent transition-colors" />
                             </div>
                             <div className="relative border-b border-white/10 group">
                                 <textarea name="message" required placeholder="Message" rows="4" className="w-full bg-transparent py-4 text-white placeholder-white/20 focus:outline-none focus:border-brand-accent transition-colors resize-none"></textarea>
                             </div>
                             
                             <button 
                                type="submit" 
                                disabled={status === "SENDING" || status === "SUCCESS"}
                                className={`w-full py-4 font-bold tracking-widest uppercase rounded-full transition-all shadow-xl transform active:scale-95 ${
                                    status === "SUCCESS" 
                                    ? "bg-green-500 text-white cursor-default" 
                                    : status === "ERROR"
                                    ? "bg-red-500 text-white"
                                    : "bg-brand-accent text-brand-dark hover:bg-white"
                                }`}
                             >
                                {status === "IDLE" && "Send Message"}
                                {status === "SENDING" && "Sending..."}
                                {status === "SUCCESS" && "Message Sent"}
                                {status === "ERROR" && "Error Sending!"}
                             </button>
                          </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
