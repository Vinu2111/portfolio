import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OpenSource } from "@/components/OpenSource";
import { NvidiaProgram } from "@/components/NvidiaProgram";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-black">
      <Navbar />
      
      {/* Container for sections */}
      <div className="relative">
        <Hero />
        <NvidiaProgram />
        <OpenSource />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
