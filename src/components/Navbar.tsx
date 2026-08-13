import React, { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'projects', label: 'Proyek' },
    { id: 'achievements', label: 'Prestasi' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.06] shadow-sm py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="flex justify-between items-center px-4 md:px-8 max-w-[1200px] mx-auto">
        {/* Brand */}
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-violet-600 dark:text-violet-400 hover:opacity-80 transition-opacity">
          KDAAY
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-mono-caps px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Tema"
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08] transition-all cursor-pointer"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-[18px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#161b22] border-t border-slate-200 dark:border-white/[0.06] px-4 py-4 flex flex-col gap-1 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-mono-caps py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'
              }`}
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
