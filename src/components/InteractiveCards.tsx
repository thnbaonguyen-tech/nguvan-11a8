import React, { useState } from 'react';
import { 
  Youtube, 
  ExternalLink, 
  Copy, 
  Check, 
  Play, 
  Film, 
  Video, 
  Tv,
  Layers,
  Settings 
} from 'lucide-react';
import { ProjectLinkItem, getSafeUrl } from '../config/links';

interface InteractiveCardsProps {
  links: ProjectLinkItem[];
  onOpenConfig?: () => void;
}

export const InteractiveCards: React.FC<InteractiveCardsProps> = ({ links, onOpenConfig }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, link: ProjectLinkItem) => {
    e.stopPropagation();
    const destinationUrl = getSafeUrl(link.url, 'https://www.youtube.com');
    navigator.clipboard.writeText(destinationUrl);
    setCopiedId(link.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getPlatformIcon = (item: ProjectLinkItem) => {
    switch (item.order) {
      case 1:
        return <Play className="w-8 h-8 fill-current text-red-500" />;
      case 2:
        return <Video className="w-8 h-8 text-rose-400" />;
      case 3:
        return <Film className="w-8 h-8 text-amber-400" />;
      case 4:
        return <Play className="w-8 h-8 fill-current text-rose-500" />;
      case 5:
        return <Tv className="w-8 h-8 text-orange-400" />;
      case 6:
        return <Video className="w-8 h-8 text-red-400" />;
      case 7:
        return <Film className="w-8 h-8 text-amber-400" />;
      case 8:
        return <Play className="w-8 h-8 fill-current text-red-400" />;
      case 9:
        return <Video className="w-8 h-8 text-rose-400" />;
      case 10:
        return <Youtube className="w-8 h-8 fill-current text-red-500" />;
      default:
        return <Youtube className="w-8 h-8 fill-current text-red-500" />;
    }
  };

  // Split into Row 1 (3 items), Row 2 (3 items), Row 3 (4 items) as specifically requested
  const row1 = links.slice(0, 3);
  const row2 = links.slice(3, 6);
  const row3 = links.slice(6, 10);

  const renderCard = (item: ProjectLinkItem, index: number, isRow3: boolean = false) => {
    const isCopied = copiedId === item.id;
    const isPlaceholder = item.url === 'PASTE_REAL_LINK_HERE' || item.url.startsWith('PASTE_');
    const destinationUrl = getSafeUrl(item.url, 'https://www.youtube.com');

    return (
      <div
        key={item.id}
        tabIndex={0}
        role="region"
        aria-label={`Thẻ tương tác ${item.title}`}
        className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border bg-[#0b1329]/80 backdrop-blur-md overflow-hidden ${item.colorTheme.border} ${item.colorTheme.glow} shadow-xl shadow-black/40`}
        onClick={() => window.open(destinationUrl, '_blank', 'noopener,noreferrer')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(destinationUrl, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        {/* Subtle hover gradient background wash */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${item.colorTheme.accent} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`} 
        />
        
        {/* Ambient top light beam on card */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500 pointer-events-none" />

        {/* Top Header inside Card: Platform Badge & Copy button */}
        <div className="relative z-10 flex items-start justify-between gap-2 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-300">
              {String(item.order).padStart(2, '0')}
            </span>
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border tracking-wider uppercase ${item.colorTheme.badge}`}>
              {item.platform}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => handleCopy(e, item)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors opacity-70 group-hover:opacity-100"
            title="Sao chép đường dẫn"
            aria-label={`Sao chép liên kết ${item.title}`}
          >
            {isCopied ? (
              <span className="flex items-center text-[10px] text-emerald-400 font-mono gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Đã sao chép</span>
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Center Content: Icon & Title & Description */}
        <div className="relative z-10 my-1">
          {/* Icon Box with micro bounce / scale on hover */}
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-1 bg-slate-800/80 border border-white/10 shadow-inner group-hover:border-white/20 text-white`}>
            {getPlatformIcon(item)}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors font-sans">
            {item.title}
          </h3>

          {/* Short description specifically requested */}
          <p className="mt-1 text-sm font-medium text-slate-200">
            {item.description}
          </p>

          {/* Editorial tagline */}
          <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {item.tagline}
          </p>
        </div>

        {/* Bottom Action: "MỞ →" button glowing on hover */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400 truncate max-w-[150px]">
            {isPlaceholder ? 'youtube.com' : destinationUrl.replace(/^https?:\/\//, '')}
          </span>

          <a
            href={destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider text-slate-300 group-hover:text-amber-200 bg-white/5 group-hover:bg-amber-400/20 group-hover:border-amber-400/40 border border-white/10 transition-all duration-200 shadow-sm"
          >
            <span>{item.buttonText?.trim() || 'MỞ'}</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="links" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background visual ambience */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Điểm chạm kỹ thuật số</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display">
          KHÔNG GIAN TƯƠNG TÁC
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          “Truy cập các sản phẩm, video, hình ảnh và không gian tương tác của nhóm.”
        </p>
      </div>

      {/* 10 INTERACTIVE CARDS IN INTENTIONAL 3-ROW GRID */}
      <div className="space-y-6 sm:space-y-8">
        
        {/* HÀNG 1: YOUTUBE 01 | YOUTUBE 02 | YOUTUBE 03 (3 Columns) */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            <Youtube className="w-4 h-4 text-red-400" />
            <span>Kênh Video &amp; Điện ảnh (YouTube 01 - 03)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {row1.map((item, index) => renderCard(item, index))}
          </div>
        </div>

        {/* HÀNG 2: YOUTUBE 04 | YOUTUBE 05 | YOUTUBE 06 (3 Columns) */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            <Youtube className="w-4 h-4 text-rose-400" />
            <span>Video Ngắn &amp; Chuyên Đề Sáng Tạo (YouTube 04 - 06)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {row2.map((item, index) => renderCard(item, index + 3))}
          </div>
        </div>

        {/* HÀNG 3: YOUTUBE 07 | YOUTUBE 08 | YOUTUBE 09 | YOUTUBE 10 (4 Columns) */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            <Youtube className="w-4 h-4 text-amber-400" />
            <span>Tư Liệu Lịch Sử, Audio Kịch &amp; Triển Lãm (YouTube 07 - 10)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {row3.map((item, index) => renderCard(item, index + 6, true))}
          </div>
        </div>

      </div>

      {/* Helpful Hint banner with config button */}
      <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <span>Tất cả các liên kết mở tự động trong tab mới an toàn (<code>target=&quot;_blank&quot;</code>).</span>
        </div>
        <div className="flex items-center gap-3">
          {onOpenConfig && (
            <button
              onClick={onOpenConfig}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 transition-colors font-medium text-xs"
              title="Chỉnh sửa hoặc dán link thủ công"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Chỉnh sửa liên kết</span>
            </button>
          )}
          <span className="text-slate-400 font-mono text-[11px]">
            10/10 Video YouTube · Ngữ văn 11A8
          </span>
        </div>
      </div>
    </section>
  );
};
