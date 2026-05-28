"use client";

import { motion } from "framer-motion";
import { GitPullRequest, ExternalLink, CheckCircle2, Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const contributions = [
  {
    repo: "uber/NullAway",
    repoUrl: "https://github.com/uber/NullAway",
    prUrl: "https://github.com/uber/NullAway/pull/1546",
    status: "Merged",
    description: "Implemented error reporting when @Initializer annotation is incorrectly used on a constructor. Reviewed and merged by core maintainer Manu Sridharan.",
  },
  {
    repo: "zalando/logbook",
    repoUrl: "https://github.com/zalando/logbook",
    prUrl: "https://github.com/zalando/logbook/pull/2301",
    status: "Merged",
    description: "Implemented StatusCodeBasedSink and LevelBasedHttpLogWriter. Enables HTTP status-code-aware log levels (2xx/3xx at TRACE, 4xx at WARN, 5xx at ERROR). Merged by core maintainers kasmarian and lukasniemeier-zalando.",
  },
  {
    repo: "adyen/adyen-java-api-library",
    repoUrl: "https://github.com/Adyen/adyen-java-api-library",
    prUrl: "https://github.com/Adyen/adyen-java-api-library/pull/1952",
    status: "Merged",
    description: "Fixed unescaped regex dots in Service.createBaseURL — replaced replaceFirst() with String.replace() for literal URL matching.",
  },
  {
    repo: "debezium/debezium",
    repoUrl: "https://github.com/debezium/debezium",
    prUrl: "https://github.com/debezium/debezium/pull/7462",
    status: "Under Review",
    description: "Fix PostgreSQL connector slow startup with many custom types (DBZ-1683). Overall LGTM from core maintainer vjuranek.",
  },
  {
    repo: "SigNoz/examples",
    repoUrl: "https://github.com/SigNoz/examples",
    prUrl: "https://github.com/SigNoz/examples/pull/63",
    status: "Under Review",
    description: "Added two Spring Boot microservices with OpenTelemetry Java Agent auto-instrumentation. Distributed traces verified in SigNoz dashboard.",
  },
];

export function OpenSource() {
  return (
    <section id="opensource" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
              <span className="text-accent">01.</span> Open Source
            </h2>
            <div className="h-px bg-white/10 flex-grow max-w-xs" />
          </div>
          
          <p className="text-gray-400 mb-12 max-w-2xl text-lg">
            Contributing to large-scale, enterprise-grade open source projects is what I do best. Here are some of my most impactful contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-white/5 rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:border-accent/50 group relative overflow-hidden flex flex-col"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <GitPullRequest className="w-6 h-6" />
                </div>
                <div
                  className={cn(
                    "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border",
                    item.status === "Merged" 
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  )}
                >
                  {item.status === "Merged" ? (
                    <CheckCircle2 className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  {item.status}
                </div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-bold text-gray-200 hover:text-accent transition-colors mb-4 group/link"
                >
                  {item.repo}
                  <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </a>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                <a
                  href={item.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-5 pt-4 border-t border-white/5 text-accent font-mono text-sm hover:gap-3 transition-all group/pr"
                >
                  View PR
                  <ArrowUpRight className="w-4 h-4 group-hover/pr:translate-x-0.5 group-hover/pr:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
