import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 max-w-4xl mx-auto px-6 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h3 className="text-lg font-bold text-green-400 tracking-widest uppercase mb-4">Who I Am</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Building Solutions with Code & Creativity</h2>
                <div className="glass-card p-8 rounded-2xl border-t border-white/10">
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                        I am a passionate <strong>Full Stack Developer</strong> currently pursuing my B.Tech in Computer Science.
                        My expertise lies in backend systems, database design, and creating clean, responsive UIs.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Beyond coding, I pride myself on my <strong>soft skills</strong>: adaptability, problem-solving, and being a strong team player.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
