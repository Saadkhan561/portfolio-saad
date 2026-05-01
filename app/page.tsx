import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-20 h-full w-full bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-white/10 glass">
        <p>© {new Date().getFullYear()} Saad Khan. All rights reserved.</p>
      </footer>
    </main>
  );
}
