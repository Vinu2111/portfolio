"use client";

import { motion } from "framer-motion";
import { ExternalLink, MonitorPlay } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
              <span className="text-accent">02.</span> Projects
            </h2>
            <div className="h-px bg-white/10 flex-grow max-w-xs" />
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Project Image placeholder / Decoration */}
          <div className="lg:col-span-7 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#121212] border border-white/10 rounded-xl flex items-center justify-center p-8 group-hover:border-accent/50 transition-colors">
               <div className="text-center">
                  <MonitorPlay className="w-20 h-20 text-accent/50 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:text-accent" />
                  <p className="font-mono text-gray-500 text-sm">Dashboard Visualization Mockup</p>
               </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="lg:col-span-5 lg:text-right relative z-20 flex flex-col items-start lg:items-end">
            <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 hover:text-accent transition-colors">
              <a href="https://sionna-visualizer.vercel.app" target="_blank" rel="noopener noreferrer">
                Sionna Visualizer
              </a>
            </h3>
            
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-2xl border border-white/5 mb-6 text-left w-full lg:-ml-12 hover:border-accent/30 transition-colors">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                The first public visualization dashboard for <span className="text-accent">NVIDIA Sionna</span>. 
                With over 200,000+ downloads and referenced in 540+ research papers, it is actively used by researchers from Nokia, Ericsson, and Samsung. Recognized directly by Merlin Nimier-David (NVIDIA Sionna core maintainer).
              </p>
            </div>

            <ul className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-8 lg:justify-end">
              <li>Angular 17</li>
              <li>Spring Boot 3</li>
              <li>Python FastAPI</li>
              <li>PostgreSQL</li>
              <li>JWT</li>
              <li>Resilience4j</li>
            </ul>

            <div className="flex items-center gap-4">
              <a 
                href="https://sionna-visualizer.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent border border-accent/30 rounded-md font-mono text-sm hover:bg-accent/20 hover:border-accent/60 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a 
                href="https://github.com/Vinu2111/sionna-visualizer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card text-gray-300 border border-white/10 rounded-md font-mono text-sm hover:text-accent hover:border-accent/50 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
