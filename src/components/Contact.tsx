import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }); }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contacts = [
    {
      icon: 'mail', label: 'Email', value: PERSONAL_INFO.socials.email,
      href: null, onClick: copyEmail,
      color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20',
      action: copied ? 'Tersalin!' : 'Salin'
    },
    {
      icon: 'photo_camera', label: 'Instagram', value: '@kvin.dwyrms_',
      href: PERSONAL_INFO.socials.instagram, onClick: null,
      color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20',
      action: null
    },
    {
      icon: 'code', label: 'GitHub', value: 'github.com/kdaay',
      href: PERSONAL_INFO.socials.github, onClick: null,
      color: 'text-slate-300', bg: 'bg-white/5', border: 'border-white/10',
      action: null
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="section-card p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Kiri */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="section-label mb-5 inline-flex">Kontak</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-5 leading-tight">
                Mari Berkolaborasi
              </h2>
              <p className="text-slate-400 mt-3 text-[15px] leading-relaxed">
                Terbuka untuk peluang freelance, kolaborasi proyek, atau sekadar ngobrol tentang teknologi dan pengembangan web.
              </p>
            </div>

            <div className="space-y-3">
              {contacts.map((c) => {
                const inner = (
                  <>
                    <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.color} flex items-center justify-center border ${c.border} flex-shrink-0`}>
                      <span className="material-symbols-outlined text-[17px]">{c.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono-caps text-[9px] text-slate-600 uppercase">{c.label}</p>
                      <p className={`text-sm font-medium ${c.color} truncate mt-0.5`}>{c.value}</p>
                    </div>
                    {c.action && (
                      <span className={`font-mono-caps text-[9px] px-2.5 py-1 rounded-full transition-all ${copied ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25' : 'bg-white/5 text-slate-500 border border-white/8'}`}>
                        {c.action}
                      </span>
                    )}
                    {!c.action && c.href && (
                      <span className="material-symbols-outlined text-[15px] text-slate-700 group-hover:text-slate-400 transition-colors">arrow_outward</span>
                    )}
                  </>
                );

                const cls = "w-full flex items-center gap-4 p-4 card group cursor-pointer text-left";

                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <button key={c.label} onClick={c.onClick ?? undefined} className={cls}>
                    {inner}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Kanan — Form */}
          <div className="rounded-2xl p-6 md:p-8" style={{ background: 'rgba(10,15,25,0.8)', border: '1px solid rgba(99,120,180,0.12)' }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Pesan Terkirim!</h3>
                  <p className="text-sm text-slate-400 mt-1">Terima kasih, {form.name || 'teman'}. Kevin akan segera membalas!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { id: 'name',    label: 'Nama',  type: 'text',  placeholder: 'Nama lengkap kamu' },
                  { id: 'email',   label: 'Email', type: 'email', placeholder: 'email@contoh.com' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block font-mono-caps text-[9px] text-slate-500 uppercase mb-2">{f.label}</label>
                    <input
                      type={f.type} id={f.id} required
                      value={form[f.id as 'name' | 'email']}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      placeholder={f.placeholder}
                      className="input-field"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block font-mono-caps text-[9px] text-slate-500 uppercase mb-2">Pesan</label>
                  <textarea
                    id="message" required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Halo Kevin, saya ingin..."
                    className="input-field resize-none"
                  />
                </div>
                <button type="submit"
                  className="btn-primary text-white font-mono-caps uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 group w-full cursor-pointer mt-1"
                >
                  <span>Kirim Pesan</span>
                  <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
