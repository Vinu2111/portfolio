"use client";

import { motion } from "framer-motion";
import { BookOpen, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 max-w-2xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-accent font-mono mb-4">05. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        {/* Social Icon Links */}
        <div className="flex items-center justify-center gap-5 mb-10">
          <a
            href="https://github.com/Vinu2111"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,136,0.15)] transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/vinayakgote"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,136,0.15)] transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://vinayak6g.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,136,0.15)] transition-all"
            aria-label="Blog"
          >
            <BookOpen className="w-5 h-5" />
          </a>
          <a
            href="mailto:vinayakgote44@gmail.com"
            className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,136,0.15)] transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <a
          href="mailto:vinayakgote44@gmail.com"
          className="inline-block px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 transition-colors rounded-md font-mono text-lg"
        >
          Say Hello
        </a>
        
        <div className="pt-12 border-t border-white/5 mt-12 max-w-lg mx-auto">
          <p className="text-gray-400 mb-6 italic">
            &ldquo;I write about backend engineering, open source, and 6G technology.&rdquo;
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://vinayak6g.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_10px_rgba(0,255,136,0.1)] transition-all">
                <span className="font-bold text-lg font-mono">H</span>
              </div>
              <span className="font-mono text-sm">Hashnode</span>
            </a>
            <a
              href="https://dev.to/vinayakgote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_10px_rgba(0,255,136,0.1)] transition-all">
                <span className="font-bold text-lg font-mono">D</span>
              </div>
              <span className="font-mono text-sm">Dev.to</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
