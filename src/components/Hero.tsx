import React from 'react';
import { ArrowDown, Sparkles, BookOpen, Laptop, QrCode, Compass } from 'lucide-react';
import heroImage from '../assets/images/hero_lit_tech_1790353095687.jpg';

export const Hero: React.FC = () => {
  const handleScrollToLinks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('links');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Cinematic ambient background glow lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle literary watermark grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Meta indicator tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400"></span>
              <span className="text-amber-300 font-semibold">THPT 11A8</span>
              <span className="text-slate-500">·</span>
              <span>Dự án số hóa Văn học Việt Nam</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none font-display uppercase">
              NGỮ VĂN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">11A8</span>
            </h1>

            {/* Subtitle */}
            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-slate-200 uppercase font-sans">
              CÔNG NGHỆ KẾT NỐI VĂN HỌC
            </h2>

            {/* Literary Lead Description */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-amber-400/50 pl-4 py-1 italic">
              “Khám phá tác giả, tác phẩm và những giá trị văn học bằng công nghệ và hình thức tương tác hiện đại.”
            </p>

            {/* Context highlights (Nguyen Quang Sang, Nam Bo, Digital Media) */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Nguyễn Quang Sáng</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 backdrop-blur-sm">
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Sông nước Nam Bộ</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 backdrop-blur-sm">
                <Laptop className="w-4 h-4 text-emerald-400" />
                <span>Số hóa &amp; Đa phương tiện</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 backdrop-blur-sm">
                <QrCode className="w-4 h-4 text-purple-400" />
                <span>QR Tương tác</span>
              </div>
            </div>

            {/* Primary Action Button: KHÁM PHÁ DỰ ÁN ↓ */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#links"
                onClick={handleScrollToLinks}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wider text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:shadow-[0_0_45px_rgba(245,158,11,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>KHÁM PHÁ DỰ ÁN</span>
                <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <a
                href="#about"
                onClick={handleScrollToAbout}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm sm:text-base text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <span>Về nhóm 11A8</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-aesthetic Literary & Tech Collage Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative cinematic framing glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/30 via-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Artwork container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl shadow-black/80">
                <img
                  src={heroImage}
                  alt="Văn học và Công nghệ 11A8 - Nguyễn Quang Sáng & Sông nước Nam Bộ"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center filter saturate-[1.08] contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Cinematic gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b19] via-[#070b19]/30 to-transparent" />

                {/* Floating overlay badge bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Tác phẩm trọng tâm</p>
                    <p className="text-sm font-bold text-white mt-0.5">Chiếc Lược Ngà · Mùa Gió Chướng</p>
                    <p className="text-xs text-slate-300 mt-0.5 font-light">Tác giả Nguyễn Quang Sáng (1932 - 2014)</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-amber-300" />
                  </div>
                </div>

                {/* Floating badge top right: Tech indicator */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>10 Điểm chạm tương tác</span>
                </div>
              </div>

              {/* Floating decorative card on bottom left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 p-3 rounded-xl bg-[#0b1226]/95 backdrop-blur-lg border border-white/15 shadow-xl shadow-black/60 max-w-[240px]">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <QrCode className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Quét mã di động</p>
                  <p className="text-[10px] text-slate-300">Tương tác trực tiếp trên lớp</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
