import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';

const CertificateItem = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="group bg-white/40 border border-brand-dark/5 p-8 rounded-sm hover:shadow-xl transition-all duration-500"
  >
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="space-y-2">
        <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent italic">
          {cert.date}
        </span>
        <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-accent transition-colors">
          {cert.title}
        </h3>
        <p className="text-brand-dark/60 text-sm max-w-xl font-medium">
          {cert.desc}
        </p>
      </div>
      
      <a 
        href={cert.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-brand-dark text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-brand-accent hover:text-brand-dark transition-all shadow-md group-hover:scale-105"
      >
        Credential <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-serif mb-4 leading-none text-brand-dark">
            Certifications
          </h2>
          <p className="text-brand-dark/60 max-w-lg mt-6 text-lg font-medium">Verified credentials from online learning platforms.</p>
        </motion.div>

        <div className="space-y-6">
          {CERTIFICATES.map((cert, index) => (
            <CertificateItem key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
