import React, { useState } from 'react';
import { 
  Cpu, 
  Lightbulb, 
  Users, 
  BookMarked, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Code, 
  Video, 
  MessageSquare, 
  Bookmark,
  ChevronDown
} from 'lucide-react';

interface PillarDetail {
  tagline: string;
  leadParagraph: string;
  keyHighlights: {
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  techStackOrTools: string[];
  workflowStep: string;
}

const PILLAR_EXPANDED_DETAILS: Record<string, PillarDetail> = {
  'cong-nghe': {
    tagline: 'Kiến trúc số hoá chuẩn Web SPA & Nền tảng phân phối tư liệu đa kênh',
    leadParagraph:
      'Trụ cột Công nghệ chịu trách nhiệm xây dựng hạ tầng kỹ thuật bền vững: thiết kế website responsive chuẩn thiết bị trường học, tối ưu hóa tốc độ tải dữ liệu hình ảnh, tạo mã QR tương tác nhanh và lưu trữ đám mây an toàn cho kho tư liệu học tập của tập thể 11A8.',
    keyHighlights: [
      {
        title: 'Kiến trúc React + Vite + Tailwind',
        description: 'Tối ưu hóa hiển thị 60fps mượt mà, hỗ trợ chế độ tương phản hai nền sáng/tối phục vụ máy chiếu lớp học.'
      },
      {
        title: 'Mã QR & Link Hub trung tâm',
        description: 'Tích hợp quét mã QR truy cập tức thì trên điện thoại học sinh khi thảo luận nhóm và báo cáo tại lớp.'
      },
      {
        title: 'Bảo quản số tư liệu quý',
        description: 'Lưu trữ đám mây các bản thu âm, video phân tích, bài viết tay và hình ảnh tư liệu không bị suy giảm chất lượng.'
      }
    ],
    metrics: [
      { label: 'Tốc độ phản hồi', value: '< 0.5s' },
      { label: 'Tương thích thiết bị', value: '100%' },
      { label: 'Hệ thống liên kết số', value: '10 Tư liệu' }
    ],
    techStackOrTools: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'QR Code SVG API', 'Local Storage Persistence'],
    workflowStep: 'Quy trình 01: Thiết kế giao diện → Lập trình frontend → Đóng gói tư liệu → Sinh mã QR phân phối.'
  },
  'sang-tao': {
    tagline: 'Chuyển thể văn chương thành sản phẩm truyền thông số đa giác quan',
    leadParagraph:
      'Trụ cột Sáng tạo đổi mới cách tiếp cận bài học Ngữ văn bằng việc chuyển hóa ngôn từ tác phẩm thành kịch truyền thanh sống động, video recap điện ảnh, infographic tóm tắt và mô hình sa bàn thủ công, khơi gợi cảm xúc thẩm mỹ chân thực cho người học.',
    keyHighlights: [
      {
        title: 'Audio kịch truyền thanh & Lồng tiếng',
        description: 'Thu âm diễn cảm giọng đọc Nam Bộ truyền cảm, tái hiện không khí lịch sử và tình người trong từng phân cảnh tác phẩm.'
      },
      {
        title: 'Video recap điện ảnh & Shorts ngắn',
        description: 'Biên tập các trích đoạn phim kinh điển (Cánh Đồng Hoang, Mùa Gió Chướng) kết hợp phân tích văn học súc tích.'
      },
      {
        title: 'Mô hình sa bàn & Đồ họa trực quan',
        description: 'Thiết kế thủ công mô hình địa lý Nam Bộ kết hợp đồ họa infographic tổng hợp hệ thống nhân vật và thi pháp.'
      }
    ],
    metrics: [
      { label: 'Kịch bản thu âm', value: '02 Bản (AI & Thật)' },
      { label: 'Clip phim & Shorts', value: '08 Trích đoạn' },
      { label: 'Hình ảnh sáng tạo', value: '08 Khoảnh khắc' }
    ],
    techStackOrTools: ['CapCut Pro', 'Canva Edu', 'Adobe Premiere', 'Sound Lab Studio', 'Thiết kế sa bàn thủ công'],
    workflowStep: 'Quy trình 02: Soạn kịch bản phân cảnh → Thu âm diễn cảm → Dựng video tư liệu → Triển lãm mô hình.'
  },
  'tuong-tac': {
    tagline: 'Không gian mở kết nối thảo luận hai chiều & Khảo sát ý kiến tập thể',
    leadParagraph:
      'Trụ cột Tương tác xóa bỏ khoảng cách giữa người trình bày và người tiếp nhận: học sinh quét mã QR để tham gia thảo luận mở trên Padlet, để lại cảm nhận về tác giả Nguyễn Quang Sáng và bình chọn tác phẩm truyền cảm hứng nhất ngay trong tiết học.',
    keyHighlights: [
      {
        title: 'Bảng tin tương tác mở Padlet 11A8',
        description: 'Khu vực để lại lời nhắn, câu hỏi trăn trở và cảm nghĩ cá nhân của từng bạn học sinh về bài học văn học.'
      },
      {
        title: 'Trao đổi & Thảo luận nhóm tại chỗ',
        description: 'Giao diện thân thiện hỗ trợ truy cập trên mọi dòng smartphone mà không cần cài đặt ứng dụng phức tạp.'
      },
      {
        title: 'Lắng nghe phản hồi & Đóng góp',
        description: 'Tiếp nhận ý kiến nhận xét từ giáo viên bộ môn và các nhóm bạn để liên tục nâng cấp chất lượng dự án.'
      }
    ],
    metrics: [
      { label: 'Tương tác tức thì', value: 'Thời gian thực' },
      { label: 'Không gian mở Padlet', value: 'Kết nối 24/7' },
      { label: 'Phương thức kết nối', value: '1 Chạm qua QR' }
    ],
    techStackOrTools: ['Padlet Không Gian Mở', 'Khảo sát trực tuyến', 'Mã QR đa nền tảng', 'Google Drive cộng tác'],
    workflowStep: 'Quy trình 03: Khởi tạo bảng tin mở → Đính kèm mã QR trong bài thuyết trình → Thu thập ý kiến tương tác.'
  },
  'tieu-su-tac-gia': {
    tagline: 'Chân dung cuộc đời & Sự nghiệp văn chương bất hủ của nhà văn Nam Bộ',
    leadParagraph:
      'Trụ cột Tiểu sử tác giả tái hiện toàn diện chặng đường đời và chặng đường cầm bút của nhà văn Nguyễn Quang Sáng (1932 – 2014): từ quê hương Chợ Mới, An Giang, những năm tháng chiến trường khói lửa cho đến những áng văn và thước phim lay động lòng người qua hai phiên bản tư liệu số hóa đặc sắc.',
    keyHighlights: [
      {
        title: 'Chặng đường đời người chiến sĩ - nhà văn',
        description: 'Sinh năm 1932 tại Chợ Mới, An Giang; tham gia cả hai cuộc kháng chiến chống Pháp và chống Mỹ, sống và chiến đấu cùng đồng bào miền Tây Nam Bộ.'
      },
      {
        title: 'Phong cách nghệ thuật mộc mạc & Trọng nghĩa tình',
        description: 'Văn phong giản dị, hồn hậu, đậm chất phương Nam, giàu chất sống thực tế; vinh dự được Đảng và Nhà nước trao tặng Giải thưởng Hồ Chí Minh về VHNT năm 2000.'
      },
      {
        title: 'Hệ thống 02 phiên bản tư liệu số hóa (AI & Thật)',
        description: 'Dự án 11A8 kỳ công thực hiện cả bản Audio kịch truyền thanh giọng đọc AI và bản video tư liệu thực tế ghi hình trực tiếp của tập thể lớp.'
      }
    ],
    metrics: [
      { label: 'Năm sinh - Năm mất', value: '1932 – 2014' },
      { label: 'Phiên bản tư liệu', value: '02 Bản (AI & Thật)' },
      { label: 'Giải thưởng cao quý', value: 'Giải thưởng Hồ Chí Minh' }
    ],
    techStackOrTools: ['Tư liệu Hội Nhà văn VN', 'Tạp chí Văn nghệ Quân đội', 'Video tư liệu thực tế 11A8', 'Audio kịch truyền thanh AI'],
    workflowStep: 'Quy trình 04: Nghiên cứu tiểu sử tác giả → Tổng hợp tư liệu lịch sử → Số hóa 2 phiên bản (AI & Thật) → Tích hợp vào hệ sinh thái học tập.'
  }
};

export const AboutGroup: React.FC = () => {
  const [activeKeyword, setActiveKeyword] = useState<number>(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  const keywords = [
    {
      id: 'cong-nghe',
      title: 'CÔNG NGHỆ',
      subtitle: 'Nền tảng số & Công cụ hiện đại',
      icon: Cpu,
      badgeIcon: Code,
      color: 'from-blue-400 to-indigo-500',
      accentColor: '#38bdf8',
      textColor: 'group-hover:text-blue-400',
      description: 'Số hóa tư liệu học tập, phát triển website, tạo mã QR và tích hợp nền tảng trực tuyến giúp bài học trực quan và dễ tiếp cận.',
    },
    {
      id: 'sang-tao',
      title: 'SÁNG TẠO',
      subtitle: 'Đổi mới phương pháp tiếp cận',
      icon: Lightbulb,
      badgeIcon: Video,
      color: 'from-amber-400 to-yellow-500',
      accentColor: '#fbbf24',
      textColor: 'group-hover:text-amber-400',
      description: 'Chuyển hóa ngôn từ văn học thành video recap, podcast diễn cảm, infographic và trích đoạn điện ảnh sinh động.',
    },
    {
      id: 'tuong-tac',
      title: 'TƯƠNG TÁC',
      subtitle: 'Kết nối cả lớp & Thảo luận mở',
      icon: Users,
      badgeIcon: MessageSquare,
      color: 'from-emerald-400 to-teal-500',
      accentColor: '#34d399',
      textColor: 'group-hover:text-emerald-400',
      description: 'Xây dựng không gian Padlet mở, biểu quyết trực tuyến và kho lưu trữ tương tác giúp các bạn học sinh chủ động khám phá bài học.',
    },
    {
      id: 'tieu-su-tac-gia',
      title: 'TIỂU SỬ TÁC GIẢ',
      subtitle: 'Cuộc đời & Dấu ấn văn chương',
      icon: BookMarked,
      badgeIcon: Bookmark,
      color: 'from-rose-400 to-red-500',
      accentColor: '#f43f5e',
      textColor: 'group-hover:text-rose-400',
      description: 'Khắc họa chân dung nhà văn Nguyễn Quang Sáng – người chiến sĩ cầm bút trọn đời gắn bó với đất và người phương Nam qua 2 bản tư liệu (AI & Thật).',
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveKeyword(index);
  };

  const handleMobileCardClick = (index: number) => {
    setMobileExpandedIndex((prev) => (prev === index ? null : index));
  };

  // Reusable detail renderer for both Desktop (below 4 cards) and Mobile Accordion (injected between cards)
  const renderDetailContent = (pillarIdx: number) => {
    const pillar = keywords[pillarIdx];
    const detail = PILLAR_EXPANDED_DETAILS[pillar.id];

    return (
      <div 
        className="rounded-3xl border transition-all duration-500 overflow-hidden shadow-xl"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--gold-border)',
          boxShadow: 'var(--shadow)',
        }}
      >
        {/* Header Banner */}
        <div 
          className="p-5 sm:p-7 md:p-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{
            backgroundColor: 'var(--bg-surface-elevated)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md"
              style={{
                backgroundColor: 'var(--gold-soft)',
                color: 'var(--gold)',
                border: '1px solid var(--gold-border)',
              }}
            >
              {React.createElement(pillar.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]' })}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span 
                  className="text-xs font-mono uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: 'var(--gold-soft)',
                    color: 'var(--gold)',
                    border: '1px solid var(--gold-border)',
                  }}
                >
                  TRỤ CỘT 0{pillarIdx + 1}
                </span>
                <span className="text-zinc-500 font-mono">·</span>
                <span 
                  className="text-xs uppercase tracking-wider font-mono font-medium"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {pillar.subtitle}
                </span>
              </div>
              <h3 
                className="text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {pillar.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-7 md:p-9 space-y-7">
          {/* Tagline & Lead Paragraph */}
          <div className="max-w-4xl">
            <h4 
              className="text-base sm:text-lg md:text-xl font-bold font-serif italic mb-2.5 leading-snug"
              style={{ color: 'var(--gold)' }}
            >
              “{detail.tagline}”
            </h4>
            <p 
              className="text-xs sm:text-sm md:text-base leading-relaxed font-light"
              style={{ color: 'var(--text-secondary)' }}
            >
              {detail.leadParagraph}
            </p>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {detail.metrics.map((metric, mIdx) => (
              <div 
                key={`metric-${pillarIdx}-${mIdx}`}
                className="p-4 sm:p-5 rounded-2xl border transition-all"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <span 
                  className="text-[11px] sm:text-xs font-mono uppercase tracking-wider block mb-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {metric.label}
                </span>
                <span 
                  className="text-lg sm:text-xl md:text-2xl font-black font-display tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* 3 Key Highlights Specific to Selected Pillar */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--gold)' }} />
              <h5 
                className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider"
                style={{ color: 'var(--text-primary)' }}
              >
                NỘI DUNG TRIỂN KHAI TRỌNG TÂM
              </h5>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {detail.keyHighlights.map((hl, hIdx) => (
                <div 
                  key={`hl-${pillarIdx}-${hIdx}`}
                  className="p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--gold)' }} />
                      <h6 
                        className="text-xs sm:text-sm font-bold tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {hl.title}
                      </h6>
                    </div>
                    <p 
                      className="text-xs leading-relaxed font-light mt-1.5"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {hl.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Workflow Footer */}
          <div 
            className="pt-5 border-t flex flex-col lg:flex-row lg:items-center justify-between gap-5"
            style={{ borderColor: 'var(--border)' }}
          >
            {/* Toolstack tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span 
                className="text-xs font-mono font-semibold uppercase tracking-wider mr-1"
                style={{ color: 'var(--text-muted)' }}
              >
                Công cụ &amp; Tài liệu:
              </span>
              {detail.techStackOrTools.map((tool, tIdx) => (
                <span 
                  key={`tool-${pillarIdx}-${tIdx}`}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium backdrop-blur-sm"
                  style={{
                    backgroundColor: 'var(--bg-surface-elevated)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Workflow Step Indicator */}
            <div 
              className="text-xs font-mono font-medium py-1.5 px-3 rounded-xl border flex items-center gap-2 shrink-0"
              style={{
                backgroundColor: 'var(--gold-soft)',
                borderColor: 'var(--gold-border)',
                color: 'var(--gold)',
              }}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>{detail.workflowStep}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="about" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-40 dark:opacity-20"
        style={{ backgroundColor: 'var(--gold-soft)' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[140px] pointer-events-none opacity-30 dark:opacity-15"
        style={{ backgroundColor: 'var(--accent-soft)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Intro Header */}
        <div className="max-w-3xl mb-14">
          <span 
            className="text-xs font-semibold tracking-widest uppercase font-mono"
            style={{ color: 'var(--gold)' }}
          >
            Sứ mệnh &amp; Định hướng
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3 font-display uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            Định hướng <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 dark:from-amber-300 dark:via-yellow-400 dark:to-amber-500">Chuyển đổi số</span>
          </h2>
          <p 
            className="mt-4 text-base sm:text-lg font-light leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Tập thể <strong className="font-semibold" style={{ color: 'var(--gold)' }}>Lớp 11A8</strong> tiên phong ứng dụng công nghệ số vào giáo dục văn học, kết hợp sáng tạo nghệ thuật và nghiên cứu học thuật nhằm tôn vinh sự nghiệp văn chương của tác giả Nguyễn Quang Sáng.
          </p>
        </div>

        {/* Banner dẫn tới Triển lãm Khoảnh Khắc 11A8 */}
        <div 
          className="mb-14 p-5 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-all"
          style={{
            backgroundColor: 'var(--bg-surface-elevated)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="flex items-center gap-3.5">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: 'var(--gold-soft)',
                color: 'var(--gold)',
              }}
            >
              <Users className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <h4 
                className="text-sm sm:text-base font-bold font-display uppercase"
                style={{ color: 'var(--text-primary)' }}
              >
                HÌNH ẢNH HOẠT ĐỘNG TẬP THỂ LỚP 11A8
              </h4>
              <p 
                className="text-xs mt-0.5"
                style={{ color: 'var(--text-secondary)' }}
              >
                08 khoảnh khắc chân thực trong quá trình nghiên cứu, làm mô hình thủ công và số hóa dự án.
              </p>
            </div>
          </div>

          <a
            href="#khoanh-khac"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('khoanh-khac');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--bg-primary)',
            }}
          >
            <span>Khám phá 08 Khoảnh khắc</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* ==================================================
            1. MOBILE LAYOUT (Width <= 768px - md:hidden):
            Responsive Accordion - Click Card inserts and smoothly expands detail right below that card!
            ================================================== */}
        <div className="flex flex-col gap-5 md:hidden">
          {keywords.map((kw, index) => {
            const Icon = kw.icon;
            const isExpanded = mobileExpandedIndex === index;
            const detail = PILLAR_EXPANDED_DETAILS[kw.id];

            return (
              <div
                key={`mobile-pillar-${kw.id}`}
                className="rounded-2xl transition-all duration-300 border overflow-hidden select-none"
                style={{
                  backgroundColor: isExpanded ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
                  borderColor: isExpanded ? 'var(--gold)' : 'var(--border)',
                  boxShadow: isExpanded ? 'var(--shadow)' : 'var(--shadow-sm)',
                }}
              >
                {/* Mobile Card Header & Trigger Bar */}
                <div
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  onClick={() => handleMobileCardClick(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleMobileCardClick(index);
                    }
                  }}
                  className="p-6 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 shadow-sm"
                        style={{
                          backgroundColor: isExpanded ? 'var(--gold-soft)' : 'var(--bg-surface-elevated)',
                          color: 'var(--gold)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span 
                        className="text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: isExpanded ? 'var(--gold-soft)' : 'transparent',
                          color: isExpanded ? 'var(--gold)' : 'var(--text-muted)',
                          border: isExpanded ? '1px solid var(--gold-border)' : '1px solid transparent',
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3 
                      className={`text-lg font-bold tracking-tight mb-1 font-display uppercase transition-colors ${kw.textColor}`}
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {kw.title}
                    </h3>
                    <p 
                      className="text-xs font-medium uppercase tracking-wider mb-3 font-mono"
                      style={{ color: 'var(--gold)' }}
                    >
                      {kw.subtitle}
                    </p>
                    
                    <p 
                      className="text-xs sm:text-sm font-normal leading-relaxed line-clamp-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {kw.description}
                    </p>
                  </div>

                  <div 
                    className="mt-4 pt-3.5 border-t flex items-center justify-between text-xs font-semibold"
                    style={{
                      borderColor: 'var(--border)',
                      color: isExpanded ? 'var(--gold)' : 'var(--text-muted)',
                    }}
                  >
                    <span className="font-mono uppercase tracking-wider text-[11px]">
                      {isExpanded ? 'Đang mở chi tiết' : 'Chạm để mở chi tiết'}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-amber-400' : ''}`} />
                  </div>
                </div>

                {/* Mobile Expanded Detail Box - Opens directly DOWNWARDS inside the card */}
                {isExpanded && (
                  <div 
                    className="border-t animate-fadeIn px-5 pb-6 pt-5 space-y-6"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    {/* Tagline & Lead Paragraph */}
                    <div>
                      <h4 
                        className="text-sm font-bold font-serif italic mb-2 leading-snug"
                        style={{ color: 'var(--gold)' }}
                      >
                        “{detail.tagline}”
                      </h4>
                      <p 
                        className="text-xs leading-relaxed font-light"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {detail.leadParagraph}
                      </p>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-1 gap-2.5">
                      {detail.metrics.map((metric, mIdx) => (
                        <div 
                          key={`mobile-metric-${index}-${mIdx}`}
                          className="p-3.5 rounded-xl border flex items-center justify-between"
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            borderColor: 'var(--border)',
                          }}
                        >
                          <span 
                            className="text-[11px] font-mono uppercase tracking-wider"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {metric.label}
                          </span>
                          <span 
                            className="text-base font-black font-display tracking-tight"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 3 Key Highlights Specific to Selected Pillar */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
                        <h5 
                          className="text-xs font-mono font-bold uppercase tracking-wider"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          NỘI DUNG TRIỂN KHAI TRỌNG TÂM
                        </h5>
                      </div>

                      <div className="flex flex-col gap-3">
                        {detail.keyHighlights.map((hl, hIdx) => (
                          <div 
                            key={`mobile-hl-${index}-${hIdx}`}
                            className="p-3.5 rounded-xl border"
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              borderColor: 'var(--border-subtle)',
                            }}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--gold)' }} />
                              <h6 
                                className="text-xs font-bold tracking-tight"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {hl.title}
                              </h6>
                            </div>
                            <p 
                              className="text-xs leading-relaxed font-light"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              {hl.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools & Workflow Footer */}
                    <div 
                      className="pt-4 border-t flex flex-col gap-3.5"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      {/* Toolstack tags */}
                      <div>
                        <span 
                          className="text-[11px] font-mono font-semibold uppercase tracking-wider block mb-2"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          Công cụ &amp; Tài liệu:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {detail.techStackOrTools.map((tool, tIdx) => (
                            <span 
                              key={`mobile-tool-${index}-${tIdx}`}
                              className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium"
                              style={{
                                backgroundColor: 'var(--bg-surface)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border)',
                              }}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Workflow Step Indicator */}
                      <div 
                        className="text-[11px] font-mono font-medium py-1.5 px-2.5 rounded-lg border flex items-center gap-1.5"
                        style={{
                          backgroundColor: 'var(--gold-soft)',
                          borderColor: 'var(--gold-border)',
                          color: 'var(--gold)',
                        }}
                      >
                        <Layers className="w-3.5 h-3.5 shrink-0" />
                        <span className="leading-snug">{detail.workflowStep}</span>
                      </div>

                      {/* Collapse Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMobileCardClick(index);
                        }}
                        className="mt-1 w-full py-2.5 rounded-xl text-xs font-mono font-semibold border flex items-center justify-center gap-1.5 transition-colors cursor-pointer hover:bg-[var(--bg-surface-elevated)]"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          borderColor: 'var(--border)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <span>Thu gọn chi tiết</span>
                        <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ==================================================
            2. DESKTOP / TABLET LAYOUT (Width > 768px - hidden md:block):
            Symmetrical 4-Card Grid on top, Fixed Expanded Detail Box smoothly beneath all 4 cards
            ================================================== */}
        <div className="hidden md:block">
          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keywords.map((kw, index) => {
              const Icon = kw.icon;
              const isSelected = activeKeyword === index;

              return (
                <div
                  key={`desktop-pillar-${kw.id}`}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCardClick(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(index);
                    }
                  }}
                  className="group relative rounded-2xl p-7 transition-all duration-300 cursor-pointer border flex flex-col justify-between select-none"
                  style={{
                    backgroundColor: isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
                    borderColor: isSelected ? 'var(--gold)' : 'var(--border)',
                    boxShadow: isSelected ? 'var(--shadow)' : 'var(--shadow-sm)',
                    transform: isSelected ? 'translateY(-4px)' : 'none',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                        style={{
                          backgroundColor: isSelected ? 'var(--gold-soft)' : 'var(--bg-surface-elevated)',
                          color: 'var(--gold)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span 
                        className="text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: isSelected ? 'var(--gold-soft)' : 'transparent',
                          color: isSelected ? 'var(--gold)' : 'var(--text-muted)',
                          border: isSelected ? '1px solid var(--gold-border)' : '1px solid transparent',
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3 
                      className={`text-xl font-bold tracking-tight mb-1 font-display uppercase transition-colors ${kw.textColor}`}
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {kw.title}
                    </h3>
                    <p 
                      className="text-xs font-medium uppercase tracking-wider mb-4 font-mono"
                      style={{ color: 'var(--gold)' }}
                    >
                      {kw.subtitle}
                    </p>
                    
                    <p 
                      className="text-sm font-normal leading-relaxed line-clamp-3"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {kw.description}
                    </p>
                  </div>

                  <div 
                    className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold"
                    style={{
                      borderColor: 'var(--border)',
                      color: isSelected ? 'var(--gold)' : 'var(--text-muted)',
                    }}
                  >
                    <span className="font-mono uppercase tracking-wider">
                      {isSelected ? 'Đang chọn xem' : 'Nhấp xem chi tiết'}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'translate-x-0.5 -translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:translate-y-0.5'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Fixed Detail Box below all 4 cards */}
          <div className="mt-10">
            {renderDetailContent(activeKeyword)}
          </div>
        </div>

      </div>
    </section>
  );
};
