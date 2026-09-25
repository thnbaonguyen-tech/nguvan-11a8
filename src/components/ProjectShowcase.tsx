import React, { useState } from 'react';
import { BookOpen, Compass, Feather, Film, Music, FileText, ArrowRight } from 'lucide-react';
import namBoImage from '../assets/images/project_nam_bo_1790353109519.jpg';

export const ProjectShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'author' | 'works' | 'tech'>('author');

  return (
    <section id="project" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Background visual image with cinematic scrim overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={namBoImage}
          alt="Sông nước Nam Bộ - Bối cảnh văn học Nguyễn Quang Sáng"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Measured dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b19] via-[#070b19]/90 to-[#070b19]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Feather className="w-3.5 h-3.5" />
            <span>Nghiên cứu &amp; Tác phẩm trọng tâm</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display">
            DỰ ÁN NGỮ VĂN 11A8
          </h2>

          {/* User requested quote */}
          <p className="mt-4 text-xl sm:text-2xl text-amber-200/90 font-serif italic max-w-2xl mx-auto">
            “Ứng dụng công nghệ để đưa văn học đến gần hơn với học sinh.”
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto">
            Dự án tái hiện vẻ đẹp con người và vùng đất Nam Bộ qua lăng kính tác giả Nguyễn Quang Sáng, kết hợp cùng các phương tiện truyền thông kỹ thuật số.
          </p>
        </div>

        {/* Interactive Tabs: Tác giả | Tác phẩm | Giải pháp số */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('author')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'author'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Nhà văn Nguyễn Quang Sáng
            </button>
            <button
              onClick={() => setActiveTab('works')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'works'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Tác phẩm &amp; Sông nước Nam Bộ
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'tech'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Ứng dụng công nghệ số
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Content Card (8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl p-7 sm:p-9 bg-[#0b1329]/80 backdrop-blur-md border border-white/10 shadow-xl flex flex-col justify-between">
            {activeTab === 'author' && (
              <div>
                <div className="flex items-center gap-3 text-amber-400 text-xs uppercase tracking-wider font-semibold mb-3">
                  <Feather className="w-4 h-4" />
                  <span>Chân dung tác giả văn học Nam Bộ</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Nguyễn Quang Sáng (1932 – 2014)
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light mb-5">
                  Sinh ra tại Chợ Mới, tỉnh An Giang – cái nôi của vùng sông nước Cửu Long, Nguyễn Quang Sáng là một trong những cây bút xuất sắc nhất của nền văn xuôi Việt Nam hiện đại. Ông dành trọn cuộc đời cầm bút để viết về mảnh đất, con người phương Nam với phong cách mộc mạc, phóng khoáng, hóm hỉnh nhưng chứa chan tình nghĩa thiêng liêng.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-xs text-amber-300 font-semibold block">Quê hương</span>
                    <span className="text-sm text-slate-200">Mỹ Luông, Chợ Mới, An Giang</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-xs text-amber-300 font-semibold block">Giải thưởng</span>
                    <span className="text-sm text-slate-200">Giải thưởng Hồ Chí Minh về VHNT (2000)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-xs text-amber-300 font-semibold block">Phong cách</span>
                    <span className="text-sm text-slate-200">Đậm chất Nam Bộ, chân thực, cảm động</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'works' && (
              <div>
                <div className="flex items-center gap-3 text-sky-400 text-xs uppercase tracking-wider font-semibold mb-3">
                  <Compass className="w-4 h-4" />
                  <span>Không gian nghệ thuật &amp; Tác phẩm tiêu biểu</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Âm vang Sông nước &amp; Tình người Nam Bộ
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light mb-5">
                  Hình tượng sông rạch, xuồng ba lá, rừng tràm ngập nước cùng bom đạn chiến trường được Nguyễn Quang Sáng khắc họa chân thật đến từng nhịp thở. Tác phẩm <em>Chiếc lược ngà</em> ngợi ca tình cha con bất diệt, trong khi <em>Cánh đồng hoang</em> và <em>Mùa gió chướng</em> khẳng định khí phách quật cường, hồn hậu của đồng bào miền Tây.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-3.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-bold mb-1">
                      <BookOpen className="w-4 h-4" />
                      <span>Chiếc lược ngà (1966)</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Biểu tượng bất tử của tình phụ tử sâu sắc giữa ông Sáu và bé Thu trong bối cảnh kháng chiến chống Mỹ gian khổ.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <div className="flex items-center gap-2 text-sky-300 text-sm font-bold mb-1">
                      <Film className="w-4 h-4" />
                      <span>Cánh đồng hoang (1979)</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Kịch bản điện ảnh kinh điển đạt Huy chương vàng Liên hoan phim quốc tế Moskva, tái hiện sự sống kiên cường giữa Đồng Tháp Mười.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div>
                <div className="flex items-center gap-3 text-emerald-400 text-xs uppercase tracking-wider font-semibold mb-3">
                  <FileText className="w-4 h-4" />
                  <span>Mô hình chuyển đổi số dạy học Văn</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Sức mạnh Công nghệ trong Dự án 11A8
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light mb-5">
                  Thay vì những bài giảng độc thoại truyền thống, nhóm 11A8 chuyển tải bài học thành hệ sinh thái số hóa: mã QR tra cứu nhanh, trắc nghiệm tương tác tức thời, clip phân tích đa nền tảng và bảng câu hỏi thảo luận mở đa chiều.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-xs text-emerald-400 font-semibold block">Hệ thống video</span>
                    <span className="text-xs text-slate-300 mt-1 block">Chuỗi 10 video YouTube phân tích &amp; tư liệu</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-xs text-teal-400 font-semibold block">Trải nghiệm</span>
                    <span className="text-xs text-slate-300 mt-1 block">Rút ngắn khoảng cách giữa văn bản và học sinh</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-xs text-blue-400 font-semibold block">Hiệu quả</span>
                    <span className="text-xs text-slate-300 mt-1 block">Tăng khả năng ghi nhớ &amp; thảo luận nhóm</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href="#links"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
              >
                <span>Xem các sản phẩm đã số hóa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-slate-500 font-mono">DỰ ÁN NGỮ VĂN LỚP 11</span>
            </div>
          </div>

          {/* Side Feature Box: Literary Quotes & Key Themes (4 Cols) */}
          <div className="lg:col-span-4 rounded-2xl p-7 bg-gradient-to-b from-[#0e1738] to-[#0a1128] border border-amber-400/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-5">
                <BookOpen className="w-5 h-5" />
              </div>

              <h4 className="text-lg font-bold text-white tracking-wide uppercase font-sans">
                Chất Nam Bộ trong văn học
              </h4>

              <div className="mt-4 space-y-4 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/70 border border-white/5">
                  <p className="font-semibold text-amber-300 mb-1">Chiếc lược ngà:</p>
                  <p className="italic text-slate-300">
                    &quot;Cây lược ngà ấy chưa chải được mái tóc của con, nhưng nó như gỡ rối được phần nào tâm trạng của anh.&quot;
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/70 border border-white/5">
                  <p className="font-semibold text-sky-300 mb-1">Mùa gió chướng:</p>
                  <p className="italic text-slate-300">
                    &quot;Gió chướng về mang theo cái lành lạnh của mùa khô, rạt rào trên những rặng dừa nước bát ngát...&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <a
                href="#qr-code"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow-md shadow-amber-400/20"
              >
                Quét mã truy cập tài liệu
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
