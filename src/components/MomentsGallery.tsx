import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLASS_11A8_MOMENTS } from '../config/moments';

export const MomentsGallery: React.FC = () => {
  // Seamless loop marquee items: duplicate the 8 photos internally to create a seamless infinite loop with zero jumps
  const marqueeItems = [...CLASS_11A8_MOMENTS, ...CLASS_11A8_MOMENTS];

  // Lightbox modal state: index (0-7) of the currently viewed photo
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Navigation handlers
  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => 
      prev !== null ? (prev === 0 ? CLASS_11A8_MOMENTS.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => 
      prev !== null ? (prev === CLASS_11A8_MOMENTS.length - 1 ? 0 : prev + 1) : null
    );
  };

  // Keyboard navigation & lock body scroll when Lightbox is active
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => 
          prev !== null ? (prev === 0 ? CLASS_11A8_MOMENTS.length - 1 : prev - 1) : null
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => 
          prev !== null ? (prev === CLASS_11A8_MOMENTS.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPhotoIndex]);

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
        {/* Section Header: Theme adaptive */}
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
          - Clean minimalist card text: displays "Chi đoàn 11A8" badge/title.
          - Clickable cards to open the high-fidelity Lightbox / Image Viewer.
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
            {marqueeItems.map((item, idx) => {
              const originalIndex = idx % CLASS_11A8_MOMENTS.length;

              return (
                <div
                  key={`moment-marquee-${item.id}-${idx}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedPhotoIndex(originalIndex)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPhotoIndex(originalIndex);
                    }
                  }}
                  className="group relative flex-shrink-0 w-[270px] sm:w-[300px] md:w-[320px] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col pointer-events-auto cursor-pointer hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98]"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  title="Nhấp để phóng to ảnh"
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

                    {/* Subtle hover overlay hint */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-mono flex items-center gap-1.5 border border-white/20 shadow-lg">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Phóng to</span>
                      </span>
                    </div>
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
              );
            })}
          </div>
        </div>

        {/* Subtle Ambient Footer */}
        <div 
          className="mt-6 flex items-center justify-center gap-2 text-xs font-mono transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
          <span>Chi đoàn 11A8 • Bấm vào bất kỳ ảnh nào để phóng to và duyệt ảnh</span>
        </div>
      </div>

      {/* ==================================================
          LIGHTBOX / IMAGE VIEWER MODAL
          - Centered on screen with smooth pop-up animation
          - Semi-transparent dark/navy overlay backdrop
          - Left/Right arrows and keyboard arrows to navigate
          - Close "×" button and ESC key or overlay click to close
          - Clean footer: "Chi đoàn 11A8", badge "11A8", and individual caption
          ================================================== */}
      {/* ==================================================
          FULLSCREEN LIGHTBOX / IMAGE VIEWER
          - Occupies 100vw x 100vh directly on top level
          - Semi-transparent deep dark navy / black background
          - Image centered vertically and horizontally, scaled to maximum visible area
          - Image styles: max-w-[90vw] max-h-[78vh] w-auto h-auto object-contain
          - Floating Left/Right navigation buttons on screen edges
          - Floating Close "×" button on top-right corner
          - Sleek bottom info bar for "Chi đoàn 11A8", badge "11A8", photo counter & caption
          - Touch swipe & Keyboard support
          ================================================== */}
      {selectedPhotoIndex !== null && (
        <div 
          className="lightbox-modal fixed inset-0 z-[99999] w-screen h-screen flex flex-col items-center justify-between select-none overflow-hidden p-3 sm:p-5"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(0, 0, 0, 0.93)',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh toàn màn hình - Khoảnh khắc 11A8"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedPhotoIndex(null);
            }
          }}
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX === null) return;
            const diff = e.changedTouches[0].clientX - touchStartX;
            if (diff > 40) handlePrev();
            if (diff < -40) handleNext();
            setTouchStartX(null);
          }}
        >
          {/* Top-Right Close Button "×" */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed top-3 right-3 sm:top-5 sm:right-6 z-[100000] p-3 rounded-full bg-black/70 hover:bg-black/90 text-white/90 hover:text-white border border-white/25 shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
            aria-label="Đóng (Esc)"
            title="Đóng (Phím Esc)"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Left Arrow Button ← */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="fixed left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-[100000] p-3 sm:p-4 rounded-full bg-black/70 hover:bg-black/95 text-white/90 hover:text-white border border-white/25 shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
            aria-label="Ảnh trước (←)"
            title="Ảnh trước (Phím ←)"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          {/* Right Arrow Button → */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="fixed right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-[100000] p-3 sm:p-4 rounded-full bg-black/70 hover:bg-black/95 text-white/90 hover:text-white border border-white/25 shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
            aria-label="Ảnh sau (→)"
            title="Ảnh sau (Phím →)"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          {/* Center Stage: Image expands to 92vw x 82vh with object-fit contain */}
          <div 
            className="lightbox-stage relative w-full flex-1 flex items-center justify-center min-h-0"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              flex: '1 1 0%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 0,
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedPhotoIndex(null);
              }
            }}
          >
            <img
              key={`lightbox-img-${selectedPhotoIndex}`}
              src={CLASS_11A8_MOMENTS[selectedPhotoIndex].url}
              alt={CLASS_11A8_MOMENTS[selectedPhotoIndex].title}
              decoding="async"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== CLASS_11A8_MOMENTS[selectedPhotoIndex].fallback) {
                  e.currentTarget.src = CLASS_11A8_MOMENTS[selectedPhotoIndex].fallback;
                }
              }}
              style={{
                width: '92vw',
                height: '82vh',
                maxWidth: '92vw',
                maxHeight: '82vh',
                minWidth: 0,
                minHeight: 0,
                objectFit: 'contain',
                imageRendering: 'auto',
                WebkitFontSmoothing: 'antialiased',
                margin: 'auto',
                display: 'block',
              }}
              className="lightbox-image rounded-xl sm:rounded-2xl select-none transition-all duration-300 pointer-events-auto shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Bottom Info Bar: Chi đoàn 11A8, badge 11A8, photo counter and caption */}
          <div 
            className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 z-[100000] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-center sm:text-left rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 shadow-2xl shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Badges & Title */}
            <div className="flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2">
                <span 
                  className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
                  style={{ backgroundColor: 'var(--gold)' }}
                />
                <span className="text-xs sm:text-sm font-bold tracking-wide text-white">
                  Chi đoàn 11A8
                </span>
              </div>

              <span 
                className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'var(--gold-soft)',
                  color: 'var(--gold)',
                  border: '1px solid var(--gold-border)',
                }}
              >
                11A8
              </span>

              <span className="text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded-full border border-white/15 text-slate-300">
                Ảnh {String(selectedPhotoIndex + 1).padStart(2, '0')} / {String(CLASS_11A8_MOMENTS.length).padStart(2, '0')}
              </span>
            </div>

            {/* Right Caption */}
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm font-medium text-slate-200 line-clamp-1">
                {CLASS_11A8_MOMENTS[selectedPhotoIndex].title}
              </p>
              {CLASS_11A8_MOMENTS[selectedPhotoIndex].subtitle && (
                <p 
                  className="text-[11px] font-mono mt-0.5 line-clamp-1"
                  style={{ color: 'var(--gold)' }}
                >
                  {CLASS_11A8_MOMENTS[selectedPhotoIndex].subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
