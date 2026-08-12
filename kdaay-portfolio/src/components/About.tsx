import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto relative z-10 glass-panel rounded-3xl border border-white/10 shadow-2xl my-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Side: Portrait / Visual */}
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d0bcff] to-[#4cd7f6] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-300"></div>
          <div className="relative rounded-xl overflow-hidden glass-panel border border-white/10 aspect-[4/5] flex items-center justify-center bg-[#1d2022]/80">
            <img
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
              alt="Kevin Dwi Andhika Ahmad Yarmis"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
            />
            {/* Subtle floating overlay icon */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
              <span className="font-mono-caps text-[10px] text-[#e0e3e5]">SMK RPL Student</span>
            </div>
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
          {/* Section Tag */}
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#d0bcff]"></div>
            <span className="font-mono-caps text-[#d0bcff] uppercase tracking-widest text-xs">
              About Me
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#e0e3e5] leading-snug">
            Translating complex logic into <span className="text-[#4cd7f6]">elegant</span> interfaces.
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-base text-[#cbc3d7] leading-relaxed">
            {PERSONAL_INFO.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Education / Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {PERSONAL_INFO.education.map((item, idx) => (
              <div
                key={idx}
                className={`glass-panel p-4 rounded-xl border border-white/5 ${item.border} border-l-4 bg-[#1d2022]/50 hover:bg-[#1d2022]/80 transition-colors`}
              >
                <h3 className="font-display text-xl font-bold text-[#e0e3e5] mb-1">
                  {item.title}
                </h3>
                <p className="font-mono-caps text-xs text-[#cbc3d7]/80">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
