import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Compass, 
  Feather, 
  FileText, 
  ArrowRight,
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize2
} from 'lucide-react';
import namBoImage from '../assets/images/project_nam_bo_1790353109519.jpg';

// ==================================================
// DỮ LIỆU CÁC TRANG BÀI VIẾT TAY NGHỊ LUẬN VĂN HỌC 11A8
// (Đúng 5 trang khổ đứng chuẩn A4 tỷ lệ 210 : 297 theo yêu cầu)
// Khi có ảnh chụp thực tế, chỉ cần thay thế giá trị src=""
// ==================================================
export const essayPages = [
  { src: "", alt: "Bài viết Ngữ văn 11A8 - Trang 01" },
  { src: "", alt: "Bài viết Ngữ văn 11A8 - Trang 02" },
  { src: "", alt: "Bài viết Ngữ văn 11A8 - Trang 03" },
  { src: "", alt: "Bài viết Ngữ văn 11A8 - Trang 04" },
  { src: "", alt: "Bài viết Ngữ văn 11A8 - Trang 05" }
];

export const ProjectShowcase: React.FC = () => {
  // Tabs state for Phần Dự Án Ngữ Văn 11A8
  const [activeTab, setActiveTab] = useState<'author' | 'works' | 'tech'>('tech');

  // Modal Lightbox state for Phần Nghị Luận Văn Học (5 trang)
  const [selectedPageIndex, setSelectedPageIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Nhân bản mảng 5 trang để tạo hiệu ứng marquee chạy vô tận không đứt đoạn
  const duplicatedPages = [...essayPages, ...essayPages];

  // Reset zoom whenever active page changes
  useEffect(() => {
    setZoomLevel(1);
  }, [selectedPageIndex]);

  // Keyboard navigation & accessibility for Lightbox
  useEffect(() => {
    if (selectedPageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPageIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedPageIndex((prev) => 
          prev !== null ? (prev === 0 ? essayPages.length - 1 : prev - 1) : null
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedPageIndex((prev) => 
          prev !== null ? (prev === essayPages.length - 1 ? 0 : prev + 1) : null
        );
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((prev) => Math.min(prev + 0.25, 3));
      } else if (e.key === '-') {
        setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPageIndex]);

  const handlePrevPage = () => {
    setSelectedPageIndex((prev) => 
      prev !== null ? (prev === 0 ? essayPages.length - 1 : prev - 1) : null
    );
  };

  const handleNextPage = () => {
    setSelectedPageIndex((prev) => 
      prev !== null ? (prev === essayPages.length - 1 ? 0 : prev + 1) : null
    );
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <section 
      id="project" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Background visual image with cinematic scrim overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={namBoImage}
          alt="Sông nước Nam Bộ - Bối cảnh văn học Nguyễn Quang Sáng"
          className="w-full h-full object-cover object-center opacity-15 filter blur-[1px] scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-primary), var(--bg-primary))',
            opacity: 0.88,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* ==================================================
            PHẦN 1: DỰ ÁN NGỮ VĂN 11A8 (RESEARCH & TABS)
            (Giữ trọn vẹn 100% nội dung & giao diện như hình chụp)
            ================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-mono"
            style={{
              backgroundColor: 'var(--gold-soft)',
              border: '1px solid var(--gold-border)',
              color: 'var(--gold)',
            }}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Nghiên cứu &amp; Tác phẩm trọng tâm</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase font-display"
            style={{ color: 'var(--text-primary)' }}
          >
            DỰ ÁN NGỮ VĂN 11A8
          </h2>

          <p 
            className="mt-4 text-xl sm:text-2xl font-serif italic max-w-2xl mx-auto"
            style={{ color: 'var(--gold)' }}
          >
            “Ứng dụng công nghệ để đưa văn học đến gần hơn với học sinh.”
          </p>

          <p 
            className="mt-3 text-sm sm:text-base font-light max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Dự án tái hiện vẻ đẹp con người và vùng đất Nam Bộ qua lăng kính tác giả Nguyễn Quang Sáng, kết hợp cùng các phương tiện truyền thông kỹ thuật số.
          </p>
        </div>

        {/* Interactive Tabs: Chân dung tác giả | Không gian Nam Bộ | Giải pháp công nghệ */}
        <div className="flex justify-center mb-10">
          <div 
            className="inline-flex p-1.5 rounded-xl backdrop-blur-md"
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
            }}
          >
            <button
              onClick={() => setActiveTab('author')}
              className="px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: activeTab === 'author' ? 'var(--gold)' : 'transparent',
                color: activeTab === 'author' ? '#FFFFFF' : 'var(--text-secondary)',
              }}
            >
              Chân dung tác giả
            </button>
            <button
              onClick={() => setActiveTab('works')}
              className="px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: activeTab === 'works' ? 'var(--gold)' : 'transparent',
                color: activeTab === 'works' ? '#FFFFFF' : 'var(--text-secondary)',
              }}
            >
              Không gian Nam Bộ
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className="px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: activeTab === 'tech' ? 'var(--gold)' : 'transparent',
                color: activeTab === 'tech' ? '#FFFFFF' : 'var(--text-secondary)',
              }}
            >
              Giải pháp công nghệ
            </button>
          </div>
        </div>

        {/* Tab Content Box + Side Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Main Content Area (8 Cols) */}
          <div 
            className="lg:col-span-8 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
            }}
          >
            {activeTab === 'author' && (
              <div>
                <div 
                  className="flex items-center gap-3 text-xs uppercase tracking-wider font-semibold mb-3 font-mono"
                  style={{ color: 'var(--gold)' }}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Tiểu sử &amp; Sự nghiệp văn học</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-bold mb-4 font-display"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Nguyễn Quang Sáng (1932 – 2014)
                </h3>
                <p 
                  className="leading-relaxed text-sm sm:text-base font-light mb-5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Sinh ra tại Chợ Mới, tỉnh An Giang – cái nôi của vùng sông nước Cửu Long, Nguyễn Quang Sáng là một trong những cây bút xuất sắc nhất của nền văn xuôi Việt Nam hiện đại. Ông dành trọn cuộc đời cầm bút để viết về mảnh đất, con người phương Nam với phong cách mộc mạc, phóng khoáng, hóm hỉnh nhưng chứa chan tình nghĩa thiêng liêng.
                </p>
                <div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <div 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-xs font-semibold block" style={{ color: 'var(--gold)' }}>Quê hương</span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Mỹ Luông, Chợ Mới, An Giang</span>
                  </div>
                  <div 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-xs font-semibold block" style={{ color: 'var(--gold)' }}>Giải thưởng</span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Giải thưởng Hồ Chí Minh về VHNT (2000)</span>
                  </div>
                  <div 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-xs font-semibold block" style={{ color: 'var(--gold)' }}>Phong cách</span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Đậm chất Nam Bộ, chân thực, cảm động</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'works' && (
              <div>
                <div 
                  className="flex items-center gap-3 text-xs uppercase tracking-wider font-semibold mb-3 font-mono"
                  style={{ color: 'var(--gold)' }}
                >
                  <Compass className="w-4 h-4" />
                  <span>Không gian nghệ thuật &amp; Tác phẩm tiêu biểu</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-bold mb-4 font-display"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Âm vang Sông nước &amp; Tình người Nam Bộ
                </h3>
                <p 
                  className="leading-relaxed text-sm sm:text-base font-light mb-5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Hình tượng sông rạch, xuồng ba lá, rừng tràm ngập nước cùng bom đạn chiến trường được Nguyễn Quang Sáng khắc họa chân thật đến từng nhịp thở. Tác phẩm <em>Chiếc lược ngà</em> ngợi ca tình cha con bất diệt, trong khi <em>Cánh đồng hoang</em> và <em>Mùa gió chướng</em> khẳng định khí phách quật cường, hồn hậu của đồng bào miền Tây.
                </p>
                <div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <div 
                    className="p-3.5 rounded-lg"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div className="flex items-center gap-2 text-sm font-bold mb-1" style={{ color: 'var(--gold)' }}>
                      <BookOpen className="w-4 h-4" />
                      <span>Chiếc lược ngà &amp; Mùa gió chướng</span>
                    </div>
                    <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>
                      Biểu tượng bất hủ của tình cha con thiêng liêng trong khói lửa chiến tranh và nét đẹp hào sảng, phóng khoáng của thiên nhiên châu thổ.
                    </p>
                  </div>

                  <div 
                    className="p-3.5 rounded-lg"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div className="flex items-center gap-2 text-sm font-bold mb-1" style={{ color: 'var(--gold)' }}>
                      <Compass className="w-4 h-4" />
                      <span>Cánh đồng hoang &amp; Dòng sông hát</span>
                    </div>
                    <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>
                      Những thước phim và trang văn bất tử ghi lại sức sống quật khởi, ngoan cường của người dân vùng đầm lầy Đồng Tháp Mười.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div>
                <div 
                  className="flex items-center gap-3 text-xs uppercase tracking-wider font-semibold mb-3 font-mono"
                  style={{ color: 'var(--gold)' }}
                >
                  <FileText className="w-4 h-4" />
                  <span>Mô hình chuyển đổi số dạy học Văn</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-bold mb-4 font-display"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Sức mạnh Công nghệ trong Dự án 11A8
                </h3>
                <p 
                  className="leading-relaxed text-sm sm:text-base font-light mb-5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Thay vì những bài giảng độc thoại truyền thống, tập thể 11A8 chuyển tải bài học thành hệ sinh thái số hóa: mã QR tra cứu nhanh, trắc nghiệm tương tác tức thời, clip phân tích đa nền tảng và bảng câu hỏi thảo luận mở đa chiều.
                </p>
                <div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <div 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-xs font-semibold block" style={{ color: 'var(--gold)' }}>Hệ thống video</span>
                    <span className="text-xs mt-1 block" style={{ color: 'var(--text-secondary)' }}>Chuỗi 09 video YouTube phân tích &amp; tư liệu</span>
                  </div>
                  <div 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-xs font-semibold block" style={{ color: 'var(--gold)' }}>Trải nghiệm</span>
                    <span className="text-xs mt-1 block" style={{ color: 'var(--text-secondary)' }}>Rút ngắn khoảng cách giữa văn bản và học sinh</span>
                  </div>
                  <div 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-xs font-semibold block" style={{ color: 'var(--gold)' }}>Hiệu quả</span>
                    <span className="text-xs mt-1 block" style={{ color: 'var(--text-secondary)' }}>Tăng khả năng ghi nhớ &amp; thảo luận nhóm</span>
                  </div>
                </div>
              </div>
            )}

            <div 
              className="mt-8 pt-4 flex items-center justify-between"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <a
                href="#links"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('links')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold transition-colors"
                style={{ color: 'var(--gold)' }}
              >
                <span>Xem các sản phẩm đã số hóa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                DỰ ÁN NGỮ VĂN LỚP 11
              </span>
            </div>
          </div>

          {/* Side Feature Box: Literary Quotes & Key Themes (4 Cols) */}
          <div 
            className="lg:col-span-4 rounded-2xl p-7 shadow-xl flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div>
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: 'var(--gold-soft)',
                  border: '1px solid var(--gold-border)',
                  color: 'var(--gold)',
                }}
              >
                <BookOpen className="w-5 h-5" />
              </div>

              <h4 
                className="text-lg font-bold tracking-wide uppercase font-sans"
                style={{ color: 'var(--text-primary)' }}
              >
                Chất Nam Bộ trong văn học
              </h4>

              <div className="mt-4 space-y-4 text-xs">
                <div 
                  className="p-3.5 rounded-lg"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p className="font-semibold mb-1" style={{ color: 'var(--gold)' }}>Chiếc lược ngà:</p>
                  <p className="italic" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Cây lược ngà ấy chưa chải được mái tóc của con, nhưng nó như gỡ rối được phần nào tâm trạng của anh.&quot;
                  </p>
                </div>

                <div 
                  className="p-3.5 rounded-lg"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p className="font-semibold mb-1" style={{ color: 'var(--gold)' }}>Mùa gió chướng:</p>
                  <p className="italic" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Gió chướng về mang theo cái lành lạnh của mùa khô, rạt rào trên những rặng dừa nước bát ngát...&quot;
                  </p>
                </div>

                <div 
                  className="p-3.5 rounded-lg"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p className="font-semibold mb-1" style={{ color: 'var(--gold)' }}>Cánh đồng hoang:</p>
                  <p className="italic" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Giữa đầm lầy Đồng Tháp Mười mênh mông, tình yêu gia đình và ý chí kiên cường của con người Nam Bộ ngời sáng như đoá sen giữa lửa đạn.&quot;
                  </p>
                </div>

                <div 
                  className="p-3.5 rounded-lg"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p className="font-semibold mb-1" style={{ color: 'var(--gold)' }}>Văn phong Nam Bộ:</p>
                  <p className="italic" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Văn chương Nguyễn Quang Sáng mộc mạc như hạt phù sa sông Tiền, hào sảng, trọng nghĩa tình và tha thiết với quê hương xứ sở.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ==================================================
            PHẦN 2: NGHỊ LUẬN VĂN HỌC - TRIỂN LÃM BÀI VIẾT TAY (5 TRANG)
            (Khổ A4 210 : 297, Marquee mượt mà, Lightbox xem phóng to)
            ================================================== */}
        <div className="pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 font-mono backdrop-blur-md"
              style={{
                backgroundColor: 'var(--gold-soft)',
                border: '1px solid var(--gold-border)',
                color: 'var(--gold)',
              }}
            >
              <Feather className="w-3.5 h-3.5" />
              <span>TRIỂN LÃM TƯ LIỆU BÀI VIẾT TAY · 05 TRANG</span>
            </div>

            <h3 
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase font-display"
              style={{ color: 'var(--text-primary)' }}
            >
              NGHỊ LUẬN VĂN HỌC
            </h3>

            <p 
              className="mt-3 text-sm sm:text-base font-serif italic max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              “Những trang viết tay lưu giữ dấu ấn học tập và sáng tạo của học sinh 11A8.”
            </p>
          </div>

          {/* Marquee A4 Gallery (5 Pages) */}
          <div className="relative w-full overflow-hidden rounded-2xl py-3 mb-10">
            
            {/* Edge Fades: theme-adaptive */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, var(--bg-primary), transparent)',
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, var(--bg-primary), transparent)',
              }}
            />

            {/* Marquee Track (duplicated 5x2 = 10 items for seamless infinite loop) */}
            <div className="animate-essay-marquee flex items-center gap-5 sm:gap-7 py-3">
              {duplicatedPages.map((page, idx) => {
                const originalIndex = idx % essayPages.length;
                const pageNumberStr = String(originalIndex + 1).padStart(2, '0');

                return (
                  <div 
                    key={`essay-page-${idx}`}
                    className="flex flex-col items-center shrink-0 cursor-pointer group"
                    onClick={() => setSelectedPageIndex(originalIndex)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedPageIndex(originalIndex);
                      }
                    }}
                    aria-label={`Xem to ${page.alt}`}
                  >
                    {/* Physical A4 Sheet Container (210 : 297 ratio) */}
                    <div
                      className="relative w-[210px] sm:w-[245px] md:w-[275px] rounded-lg overflow-hidden transition-all duration-300 transform group-hover:scale-[1.025]"
                      style={{
                        aspectRatio: '210 / 297',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-card)',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      {page.src ? (
                        /* Original handwritten document image */
                        <img
                          src={page.src}
                          alt={page.alt}
                          loading="lazy"
                          className="w-full h-full object-contain object-center rounded-lg"
                        />
                      ) : (
                        /* Clean, neutral, intentional empty A4 paper slot */
                        <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 select-none relative overflow-hidden bg-gradient-to-b from-transparent via-black/[0.01] to-black/[0.03] dark:via-white/[0.01] dark:to-white/[0.03]">
                          
                          {/* Simulated notebook ruling lines for authentic paper aesthetic */}
                          <div className="absolute inset-x-5 top-12 bottom-12 flex flex-col justify-between pointer-events-none opacity-20 dark:opacity-10">
                            {Array.from({ length: 11 }).map((_, lineIdx) => (
                              <div 
                                key={lineIdx} 
                                className="w-full border-b"
                                style={{ borderColor: 'var(--text-muted)' }}
                              />
                            ))}
                          </div>

                          {/* Top Page Header inside paper sheet */}
                          <div className="relative z-10 flex items-center justify-between pb-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                            <span 
                              className="text-[10px] font-mono tracking-widest uppercase font-semibold"
                              style={{ color: 'var(--gold)' }}
                            >
                              NGỮ VĂN 11A8
                            </span>
                            <span 
                              className="text-[10px] font-mono font-bold"
                              style={{ color: 'var(--text-muted)' }}
                            >
                              #{pageNumberStr}
                            </span>
                          </div>

                          {/* Center document placeholder badge */}
                          <div className="relative z-10 flex flex-col items-center text-center my-auto px-2">
                            <div 
                              className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-colors shadow-sm"
                              style={{
                                backgroundColor: 'var(--gold-soft)',
                                border: '1px solid var(--gold-border)',
                                color: 'var(--gold)',
                              }}
                            >
                              <FileText className="w-5 h-5 opacity-80" />
                            </div>
                            <span 
                              className="text-xs sm:text-sm font-serif font-bold tracking-tight uppercase"
                              style={{ color: 'var(--text-primary)' }}
                            >
                              Trang {pageNumberStr}
                            </span>
                            <span 
                              className="text-[10px] font-mono mt-1 opacity-70"
                              style={{ color: 'var(--text-muted)' }}
                            >
                              Bản chụp A4 viết tay
                            </span>
                          </div>

                          {/* Bottom subtle zoom hint */}
                          <div className="relative z-10 flex items-center justify-center pt-2 border-t text-[10px] font-mono" style={{ borderColor: 'var(--border-subtle)', color: 'var(--gold)' }}>
                            <span className="flex items-center gap-1 group-hover:underline">
                              <Maximize2 className="w-3 h-3" />
                              <span>Nhấp xem toàn màn hình</span>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Page Label under each page */}
                    <span 
                      className="mt-2.5 text-[11px] font-mono font-semibold tracking-widest uppercase transition-colors group-hover:text-amber-400"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      TRANG {pageNumberStr}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==================================================
              INFORMATION BOX: THÔNG TIN TƯ LIỆU NGHỊ LUẬN VĂN HỌC
              ================================================== */}
          <div 
            className="rounded-2xl p-6 sm:p-8 backdrop-blur-md border shadow-lg transition-colors"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow)',
            }}
          >
            {/* Header Row */}
            <div 
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div>
                <div 
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold mb-1" 
                  style={{ color: 'var(--gold)' }}
                >
                  <span>HỒ SƠ HỌC TẬP</span>
                  <span>·</span>
                  <span>BẢN GỐC SỐ HÓA</span>
                </div>
                <h4 
                  className="text-xl sm:text-2xl font-black tracking-tight uppercase font-display" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  NGHỊ LUẬN VĂN HỌC
                </h4>
                <p 
                  className="text-xs sm:text-sm font-serif italic mt-0.5" 
                  style={{ color: 'var(--gold)' }}
                >
                  Bài viết của học sinh 11A8
                </p>
              </div>
              
              <p 
                className="text-xs sm:text-sm font-serif italic max-w-xl leading-relaxed" 
                style={{ color: 'var(--text-secondary)' }}
              >
                “Những trang viết tay ghi lại cách học sinh 11A8 tiếp cận tác giả, tác phẩm và những giá trị của văn học Việt Nam.”
              </p>
            </div>

            {/* 4 Small Editorial Metadata Items */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
              <div 
                className="p-3.5 rounded-xl border transition-colors" 
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  borderColor: 'var(--border)' 
                }}
              >
                <span 
                  className="text-[10px] sm:text-xs font-mono tracking-wider uppercase font-semibold block mb-1" 
                  style={{ color: 'var(--gold)' }}
                >
                  THỂ LOẠI
                </span>
                <span 
                  className="text-xs sm:text-sm font-medium block" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  Nghị luận văn học
                </span>
              </div>

              <div 
                className="p-3.5 rounded-xl border transition-colors" 
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  borderColor: 'var(--border)' 
                }}
              >
                <span 
                  className="text-[10px] sm:text-xs font-mono tracking-wider uppercase font-semibold block mb-1" 
                  style={{ color: 'var(--gold)' }}
                >
                  HÌNH THỨC
                </span>
                <span 
                  className="text-xs sm:text-sm font-medium block" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  Bài viết tay
                </span>
              </div>

              <div 
                className="p-3.5 rounded-xl border transition-colors" 
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  borderColor: 'var(--border)' 
                }}
              >
                <span 
                  className="text-[10px] sm:text-xs font-mono tracking-wider uppercase font-semibold block mb-1" 
                  style={{ color: 'var(--gold)' }}
                >
                  TƯ LIỆU
                </span>
                <span 
                  className="text-xs sm:text-sm font-medium block" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  Các trang bài viết được số hóa từ bản gốc
                </span>
              </div>

              <div 
                className="p-3.5 rounded-xl border transition-colors" 
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  borderColor: 'var(--border)' 
                }}
              >
                <span 
                  className="text-[10px] sm:text-xs font-mono tracking-wider uppercase font-semibold block mb-1" 
                  style={{ color: 'var(--gold)' }}
                >
                  CHỦ ĐỀ
                </span>
                <span 
                  className="text-xs sm:text-sm font-medium block" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  Nguyễn Quang Sáng &amp; Văn học Việt Nam
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ==================================================
          FULLSCREEN LIGHTBOX / DOCUMENT VIEWER
          Opens when user clicks any handwritten essay page (5 pages)
          ================================================== */}
      {selectedPageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/92 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Trình xem trang bài viết tay"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-slate-950/80 z-20">
            {/* Document Title & Page Indicator */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                Trang {String(selectedPageIndex + 1).padStart(2, '0')} / {String(essayPages.length).padStart(2, '0')}
              </span>
              <span className="hidden sm:inline text-xs text-slate-300 font-serif italic truncate max-w-sm">
                {essayPages[selectedPageIndex].alt}
              </span>
            </div>

            {/* Zoom & Close Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                aria-label="Thu nhỏ"
                title="Thu nhỏ (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <button
                onClick={handleResetZoom}
                className="px-2.5 py-1 text-xs font-mono rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Đặt lại tỉ lệ phóng"
              >
                {Math.round(zoomLevel * 100)}%
              </button>

              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                aria-label="Phóng to"
                title="Phóng to (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <div className="h-4 w-px bg-white/20 mx-1" />

              <button
                onClick={() => setSelectedPageIndex(null)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Đóng"
                title="Đóng (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central Viewer Stage: Preserves authentic 210:297 A4 ratio */}
          <div 
            className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-auto relative"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedPageIndex(null);
              }
            }}
          >
            {/* Previous Page Button (Desktop) */}
            <button
              onClick={handlePrevPage}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/15 shadow-xl transition-all hover:scale-110 cursor-pointer"
              aria-label="Trang trước"
              title="Trang trước (Phím ←)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Page Button (Desktop) */}
            <button
              onClick={handleNextPage}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/15 shadow-xl transition-all hover:scale-110 cursor-pointer"
              aria-label="Trang sau"
              title="Trang sau (Phím →)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* A4 Sheet Presentation */}
            <div 
              className="relative max-h-[82vh] transition-transform duration-200 ease-out rounded-lg shadow-2xl overflow-hidden border border-white/15 flex items-center justify-center bg-white dark:bg-slate-900"
              style={{
                aspectRatio: '210 / 297',
                width: 'min(90vw, 680px)',
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
              }}
            >
              {essayPages[selectedPageIndex].src ? (
                /* Authentic high-res handwritten page image */
                <img
                  src={essayPages[selectedPageIndex].src}
                  alt={essayPages[selectedPageIndex].alt}
                  className="w-full h-full object-contain object-center"
                />
              ) : (
                /* Elegant Fullscreen Placeholder sheet */
                <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between text-slate-800 dark:text-slate-200 bg-amber-50/20 dark:bg-slate-900/80 select-none">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-300 dark:border-slate-800 text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      NGỮ VĂN 11A8 · NGHỊ LUẬN VĂN HỌC
                    </span>
                    <span>Trang {String(selectedPageIndex + 1).padStart(2, '0')} / 05</span>
                  </div>

                  <div className="my-auto text-center px-4">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-serif font-bold uppercase tracking-tight">
                      {essayPages[selectedPageIndex].alt}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm font-light text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                      Khung trình chiếu bản gốc viết tay kích thước tiêu chuẩn A4 (tỷ lệ 210 : 297).
                    </p>
                    <p className="mt-4 text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-400/10 py-1.5 px-3 rounded-full inline-block border border-amber-400/20">
                      Sẵn sàng tải lên hình ảnh trang viết tay thực tế
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-300 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Dự án tập thể lớp 11A8</span>
                    <span>Tác giả Nguyễn Quang Sáng</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Navigation Hint Bar */}
          <div className="py-2.5 px-4 bg-slate-950/80 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono z-20">
            <span className="hidden sm:inline">Phím điều hướng: ← Trang trước · → Trang sau · Esc để Đóng</span>
            <div className="flex items-center gap-4 mx-auto sm:mx-0">
              <button 
                onClick={handlePrevPage}
                className="hover:text-amber-400 flex items-center gap-1 transition-colors cursor-pointer"
                aria-label="Trang trước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Trang trước</span>
              </button>
              <span className="text-white/30">|</span>
              <button 
                onClick={handleNextPage}
                className="hover:text-amber-400 flex items-center gap-1 transition-colors cursor-pointer"
                aria-label="Trang sau"
              >
                <span>Trang sau</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
