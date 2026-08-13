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

  const inputClass = "w-full bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-violet-400 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-500/10 transition-all text-sm";

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="section-card p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Kiri */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="section-label mb-4 inline-flex">Kontak</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4 leading-tight">
                Mari Berkolaborasi
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-3 text-[15px] leading-relaxed">
                Terbuka untuk peluang freelance, kolaborasi proyek, atau sekadar ngobrol tentang teknologi dan pengembangan web.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center gap-4 p-4 card text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center border border-violet-100 dark:border-violet-500/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono-caps text-[10px] text-slate-400 uppercase">Email</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">{PERSONAL_INFO.socials.email}</p>
                </div>
                <span className={`font-mono-caps text-[10px] px-2 py-1 rounded-full transition-all ${copiedEmail ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-slate-100 dark:bg-white/5 text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-600 dark:group-hover:bg-violet-500/10 dark:group-hover:text-violet-400'}`}>
                  {copiedEmail ? 'Tersalin!' : 'Salin'}
                </span>
              </button>

              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-4 card group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center border border-pink-100 dark:border-pink-500/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </div>
                <div className="flex-1">
                  <p className="font-mono-caps text-[10px] text-slate-400 uppercase">Instagram</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">@kvin.dwyrms_</p>
                </div>
                <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600 group-hover:text-pink-500 transition-colors">arrow_outward</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-4 card group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 flex items-center justify-center border border-slate-200 dark:border-white/10 flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px]">code</span>
                </div>
                <div className="flex-1">
                  <p className="font-mono-caps text-[10px] text-slate-400 uppercase">GitHub</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">github.com/kdaay</p>
                </div>
                <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Kanan — Form */}
          <div className="bg-slate-50 dark:bg-[#0d1117] rounded-2xl p-6 border border-slate-200 dark:border-white/[0.06]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Pesan Terkirim!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Terima kasih, {formData.name || 'teman'}. Kevin akan segera membalas!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block font-mono-caps text-[10px] text-slate-400 uppercase mb-1.5">Nama</label>
                  <input type="text" id="name" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama lengkap kamu" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono-caps text-[10px] text-slate-400 uppercase mb-1.5">Email</label>
                  <input type="email" id="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@contoh.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono-caps text-[10px] text-slate-400 uppercase mb-1.5">Pesan</label>
                  <textarea id="message" required rows={5} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Halo Kevin, saya ingin..." className={`${inputClass} resize-none`}></textarea>
                </div>
                <button type="submit"
                  className="btn-primary text-white font-mono-caps uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all w-full cursor-pointer mt-1"
                >
                  <span>Kirim Pesan</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
