/**
 * CẤU HÌNH CÁC LIÊN KẾT DỰ ÁN - NHÓM CÔNG NGHỆ 11A8
 * Toàn bộ 10 nút được chuyển sang hệ sinh thái YOUTUBE theo yêu cầu:
 * YOUTUBE 01 -> YOUTUBE 10 (bỏ tiktok, facebook, padlet).
 */

export interface ProjectLinkItem {
  id: string;
  order: number;
  platform: string;
  category: 'youtube';
  title: string;
  description: string;
  buttonText?: string;
  url: string;
  placeholderPrompt: string;
  tagline: string;
  colorTheme: {
    accent: string;
    border: string;
    glow: string;
    badge: string;
  };
}

export const INITIAL_PROJECT_LINKS: ProjectLinkItem[] = [
  // HÀNG 1: YOUTUBE 01 | YOUTUBE 02 | YOUTUBE 03
  {
    id: 'link-01',
    order: 1,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 01',
    description: 'Video giới thiệu',
    tagline: 'Giới thiệu dự án & Nhóm Công nghệ 11A8',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 01',
    colorTheme: {
      accent: 'from-red-500 to-rose-600',
      border: 'hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]',
      badge: 'text-red-400 bg-red-950/60 border-red-500/30',
    },
  },
  {
    id: 'link-02',
    order: 2,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 02',
    description: 'Video dự án',
    tagline: 'Phân tích văn học & giá trị tác phẩm',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 02',
    colorTheme: {
      accent: 'from-red-500 to-amber-600',
      border: 'hover:border-rose-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]',
      badge: 'text-rose-400 bg-rose-950/60 border-rose-500/30',
    },
  },
  {
    id: 'link-03',
    order: 3,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 03',
    description: 'Trích đoạn phim',
    tagline: 'Chiếc lược ngà & Phim ảnh Nam Bộ',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 03',
    colorTheme: {
      accent: 'from-amber-500 to-red-600',
      border: 'hover:border-amber-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
      badge: 'text-amber-400 bg-amber-950/60 border-amber-500/30',
    },
  },

  // HÀNG 2: YOUTUBE 04 | YOUTUBE 05 | YOUTUBE 06
  {
    id: 'link-04',
    order: 4,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 04',
    description: 'Video ngắn (Shorts)',
    tagline: 'Điểm chạm văn học cô đọng & súc tích',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 04',
    colorTheme: {
      accent: 'from-rose-500 to-red-500',
      border: 'hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]',
      badge: 'text-red-400 bg-red-950/60 border-red-500/30',
    },
  },
  {
    id: 'link-05',
    order: 5,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 05',
    description: 'Nội dung sáng tạo',
    tagline: 'Góc nhìn học sinh 11A8 về Nguyễn Quang Sáng',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 05',
    colorTheme: {
      accent: 'from-orange-500 to-red-600',
      border: 'hover:border-orange-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]',
      badge: 'text-orange-400 bg-orange-950/60 border-orange-500/30',
    },
  },
  {
    id: 'link-06',
    order: 6,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 06',
    description: 'Thuyết trình nhóm',
    tagline: 'Báo cáo chuyên đề nghiên cứu tác giả',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 06',
    colorTheme: {
      accent: 'from-red-600 to-rose-700',
      border: 'hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]',
      badge: 'text-rose-400 bg-rose-950/60 border-rose-500/30',
    },
  },

  // HÀNG 3: YOUTUBE 07 | YOUTUBE 08 | YOUTUBE 09 | YOUTUBE 10
  {
    id: 'link-07',
    order: 7,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 07',
    description: 'Tư liệu lịch sử & Nam Bộ',
    tagline: 'Bối cảnh Đồng bằng sông Cửu Long',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 07',
    colorTheme: {
      accent: 'from-amber-600 to-red-600',
      border: 'hover:border-amber-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
      badge: 'text-amber-400 bg-amber-950/60 border-amber-500/30',
    },
  },
  {
    id: 'link-08',
    order: 8,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 08',
    description: 'Sản phẩm truyền thông',
    tagline: 'Phỏng vấn, hậu trường & quá trình làm việc nhóm',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 08',
    colorTheme: {
      accent: 'from-red-500 to-pink-600',
      border: 'hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]',
      badge: 'text-red-400 bg-red-950/60 border-red-500/30',
    },
  },
  {
    id: 'link-09',
    order: 9,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 09',
    description: 'Audio kịch truyền thanh',
    tagline: 'Diễn đọc trích đoạn truyện ngắn truyền cảm',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 09',
    colorTheme: {
      accent: 'from-rose-500 to-amber-500',
      border: 'hover:border-rose-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]',
      badge: 'text-rose-400 bg-rose-950/60 border-rose-500/30',
    },
  },
  {
    id: 'link-10',
    order: 10,
    platform: 'YouTube',
    category: 'youtube',
    title: 'YOUTUBE 10',
    description: 'Tổng kết & Triển lãm số',
    tagline: 'Toàn cảnh kết quả học tập dự án Ngữ văn 11A8',
    url: 'https://www.youtube.com',
    placeholderPrompt: 'DÁN LINK YOUTUBE 10',
    colorTheme: {
      accent: 'from-red-600 to-orange-500',
      border: 'hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]',
      badge: 'text-red-400 bg-red-950/60 border-red-500/30',
    },
  },
];
