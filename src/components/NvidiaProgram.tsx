"use client";

import { motion } from "framer-motion";
import { Award, Cpu, ShieldCheck, Zap } from "lucide-react";

export function NvidiaProgram() {
  return (
    <section id="nvidia" className="py-24 relative overflow-hidden">
      {/* Background Animated Gradient / Waves for 6G feel */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#76b900] rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-highlight/50 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Trophy Badge Container */}
          <div className="relative p-[1px] rounded-2xl overflow-hidden group">
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#76b900] to-transparent group-hover:via-[#76b900]/80 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out" />
            
            <div className="bg-[#0a0a0a] border border-[#76b900]/30 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(118,185,0,0.1)]">
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(118,185,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(118,185,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                {/* Badge Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-[#76b900] blur-xl opacity-30 rounded-full" />
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#111] to-[#0a0a0a] border-2 border-[#76b900] rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(118,185,0,0.2)]">
                    <Award className="w-12 h-12 md:w-16 md:h-16 text-[#76b900]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#76b900]/10 border border-[#76b900]/20 text-[#76b900] font-mono text-sm font-bold mb-4">
                    <ShieldCheck className="w-4 h-4" />
                    ACTIVE MEMBER SINCE MARCH 2026
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    NVIDIA AI Aerial / 6G <br className="hidden md:block" />
                    Developer Program
                  </h2>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                    One of the select developers globally chosen for this prestigious program, granted 5-year NGC (NVIDIA GPU Cloud) access to build the future of telecom.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#111]/50 border border-white/5 rounded-xl p-4 flex items-start gap-4">
                      <Cpu className="w-6 h-6 text-[#76b900] mt-1 shrink-0" />
                      <div>
                        <h4 className="text-white font-bold mb-1">NVIDIA Sionna Core</h4>
                        <p className="text-gray-400 text-sm">
                          Actively building on the world&apos;s most downloaded 6G library (200K+ downloads, 540+ papers), used daily by Nokia, Ericsson, Qualcomm & Samsung.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#111]/50 border border-white/5 rounded-xl p-4 flex items-start gap-4">
                      <Zap className="w-6 h-6 text-[#76b900] mt-1 shrink-0" />
                      <div>
                        <h4 className="text-white font-bold mb-1">Sionna Visualizer</h4>
                        <p className="text-gray-400 text-sm">
                          This program directly led to building Sionna Visualizer — the first public visualization dashboard on top of NVIDIA Sionna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
