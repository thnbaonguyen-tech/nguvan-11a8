/**
 * =========================================================================
 * BẢNG CẤU HÌNH ĐƯỜNG LINK TRUNG TÂM / CENTRAL LINK CONFIGURATION
 * =========================================================================
 * 
 * HƯỚNG DẪN DÀNH CHO NHÓM CÔNG NGHỆ 11A8:
 * - Để gắn link thực tế, chỉ cần thay thế chuỗi "PASTE_REAL_LINK_HERE" 
 *   bằng đường link chính thức của nhóm bên dưới.
 *   Ví dụ:
 *     youtube1: "https://www.youtube.com/watch?v=xxxxxxxxxxx",
 *     tiktok:   "https://www.tiktok.com/@nhomcongnghe11a8",
 *     facebook: "https://www.facebook.com/groups/11a8...",
 *     padlet:   "https://padlet.com/11a8/du-an-ngu-van",
 *
 * - Khi chưa gắn link thật ("PASTE_REAL_LINK_HERE"), website sẽ điều hướng an toàn
 *   về trang chủ nền tảng (https://www.youtube.com) để đảm bảo không bị lỗi 404
 *   hoặc trang trắng khi trình chiếu trên lớp.
 */

export const LINKS = {
  // 10 VIDEO YOUTUBE DỰ ÁN HỌC TẬP 11A8
  youtube1: 'PASTE_REAL_LINK_HERE', // Video 01: Video giới thiệu dự án & Nhóm Công nghệ 11A8
  youtube2: 'PASTE_REAL_LINK_HERE', // Video 02: Video dự án - Phân tích văn học & giá trị tác phẩm
  youtube3: 'PASTE_REAL_LINK_HERE', // Video 03: Trích đoạn phim - Chiếc lược ngà & Phim ảnh Nam Bộ
  youtube4: 'PASTE_REAL_LINK_HERE', // Video 04: Video ngắn (Shorts) - Điểm chạm văn học cô đọng
  youtube5: 'PASTE_REAL_LINK_HERE', // Video 05: Nội dung sáng tạo - Góc nhìn học sinh 11A8
  youtube6: 'PASTE_REAL_LINK_HERE', // Video 06: Thuyết trình nhóm - Báo cáo chuyên đề tác giả
  youtube7: 'PASTE_REAL_LINK_HERE', // Video 07: Tư liệu lịch sử & Nam Bộ - Bối cảnh ĐBSCL
  youtube8: 'PASTE_REAL_LINK_HERE', // Video 08: Sản phẩm truyền thông - Phỏng vấn & hậu trường
  youtube9: 'PASTE_REAL_LINK_HERE', // Video 09: Audio kịch truyền thanh - Diễn đọc tác phẩm
  youtube10: 'PASTE_REAL_LINK_HERE', // Video 10: Tổng kết & Triển lãm số - Toàn cảnh dự án

  // CÁC NỀN TẢNG MẠNG XÃ HỘI, BẢNG TIN TƯƠNG TÁC & TÀI NGUYÊN BỔ TRỢ
  tiktok: 'PASTE_REAL_LINK_HERE',       // Kênh TikTok nhóm 11A8
  facebook: 'PASTE_REAL_LINK_HERE',     // Trang Facebook nhóm học tập 11A8
  padlet: 'PASTE_REAL_LINK_HERE',       // Không gian bảng tin Padlet tương tác thảo luận mở
  imageGallery: 'PASTE_REAL_LINK_HERE', // Kho ảnh lưu niệm / Google Drive / Triển lãm số
  resourceDrive: 'PASTE_REAL_LINK_HERE', // Thư mục tài liệu số hóa Ngữ văn 11
};

/**
 * Hàm phân giải link an toàn:
 * Trả về link thực tế nếu đã dán, hoặc link mặc định hợp lệ nếu vẫn là placeholder.
 */
export function getSafeUrl(url: string, defaultFallback: string = 'https://www.youtube.com'): string {
  if (!url || url === 'PASTE_REAL_LINK_HERE' || url.startsWith('PASTE_')) {
    return defaultFallback;
  }
  return url;
}

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
    url: LINKS.youtube1,
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
    url: LINKS.youtube2,
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
    url: LINKS.youtube3,
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
    url: LINKS.youtube4,
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
    url: LINKS.youtube5,
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
    url: LINKS.youtube6,
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
    url: LINKS.youtube7,
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
    url: LINKS.youtube8,
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
    url: LINKS.youtube9,
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
    url: LINKS.youtube10,
    placeholderPrompt: 'DÁN LINK YOUTUBE 10',
    colorTheme: {
      accent: 'from-red-600 to-orange-500',
      border: 'hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]',
      badge: 'text-red-400 bg-red-950/60 border-red-500/30',
    },
  },
];
