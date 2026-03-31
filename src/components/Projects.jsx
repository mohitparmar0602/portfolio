import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative overflow-hidden bg-white/40 border border-brand-dark/5 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
  >
    {/* Image Container with Overlay */}
    <div className="relative aspect-video overflow-hidden bg-brand-dark/5">
      <img 
        src={project.image} 
        alt={project.title} 
        className={`w-full h-full ${index === 1 || index === 2 ? 'object-contain p-4' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`} 
      />
      <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-brand-green/0 transition-all duration-500"></div>
    </div>

    {/* Content */}
    <div className="p-8 relative">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-accent italic mb-1 block">
             #{project.tags[0]}
          </span>
          <h3 className="text-3xl font-serif text-brand-dark group-hover:text-brand-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all group/btn shadow-sm"
        >
          <i className="fas fa-arrow-up-right-from-square text-brand-dark/60 group-hover/btn:text-brand-dark"></i>
        </a>
      </div>

      <p className="text-brand-dark/60 text-sm leading-relaxed mb-6 font-medium">
        {project.desc}
      </p>

      {/* Tech Stacks */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 bg-brand-dark/5 text-brand-dark/60 rounded-full border border-brand-dark/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-brand-cream relative overflow-hidden text-brand-dark">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-brand-green/5 -mr-20 -skew-x-12"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-serif mb-4 leading-none text-brand-dark">
            Featured Projects
          </h2>
          <p className="text-brand-dark/60 max-w-lg mt-6 text-lg font-medium">A showcase of build-driven web experiences and innovative digital solutions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a 
            href="https://github.com/mohitparmar0602" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-10 py-5 bg-brand-dark text-white font-bold tracking-[0.2em] uppercase rounded-full hover:bg-brand-accent hover:text-brand-dark transition-all shadow-2xl group"
          >
            All Projects <i className="fab fa-github text-2xl group-hover:scale-110 transition-transform"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
