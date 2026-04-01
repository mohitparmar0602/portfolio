import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';

const CertificateCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-behance-dark/5 hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col justify-between"
  >
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-10">
        <div className="w-16 h-16 bg-behance-mustard/10 rounded-2xl flex items-center justify-center text-behance-mustard text-2xl group-hover:bg-behance-mustard group-hover:text-white transition-all duration-500">
           <i className="fas fa-award"></i>
        </div>
        <span className="text-[10px] font-accent font-bold tracking-[0.3em] text-behance-dark/20 uppercase">{cert.date}</span>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-serif text-behance-dark mb-4 leading-tight">
        {cert.title}
      </h3>
      <p className="text-behance-coral font-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-8">
        {cert.issuer}
      </p>
    </div>

    <div className="relative z-10 pt-4 border-t border-behance-dark/5">
      <a 
        href={cert.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 text-behance-dark font-accent font-bold tracking-[0.3em] uppercase text-[10px] hover:text-behance-coral transition-colors group/link"
      >
        Verify Credentials
        <i className="fas fa-external-link-alt text-[8px] group-hover/link:translate-y-[-2px] group-hover/link:translate-x-[2px] transition-transform"></i>
      </a>
    </div>

    {/* Decorative background element */}
    <div className="absolute -top-10 -right-10 text-[10rem] text-behance-dark/[0.02] pointer-events-none select-none -z-0">
       <i className="fas fa-medal"></i>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-behance-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <span className="text-behance-coral font-accent font-bold tracking-[0.5em] uppercase text-[10px] block">Recognition</span>
            <h2 className="text-5xl md:text-7xl font-serif text-behance-dark leading-[0.9] tracking-tight">Certifications</h2>
          </div>

        </div>

        <div className="space-y-16">
          {/* Certifications Section */}
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATES.certifications.map((cert, index) => (
                <CertificateCard key={`certification-${index}`} cert={cert} index={index} />
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <h3 className="text-2xl font-serif text-behance-coral mb-10 tracking-tight">Certificates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATES.certificates.map((cert, index) => (
                <CertificateCard key={`certificate-${index}`} cert={cert} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
