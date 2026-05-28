import { BookOpen } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-8 text-center bg-background border-t border-white/5">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Vinu2111" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/vinayakgote" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="https://vinayak6g.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
          <BookOpen className="w-5 h-5" />
        </a>
      </div>
      <p className="text-gray-600 font-mono text-sm">
        Built by <span className="text-accent">Vinayak Gote</span> with Next.js & Tailwind
      </p>
    </footer>
  );
}
