import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50 text-slate-800 dark:bg-[#0f1214] dark:text-[#e0e3e5] transition-colors duration-300">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-200/40 dark:bg-[#340080]/20 rounded-full blur-[120px] opacity-60 dark:opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-200/30 dark:bg-[#004e5c]/20 rounded-full blur-[120px] opacity-50 dark:opacity-40"></div>
        <div className="absolute bottom-10 left-1/4 w-[700px] h-[700px] bg-violet-100/30 dark:bg-[#340080]/15 rounded-full blur-[140px] opacity-40 dark:opacity-30"></div>
      </div>

      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
