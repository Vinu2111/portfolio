"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BookOpen, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-mono mb-6"
          >
            Hi, my name is
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs md:text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Open to Java Backend roles · 10–20 LPA · Pune · Bangalore · Remote
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-mono text-white mb-6"
          >
            Vinayak Gote.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold font-mono text-gray-400 mb-8 h-20 md:h-24"
          >
            <TypeAnimation
              sequence={[
                "Java Backend Developer.",
                1000,
                "Open Source Contributor.",
                1000,
                "NVIDIA AI Aerial Member.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-highlight"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            I&apos;m a Java Backend Engineer at Wipro building enterprise-grade REST APIs for the VodafoneIdea telecom client. I built the first public visualization dashboard for NVIDIA Sionna and actively contribute to open source projects at Uber, Zalando, Adyen, and Debezium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/Vinu2111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card hover:bg-card-hover border border-white/10 rounded-md transition-all hover:border-accent group"
            >
              <FaGithub className="w-5 h-5 group-hover:text-accent transition-colors" />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/vinayakgote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card hover:bg-card-hover border border-white/10 rounded-md transition-all hover:border-accent group"
            >
              <FaLinkedin className="w-5 h-5 group-hover:text-accent transition-colors" />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a
              href="https://vinayak6g.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card hover:bg-card-hover border border-white/10 rounded-md transition-all hover:border-accent group"
            >
              <BookOpen className="w-5 h-5 group-hover:text-accent transition-colors" />
              <span className="font-mono text-sm">Blog</span>
            </a>
            <a
              href="mailto:vinayakgote44@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent hover:bg-accent/20 border border-accent/50 rounded-md transition-all"
            >
              <Mail className="w-5 h-5" />
              <span className="font-mono text-sm">Contact Me</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
