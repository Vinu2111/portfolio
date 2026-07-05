"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
          {/* Project Live Preview */}
          <div className="lg:col-span-7 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group border border-white/10 hover:border-accent/50 transition-colors shadow-2xl shadow-accent/5">
            {/* "Live Preview" label */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-[#161616] border-b border-white/5 px-4 py-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs font-mono text-gray-500">Live Preview</span>
              <span className="ml-auto text-xs font-mono text-accent/70">sionna-visualizer.vercel.app</span>
            </div>

            {/* iframe */}
            <div className="absolute inset-0 pt-[36px]">
              <iframe
                src="https://sionna-visualizer.vercel.app"
                title="Sionna Visualizer Live Preview"
                className="w-full h-full border-0 pointer-events-none"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>

            {/* Fallback overlay — visible if iframe fails to load or on hover for aesthetic */}
            <div className="absolute inset-0 pt-[36px] bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <a
                href="https://sionna-visualizer.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/90 text-black font-mono text-sm font-bold rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open Full Site
              </a>
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

        {/* Picnic Store Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-24"
        >
          {/* Project Preview */}
          <div className="lg:col-span-7 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group border border-white/10 hover:border-accent/50 transition-colors shadow-2xl shadow-accent/5 lg:order-2">
            {/* mock header */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-[#161616] border-b border-white/5 px-4 py-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs font-mono text-gray-500">Store Layout Engine</span>
              <span className="ml-auto text-xs font-mono text-accent/70">github.com/Vinu2111/picnic-store-intelligence</span>
            </div>

            {/* Mock UI layout representation */}
            <div className="absolute inset-0 pt-[36px] bg-[#0c0c0c] flex flex-col p-6 justify-center">
              <div className="border border-white/10 rounded-lg p-4 bg-[#111] max-w-md mx-auto w-full">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                  <span className="font-mono text-xs text-gray-400">Server-Driven Layout Engine</span>
                  <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded font-mono">Ranked</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-accent/5 border border-accent/20 rounded p-2.5 flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">1. Featured Offers</span>
                    <span className="text-[10px] text-gray-500 font-mono">Score: 0.98</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded p-2.5 flex items-center justify-between">
                    <span className="font-mono text-xs text-gray-300">2. Weekly Staples</span>
                    <span className="text-[10px] text-gray-500 font-mono">Score: 0.85</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded p-2.5 flex items-center justify-between">
                    <span className="font-mono text-xs text-gray-300">3. Recipes for You</span>
                    <span className="text-[10px] text-gray-500 font-mono">Score: 0.72</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-mono text-gray-600">&ldquo;API Response defines layout dynamically per-customer&rdquo;</span>
                </div>
              </div>
            </div>

            {/* Fallback overlay */}
            <div className="absolute inset-0 pt-[36px] bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <a
                href="https://github.com/Vinu2111/picnic-store-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/90 text-black font-mono text-sm font-bold rounded-md hover:bg-accent transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                View Repository
              </a>
            </div>
          </div>

          {/* Project Content */}
          <div className="lg:col-span-5 relative z-20 flex flex-col items-start lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 hover:text-accent transition-colors">
              <a href="https://github.com/Vinu2111/picnic-store-intelligence" target="_blank" rel="noopener noreferrer">
                Picnic Store Intelligence
              </a>
            </h3>
            
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-2xl border border-white/5 mb-6 text-left w-full lg:-mr-12 lg:hover:border-accent/30 transition-colors">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                A live full-stack architectural prototype demonstrating server-driven layout control and per-customer section ranking for e-commerce storefronts. The backend exposes REST endpoints that let the server decide storefront section order per customer rather than hardcoding layout on the client. Deployed on Railway (backend) and Vercel (frontend).
              </p>
            </div>

            <ul className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-8">
              <li>Java 21</li>
              <li>Spring Boot 3.2</li>
              <li>PostgreSQL</li>
              <li>Supabase</li>
              <li>Railway</li>
              <li>Vercel</li>
            </ul>

            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Vinu2111/picnic-store-intelligence" 
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
