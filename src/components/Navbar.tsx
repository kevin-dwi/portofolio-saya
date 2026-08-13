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

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0f1214]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-16 max-w-[1280px] mx-auto">
        {/* Brand */}
        <a
          href="#home"
          className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-violet-600 dark:text-[#d0bcff] hover:scale-95 transition-transform"
        >
          KDAAY
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-mono-caps uppercase transition-all duration-300 px-3 py-1 rounded ${
                  isActive
                    ? 'text-violet-600 dark:text-[#d0bcff] border-b-2 border-violet-500 dark:border-[#d0bcff] bg-violet-50 dark:bg-white/5'
                    : 'text-slate-500 dark:text-[#cbc3d7]/70 hover:text-violet-600 dark:hover:text-[#d0bcff] hover:bg-violet-50 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Actions & Theme Switcher */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            id="theme-toggle"
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-violet-100 dark:hover:bg-white/10 text-slate-500 dark:text-[#cbc3d7] hover:text-violet-600 dark:hover:text-[#d0bcff] border border-slate-200 dark:border-white/10 transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-violet-100 dark:hover:bg-white/10 text-slate-500 dark:text-[#cbc3d7] border border-slate-200 dark:border-white/10 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-200 dark:border-white/10 px-6 py-6 mt-2 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-mono-caps uppercase py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-violet-100 dark:bg-[#d0bcff]/15 text-violet-600 dark:text-[#d0bcff] border-l-2 border-violet-500 dark:border-[#d0bcff]'
                  : 'text-slate-500 dark:text-[#cbc3d7]/80 hover:text-violet-600 dark:hover:text-[#d0bcff] hover:bg-violet-50 dark:hover:bg-white/5'
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
