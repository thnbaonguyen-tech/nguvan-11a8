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
  // 10 LIÊN KẾT DỰ ÁN HỌC TẬP 11A8
  youtube1: 'https://www.youtube.com/watch?si=mQkxiqPx67i6vodz&v=YkQeufm_9F4&feature=youtu.be', // Dòng Sông Hát
  youtube2: 'https://youtu.be/Z0qMeik5uKs',                                                      // Thời Thơ Ấu
  youtube3: 'https://youtu.be/YKt4ydFBAgw?si=mfkm2ctYXAlqxN8l',                                  // Như Một Huyền Thoại
  youtube4: 'https://youtu.be/3brwmGxGLQw',                                                      // Mùa Nước Nổi
  youtube5: 'https://youtu.be/RGOVhz-jg1M',                                                      // Cho Đến Bao Giờ
  youtube6: 'https://youtu.be/T2MJY6r3s7A',                                                      // Mùa Gió Chướng
  youtube7: 'https://youtu.be/t1l6vvN8jdk',                                                      // Cánh Đồng Hoang
  youtube8: 'https://youtube.com/shorts/v5XX04i5ALQ?si=jGSk1FsxnMQSvq9s',                        // Chiếc Lược Ngà (Shorts)
  youtube9: 'https://youtu.be/SQ46_GbxUFg',                                                      // Tiểu sử tác giả Nguyễn Quang Sáng
  youtube10: 'https://drive.google.com/drive/folders/1IuM37E89dpx4NB6mEnqAobGtpAdY_Pcd?usp=sharing', // Hình Ảnh Đẹp 11A8

  // CÁC NỀN TẢNG MẠNG XÃ HỘI, BẢNG TIN TƯƠNG TÁC & TÀI NGUYÊN BỔ TRỢ
  tiktok: 'https://www.tiktok.com',
  facebook: 'https://www.facebook.com',
  padlet: 'https://padlet.com/amhuy112/goc-e-lai-loi-nhan-s023wsnts1b1n9a6z305',
  imageGallery: 'https://drive.google.com/drive/folders/1IuM37E89dpx4NB6mEnqAobGtpAdY_Pcd?usp=sharing',
  resourceDrive: 'https://drive.google.com/drive/folders/1IuM37E89dpx4NB6mEnqAobGtpAdY_Pcd?usp=sharing',
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
  // HÀNG 1: 01 | 02 | 03
  {
    id: 'link-01',
    order: 1,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Dòng Sông Hát',
    description: 'Dòng Sông Hát',
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
    title: 'Thời Thơ Ấu',
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
    title: 'Như Một Huyền Thoại',
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

  // HÀNG 2: 04 | 05 | 06
  {
    id: 'link-04',
    order: 4,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Mùa Nước Nổi',
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
    title: 'Cho Đến Bao Giờ',
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
    title: 'Mùa Gió Chướng',
    description: 'T',
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

  // HÀNG 3: 07 | 08 | 09 | 10
  {
    id: 'link-07',
    order: 7,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Cánh Đồng Hoang',
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
    title: 'Chiếc Lược Ngà',
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
    title: 'Tiểu sử tác giả Nguyễn Quang Sáng',
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
    platform: 'Drive',
    category: 'youtube',
    title: 'Hình Ảnh Đẹp 11A8',
    description: 'Tổng kết & Triển lãm số',
    tagline: 'Toàn cảnh kết quả học tập dự án Ngữ văn 11A8',
    url: LINKS.youtube10,
    placeholderPrompt: 'DÁN LINK 10',
    colorTheme: {
      accent: 'from-red-600 to-orange-500',
      border: 'hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]',
      badge: 'text-red-400 bg-red-950/60 border-red-500/30',
    },
  },
];
