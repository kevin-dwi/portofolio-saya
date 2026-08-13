import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const inputClass = "w-full bg-white dark:bg-[#1d2022]/80 border border-slate-200 dark:border-[#494454] rounded-xl px-4 py-3 text-slate-800 dark:text-[#e0e3e5] placeholder-slate-400 dark:placeholder-[#cbc3d7]/40 focus:outline-none focus:border-violet-400 dark:focus:border-[#4cd7f6] focus:ring-1 focus:ring-violet-300 dark:focus:ring-[#4cd7f6] transition-colors text-sm shadow-sm";

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto relative z-10 my-12 glass-panel rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl"
    >
      <div className="rounded-2xl p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-200/30 dark:bg-[#d0bcff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/30 dark:bg-[#4cd7f6]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="flex flex-col gap-6 justify-between">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono-caps text-violet-500 dark:text-[#d0bcff] uppercase tracking-widest text-xs">
                  Get in touch
                </span>
                <div className="h-[1px] w-12 bg-violet-400 dark:bg-[#d0bcff]"></div>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-[#e0e3e5] leading-tight">
                Let's build something <br />
                <span className="text-cyan-500 dark:text-[#4cd7f6]">amazing.</span>
              </h2>
              <p className="text-base text-slate-500 dark:text-[#cbc3d7] max-w-md mt-4 leading-relaxed">
                Currently open for freelance opportunities, collaborations, or just a chat about software engineering and the future of web tech.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-500 dark:text-[#cbc3d7] hover:text-violet-600 dark:hover:text-[#d0bcff] hover:border-violet-400 dark:hover:border-[#d0bcff] transition-all cursor-pointer relative"
                title="Copy Email"
              >
                <span className="material-symbols-outlined">mail</span>
                {copiedEmail && (
                  <span className="absolute -top-8 bg-violet-500 dark:bg-[#d0bcff] text-white dark:text-[#340080] font-mono-caps text-[10px] px-2 py-0.5 rounded shadow">
                    Copied!
                  </span>
                )}
              </button>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-500 dark:text-[#cbc3d7] hover:text-cyan-500 dark:hover:text-[#4cd7f6] hover:border-cyan-400 dark:hover:border-[#4cd7f6] transition-all cursor-pointer"
                title="GitHub Profile"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/80 dark:bg-[#191c1e]/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-[#4cd7f6]/20 border border-cyan-400 dark:border-[#4cd7f6] text-cyan-500 dark:text-[#4cd7f6] flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-[#e0e3e5]">
                  Message Sent!
                </h3>
                <p className="text-sm text-slate-500 dark:text-[#cbc3d7] max-w-xs">
                  Thank you for reaching out, {formData.name || 'friend'}. Kevin will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block font-mono-caps text-xs text-slate-500 dark:text-[#cbc3d7] mb-2">Name</label>
                  <input type="text" id="name" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono-caps text-xs text-slate-500 dark:text-[#cbc3d7] mb-2">Email</label>
                  <input type="email" id="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono-caps text-xs text-slate-500 dark:text-[#cbc3d7] mb-2">Message</label>
                  <textarea id="message" required rows={4} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Kevin..." className={`${inputClass} resize-none`}></textarea>
                </div>
                <button type="submit"
                  className="mt-2 btn-primary text-white font-mono-caps uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all w-full shadow-lg cursor-pointer hover:scale-[1.01]"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
