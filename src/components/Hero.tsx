import React from 'react';
import { ArrowDown, Feather } from 'lucide-react';
import portraitNguyenQuangSang from '../assets/images/tac_gia_nguyen_quang_sang_1790875071267.jpg';

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
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none" 
        style={{ backgroundColor: 'var(--gold-soft)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Meta indicator tag */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 backdrop-blur-md"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
            >
              <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--gold)' }}></span>
              <span className="font-semibold" style={{ color: 'var(--gold)' }}>THPT 11A8</span>
              <span style={{ color: 'var(--text-muted)' }}>·</span>
              <span>Dự án số hóa Văn học Việt Nam</span>
            </div>

            {/* Main Title */}
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none font-display uppercase"
              style={{ color: 'var(--text-primary)' }}
            >
              NGỮ VĂN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500">11A8</span>
            </h1>

            {/* Subtitle */}
            <h2 
              className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide uppercase font-sans"
              style={{ color: 'var(--text-secondary)' }}
            >
              CÔNG NGHỆ KẾT NỐI VĂN HỌC
            </h2>

            {/* Literary Lead Description */}
            <p 
              className="mt-6 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl pl-4 py-1 italic"
              style={{
                color: 'var(--text-secondary)',
                borderLeft: '2px solid var(--gold)',
              }}
            >
              “Khám phá tác giả, tác phẩm và những giá trị văn học bằng công nghệ và hình thức tương tác hiện đại.”
            </p>

            {/* Primary Action Button: KHÁM PHÁ DỰ ÁN ↓ */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#links"
                onClick={handleScrollToLinks}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
                style={{
                  backgroundColor: 'var(--gold)',
                  color: '#FFFFFF',
                }}
              >
                <span>KHÁM PHÁ DỰ ÁN</span>
                <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <a
                href="#about"
                onClick={handleScrollToAbout}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                }}
              >
                <span>Về tập thể 11A8</span>
              </a>
            </div>
          </div>

          {/* Right Column: Featured Literary Portrait of Nguyễn Quang Sáng */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle decorative framing glow */}
              <div 
                className="absolute -inset-1.5 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000"
                style={{ background: 'linear-gradient(to top right, var(--gold-soft), var(--border), transparent)' }}
              />

              {/* Main Portrait container */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-350"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-card)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                {/* Authentic archival portrait of writer Nguyễn Quang Sáng */}
                <img
                  src={portraitNguyenQuangSang}
                  alt="Chân dung nhà văn Nguyễn Quang Sáng (1932 – 2014)"
                  className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover object-[center_18%] filter contrast-[1.05] brightness-[0.98] saturate-[1.05] hover:scale-103 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle cinematic gradient vignette over the lower part only so face remains clearly visible */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, var(--bg-card) 0%, rgba(7, 11, 25, 0.78) 28%, transparent 60%)',
                  }}
                />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />

                {/* Bottom Information Panel focused ONLY on author Nguyễn Quang Sáng */}
                <div 
                  className="absolute bottom-4 left-4 right-4 p-4 sm:p-4.5 rounded-xl backdrop-blur-md flex items-center justify-between shadow-xl"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                  }}
                >
                  <div className="space-y-0.5 pr-3">
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase font-bold" 
                        style={{ color: 'var(--gold)' }}
                      >
                        TÁC GIẢ
                      </span>
                      <span className="text-[10px] font-mono text-white/30">·</span>
                      <span 
                        className="text-[10px] sm:text-xs font-mono font-medium" 
                        style={{ color: 'var(--text-muted)' }}
                      >
                        1932 – 2014
                      </span>
                    </div>

                    <h3 
                      className="text-base sm:text-lg font-bold font-serif tracking-tight leading-tight pt-0.5" 
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Nguyễn Quang Sáng
                    </h3>

                    <p 
                      className="text-xs font-serif italic leading-relaxed pt-0.5" 
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      “Nhà văn tiêu biểu của văn học Việt Nam, gắn bó sâu sắc với con người và vùng đất Nam Bộ.”
                    </p>
                  </div>

                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                    style={{
                      backgroundColor: 'var(--gold-soft)',
                      border: '1px solid var(--gold-border)',
                      color: 'var(--gold)',
                    }}
                    title="Nguyễn Quang Sáng (1932 – 2014)"
                  >
                    <Feather className="w-5 h-5 stroke-[1.75]" />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
