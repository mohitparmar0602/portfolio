import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const ContactButton = ({ href, label, icon, color = "bg-behance-coral", isBrand = false }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="relative group w-full"
  >
    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none z-10 text-white/40 text-lg group-hover:text-white transition-colors">
       <i className={`fa${isBrand ? 'b' : 's'} ${icon}`}></i>
    </div>
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full ${color} text-white py-4 md:py-6 pl-16 pr-8 rounded-full text-[10px] md:text-sm font-accent font-bold tracking-[0.2em] shadow-xl transition-all uppercase text-ellipsis overflow-hidden whitespace-nowrap hover:bg-behance-dark`}
    >
      {label}
    </a>
  </motion.div>
);

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
                setTimeout(() => setStatus("IDLE"), 5000);
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-behance-cream relative overflow-hidden">
            {/* Background Decorative Outline */}
            <div className="absolute top-1/2 left-0 w-full text-center text-[25vw] font-serif text-behance-dark/[0.02] pointer-events-none select-none -z-0">
                TOUCH
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Side: Bold Text & Quick Links */}
                    <motion.div
                       initial={{ opacity: 0, x: -50 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 1 }}
                       className="space-y-10"
                    >
                        <div className="space-y-6 text-center lg:text-left">
                            <span className="text-behance-coral font-accent font-bold tracking-[0.5em] uppercase text-[10px] block">Collaborate</span>
                            <h2 className="text-6xl md:text-[7rem] font-serif text-behance-dark leading-[0.8] tracking-tighter">
                                Let's <br /> Connect
                            </h2>
                        </div>
                        
                        <div className="space-y-4 max-w-md">
                            <ContactButton 
                                href={`mailto:${CONTACT_INFO.email}`} 
                                label={CONTACT_INFO.email} 
                                icon="fa-envelope" 
                                color="bg-behance-coral"
                            />
                            <ContactButton 
                                href={`tel:${CONTACT_INFO.phone}`} 
                                label={CONTACT_INFO.phone} 
                                icon="fa-phone" 
                                color="bg-behance-mustard"
                            />
                            <ContactButton 
                                href={CONTACT_INFO.linkedin} 
                                label="LinkedIn / Mohit Parmar" 
                                icon="fa-linkedin-in" 
                                color="bg-behance-teal"
                                isBrand={true}
                            />
                            <ContactButton 
                                href={CONTACT_INFO.github} 
                                label="GitHub / @mohitparmar0602" 
                                icon="fa-github" 
                                color="bg-behance-sage"
                                isBrand={true}
                            />
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="bg-behance-dark p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
                    >
                         <div className="relative z-10 space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-serif text-behance-mustard">Send a Message</h3>
                                <p className="text-behance-cream/60 font-accent text-sm">Have a specific inquiry? Fill out the form below.</p>
                            </div>

                            <form 
                                onSubmit={handleSubmit}
                                className="space-y-10"
                            >
                                <div className="space-y-2">
                                    <label className="text-[10px] font-accent font-bold tracking-[0.3em] uppercase text-white/30 ml-4">Name</label>
                                    <input type="text" name="name" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-white focus:outline-none focus:border-behance-mustard transition-colors placeholder:text-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-accent font-bold tracking-[0.3em] uppercase text-white/30 ml-4">Email</label>
                                    <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-white focus:outline-none focus:border-behance-mustard transition-colors placeholder:text-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-accent font-bold tracking-[0.3em] uppercase text-white/30 ml-4">Message</label>
                                    <textarea name="message" required placeholder="Tell me about your project..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-5 px-8 text-white focus:outline-none focus:border-behance-mustard transition-colors placeholder:text-white/10 resize-none"></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={status === "SENDING" || status === "SUCCESS"}
                                    className={`w-full py-6 font-accent font-bold tracking-[0.4em] uppercase rounded-full transition-all shadow-xl transform active:scale-95 ${
                                        status === "SUCCESS" 
                                        ? "bg-green-500 text-white" 
                                        : status === "ERROR"
                                        ? "bg-red-500 text-white"
                                        : "bg-behance-mustard text-behance-dark hover:bg-white"
                                    }`}
                                >
                                    {status === "IDLE" && "Dispatch Message"}
                                    {status === "SENDING" && "Sending..."}
                                    {status === "SUCCESS" && "Sent Successfully"}
                                    {status === "ERROR" && "Dispatch Failed"}
                                </button>
                            </form>
                         </div>

                         {/* Decorative Background Icon */}
                         <div className="absolute -bottom-20 -right-20 text-[20rem] text-white/[0.02] pointer-events-none select-none z-0">
                            <i className="fas fa-paper-plane"></i>
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
