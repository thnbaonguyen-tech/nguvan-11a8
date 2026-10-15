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
  Maximize2,
  Newspaper,
  ExternalLink
} from 'lucide-react';
import namBoImage from '../assets/images/project_nam_bo_1790353109519.jpg';
import { AUTHOR_PHOTOS } from '../config/authorPhotos';
import { WORKS_PHOTOS } from '../config/worksPhotos';
import essayPage03 from '../assets/images/essay-pages/essay-page-03.jpg';
import essayPage04 from '../assets/images/essay-pages/essay-page-04.jpg';
import essayPage05 from '../assets/images/essay-pages/essay-page-05.jpg';
import essayPage06 from '../assets/images/essay-pages/essay-page-06.jpg';
import essayPage07 from '../assets/images/essay-pages/essay-page-07.jpg';
import essayPage08 from '../assets/images/essay-pages/essay-page-08.jpg';

// ==================================================
// 5 BÀI BÁO THẬT VỀ NHÀ VĂN NGUYỄN QUANG SÁNG
// ==================================================
export const ARTICLES = [
  {
    id: 'art-01',
    title: 'Nhà văn Nguyễn Quang Sáng - chất "Phong vị Nam Bộ"',
    source: 'Báo Nhân Dân',
    url: 'https://nhandan.vn/nha-van-nguyen-quang-sang-chat-phong-vi-nam-bo-post848925.html'
  },
  {
    id: 'art-02',
    title: 'Nguyễn Quang Sáng bước vào nghiệp viết văn thế nào?',
    source: 'Báo VOV',
    url: 'https://vov.vn/van-hoa-giai-tri/nguyen-quang-sang-buoc-vao-nghiep-viet-van-the-nao-310315.vov'
  },
  {
    id: 'art-03',
    title: 'Vĩnh biệt nhà văn Nguyễn Quang Sáng',
    source: 'Báo Thanh Niên',
    url: 'https://thanhnien.vn/vinh-biet-nha-van-nguyen-quang-sang-185289553.htm'
  },
  {
    id: 'art-04',
    title: 'Nhà văn Nguyễn Quang Sáng: "Đại ca của tôi"',
    source: 'Báo Tuổi Trẻ',
    url: 'https://tuoitre.vn/nha-van-nguyen-quang-sang-dai-ca-cua-toi-593620.htm'
  },
  {
    id: 'art-05',
    title: 'Nguyễn Quang Sáng về với dòng sông tuổi thơ',
    source: 'VnExpress',
    url: 'https://vnexpress.net/nguyen-quang-sang-ve-voi-dong-song-tuoi-tho-2951268.html'
  }
];

// ==================================================
// DỮ LIỆU CÁC TRANG BÀI VIẾT TAY NGHỊ LUẬN VĂN HỌC 11A8
// (Đúng 6 trang tư liệu viết tay thực tế: TRANG 03 đến TRANG 08)
// ==================================================
export interface EssayPage {
  id: string;
  title: string;
  pageNumber: string;
  src: string;
  directUrl: string;
  alt: string;
}

export const essayPages: EssayPage[] = [
  { 
    id: 'page-03',
    title: 'TRANG 03',
    pageNumber: '03',
    src: essayPage03,
    directUrl: 'https://lh3.googleusercontent.com/d/1OKZ7czgbGeSS7I9sEmiNQ8ryiELsCRvl',
    alt: 'Bài viết Ngữ văn 11A8 - TRANG 03'
  },
  { 
    id: 'page-04',
    title: 'TRANG 04',
    pageNumber: '04',
    src: essayPage04,
    directUrl: 'https://lh3.googleusercontent.com/d/1Z66JUk5p9x_wxBsB8pX8HtxrpUm8hKag',
    alt: 'Bài viết Ngữ văn 11A8 - TRANG 04'
  },
  { 
    id: 'page-05',
    title: 'TRANG 05',
    pageNumber: '05',
    src: essayPage05,
    directUrl: 'https://lh3.googleusercontent.com/d/1UrPMmlT0bu01F0jhShZOqjNRCBVZJezh',
    alt: 'Bài viết Ngữ văn 11A8 - TRANG 05'
  },
  { 
    id: 'page-06',
    title: 'TRANG 06',
    pageNumber: '06',
    src: essayPage06,
    directUrl: 'https://lh3.googleusercontent.com/d/19mXjbgse3OvRQ30j2aZjDdDdyjJuRtj3',
    alt: 'Bài viết Ngữ văn 11A8 - TRANG 06'
  },
  { 
    id: 'page-07',
    title: 'TRANG 07',
    pageNumber: '07',
    src: essayPage07,
    directUrl: 'https://lh3.googleusercontent.com/d/1AgQzOJimB_k-9fAoyJAafvxT4pGTT_tf',
    alt: 'Bài viết Ngữ văn 11A8 - TRANG 07'
  },
  { 
    id: 'page-08',
    title: 'TRANG 08',
    pageNumber: '08',
    src: essayPage08,
    directUrl: 'https://lh3.googleusercontent.com/d/1pOnTDE1gJliLKuXq-ZKsM1SszZ9AwsB2',
    alt: 'Bài viết Ngữ văn 11A8 - TRANG 08'
  }
];

export const ProjectShowcase: React.FC = () => {
  // Tabs state for Phần Dự Án Ngữ Văn 11A8
  const [activeTab, setActiveTab] = useState<'author' | 'works' | 'tech'>('author');

  // Modal Lightbox state for 7 Author Photos
  const [selectedAuthorPhotoIndex, setSelectedAuthorPhotoIndex] = useState<number | null>(null);
  const duplicatedAuthorPhotos = [...AUTHOR_PHOTOS, ...AUTHOR_PHOTOS];

  // Modal Lightbox state for 7 Works Photos (from Google Drive folder 1R9qOu98T1zLCghS_vyq2moM5ieyKwmZ2)
  const [selectedWorksPhotoIndex, setSelectedWorksPhotoIndex] = useState<number | null>(null);
  const duplicatedWorksPhotos = [...WORKS_PHOTOS, ...WORKS_PHOTOS];

  // Modal Lightbox state for Phần Nghị Luận Văn Học (7 trang)
  const [selectedPageIndex, setSelectedPageIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Nhân bản mảng 7 trang để tạo hiệu ứng marquee chạy vô tận không đứt đoạn
  const duplicatedPages = [...essayPages, ...essayPages];

  // Reset zoom whenever active page changes
  useEffect(() => {
    setZoomLevel(1);
  }, [selectedPageIndex]);

  // Listen for show-author-tab event (from Hero TÁC GIẢ button)
  useEffect(() => {
    const handleSwitchToAuthor = () => {
      setActiveTab('author');
    };
    window.addEventListener('show-author-tab', handleSwitchToAuthor);
    return () => window.removeEventListener('show-author-tab', handleSwitchToAuthor);
  }, []);

  // Keyboard navigation & accessibility for Author Photos Lightbox
  useEffect(() => {
    if (selectedAuthorPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAuthorPhotoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedAuthorPhotoIndex((prev) => 
          prev !== null ? (prev === 0 ? AUTHOR_PHOTOS.length - 1 : prev - 1) : null
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedAuthorPhotoIndex((prev) => 
          prev !== null ? (prev === AUTHOR_PHOTOS.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAuthorPhotoIndex]);

  // Keyboard navigation & accessibility for Works Photos Lightbox
  useEffect(() => {
    if (selectedWorksPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedWorksPhotoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedWorksPhotoIndex((prev) => 
          prev !== null ? (prev === 0 ? WORKS_PHOTOS.length - 1 : prev - 1) : null
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedWorksPhotoIndex((prev) => 
          prev !== null ? (prev === WORKS_PHOTOS.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWorksPhotoIndex]);

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
              Tiểu sử tác giả
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
        <div id="tieu-su-tac-gia" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24 scroll-mt-28">
          
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

                {/* --------------------------------------------------
                    DẢI 8 ẢNH TƯ LIỆU NGUYỄN QUANG SÁNG (HORIZONTAL AUTO-SCROLL MARQUEE)
                    -------------------------------------------------- */}
                <div className="mt-5 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between mb-2.5 px-0.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--gold)' }} />
                      <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: 'var(--gold)' }}>
                        Hình ảnh tư liệu tác giả
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">·</span>
                      <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                        {String(AUTHOR_PHOTOS.length).padStart(2, '0')} khoảnh khắc
                      </span>
                    </div>

                    <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 hidden sm:inline">
                      Cuộn tự động · Nhấp để phóng lớn
                    </span>
                  </div>

                  {/* Infinite Marquee Container */}
                  <div className="relative overflow-hidden rounded-xl py-0.5 no-scrollbar select-none group">
                    {/* Left & Right subtle edge fade masks */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none"
                      style={{ background: 'linear-gradient(to right, var(--bg-surface), transparent)' }}
                    />
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none"
                      style={{ background: 'linear-gradient(to left, var(--bg-surface), transparent)' }}
                    />

                    {/* Auto-scroll track */}
                    <div className="animate-author-marquee gap-3">
                      {duplicatedAuthorPhotos.map((photo, pIdx) => {
                        const originalIndex = pIdx % AUTHOR_PHOTOS.length;
                        return (
                          <div
                            key={`author-marquee-${pIdx}`}
                            onClick={() => setSelectedAuthorPhotoIndex(originalIndex)}
                            className="relative w-36 sm:w-44 h-24 sm:h-28 rounded-xl overflow-hidden shrink-0 cursor-pointer border transition-all duration-300 transform hover:scale-[1.03] group/card shadow-sm"
                            style={{
                              backgroundColor: 'var(--bg-secondary)',
                              borderColor: 'var(--border)',
                            }}
                            title={`Nhấp để xem ảnh: ${photo.title}`}
                          >
                            <img
                              src={photo.url}
                              alt={photo.title}
                              loading="lazy"
                              decoding="async"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                if (e.currentTarget.src !== photo.directUrl) {
                                  e.currentTarget.src = photo.directUrl;
                                }
                              }}
                              className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover/card:scale-105"
                            />
                            
                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center gap-1.5 backdrop-blur-[1px]">
                              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-md border border-white/20">
                                Xem ảnh
                              </span>
                            </div>

                            {/* Small number tag */}
                            <span 
                              className="absolute bottom-1.5 left-1.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded backdrop-blur-md shadow-sm"
                              style={{
                                backgroundColor: 'rgba(7, 11, 25, 0.82)',
                                color: 'var(--gold)',
                                border: '1px solid var(--gold-border)',
                              }}
                            >
                              0{originalIndex + 1}
                            </span>
                          </div>
                        );
                      })}
                    </div>
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

                {/* --------------------------------------------------
                    DẢI ẢNH TƯ LIỆU TÁC PHẨM & KHÔNG GIAN NGHỆ THUẬT (FILM STRIP AUTO-SCROLL MARQUEE)
                    -------------------------------------------------- */}
                <div className="mt-5 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between mb-2.5 px-0.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--gold)' }} />
                      <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: 'var(--gold)' }}>
                        Hình ảnh tư liệu tác phẩm &amp; Không gian văn học
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">·</span>
                      <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                        {String(WORKS_PHOTOS.length).padStart(2, '0')} tư liệu
                      </span>
                    </div>

                    <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 hidden sm:inline">
                      Cuộn tự động · Nhấp để phóng lớn
                    </span>
                  </div>

                  {/* Infinite Marquee Container */}
                  <div className="relative overflow-hidden rounded-xl py-0.5 no-scrollbar select-none group">
                    {/* Left & Right subtle edge fade masks */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none"
                      style={{ background: 'linear-gradient(to right, var(--bg-surface), transparent)' }}
                    />
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none"
                      style={{ background: 'linear-gradient(to left, var(--bg-surface), transparent)' }}
                    />

                    {/* Auto-scroll track */}
                    <div className="animate-author-marquee gap-3">
                      {duplicatedWorksPhotos.map((photo, pIdx) => {
                        const originalIndex = pIdx % WORKS_PHOTOS.length;
                        return (
                          <div
                            key={`works-marquee-${pIdx}`}
                            onClick={() => setSelectedWorksPhotoIndex(originalIndex)}
                            className="relative w-36 sm:w-44 h-24 sm:h-28 rounded-xl overflow-hidden shrink-0 cursor-pointer border transition-all duration-300 transform hover:scale-[1.03] group/card shadow-sm"
                            style={{
                              backgroundColor: 'var(--bg-secondary)',
                              borderColor: 'var(--border)',
                            }}
                            title={`Nhấp để xem ảnh: ${photo.title}`}
                          >
                            <img
                              src={photo.url}
                              alt={photo.title}
                              loading="lazy"
                              decoding="async"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                if (e.currentTarget.src !== photo.directUrl) {
                                  e.currentTarget.src = photo.directUrl;
                                }
                              }}
                              className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover/card:scale-105"
                            />
                            
                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center gap-1.5 backdrop-blur-[1px]">
                              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-md border border-white/20">
                                Xem ảnh
                              </span>
                            </div>

                            {/* Small number tag */}
                            <span 
                              className="absolute bottom-1.5 left-1.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded backdrop-blur-md shadow-sm"
                              style={{
                                backgroundColor: 'rgba(7, 11, 25, 0.82)',
                                color: 'var(--gold)',
                                border: '1px solid var(--gold-border)',
                              }}
                            >
                              0{originalIndex + 1}
                            </span>
                          </div>
                        );
                      })}
                    </div>
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
                    <span className="text-xs mt-1 block" style={{ color: 'var(--text-secondary)' }}>Chuỗi 10 video YouTube phân tích &amp; tư liệu</span>
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

          {/* Side Feature Box: CÁC BÀI BÁO VỀ NGUYỄN QUANG SÁNG (4 Cols) */}
          <div 
            className="lg:col-span-4 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'var(--gold-soft)',
                    border: '1px solid var(--gold-border)',
                    color: 'var(--gold)',
                  }}
                >
                  <Newspaper className="w-5 h-5" />
                </div>
                <div>
                  <h4 
                    className="text-base sm:text-lg font-bold tracking-wide uppercase font-sans"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Các bài báo về Nguyễn Quang Sáng
                  </h4>
                  <span className="text-[11px] font-mono" style={{ color: 'var(--gold)' }}>
                    05 bài viết tư liệu báo chí
                  </span>
                </div>
              </div>

              <p 
                className="text-xs font-light mb-4 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Những bài viết tiêu biểu về cuộc đời, sự nghiệp và dấu ấn văn học của nhà văn.
              </p>

              <div className="space-y-2.5 text-xs">
                {ARTICLES.map((article) => (
                  <a
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3 rounded-xl transition-all duration-300 border hover:translate-x-1 cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border)',
                    }}
                    title={`Mở bài báo: ${article.title} (${article.source})`}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <div className="flex items-start gap-2.5 min-w-0 flex-1">
                        <div 
                          className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:scale-105"
                          style={{
                            backgroundColor: 'rgba(217, 119, 6, 0.12)',
                            color: 'var(--gold)',
                            border: '1px solid var(--gold-border)',
                          }}
                        >
                          <Newspaper className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 
                            className="font-semibold text-xs sm:text-[13px] leading-snug line-clamp-2 transition-colors group-hover:text-amber-400"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {article.title}
                          </h5>
                          <div className="mt-1 flex items-center gap-2">
                            <span 
                              className="text-[11px] font-mono font-medium"
                              style={{ color: 'var(--gold)' }}
                            >
                              Nguồn: {article.source}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div 
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div 
              className="mt-5 pt-3 flex items-center justify-between text-[11px] font-mono"
              style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}
            >
              <span>Liên kết báo chí chính thống</span>
              <span className="flex items-center gap-1 text-amber-500/80">
                <ExternalLink className="w-3 h-3" /> Mở tab mới
              </span>
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
              <span>TRIỂN LÃM TƯ LIỆU BÀI VIẾT TAY · 06 TRANG</span>
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

          {/* Marquee A4 Gallery (6 Pages: TRANG 03 - TRANG 08) */}
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

            {/* Marquee Track (duplicated 6x2 = 12 items for seamless infinite loop) */}
            <div className="animate-essay-marquee flex items-center gap-5 sm:gap-7 py-3">
              {duplicatedPages.map((page, idx) => {
                const originalIndex = idx % essayPages.length;

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
                      className="relative w-[210px] sm:w-[245px] md:w-[275px] rounded-lg overflow-hidden transition-all duration-300 transform group-hover:scale-[1.025] shadow-md border"
                      style={{
                        aspectRatio: '210 / 297',
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-card)',
                      }}
                    >
                      {/* Original handwritten document image */}
                      <img
                        src={page.src}
                        alt={page.alt}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (page.directUrl && e.currentTarget.src !== page.directUrl) {
                            e.currentTarget.src = page.directUrl;
                          }
                        }}
                        className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Top Corner Badge for Page Title */}
                      <span 
                        className="absolute top-2 left-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded backdrop-blur-md shadow-md z-10"
                        style={{
                          backgroundColor: 'rgba(7, 11, 25, 0.85)',
                          color: 'var(--gold)',
                          border: '1px solid var(--gold-border)',
                        }}
                      >
                        {page.title}
                      </span>

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 backdrop-blur-[1px]">
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider bg-black/75 px-2.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Phóng to bài viết</span>
                        </span>
                      </div>
                    </div>

                    {/* Page Label under each page */}
                    <span 
                      className="mt-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors group-hover:text-amber-400"
                      style={{ color: 'var(--gold)' }}
                    >
                      {page.title}
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
                {essayPages[selectedPageIndex].title} ({selectedPageIndex + 1} / {essayPages.length})
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
                  onError={(e) => {
                    if (essayPages[selectedPageIndex].directUrl && e.currentTarget.src !== essayPages[selectedPageIndex].directUrl) {
                      e.currentTarget.src = essayPages[selectedPageIndex].directUrl;
                    }
                  }}
                  className="w-full h-full object-contain object-center"
                />
              ) : (
                /* Elegant Fullscreen Placeholder sheet */
                <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between text-slate-800 dark:text-slate-200 bg-amber-50/20 dark:bg-slate-900/80 select-none">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-300 dark:border-slate-800 text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      NGỮ VĂN 11A8 · NGHỊ LUẬN VĂN HỌC
                    </span>
                    <span>Trang {String(selectedPageIndex + 1).padStart(2, '0')} / {String(essayPages.length).padStart(2, '0')}</span>
                  </div>

                  <div className="my-auto text-center px-4">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-serif font-bold uppercase tracking-tight">
                      {essayPages[selectedPageIndex].alt}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm font-light text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                      Khung trình chiếu bản gốc viết tay kích thước tiêu chuẩn A3.
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

      {/* ==================================================
          FULLSCREEN LIGHTBOX FOR 8 AUTHOR PHOTOS
          ================================================== */}
      {selectedAuthorPhotoIndex !== null && (
        <div 
          className="lightbox-modal animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh tư liệu tác giả Nguyễn Quang Sáng"
          onClick={() => setSelectedAuthorPhotoIndex(null)}
        >
          {/* Top Bar with title and close button */}
          <div 
            className="w-full px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/10 bg-black/80 backdrop-blur-md z-[100001] shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span 
                className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase"
                style={{
                  backgroundColor: 'var(--gold-soft)',
                  color: 'var(--gold)',
                  border: '1px solid var(--gold-border)',
                }}
              >
                Ảnh {String(selectedAuthorPhotoIndex + 1).padStart(2, '0')} / {String(AUTHOR_PHOTOS.length).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-serif italic text-slate-200 line-clamp-1 max-w-xs sm:max-w-lg">
                {AUTHOR_PHOTOS[selectedAuthorPhotoIndex].title}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedAuthorPhotoIndex(null)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Đóng ảnh"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Stage */}
          <div 
            className="lightbox-stage"
            onClick={() => setSelectedAuthorPhotoIndex(null)}
          >
            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedAuthorPhotoIndex((prev) => 
                  prev !== null ? (prev === 0 ? AUTHOR_PHOTOS.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-3 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
              aria-label="Ảnh trước"
              title="Ảnh trước (←)"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <img
              key={`author-lightbox-${selectedAuthorPhotoIndex}`}
              src={AUTHOR_PHOTOS[selectedAuthorPhotoIndex].url}
              alt={AUTHOR_PHOTOS[selectedAuthorPhotoIndex].title}
              decoding="async"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== AUTHOR_PHOTOS[selectedAuthorPhotoIndex].directUrl) {
                  e.currentTarget.src = AUTHOR_PHOTOS[selectedAuthorPhotoIndex].directUrl;
                }
              }}
              className="lightbox-image rounded-xl sm:rounded-2xl select-none shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedAuthorPhotoIndex((prev) => 
                  prev !== null ? (prev === AUTHOR_PHOTOS.length - 1 ? 0 : prev + 1) : null
                );
              }}
              className="absolute right-3 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
              aria-label="Ảnh sau"
              title="Ảnh sau (→)"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div 
            className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 z-[100000] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl mb-4 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold font-mono" style={{ color: 'var(--gold)' }}>
                Nguyễn Quang Sáng
              </span>
              <span className="text-zinc-500 font-mono">·</span>
              <span className="text-xs text-slate-300 font-sans line-clamp-1">
                {AUTHOR_PHOTOS[selectedAuthorPhotoIndex].caption}
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline shrink-0">
              Phím Esc để đóng · ← / → chuyển ảnh
            </span>
          </div>
        </div>
      )}

      {/* ==================================================
          FULLSCREEN LIGHTBOX FOR 7 WORKS PHOTOS
          ================================================== */}
      {selectedWorksPhotoIndex !== null && (
        <div 
          className="lightbox-modal animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh tư liệu tác phẩm & không gian văn học"
          onClick={() => setSelectedWorksPhotoIndex(null)}
        >
          {/* Top Bar with title and close button */}
          <div 
            className="w-full px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/10 bg-black/80 backdrop-blur-md z-[100001] shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span 
                className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase"
                style={{
                  backgroundColor: 'var(--gold-soft)',
                  color: 'var(--gold)',
                  border: '1px solid var(--gold-border)',
                }}
              >
                Tư liệu {String(selectedWorksPhotoIndex + 1).padStart(2, '0')} / {String(WORKS_PHOTOS.length).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-serif italic text-slate-200 line-clamp-1 max-w-xs sm:max-w-lg">
                {WORKS_PHOTOS[selectedWorksPhotoIndex].title}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedWorksPhotoIndex(null)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Đóng ảnh"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Stage */}
          <div 
            className="lightbox-stage"
            onClick={() => setSelectedWorksPhotoIndex(null)}
          >
            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedWorksPhotoIndex((prev) => 
                  prev !== null ? (prev === 0 ? WORKS_PHOTOS.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-3 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
              aria-label="Ảnh trước"
              title="Ảnh trước (←)"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <img
              key={`works-lightbox-${selectedWorksPhotoIndex}`}
              src={WORKS_PHOTOS[selectedWorksPhotoIndex].url}
              alt={WORKS_PHOTOS[selectedWorksPhotoIndex].title}
              decoding="async"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== WORKS_PHOTOS[selectedWorksPhotoIndex].directUrl) {
                  e.currentTarget.src = WORKS_PHOTOS[selectedWorksPhotoIndex].directUrl;
                }
              }}
              className="lightbox-image rounded-xl sm:rounded-2xl select-none shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedWorksPhotoIndex((prev) => 
                  prev !== null ? (prev === WORKS_PHOTOS.length - 1 ? 0 : prev + 1) : null
                );
              }}
              className="absolute right-3 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
              aria-label="Ảnh sau"
              title="Ảnh sau (→)"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div 
            className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 z-[100000] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl mb-4 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold font-mono" style={{ color: 'var(--gold)' }}>
                Không gian nghệ thuật &amp; Tác phẩm
              </span>
              <span className="text-zinc-500 font-mono">·</span>
              <span className="text-xs text-slate-300 font-sans line-clamp-1">
                {WORKS_PHOTOS[selectedWorksPhotoIndex].caption}
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline shrink-0">
              Phím Esc để đóng · ← / → chuyển ảnh
            </span>
          </div>
        </div>
      )}

    </section>
  );
};
