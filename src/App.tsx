import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
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
    <div className="min-h-screen flex flex-col relative bg-[#f5f7fa] dark:bg-[#0d1117] text-slate-800 dark:text-[#e6edf3] transition-colors duration-300">
      {/* Subtle background pattern - light */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(124,58,237,0.06)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(124,58,237,0.15)_0%,_transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(8,145,178,0.05)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_rgba(8,145,178,0.12)_0%,_transparent_60%)]"></div>
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-1 w-full px-4 md:px-8 max-w-[1200px] mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
