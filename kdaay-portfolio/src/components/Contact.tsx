import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto relative z-10 my-12 glass-panel rounded-3xl border border-white/10 shadow-2xl"
    >
      <div className="rounded-2xl p-6 md:p-12 relative overflow-hidden bg-transparent">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d0bcff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4cd7f6]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left info column */}
          <div className="flex flex-col gap-6 justify-between">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono-caps text-[#d0bcff] uppercase tracking-widest text-xs">
                  Get in touch
                </span>
                <div className="h-[1px] w-12 bg-[#d0bcff]"></div>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e0e3e5] leading-tight">
                Let's build something <br />
                <span className="text-[#4cd7f6]">amazing.</span>
              </h2>
              <p className="text-base text-[#cbc3d7] max-w-md mt-4 leading-relaxed">
                Currently open for freelance opportunities, collaborations, or just a chat about software engineering and the future of web tech.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="pt-6 flex items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="w-12 h-12 rounded-full glass-panel bg-[#1d2022]/60 flex items-center justify-center text-[#cbc3d7] hover:text-[#d0bcff] hover:border-[#d0bcff] transition-all cursor-pointer relative"
                title="Copy Email"
              >
                <span className="material-symbols-outlined">mail</span>
                {copiedEmail && (
                  <span className="absolute -top-8 bg-[#d0bcff] text-[#340080] font-mono-caps text-[10px] px-2 py-0.5 rounded shadow">
                    Copied!
                  </span>
                )}
              </button>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-panel bg-[#1d2022]/60 flex items-center justify-center text-[#cbc3d7] hover:text-[#4cd7f6] hover:border-[#4cd7f6] transition-all cursor-pointer"
                title="GitHub Profile"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>

          {/* Right form column */}
          <div className="bg-[#191c1e]/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#4cd7f6]/20 border border-[#4cd7f6] text-[#4cd7f6] flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#e0e3e5]">
                  Message Sent!
                </h3>
                <p className="text-sm text-[#cbc3d7] max-w-xs">
                  Thank you for reaching out, {formData.name || 'friend'}. Kevin will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono-caps text-xs text-[#cbc3d7] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#1d2022]/80 border border-[#494454] rounded-lg px-4 py-3 text-[#e0e3e5] placeholder-[#cbc3d7]/40 focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono-caps text-xs text-[#cbc3d7] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#1d2022]/80 border border-[#494454] rounded-lg px-4 py-3 text-[#e0e3e5] placeholder-[#cbc3d7]/40 focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono-caps text-xs text-[#cbc3d7] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Kevin..."
                    className="w-full bg-[#1d2022]/80 border border-[#494454] rounded-lg px-4 py-3 text-[#e0e3e5] placeholder-[#cbc3d7]/40 focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-colors resize-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-2 btn-primary text-white font-mono-caps uppercase tracking-wider py-4 px-6 rounded-lg flex items-center justify-center gap-2 group transition-all w-full shadow-lg cursor-pointer hover:scale-[1.01]"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
