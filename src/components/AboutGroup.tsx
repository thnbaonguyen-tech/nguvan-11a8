import React, { useState } from 'react';
import { Cpu, Lightbulb, Users, BookMarked, ArrowUpRight, Camera } from 'lucide-react';

// ==================================================
// DỮ LIỆU ẢNH TẬP THỂ LỚP 11A8 (8 VỊ TRÍ)
// Khi có ảnh thật, chỉ cần điền link hoặc ảnh import vào thuộc tính src=""
// ==================================================
export const classPhotos = [
  { src: "", alt: "Ảnh lớp 11A8 01" },
  { src: "", alt: "Ảnh lớp 11A8 02" },
  { src: "", alt: "Ảnh lớp 11A8 03" },
  { src: "", alt: "Ảnh lớp 11A8 04" },
  { src: "", alt: "Ảnh lớp 11A8 05" },
  { src: "", alt: "Ảnh lớp 11A8 06" },
  { src: "", alt: "Ảnh lớp 11A8 07" },
  { src: "", alt: "Ảnh lớp 11A8 08" }
];

export const AboutGroup: React.FC = () => {
  const [activeKeyword, setActiveKeyword] = useState<number | null>(0);

  // Nhân bản danh sách ảnh để tạo hiệu ứng marquee chạy vô tận mượt mà không đứt đoạn
  const duplicatedPhotos = [...classPhotos, ...classPhotos];

  const keywords = [
    {
      id: 'cong-nghe',
      title: 'CÔNG NGHỆ',
      subtitle: 'Nền tảng số & Công cụ hiện đại',
      icon: Cpu,
      color: 'from-blue-400 to-indigo-500',
      textColor: 'group-hover:text-blue-400',
      description: 'Số hóa tư liệu học tập, phát triển website, tạo mã QR và tích hợp nền tảng trực tuyến giúp bài học trực quan và dễ tiếp cận.',
    },
    {
      id: 'sang-tao',
      title: 'SÁNG TẠO',
      subtitle: 'Đổi mới phương pháp tiếp cận',
      icon: Lightbulb,
      color: 'from-amber-400 to-yellow-500',
      textColor: 'group-hover:text-amber-400',
      description: 'Chuyển hóa ngôn từ văn học thành video recap, podcast diễn cảm, infographic và trích đoạn điện ảnh sinh động.',
    },
    {
      id: 'tuong-tac',
      title: 'TƯƠNG TÁC',
      subtitle: 'Kết nối cả lớp & Thảo luận mở',
      icon: Users,
      color: 'from-emerald-400 to-teal-500',
      textColor: 'group-hover:text-emerald-400',
      description: 'Xây dựng không gian Padlet mở, biểu quyết trực tuyến và kho lưu trữ tương tác giúp các bạn học sinh chủ động khám phá bài học.',
    },
    {
      id: 'van-hoc',
      title: 'VĂN HỌC',
      subtitle: 'Giá trị nhân văn & Chiều sâu cảm xúc',
      icon: BookMarked,
      color: 'from-rose-400 to-red-500',
      textColor: 'group-hover:text-rose-400',
      description: 'Giữ trọn vẹn hồn cốt tác phẩm, làm nổi bật phong cách văn xuôi Nam Bộ mộc mạc, thấm đẫm ân tình của nhà văn Nguyễn Quang Sáng.',
    },
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: 'var(--gold-soft)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Intro Header */}
        <div className="max-w-3xl mb-16">
          <span 
            className="text-xs font-semibold tracking-widest uppercase font-mono"
            style={{ color: 'var(--gold)' }}
          >
            Sứ mệnh &amp; Định hướng
          </span>
          <h2 
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase font-display"
            style={{ color: 'var(--text-primary)' }}
          >
            VỀ DỰ ÁN TẬP THỂ 11A8
          </h2>
          <p 
            className="mt-6 text-lg sm:text-xl font-light leading-relaxed pl-5 italic"
            style={{
              color: 'var(--text-secondary)',
              borderLeft: '2px solid var(--gold)',
            }}
          >
            “Dự án Ngữ văn tập thể 11A8 ứng dụng công nghệ số để hỗ trợ việc học Ngữ văn, kết nối nội dung văn học với hình ảnh, video, mã QR và các nền tảng tương tác trực tuyến.”
          </p>
        </div>

        {/* ==================================================
            CLASS PHOTO GALLERY: NHỮNG KHOẢNH KHẮC 11A8
            Placed between project introduction and 4 keyword cards
            ================================================== */}
        <div className="mb-16 sm:mb-20">
          {/* Editorial Label Header */}
          <div 
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-3"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div>
              <div 
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold mb-1"
                style={{ color: 'var(--gold)' }}
              >
                <span>HÌNH ẢNH HẬU TRƯỜNG</span>
                <span>·</span>
                <span>08 KHOẢNH KHẮC</span>
              </div>
              <h3 
                className="text-xl sm:text-2xl font-bold tracking-tight uppercase font-display"
                style={{ color: 'var(--text-primary)' }}
              >
                NHỮNG KHOẢNH KHẮC 11A8
              </h3>
            </div>
            <p 
              className="text-xs sm:text-sm font-serif italic max-w-md"
              style={{ color: 'var(--text-secondary)' }}
            >
              “Những hình ảnh phía sau một hành trình học tập và sáng tạo.”
            </p>
          </div>

          {/* Marquee Carousel Container */}
          <div className="relative w-full overflow-hidden rounded-2xl py-1">
            {/* Left Edge Fade (Theme-adaptive) */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, var(--bg-secondary), transparent)',
              }}
            />

            {/* Right Edge Fade (Theme-adaptive) */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, var(--bg-secondary), transparent)',
              }}
            />

            {/* Scrolling Track */}
            <div className="animate-class-marquee flex items-center gap-4 sm:gap-6 py-2">
              {duplicatedPhotos.map((photo, idx) => {
                const originalIndex = idx % classPhotos.length;
                return (
                  <div
                    key={`class-slot-${idx}`}
                    className="group relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] aspect-[16/10] rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03]"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-card)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {photo.src ? (
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out"
                      />
                    ) : (
                      /* Clean, neutral, intentional empty placeholder slot */
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none relative overflow-hidden">
                        {/* Subtle ambient placeholder backdrop */}
                        <div 
                          className="absolute inset-0 opacity-40 pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at center, var(--gold-soft), transparent 70%)',
                          }}
                        />

                        {/* Minimal photo outline icon */}
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-colors z-10"
                          style={{
                            backgroundColor: 'var(--bg-secondary)',
                            border: '1px solid var(--border)',
                            color: 'var(--gold)',
                          }}
                        >
                          <Camera className="w-4 h-4 opacity-75" />
                        </div>

                        {/* Slot Title */}
                        <span 
                          className="text-xs font-mono font-semibold tracking-wider uppercase z-10"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {photo.alt}
                        </span>

                        {/* Minimal Badge */}
                        <span 
                          className="text-[10px] font-mono mt-1.5 px-2 py-0.5 rounded-full z-10"
                          style={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          11A8 · Slot {String(originalIndex + 1).padStart(2, '0')}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 KEYWORDS IN LARGE, MODERN EDITORIAL TYPOGRAPHY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keywords.map((kw, index) => {
            const Icon = kw.icon;
            const isSelected = activeKeyword === index;

            return (
              <div
                key={kw.id}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                onClick={() => setActiveKeyword(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveKeyword(index);
                  }
                }}
                className="group relative rounded-2xl p-7 transition-all duration-300 cursor-pointer border flex flex-col justify-between"
                style={{
                  backgroundColor: isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
                  borderColor: isSelected ? 'var(--gold)' : 'var(--border)',
                  boxShadow: isSelected ? 'var(--shadow)' : 'var(--shadow-sm)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                }}
              >
                {/* Accent line top */}
                <div
                  className={`h-1 rounded-full mb-6 bg-gradient-to-r ${kw.color} ${
                    isSelected ? 'opacity-100 w-20' : 'opacity-40 group-hover:opacity-100 w-12 group-hover:w-16'
                  } transition-all duration-300`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span 
                      className="text-xs font-mono font-bold"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Oversized typography keyword as requested */}
                  <h3
                    className="text-2xl sm:text-3xl font-black tracking-tight transition-colors duration-200 uppercase font-display"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {kw.title}
                  </h3>

                  <p 
                    className="text-xs font-medium mt-1 uppercase tracking-wider"
                    style={{ color: 'var(--gold)' }}
                  >
                    {kw.subtitle}
                  </p>

                  <p 
                    className="mt-4 text-sm font-light leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {kw.description}
                  </p>
                </div>

                <div 
                  className="mt-6 pt-4 flex items-center justify-between text-xs"
                  style={{
                    borderTop: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>Trụ cột {index + 1}/4</span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? 'translate-x-0.5 -translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    }`}
                    style={{ color: isSelected ? 'var(--gold)' : 'var(--text-muted)' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Class 11A8 Quote Strip */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-950/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
              Học Văn trong kỷ nguyên số hóa
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Dự án liên môn: Kết hợp kỹ năng Tin học, Thiết kế truyền thông và Cảm thụ tác phẩm văn học lớp 11.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="text-center">
              <span className="block text-2xl font-black text-amber-300 font-mono">11A8</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Chi đoàn lớp</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <span className="block text-2xl font-black text-white font-mono">10+</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Sản phẩm số</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <span className="block text-2xl font-black text-emerald-400 font-mono">100%</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Sáng tạo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
