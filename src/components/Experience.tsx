"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Java Developer",
    company: "Wipro",
    companyUrl: null,
    client: "VodafoneIdea",
    location: "Pune, India",
    date: "Oct 2025 – Present",
    description: [
      "Building and maintaining REST APIs using Java 17 and Spring Boot 3 for live telecom operations.",
      "Writing and tuning SQL queries on MySQL and PostgreSQL for high performance.",
      "Engaged in full software development lifecycle including debugging, code reviews, Postman testing, and CI/CD workflows.",
    ],
    tech: ["Java 17", "Spring Boot 3", "MySQL", "PostgreSQL", "Git", "Postman"],
    isLearning: false,
  },
  {
    role: "Java Full Stack Development",
    company: "AccioJob",
    companyUrl: "https://acciojob.com",
    client: "Self-Directed Upskilling",
    location: "Remote",
    date: "Apr 2025 – Oct 2025",
    description: [
      "Completed intensive Java Full Stack Developer course covering Core Java, Spring Boot, DSA, and System Design.",
      "Used this period to deepen backend engineering fundamentals and prepare for product company interviews.",
      "Actively built projects and started open source contribution journey.",
    ],
    tech: ["Core Java", "Spring Boot", "DSA", "System Design"],
    isLearning: true,
  },
  {
    role: "Technical Network Engineer",
    company: "Tech Mahindra",
    companyUrl: null,
    client: "Openreach UK",
    location: "Remote/Onsite",
    date: "Jun 2024 – Apr 2025",
    description: [
      "Handled fiber network faults and IP connectivity issues on Openreach\u0027s production network.",
      "Monitored overall network health using Grafana.",
      "Managed incident workflows efficiently through SingleInterface (Openreach NOC platform).",
    ],
    tech: ["Grafana", "IP Routing", "TCP/IP", "Linux Diagnostics"],
    isLearning: false,
  },
  {
    role: "Software Developer Intern",
    company: "Numetry Technologies",
    companyUrl: null,
    location: "Remote",
    date: "Jan 2024 – Jun 2024",
    description: [
      "Built and tested robust REST APIs in Java Spring Boot.",
      "Debugged and optimized complex SQL queries, resulting in a reduction of response time by ~30%.",
      "Created Postman collections for streamlined integration testing.",
    ],
    tech: ["Java", "Spring Boot", "SQL", "Postman"],
    isLearning: false,
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
            <span className="text-accent">03.</span> Experience
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs" />
        </div>
      </motion.div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/20 before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full border-2 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110",
              exp.isLearning ? "border-cyan-highlight" : "border-accent"
            )}>
              <div className={cn(
                "w-3 h-3 rounded-full transition-colors",
                exp.isLearning ? "bg-cyan-highlight group-hover:bg-cyan-highlight/70" : "bg-accent group-hover:bg-cyan-highlight"
              )} />
            </div>

            {/* Content Card */}
            <div className={cn(
              "w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-card border p-6 rounded-xl shadow transition-colors",
              exp.isLearning ? "border-white/5 hover:border-cyan-highlight/30" : "border-white/5 hover:border-accent/30"
            )}>
              <div className="flex flex-col mb-4">
                <h3 className="text-xl font-bold text-gray-200">
                  {exp.role}{" "}
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1 hover:underline underline-offset-4 transition-colors",
                        exp.isLearning ? "text-cyan-highlight" : "text-accent"
                      )}
                    >
                      @ {exp.company}
                      <ExternalLink className="w-3 h-3 inline-block opacity-60" />
                    </a>
                  ) : (
                    <span className={cn(exp.isLearning ? "text-cyan-highlight" : "text-accent")}>@ {exp.company}</span>
                  )}
                </h3>
                {exp.client && (
                  <p className="text-sm text-gray-400 font-mono mt-1">{exp.isLearning ? "Type" : "Client"}: {exp.client}</p>
                )}
                <span className="text-xs font-mono text-gray-500 mt-2">{exp.date}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-400 text-sm flex gap-2">
                    <span className={cn("mt-1", exp.isLearning ? "text-cyan-highlight" : "text-accent")}>▹</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {exp.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 rounded text-cyan-highlight bg-cyan-highlight/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
