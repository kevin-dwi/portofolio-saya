import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const pos = window.scrollY + 130;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home',         label: 'Beranda' },
    { id: 'about',        label: 'Tentang' },
    { id: 'skills',       label: 'Keahlian' },
    { id: 'projects',     label: 'Proyek' },
    { id: 'achievements', label: 'Prestasi' },
    { id: 'contact',      label: 'Kontak' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#080c14]/85 backdrop-blur-2xl border-b border-white/[0.06] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-transparent py-5'
    }`}>
      <div className="flex justify-between items-center px-4 md:px-8 max-w-[1200px] mx-auto">

        {/* Brand */}
        <a href="#home" className="font-display text-xl font-bold tracking-tight">
          <span className="gradient-text">KDAAY</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono-caps px-4 py-2 rounded-xl transition-all duration-200 ${
                activeSection === id
                  ? 'text-violet-300 bg-violet-500/10 border border-violet-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/[0.05] text-slate-400 border border-white/[0.08] hover:bg-white/[0.08] transition-all cursor-pointer"
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-[18px]">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1220]/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-4 flex flex-col gap-1 animate-fadeIn">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-mono-caps py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                activeSection === id
                  ? 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
                  : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
              }`}
            >
              <span>{label}</span>
              <span className="material-symbols-outlined text-sm opacity-40">chevron_right</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
