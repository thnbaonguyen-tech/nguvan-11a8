import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { CLASS_11A8_MOMENTS } from '../config/moments';

export const MomentsGallery: React.FC = () => {
  // Seamless loop marquee items: duplicate the 8 photos internally to create a seamless infinite loop with zero jumps
  const marqueeItems = [...CLASS_11A8_MOMENTS, ...CLASS_11A8_MOMENTS];

  return (
    <section 
      id="khoanh-khac" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Ambient background glows using CSS theme tokens */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-40 dark:opacity-20"
        style={{ backgroundColor: 'var(--gold-soft)' }}
      />
      <div 
        className="absolute bottom-0 left-10 w-80 h-80 rounded-full blur-[140px] pointer-events-none opacity-30 dark:opacity-15"
        style={{ backgroundColor: 'var(--accent-soft)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Theme adaptive, no control buttons, arrows, or indexes */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            {/* Clean Gold/Theme Highlight Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3.5 shadow-sm"
              style={{
                backgroundColor: 'var(--gold-soft)',
                border: '1px solid var(--gold-border)',
                color: 'var(--gold)',
              }}
            >
              <Camera className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
              <span>HÌNH ẢNH HOẠT ĐỘNG NHÓM &amp; CHUẨN BỊ TƯ LIỆU</span>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="font-bold opacity-90">KHOẢNH KHẮC 11A8</span>
            </div>

            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase font-display"
              style={{ color: 'var(--text-primary)' }}
            >
              Khoảnh khắc{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 dark:from-amber-300 dark:via-yellow-400 dark:to-amber-500">
                11A8
              </span>
            </h2>

            <p 
              className="mt-3 text-sm sm:text-base max-w-2xl font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Những thước ảnh chân thực ghi lại hành trình tập thể lớp{' '}
              <span className="font-semibold" style={{ color: 'var(--gold)' }}>
                11A8
              </span>{' '}
              cùng làm việc nhóm, sáng tạo mô hình thủ công và số hóa tư liệu văn học Nguyễn Quang Sáng.
            </p>
          </div>
        </div>

        {/* 
          CONTINUOUS SEAMLESS MARQUEE CONVEYOR BELT:
          - Automatically moves continuously via CSS keyframes without snapping or stopping abruptly.
          - Duplicate 8 photos array internally to create a seamless infinite loop with 0 jumps.
          - Fully adaptive to light/dark themes with semantic CSS variables and gradients.
          - Clean minimalist card text: only displays "Chi đoàn 11A8" badge/title.
          - All click-to-zoom modals, pop-ups, arrows, buttons, and indexes removed.
        */}
        <div className="relative overflow-hidden w-full py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {/* Edge fade gradients for polished thematic blending in both light and dark mode */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, var(--bg-secondary), transparent)',
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, var(--bg-secondary), transparent)',
            }}
          />

          {/* Marquee Track: continuously glides across smoothly */}
          <div className="flex animate-class-marquee gap-5 w-max select-none">
            {marqueeItems.map((item, idx) => (
              <div
                key={`moment-marquee-${item.id}-${idx}`}
                className="group relative flex-shrink-0 w-[270px] sm:w-[300px] md:w-[320px] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col pointer-events-auto"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Photo Thumbnail with soft zoom */}
                <div 
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl"
                  style={{ backgroundColor: 'var(--bg-surface)' }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    loading={idx < 4 ? "eager" : "lazy"}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (e.currentTarget.src !== item.fallback) {
                        e.currentTarget.src = item.fallback;
                      }
                    }}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Clean, Minimal Card Footer: Strictly "Chi đoàn 11A8" */}
                <div 
                  className="px-4 py-3 flex items-center justify-between rounded-b-2xl transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-surface-elevated)',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: 'var(--gold)' }}
                    />
                    <span 
                      className="text-xs sm:text-sm font-semibold tracking-wide font-sans"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Chi đoàn 11A8
                    </span>
                  </div>

                  <span 
                    className="text-[10px] font-mono font-medium tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: 'var(--gold-soft)',
                      color: 'var(--gold)',
                      border: '1px solid var(--gold-border)',
                    }}
                  >
                    11A8
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Ambient Footer */}
        <div 
          className="mt-6 flex items-center justify-center gap-2 text-xs font-mono transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
          <span>Chi đoàn 11A8 • Băng chuyền hình ảnh tự động trình chiếu liên tục</span>
        </div>
      </div>
    </section>
  );
};
