import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-center mb-32 md:mb-48 group`}
    >
      {/* Image Block with Large Index */}
      <div className="lg:w-1/2 relative">
        <div className="relative aspect-[16/10] bg-behance-sage rounded-[3rem] shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
           />
           {/* Subtle overlay */}
           <div className="absolute inset-0 bg-behance-dark/5 group-hover:bg-transparent transition-all pointer-events-none"></div>
        </div>

        {/* Huge Floating Index in Serif */}
        <div className={`absolute -top-16 ${isEven ? "-left-10" : "-right-10"} text-[15rem] font-serif leading-none text-behance-dark/[0.03] pointer-events-none select-none z-0`}>
           0{index + 1}
        </div>
      </div>

      {/* Content Block */}
      <div className="lg:w-1/2 space-y-10 z-10">
        <div className="space-y-6">
          <span className="text-behance-coral font-accent font-bold tracking-[0.5em] uppercase text-[10px] block">
            {project.tags[0]}
          </span>
          <h3 className="text-5xl md:text-7xl font-serif text-behance-dark tracking-tight leading-[0.9]">
            {project.title}
          </h3>
          <p className="text-behance-dark/70 text-lg md:text-xl font-accent leading-relaxed max-w-xl">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3">
          {project.tags.slice(1).map((tag, i) => (
            <span 
              key={i} 
              className="px-6 py-2 bg-behance-dark text-behance-cream text-[10px] font-accent font-bold tracking-[0.2em] rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Case Study Link Styled as a Search Bar button */}
        <div className="pt-6">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-6 px-10 py-5 bg-behance-coral text-white rounded-full text-sm font-accent font-bold tracking-[0.3em] shadow-xl hover:bg-behance-dark transition-all active:scale-95 group/btn uppercase"
          >
            {project.title === 'Lost & Found Tracker' ? 'View Repo' : 'View Demo'}
            <i className="fas fa-arrow-right group-hover/btn:translate-x-2 transition-transform"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-behance-cream relative overflow-hidden">
      {/* Background Decorative Outline */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center -z-0">
         <span className="text-[40vw] font-serif font-outline tracking-tighter">WORKS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-40"
        >
          <span className="text-behance-coral font-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Portfolio</span>
          <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] font-serif text-behance-dark mb-8 leading-[0.85] tracking-tight">Featured <br /> Projects</h2>
          <div className="w-24 h-2 bg-behance-mustard rounded-full"></div>
        </motion.div>

        {/* Projects List with Zig-Zag Logic */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-col items-center gap-8"
        >
          <p className="text-behance-dark/50 font-accent font-bold tracking-[0.3em] uppercase text-xs">Looking for more?</p>
          <a 
            href="https://github.com/mohitparmar0602" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-6 px-12 py-6 bg-behance-teal text-white font-accent font-bold tracking-[0.3em] uppercase rounded-full shadow-2xl hover:bg-behance-dark transition-all group"
          >
            GitHub Archive <i className="fab fa-github text-3xl group-hover:scale-125 transition-transform"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
