"use client";

import { motion } from "framer-motion";
import { Award, BookOpenCheck } from "lucide-react";

const skillsCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "SQL", "Shell/Bash"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "Hibernate", "FastAPI", "Angular 17"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS EC2", "S3", "RDS", "Git", "Maven", "Docker", "Postman", "IntelliJ", "VS Code"],
  },
  {
    title: "Networking",
    skills: ["TCP/IP", "IP routing", "Linux diagnostics"],
  },
  {
    title: "6G / AI",
    skills: ["NVIDIA Sionna SDK", "NVIDIA AI Aerial", "6G Developer Program"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
            <span className="text-accent">04.</span> Skills & Tech
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {skillsCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-white/5 p-6 rounded-xl hover:border-accent/30 transition-colors"
          >
            <h3 className="text-xl font-mono text-gray-200 mb-6 flex items-center gap-2">
              <span className="text-accent">▹</span> {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-background border border-white/10 rounded-md text-sm font-mono text-gray-300 hover:text-accent hover:border-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-mono text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-accent" /> Certifications
          </h3>
          <div className="space-y-4">
            <div className="bg-card border border-white/10 p-5 rounded-xl hover:border-accent/40 transition-colors">
              <p className="text-white font-bold text-lg">AWS Certified Cloud Practitioner</p>
              <p className="text-sm font-mono text-gray-400 mt-1">Issued by Amazon Web Services, Jan 2026</p>
            </div>
            <div className="bg-card border border-white/10 p-5 rounded-xl hover:border-accent/40 transition-colors">
              <p className="text-white font-bold text-lg">Spring Boot Development</p>
              <p className="text-sm font-mono text-gray-400 mt-1">Issued by Scaler Academy</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-mono text-white mb-6 flex items-center gap-2">
            <BookOpenCheck className="w-6 h-6 text-accent" /> Education
          </h3>
          <div className="bg-card border border-white/10 p-8 rounded-xl h-[calc(100%-4rem)] hover:border-accent/30 transition-colors flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px]" />
            <h4 className="text-accent font-bold text-xl mb-2">B.E. Computer Engineering</h4>
            <p className="text-gray-300 mb-6 text-lg">Savitribai Phule Pune University</p>
            <div className="flex flex-col gap-4">
              <div className="bg-background/80 border border-accent/20 p-4 rounded-lg flex items-center justify-between">
                <span className="text-gray-400 font-mono text-sm">CGPA</span>
                <span className="text-accent font-bold text-2xl font-mono">8.56</span>
              </div>
              <div className="bg-background/80 border border-cyan-highlight/20 p-4 rounded-lg flex items-center justify-between">
                <span className="text-gray-400 font-mono text-sm">Batch Rank</span>
                <span className="text-cyan-highlight font-bold text-2xl font-mono">2nd</span>
              </div>
            </div>
            <p className="text-sm font-mono text-gray-500 mt-6 pt-4 border-t border-white/5">Class of 2020 – 2024</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
