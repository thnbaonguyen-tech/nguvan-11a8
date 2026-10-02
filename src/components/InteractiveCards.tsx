import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Sparkles, 
  Film, 
  BookOpen, 
  Layers,
  ArrowRight,
  FolderOpen
} from 'lucide-react';
import { ProjectLinkItem, getSafeUrl } from '../config/links';

// Custom curated editorial images for each resource card
import thumbDongSongHat from '../assets/images/dong_song_hat_1790874984888.jpg';
import thumbNhuMotHuyenThoai from '../assets/images/nhu_mot_huyen_thoai_1790874998592.jpg';
import thumbChoDenBaoGio from '../assets/images/cho_den_bao_gio_1790960433410.jpg';
import thumbMuaGioChuong from '../assets/images/mua_gio_chuong_1790875013571.jpg';
import thumbCanhDongHoang from '../assets/images/canh_dong_hoang_1790875026105.jpg';
import thumbChiecLuocNga from '../assets/images/chiec_luoc_nga_1790875037216.jpg';
import thumbTacGia from '../assets/images/tac_gia_nguyen_quang_sang_1790875071267.jpg';
import projectNamBoImg from '../assets/images/project_nam_bo_1790353109519.jpg';
import heroArtworkImg from '../assets/images/hero_lit_tech_1790353095687.jpg';

interface InteractiveCardsProps {
  links: ProjectLinkItem[];
  onOpenConfig?: () => void;
}

interface EditorialThumbnailConfig {
  image: string;
  categoryTag: string;
  badgeCode: string;
  subTheme: string;
}

const EDITORIAL_THUMBNAILS: Record<number, EditorialThumbnailConfig> = {
  1: {
    image: thumbDongSongHat,
    categoryTag: 'SÔNG NƯỚC NAM BỘ',
    badgeCode: 'NQS-01',
    subTheme: 'Khúc ca dòng sông & cội nguồn',
  },
  2: {
    image: projectNamBoImg,
    categoryTag: 'KÝ ỨC TUỔI THƠ',
    badgeCode: 'NQS-02',
    subTheme: 'Miền thơ ấu giữa đồng nước',
  },
  3: {
    image: thumbNhuMotHuyenThoai,
    categoryTag: 'ĐIỆN ẢNH NAM BỘ',
    badgeCode: 'NQS-03',
    subTheme: 'Trích đoạn phim tài liệu nghệ thuật',
  },
  4: {
    image: projectNamBoImg,
    categoryTag: 'MÙA NƯỚC PHÙ SA',
    badgeCode: 'NQS-04',
    subTheme: 'Điểm chạm văn học châu thổ',
  },
  5: {
    image: thumbChoDenBaoGio,
    categoryTag: 'SÁNG TẠO 11A8',
    badgeCode: 'NQS-05',
    subTheme: 'Góc nhìn người trẻ về chiến tranh',
  },
  6: {
    image: thumbMuaGioChuong,
    categoryTag: 'ĐIỆN ẢNH KINH ĐIỂN',
    badgeCode: 'NQS-06',
    subTheme: 'Phim Mùa Gió Chướng (1978)',
  },
  7: {
    image: thumbCanhDongHoang,
    categoryTag: 'BẢN HÙNG CA ĐỒNG THÁP',
    badgeCode: 'NQS-07',
    subTheme: 'Phim Cánh Đồng Hoang (1979)',
  },
  8: {
    image: thumbChiecLuocNga,
    categoryTag: 'KỶ VẬT TÌNH PHỤ TỬ',
    badgeCode: 'NQS-08',
    subTheme: 'Chiếc Lược Ngà (1966)',
  },
  9: {
    image: thumbTacGia,
    categoryTag: 'HỒ SƠ TÁC GIẢ',
    badgeCode: 'NQS-09',
    subTheme: 'Nhà văn Nguyễn Quang Sáng (1932 - 2014)',
  },
};

interface ThoiThoAuThumbnailProps {
  isHovered: boolean;
}

export const ThoiThoAuThumbnail: React.FC<ThoiThoAuThumbnailProps> = ({ isHovered }) => {
  return (
    <div className="relative w-full aspect-video overflow-hidden select-none rounded-t-[16px] bg-[#0d1326]">
      {/* 1. Cinematic Vectorized Artwork: Nostalgic Mekong Delta Sunset, Old Stilt House & Childhood */}
      <svg
        className="w-full h-full object-cover filter contrast-[1.08] saturate-[1.1] transition-transform duration-700 ease-out"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
        viewBox="0 0 640 360"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sunset sky gradient */}
          <linearGradient id="ttaSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#151b33" />
            <stop offset="28%" stopColor="#451e33" />
            <stop offset="52%" stopColor="#823024" />
            <stop offset="72%" stopColor="#bf511d" />
            <stop offset="88%" stopColor="#ea8b2b" />
            <stop offset="100%" stopColor="#ffd063" />
          </linearGradient>

          {/* Setting sun glow */}
          <radialGradient id="ttaSun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9db" stopOpacity="1" />
            <stop offset="25%" stopColor="#ffc55c" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#f27d18" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d84315" stopOpacity="0" />
          </radialGradient>

          {/* River water gradient */}
          <linearGradient id="ttaRiver" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5c2b1a" />
            <stop offset="22%" stopColor="#3c1e24" />
            <stop offset="55%" stopColor="#1e2133" />
            <stop offset="100%" stopColor="#0d1220" />
          </linearGradient>

          {/* Sun path reflection on river */}
          <linearGradient id="ttaSunReflection" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffd54f" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#ff7043" stopOpacity="0.45" />
            <stop offset="90%" stopColor="#8d2e26" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1e2133" stopOpacity="0" />
          </linearGradient>

          {/* Editorial dark gradient for typography contrast */}
          <linearGradient id="ttaVignette" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#070b19" stopOpacity="0.92" />
            <stop offset="38%" stopColor="#070b19" stopOpacity="0.78" />
            <stop offset="65%" stopColor="#070b19" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#070b19" stopOpacity="0.12" />
          </linearGradient>

          {/* Subtle vintage film grain */}
          <filter id="ttaFilmGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.9  0 0 0 0 0.85  0 0 0 0 0.7  0 0 0 0.12 0" />
          </filter>
        </defs>

        {/* Sky */}
        <rect width="640" height="235" fill="url(#ttaSky)" />

        {/* Distant soft clouds */}
        <path d="M 0 110 Q 140 100 280 115 T 560 105 T 640 112 L 640 160 L 0 160 Z" fill="#6a2a30" opacity="0.25" />
        <path d="M 60 70 Q 220 55 380 75 T 640 65 L 640 120 L 60 120 Z" fill="#2d1c2d" opacity="0.35" />

        {/* Golden setting sun */}
        <circle cx="430" cy="170" r="38" fill="url(#ttaSun)" />
        <circle cx="430" cy="170" r="16" fill="#fff5cc" opacity="0.9" />

        {/* Far horizon coconut palms and riparian forest silhouettes */}
        <path
          d="M 0 205 Q 60 202 120 204 T 240 200 T 360 203 T 480 200 T 600 202 T 640 203 L 640 220 L 0 220 Z"
          fill="#3b171c"
        />
        {/* Palm tree groves on horizon */}
        <g fill="#2d141b">
          <path d="M 330 202 Q 338 180 342 165 Q 330 170 320 178 M 342 165 Q 346 172 355 178 M 342 165 Q 342 152 342 145 M 342 165 Q 355 160 365 168 M 342 165 Q 332 158 325 162" stroke="#2d141b" strokeWidth="1.5" fill="none" />
          <path d="M 355 204 Q 360 188 363 172 Q 352 176 345 184 M 363 172 Q 368 178 376 182 M 363 172 Q 373 168 382 174 M 363 172 Q 362 160 361 154" stroke="#2d141b" strokeWidth="1.5" fill="none" />
          <path d="M 490 203 Q 498 184 502 166 Q 490 172 482 180 M 502 166 Q 508 174 518 180 M 502 166 Q 515 162 524 170 M 502 166 Q 501 153 500 146" stroke="#2d141b" strokeWidth="1.5" fill="none" />
          <path d="M 515 204 Q 520 190 522 176 Q 512 180 505 188 M 522 176 Q 528 182 537 186 M 522 176 Q 533 172 542 178" stroke="#2d141b" strokeWidth="1.5" fill="none" />
        </g>

        {/* Birds flying home at dusk */}
        <g stroke="#3d1b22" strokeWidth="1.5" fill="none" opacity="0.85">
          <path d="M 280 80 Q 285 75 290 80 Q 295 75 300 80" />
          <path d="M 305 92 Q 309 88 313 92 Q 317 88 321 92" />
          <path d="M 268 96 Q 271 93 274 96 Q 277 93 280 96" />
        </g>

        {/* River surface */}
        <rect y="208" width="640" height="152" fill="url(#ttaRiver)" />

        {/* Shimmering sun path on water */}
        <polygon points="415,208 445,208 480,360 380,360" fill="url(#ttaSunReflection)" />
        {/* Water wave ripples */}
        <g stroke="#f59e0b" strokeWidth="1.2" opacity="0.55">
          <line x1="410" y1="216" x2="450" y2="216" strokeDasharray="6,4" />
          <line x1="395" y1="228" x2="465" y2="228" strokeDasharray="10,6" />
          <line x1="380" y1="242" x2="480" y2="242" strokeDasharray="14,8" />
          <line x1="360" y1="260" x2="505" y2="260" strokeDasharray="18,10" />
          <line x1="340" y1="285" x2="530" y2="285" strokeDasharray="24,12" strokeWidth="1.6" opacity="0.4" />
          <line x1="320" y1="315" x2="560" y2="315" strokeDasharray="30,16" strokeWidth="2" opacity="0.3" />
        </g>

        {/* Riverbank on left and middle-bottom */}
        <path
          d="M 0 250 Q 80 245 150 255 T 270 270 T 360 310 L 360 360 L 0 360 Z"
          fill="#1b1720"
        />
        <path
          d="M 0 265 Q 70 260 130 270 T 230 290 T 310 340 L 310 360 L 0 360 Z"
          fill="#131018"
        />

        {/* Water coconut fronds (dừa nước) dipping towards water on left riverbank */}
        <g stroke="#18131d" strokeWidth="2.5" fill="none">
          <path d="M 0 300 Q 50 280 90 295" />
          <path d="M 0 330 Q 70 295 130 320" />
          <path d="M 20 350 Q 90 320 150 345" />
        </g>
        <g fill="#18131d">
          <path d="M 60 285 Q 70 278 80 288 Q 72 292 60 285 Z" />
          <path d="M 75 288 Q 88 282 96 293 Q 86 296 75 288 Z" />
          <path d="M 100 305 Q 115 298 124 310 Q 112 314 100 305 Z" />
          <path d="M 118 312 Q 134 306 142 320 Q 128 322 118 312 Z" />
        </g>

        {/* Old rural wooden stilt house (nhà gỗ miền Tây) by river */}
        <g>
          {/* House stilts */}
          <line x1="175" y1="250" x2="175" y2="285" stroke="#150f16" strokeWidth="3" />
          <line x1="190" y1="248" x2="190" y2="280" stroke="#150f16" strokeWidth="3" />
          <line x1="220" y1="252" x2="220" y2="295" stroke="#150f16" strokeWidth="3" />
          <line x1="245" y1="254" x2="245" y2="305" stroke="#150f16" strokeWidth="3.5" />
          <line x1="270" y1="260" x2="270" y2="310" stroke="#150f16" strokeWidth="3" />

          {/* House body */}
          <polygon points="170,248 265,248 260,215 165,215" fill="#20151c" />
          {/* Thatched nipa palm roof */}
          <polygon points="150,220 215,185 280,220" fill="#2d1c24" />
          <polygon points="148,222 215,183 282,222" stroke="#3d2632" strokeWidth="1.5" fill="none" />

          {/* Warm glowing window (lamp light inside house) */}
          <rect x="200" y="222" width="16" height="14" rx="1" fill="#f59e0b" />
          <rect x="202" y="224" width="12" height="10" rx="1" fill="#fffbeb" opacity="0.9" />
          {/* Light window reflection on stilts / ground */}
          <ellipse cx="208" cy="275" rx="18" ry="6" fill="#f59e0b" opacity="0.3" />

          {/* Wooden porch / verandah railings */}
          <line x1="255" y1="242" x2="285" y2="242" stroke="#251822" strokeWidth="2" />
          <line x1="265" y1="242" x2="265" y2="256" stroke="#251822" strokeWidth="2" />
          <line x1="280" y1="242" x2="280" y2="256" stroke="#251822" strokeWidth="2" />
        </g>

        {/* Wooden pier / footbridge (cầu ván bến sông) extending to water */}
        <g stroke="#1a121b" strokeWidth="2.5">
          <line x1="260" y1="265" x2="330" y2="285" strokeWidth="4" />
          <line x1="290" y1="275" x2="290" y2="315" />
          <line x1="320" y1="283" x2="320" y2="325" />
          {/* Wooden mooring pole */}
          <line x1="345" y1="280" x2="345" y2="335" strokeWidth="3" />
        </g>

        {/* Small traditional wooden sampan boat (xuồng ba lá) floating by pier */}
        <g>
          {/* Boat hull */}
          <path
            d="M 330 305 Q 365 315 415 305 Q 375 328 330 305 Z"
            fill="#23171f"
            stroke="#35222e"
            strokeWidth="1.2"
          />
          {/* Boat reflection in water */}
          <path
            d="M 335 312 Q 370 324 410 312 Q 370 330 335 312 Z"
            fill="#120c11"
            opacity="0.6"
          />
          {/* Mooring rope */}
          <path d="M 345 300 Q 342 308 348 312" stroke="#4a332a" strokeWidth="1" fill="none" />
          {/* Oar / paddle lying across */}
          <line x1="345" y1="298" x2="395" y2="315" stroke="#5c3826" strokeWidth="1.5" />
        </g>

        {/* Childhood figures: nostalgic silhouettes on the wooden landing & riverbank */}
        {/* Child 1: Sitting on the edge of the wooden landing, feet dangling near the warm water */}
        <g fill="#17111a">
          {/* Head with small rural cap/hair */}
          <circle cx="316" cy="265" r="4.5" />
          {/* Torso leaning slightly forward */}
          <path d="M 314 269 Q 312 278 316 283 L 322 283 Q 320 275 318 269 Z" />
          {/* Dangling legs */}
          <path d="M 316 283 L 316 295 L 319 295" stroke="#17111a" strokeWidth="2" fill="none" />
          <path d="M 320 283 L 321 293 L 324 293" stroke="#17111a" strokeWidth="1.8" fill="none" />

          {/* Child 2: Standing on riverbank, looking out at the sunset */}
          <circle cx="282" cy="254" r="5" />
          <path d="M 279 259 L 285 259 L 287 274 L 278 274 Z" />
          <line x1="281" y1="274" x2="280" y2="284" stroke="#17111a" strokeWidth="2.2" />
          <line x1="285" y1="274" x2="286" y2="284" stroke="#17111a" strokeWidth="2.2" />
          {/* Arm pointing toward the sunset */}
          <path d="M 284 263 Q 295 260 304 256" stroke="#17111a" strokeWidth="1.8" fill="none" />
        </g>

        {/* Large sweeping coconut tree silhouette framing the top-right corner */}
        <g stroke="#1a121c" fill="none">
          {/* Trunk leaning out over the river */}
          <path d="M 640 340 Q 610 260 575 190 Q 560 160 550 140" strokeWidth="8" />
          {/* Coconut palm fronds */}
          <path d="M 550 140 Q 510 130 470 150" strokeWidth="2" />
          <path d="M 550 140 Q 520 110 490 115" strokeWidth="2" />
          <path d="M 550 140 Q 535 90 520 70" strokeWidth="2" />
          <path d="M 550 140 Q 565 95 585 90" strokeWidth="2" />
          <path d="M 550 140 Q 585 120 615 130" strokeWidth="2" />
          <path d="M 550 140 Q 580 150 600 175" strokeWidth="2" />
          {/* Palm leaves detail */}
          <g strokeWidth="1" stroke="#1a121c">
            <path d="M 500 138 L 495 152 M 485 142 L 480 154 M 475 148 L 470 156" />
            <path d="M 530 115 L 522 128 M 515 116 L 508 128 M 500 118 L 492 128" />
            <path d="M 538 95 L 528 102 M 530 85 L 522 94 M 524 75 L 518 84" />
          </g>
        </g>

        {/* Editorial dark gradient overlay across the left for impeccable typography readability */}
        <rect width="640" height="360" fill="url(#ttaVignette)" />

        {/* Vignette shadow on all edges for vintage cinema feel */}
        <rect width="640" height="360" fill="none" stroke="#000" strokeWidth="18" opacity="0.4" />

        {/* Film grain layer */}
        <rect width="640" height="360" filter="url(#ttaFilmGrain)" opacity="0.16" />
      </svg>

      {/* 2. Top-down warm cinematic gradient for depth */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-350"
        style={{
          background: 'linear-gradient(to bottom, rgba(7, 11, 25, 0.4) 0%, transparent 40%, rgba(7, 11, 25, 0.75) 100%)',
        }}
      />

      {/* 3. LAYOUT OVERLAY INSIDE THE THUMBNAIL (As strictly specified) */}
      <div className="absolute inset-0 p-3 sm:p-3.5 flex flex-col justify-between pointer-events-none z-10">
        
        {/* TOP ROW: Small elegant badge "● VĂN HỌC" on Top Left */}
        <div className="flex items-center justify-between">
          <div 
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium tracking-widest uppercase backdrop-blur-md transition-colors"
            style={{
              backgroundColor: 'rgba(7, 11, 25, 0.75)',
              border: '1px solid rgba(223, 183, 108, 0.5)',
              color: 'var(--gold)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c] animate-pulse" />
            <span className="font-semibold tracking-wider">VĂN HỌC</span>
          </div>

          <span 
            className="text-[9px] font-mono tracking-widest px-1.5 py-0.5 rounded backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(7, 11, 25, 0.65)',
              color: 'var(--text-muted)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            NQS-02
          </span>
        </div>

        {/* MAIN TITLE & EDITORIAL SUBTITLE: Left-aligned over subtle dark gradient */}
        <div className="my-auto pr-14 sm:pr-18 pl-0.5">
          <h4 
            className="font-serif text-lg sm:text-xl font-bold tracking-tight uppercase leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            style={{ color: '#fdfbf7' }}
          >
            THỜI THƠ ẤU
          </h4>
          <p 
            className="mt-1 font-serif italic text-[10px] sm:text-[11px] leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] max-w-[195px] sm:max-w-[220px]"
            style={{ color: 'rgba(253, 251, 247, 0.92)' }}
          >
            “Những năm tháng tuổi thơ<br />giữa dòng đời biến động.”
          </p>
        </div>

        {/* BOTTOM ROW:
            - BOTTOM LEFT: small platform badge "YOUTUBE | 11A8"
            - BOTTOM RIGHT: small outlined button "XEM →"
        */}
        <div className="flex items-end justify-between">
          {/* Bottom Left Badge: YOUTUBE | 11A8 */}
          <div 
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono tracking-wider backdrop-blur-md shadow-sm"
            style={{
              backgroundColor: 'rgba(7, 11, 25, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#cbd5e1',
            }}
          >
            <span className="text-red-400 font-bold">YOUTUBE</span>
            <span className="text-white/30">|</span>
            <span className="text-[#dfb76c] font-semibold">11A8</span>
          </div>

          {/* Bottom Right Outlined Button: XEM → */}
          <div
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-medium tracking-wider uppercase backdrop-blur-md transition-all duration-350 border shadow-sm ${
              isHovered
                ? 'scale-105 shadow-md'
                : ''
            }`}
            style={{
              backgroundColor: isHovered ? 'var(--gold)' : 'rgba(7, 11, 25, 0.75)',
              color: isHovered ? '#070b19' : 'var(--gold)',
              borderColor: isHovered ? 'var(--gold)' : 'rgba(223, 183, 108, 0.65)',
            }}
          >
            <span className="font-semibold">XEM</span>
            <ArrowRight className={`w-2.5 h-2.5 transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`} />
          </div>
        </div>

      </div>

      {/* CENTER / RIGHT: Circular Play Button Overlay */}
      <div className="absolute right-3.5 sm:right-4.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-350 transform ${
            isHovered
              ? 'scale-110 shadow-[0_0_22px_rgba(223,183,108,0.7)]'
              : 'scale-95 shadow-[0_4px_14px_rgba(0,0,0,0.6)]'
          }`}
          style={{
            backgroundColor: isHovered ? 'var(--gold)' : 'rgba(7, 11, 25, 0.65)',
            color: isHovered ? '#070b19' : '#fdfbf7',
            border: isHovered ? '2px solid #FFFFFF' : '1px solid rgba(223, 183, 108, 0.6)',
          }}
        >
          <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-current" />
        </div>
      </div>

    </div>
  );
};

interface ResourceCardProps {
  item: ProjectLinkItem;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDrive = item.category === 'drive' || item.url.includes('drive.google');
  const destinationUrl = getSafeUrl(item.url, 'https://www.youtube.com');
  const isThoiThoAu = item.order === 2 || item.title.trim().toLowerCase() === 'thời thơ ấu';

  // Custom curated editorial thumbnail configuration
  const thumbConfig = EDITORIAL_THUMBNAILS[item.order] || {
    image: projectNamBoImg,
    categoryTag: 'TƯ LIỆU VĂN HỌC',
    badgeCode: `NQS-${String(item.order).padStart(2, '0')}`,
    subTheme: item.description,
  };

  const handleOpen = () => {
    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`Tư liệu ${item.title}`}
      onClick={handleOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      }}
      className="group relative flex flex-col justify-between rounded-[16px] overflow-hidden transition-all duration-350 transform hover:-translate-y-1.5 cursor-pointer"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        boxShadow: 'var(--shadow)',
      }}
    >
      {/* Subtle gold grain top accent */}
      <div 
        className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-350 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* ==================================================
          16:9 EDITORIAL THUMBNAIL (NO BROKEN/GREY YT THUMBNAILS)
          Card 2 "Thời Thơ Ấu" uses the dedicated custom coded editorial poster.
          ================================================== */}
      {isThoiThoAu ? (
        <ThoiThoAuThumbnail isHovered={isHovered} />
      ) : (
        <div className="relative w-full aspect-video overflow-hidden select-none rounded-t-[16px]" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
          {/* Editorial Background Image */}
          <img
            src={thumbConfig.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.92] group-hover:brightness-[1.0] group-hover:scale-105 transition-all duration-400 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Vintage Film Texture Overlay & Cinematic Vignette */}
          <div 
            className="absolute inset-0 transition-colors duration-350"
            style={{ background: 'var(--overlay-gradient)' }}
          />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_35px_rgba(0,0,0,0.5)]" />

          {/* Top Header inside Thumbnail: Very Small Category Tag & Badge */}
          <div className="absolute top-2.5 inset-x-2.5 z-10 flex items-center justify-between pointer-events-none">
            <div 
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full backdrop-blur-md text-[9px] sm:text-[10px] font-mono tracking-widest uppercase font-semibold"
              style={{
                backgroundColor: 'var(--bg-glass)',
                border: '1px solid var(--border)',
                color: 'var(--gold)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
              <span>{thumbConfig.categoryTag}</span>
            </div>
            <span 
              className="text-[10px] font-mono tracking-widest px-1.5 py-0.5 rounded backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--bg-glass)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {thumbConfig.badgeCode}
            </span>
          </div>

          {/* Center Hover Play Button Circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-350 transform ${
                isHovered
                  ? 'scale-105 shadow-lg'
                  : 'scale-90'
              }`}
              style={{
                backgroundColor: isHovered ? 'var(--gold)' : 'rgba(0, 0, 0, 0.65)',
                color: isHovered ? '#FFFFFF' : '#FDFBF7',
                border: isHovered ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {isDrive ? (
                <FolderOpen className="w-5 h-5 ml-0.5 fill-current" />
              ) : (
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              )}
            </div>
          </div>

          {/* Subtle title integration on the bottom of the thumbnail */}
          <div className="absolute bottom-2 inset-x-2.5 z-10 flex items-end justify-between pointer-events-none">
            <span className="text-[10px] text-white/90 font-serif italic truncate max-w-[180px] drop-shadow-md">
              {thumbConfig.subTheme}
            </span>

            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md transition-all duration-350 shadow-sm`}
              style={{
                backgroundColor: isHovered ? 'var(--gold)' : 'rgba(0, 0, 0, 0.65)',
                color: isHovered ? '#FFFFFF' : 'var(--gold)',
                border: isHovered ? 'none' : '1px solid var(--gold-border)',
              }}
            >
              <span>{isHovered ? 'XEM TƯ LIỆU' : 'XEM'}</span>
              <ArrowRight className={`w-2.5 h-2.5 transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`} />
            </span>
          </div>
        </div>
      )}

      {/* ==================================================
          LITERARY POSTER DETAILS (CARD BODY)
          ================================================== */}
      <div className="relative p-5 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Row: Order Number + Category */}
          <div className="flex items-center justify-between mb-2">
            <span 
              className="text-xs font-mono font-bold tracking-widest"
              style={{ color: 'var(--gold)' }}
            >
              {String(item.order).padStart(2, '0')}
            </span>
            <span 
              className="text-[11px] font-serif italic truncate max-w-[170px]"
              style={{ color: 'var(--text-muted)' }}
            >
              {item.description}
            </span>
          </div>

          {/* Title */}
          <h3 
            className="text-base sm:text-lg font-bold tracking-tight transition-colors font-display line-clamp-1"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.title}
          </h3>

          {/* Literary Tagline (Caption-style, smaller than title, evocative) */}
          <p 
            className="mt-2 text-xs font-serif italic leading-relaxed line-clamp-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            “{item.tagline}”
          </p>
        </div>

        {/* Bottom Bar: Platform Badge & Action */}
        <div 
          className="mt-4 pt-3 flex items-center justify-between"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-1.5">
            {isDrive ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider text-sky-600 dark:text-sky-300 bg-sky-500/10 border border-sky-500/30">
                DRIVE
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider text-red-600 dark:text-red-300 bg-red-500/10 border border-red-500/30">
                YOUTUBE
              </span>
            )}
            <span 
              className="text-[11px] font-mono"
              style={{ color: 'var(--text-muted)' }}
            >
              11A8
            </span>
          </div>

          <div 
            className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
            style={{ color: 'var(--gold)' }}
          >
            <span className="text-[11px] tracking-wide font-medium">Mở tư liệu</span>
            <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const InteractiveCards: React.FC<InteractiveCardsProps> = ({ links }) => {
  // Ensure exactly the 9 video cards (order 1 through 9)
  const nineLinks = links
    .filter((l) => l.order >= 1 && l.order <= 9)
    .sort((a, b) => a.order - b.order);

  // Active theme filter: 'all' | 'tac-pham' | 'chuyen-de' | 'tu-lieu'
  const [activeFilter, setActiveFilter] = useState<'all' | 'tac-pham' | 'chuyen-de' | 'tu-lieu'>('all');

  const filteredLinks = activeFilter === 'all'
    ? nineLinks
    : nineLinks.filter((l) => {
        if (activeFilter === 'tac-pham') return l.order <= 4;
        if (activeFilter === 'chuyen-de') return l.order >= 5 && l.order <= 7;
        if (activeFilter === 'tu-lieu') return l.order >= 8 && l.order <= 9;
        return true;
      });

  return (
    <section id="links" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: 'var(--gold-soft)' }}
      />

      {/* ==================================================
          HERO BANNER: TRIỂN LÃM SỐ NGUYỄN QUANG SÁNG
          ================================================== */}
      <div 
        className="relative mb-16 sm:mb-20 rounded-3xl overflow-hidden border shadow-xl"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--gold-border)',
          boxShadow: 'var(--shadow)',
        }}
      >
        {/* Background artwork: Sông nước Nam Bộ hoàng hôn */}
        <div className="absolute inset-0 z-0">
          <img
            src={projectNamBoImg}
            alt="Sông nước Nam Bộ hoàng hôn"
            className="w-full h-full object-cover object-center filter brightness-[0.45] dark:brightness-[0.38] saturate-[1.15]"
          />
          {/* Theme-aware overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, var(--bg-surface), var(--bg-surface), transparent)',
              opacity: 0.92,
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:py-20 max-w-4xl">
          {/* Top Tagline */}
          <div 
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md"
            style={{
              backgroundColor: 'var(--gold-soft)',
              borderColor: 'var(--gold-border)',
              color: 'var(--gold)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            <span>NGỮ VĂN 11A8 · TRIỂN LÃM SỐ</span>
          </div>

          {/* Section Hero Title */}
          <div className="space-y-1">
            <span 
              className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase block"
              style={{ color: 'var(--gold)' }}
            >
              TƯ LIỆU VĂN HỌC &amp; ĐIỆN ẢNH
            </span>
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-display uppercase"
              style={{ color: 'var(--text-primary)' }}
            >
              NGUYỄN QUANG SÁNG
            </h2>
          </div>

          {/* Literary Lead Quote */}
          <p 
            className="mt-5 text-lg sm:text-xl md:text-2xl font-serif italic leading-relaxed pl-5 max-w-2xl"
            style={{
              color: 'var(--text-secondary)',
              borderLeft: '2px solid var(--gold)',
            }}
          >
            “Những trang văn bước ra từ trang giấy và màn ảnh”
          </p>

          {/* Editorial Context Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
            <span 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--bg-glass)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
            >
              <Film className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
              <span>Văn học · Điện ảnh</span>
            </span>
            <span 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--bg-glass)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
            >
              <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
              <span>Miền đất phương Nam</span>
            </span>
            <span 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--bg-glass)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
            >
              <Layers className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              <span>Hệ thống 09 tư liệu tương tác</span>
            </span>
          </div>
        </div>

        {/* Subtle bottom film strip / decorative line */}
        <div 
          className="relative z-10 px-6 sm:px-12 py-3 backdrop-blur-md flex items-center justify-between text-[11px] font-mono"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border)',
            color: 'var(--text-muted)',
          }}
        >
          <span>✦ BẢO TỒN VÀ LAN TỎA GIÁ TRỊ VĂN HỌC NAM BỘ</span>
          <span className="hidden sm:inline">DỰ ÁN TẬP THỂ LỚP 11A8</span>
        </div>
      </div>

      {/* ==================================================
          SECTION HEADER & CURATED THEME OVERVIEW
          ================================================== */}
      <div className="mb-10 sm:mb-12">
        <div 
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <div 
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold mb-2"
              style={{ color: 'var(--gold)' }}
            >
              <span>TRIỂN LÃM SỐ NGUYỄN QUANG SÁNG</span>
              <span>·</span>
              <span>09 TƯ LIỆU ĐIỆN ẢNH &amp; VĂN HỌC</span>
            </div>
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-display"
              style={{ color: 'var(--text-primary)' }}
            >
              BỘ SƯU TẬP 09 TƯ LIỆU CHỌN LỌC
            </h3>
            <p 
              className="mt-2 text-sm sm:text-base font-serif italic max-w-2xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              Hệ thống 9 tư liệu số được tổ chức đối xứng theo 3 chuyên đề: Tác phẩm &amp; Điện ảnh (01–04), Video &amp; Chuyên đề (05–07), và Tư liệu &amp; Chân dung (08–09).
            </p>
          </div>

          {/* Theme Filters / Quick Navigation */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              type="button"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'shadow-md scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
              style={
                activeFilter === 'all'
                  ? { backgroundColor: 'var(--gold)', color: '#070b19' }
                  : { color: 'var(--text-secondary)' }
              }
            >
              TẤT CẢ (09)
            </button>
            <button
              onClick={() => setActiveFilter('tac-pham')}
              type="button"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === 'tac-pham'
                  ? 'shadow-md scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
              style={
                activeFilter === 'tac-pham'
                  ? { backgroundColor: 'var(--gold)', color: '#070b19' }
                  : { color: 'var(--text-secondary)' }
              }
            >
              01 · TÁC PHẨM &amp; ĐIỆN ẢNH (01–04)
            </button>
            <button
              onClick={() => setActiveFilter('chuyen-de')}
              type="button"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === 'chuyen-de'
                  ? 'shadow-md scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
              style={
                activeFilter === 'chuyen-de'
                  ? { backgroundColor: 'var(--gold)', color: '#070b19' }
                  : { color: 'var(--text-secondary)' }
              }
            >
              02 · VIDEO &amp; CHUYÊN ĐỀ (05–07)
            </button>
            <button
              onClick={() => setActiveFilter('tu-lieu')}
              type="button"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === 'tu-lieu'
                  ? 'shadow-md scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
              style={
                activeFilter === 'tu-lieu'
                  ? { backgroundColor: 'var(--gold)', color: '#070b19' }
                  : { color: 'var(--text-secondary)' }
              }
            >
              03 · TƯ LIỆU &amp; CHÂN DUNG (08–09)
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================
          THE 3 × 3 SYMMETRICAL GRID: EXACTLY 9 CARDS
          Desktop: 3 cols (Row 1: 01-03, Row 2: 04-06, Row 3: 07-09)
          Tablet: 2 cols
          Mobile: 1 col
          ================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredLinks.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </div>

      {/* ==================================================
          SECTION FOOTER: NGUYỄN QUANG SÁNG
          ================================================== */}
      <div 
        className="mt-20 pt-10 text-center"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div 
          className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2"
          style={{ color: 'var(--gold)' }}
        >
          <span>VĂN HỌC</span>
          <span>·</span>
          <span>ĐIỆN ẢNH</span>
          <span>·</span>
          <span>MIỀN NAM</span>
        </div>
        <h4 
          className="text-2xl sm:text-3xl font-black tracking-tight uppercase font-display"
          style={{ color: 'var(--text-primary)' }}
        >
          NGUYỄN QUANG SÁNG
        </h4>
        <p 
          className="mt-2 text-sm font-serif italic"
          style={{ color: 'var(--text-secondary)' }}
        >
          “Lưu giữ những giá trị · Từ tác phẩm đến cuộc đời”
        </p>
        <p 
          className="mt-3 text-xs font-mono"
          style={{ color: 'var(--text-muted)' }}
        >
          09/09 Video YouTube · Dự án Ngữ văn tập thể 11A8
        </p>
      </div>

    </section>
  );
};
