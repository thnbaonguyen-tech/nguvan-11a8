import React, { useState } from 'react';
import { Cpu, Lightbulb, Users, BookMarked, ArrowUpRight } from 'lucide-react';

export const AboutGroup: React.FC = () => {
  const [activeKeyword, setActiveKeyword] = useState<number | null>(0);

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
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#080d21]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Intro Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
            Sứ mệnh &amp; Định hướng
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display">
            VỀ NHÓM CÔNG NGHỆ
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 font-light leading-relaxed border-l-2 border-amber-400/40 pl-5">
            “Nhóm Công nghệ 11A8 ứng dụng công nghệ số để hỗ trợ việc học Ngữ văn, kết nối nội dung văn học với hình ảnh, video, mã QR và các nền tảng tương tác trực tuyến.”
          </p>
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
                className={`group relative rounded-2xl p-7 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-amber-400/50 shadow-2xl shadow-amber-950/20 translate-y-[-4px]'
                    : 'bg-[#0b1329]/60 border-white/5 hover:border-white/15 hover:bg-slate-900/60 hover:-translate-y-1'
                }`}
              >
                {/* Accent line top */}
                <div
                  className={`h-1 w-12 rounded-full mb-6 bg-gradient-to-r ${kw.color} ${
                    isSelected ? 'opacity-100 w-20' : 'opacity-40 group-hover:opacity-100 group-hover:w-16'
                  } transition-all duration-300`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isSelected
                          ? 'bg-white/10 border-white/20 text-white'
                          : 'bg-white/5 border-white/5 text-slate-300 group-hover:text-white group-hover:border-white/15'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Oversized typography keyword as requested */}
                  <h3
                    className={`text-2xl sm:text-3xl font-black tracking-tight text-white transition-colors duration-200 uppercase font-display ${kw.textColor}`}
                  >
                    {kw.title}
                  </h3>

                  <p className="text-xs font-medium text-amber-300/80 mt-1 uppercase tracking-wider">
                    {kw.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
                    {kw.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Trụ cột {index + 1}/4</span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? 'text-amber-400 translate-x-0.5 -translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    }`}
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
