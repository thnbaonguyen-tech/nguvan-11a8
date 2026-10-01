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
  // 9 LIÊN KẾT DỰ ÁN HỌC TẬP 11A8
  youtube1: 'https://www.youtube.com/watch?si=mQkxiqPx67i6vodz&v=YkQeufm_9F4&feature=youtu.be', // Dòng Sông Hát
  youtube2: 'https://youtu.be/Z0qMeik5uKs',                                                      // Thời Thơ Ấu
  youtube3: 'https://youtu.be/YKt4ydFBAgw?si=mfkm2ctYXAlqxN8l',                                  // Như Một Huyền Thoại
  youtube4: 'https://youtu.be/3brwmGxGLQw',                                                      // Mùa Nước Nổi
  youtube5: 'https://youtu.be/RGOVhz-jg1M',                                                      // Cho Đến Bao Giờ
  youtube6: 'https://youtu.be/T2MJY6r3s7A',                                                      // Mùa Gió Chướng
  youtube7: 'https://youtu.be/t1l6vvN8jdk',                                                      // Cánh Đồng Hoang
  youtube8: 'https://youtube.com/shorts/v5XX04i5ALQ?si=jGSk1FsxnMQSvq9s',                        // Chiếc Lược Ngà (Shorts)
  youtube9: 'https://youtu.be/SQ46_GbxUFg',                                                      // Tiểu sử tác giả Nguyễn Quang Sáng

  // CÁC NỀN TẢNG MẠNG XÃ HỘI, BẢNG TIN TƯƠNG TÁC & TÀI NGUYÊN BỔ TRỢ
  tiktok: 'https://www.tiktok.com',
  facebook: 'https://www.facebook.com',
  padlet: 'https://padlet.com/amhuy112/goc-e-lai-loi-nhan-s023wsnts1b1n9a6z305',
  imageGallery: 'https://drive.google.com',
  resourceDrive: 'https://drive.google.com',
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

/**
 * Trích xuất YouTube Video ID từ mọi định dạng link:
 * youtube.com/watch?v=..., youtu.be/..., youtube.com/shorts/...
 */
export function extractYoutubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export interface ProjectLinkItem {
  id: string;
  order: number;
  platform: string;
  category: 'youtube' | 'drive';
  title: string;
  description: string;
  buttonText?: string;
  url: string;
  placeholderPrompt: string;
  tagline: string;
  literaryNote?: string;
  youtubeId?: string;
  exhibitionCategory: 'tac-pham' | 'chuyen-de' | 'tu-lieu';
  colorTheme: {
    accent: string;
    border: string;
    glow: string;
    badge: string;
  };
}

export const INITIAL_PROJECT_LINKS: ProjectLinkItem[] = [
  // 01 — TÁC PHẨM & ĐIỆN ẢNH (01, 02, 03, 04)
  {
    id: 'link-01',
    order: 1,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Dòng Sông Hát',
    description: 'Dòng Sông Hát',
    tagline: 'Nơi dòng sông chảy qua ký ức và tuổi thơ.',
    literaryNote: 'Khúc tráng ca ngân vang giữa đôi bờ sông nước Nam Bộ, gợi thức niềm tự hào về cội nguồn và dòng chảy lịch sử kiên cường. Từng giai điệu như tiếng sóng phù sa Tiền Giang, chuyên chở linh hồn đất phương Nam và tấm lòng son sắt của thế hệ trẻ. Đây là khúc dạo đầu giàu cảm xúc đưa người xem hòa mình vào hành trình văn học của tập thể 11A8.',
    url: LINKS.youtube1,
    youtubeId: 'YkQeufm_9F4',
    exhibitionCategory: 'tac-pham',
    placeholderPrompt: 'DÁN LINK YOUTUBE 01',
    colorTheme: {
      accent: 'from-amber-500/20 via-red-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },
  {
    id: 'link-02',
    order: 2,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Thời Thơ Ấu',
    description: 'Video dự án',
    tagline: 'Những năm tháng tuổi thơ giữa dòng đời biến động.',
    literaryNote: 'Tái hiện miền ký ức tuổi thơ trong trẻo, hồn hậu giữa khung cảnh sông nước miền Tây đọng bóng dừa nước xanh mát. Những năm tháng ấu thơ gắn liền với đồng ruộng, con kênh đã nuôi dưỡng tâm hồn và bản lĩnh người chiến sĩ mai sau. Tác phẩm đánh thức trong mỗi chúng ta tình yêu tha thiết với cội nguồn và những kỷ niệm bình dị mà thiêng liêng.',
    url: LINKS.youtube2,
    youtubeId: 'Z0qMeik5uKs',
    exhibitionCategory: 'tac-pham',
    placeholderPrompt: 'DÁN LINK YOUTUBE 02',
    colorTheme: {
      accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },
  {
    id: 'link-03',
    order: 3,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Như Một Huyền Thoại',
    description: 'Trích đoạn phim',
    tagline: 'Từ những con người bình dị đến một câu chuyện huyền thoại.',
    literaryNote: 'Thước phim tài liệu nghệ thuật khắc họa chân dung nhà văn Nguyễn Quang Sáng – người nghệ sĩ tài hoa trọn đời vì quê hương An Giang. Cả cuộc đời ông là những chuyến đi dọc theo cánh rừng, dòng kênh để chắt lọc chất liệu sống chân thật và xúc động nhất. Huyền thoại ấy không xa vời mà hiển hiện giản dị trong từng trang viết thấm đẫm tình người, tình đất phương Nam.',
    url: LINKS.youtube3,
    youtubeId: 'YKt4ydFBAgw',
    exhibitionCategory: 'tac-pham',
    placeholderPrompt: 'DÁN LINK YOUTUBE 03',
    colorTheme: {
      accent: 'from-amber-500/20 via-yellow-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },
  {
    id: 'link-04',
    order: 4,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Mùa Nước Nổi',
    description: 'Video ngắn (Shorts)',
    tagline: 'Miền sông nước hiện lên trong nhịp mùa phương Nam.',
    literaryNote: 'Điểm chạm văn học ngắn gọn nhưng lột tả trọn vẹn sức sống căng tràn của thiên nhiên và con người miền Tây mùa con nước đỏ phù sa. Nước nổi mang lại tôm cá, sự trù phú và cả tinh thần lạc quan, phóng khoáng vượt lên mọi nghịch cảnh của cư dân đồng bằng. Một góc nhìn cô đọng giúp học sinh cảm nhận trọn vẹn nhịp thở đằm thắm của châu thổ Cửu Long.',
    url: LINKS.youtube4,
    youtubeId: '3brwmGxGLQw',
    exhibitionCategory: 'tac-pham',
    placeholderPrompt: 'DÁN LINK YOUTUBE 04',
    colorTheme: {
      accent: 'from-amber-500/20 via-rose-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },

  // 02 — VIDEO & CHUYÊN ĐỀ (05, 06, 07)
  {
    id: 'link-05',
    order: 5,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Cho Đến Bao Giờ',
    description: 'Nội dung sáng tạo',
    tagline: 'Giữa mất mát, con người vẫn hướng về ngày mai.',
    literaryNote: 'Góc nhìn sáng tạo đầy trăn trở của học sinh 11A8 trước những vết thương chiến tranh và khát vọng hòa bình bất diệt. Tác phẩm đào sâu vào chiều sâu tâm lý nhân vật, đặt ra câu hỏi về nỗi đau chia ly và sức mạnh kỳ diệu của lòng nhân ái. Lăng kính người trẻ mang đến sự diễn giải văn học mới mẻ, hiện đại mà vẫn sâu lắng lòng người.',
    url: LINKS.youtube5,
    youtubeId: 'RGOVhz-jg1M',
    exhibitionCategory: 'chuyen-de',
    placeholderPrompt: 'DÁN LINK YOUTUBE 05',
    colorTheme: {
      accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },
  {
    id: 'link-06',
    order: 6,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Mùa Gió Chướng',
    description: 'T',
    tagline: 'Gió chướng thổi qua miền đất, để lại những phận người.',
    literaryNote: 'Tiếng gió chướng ràn rạt trên rặng dừa nước không chỉ là hơi thở mùa khô mà là thanh âm giục giã ngày toàn thắng của cách mạng. Ngọn gió nâng bước chân người giao liên, chở che căn cứ địa và thắp sáng niềm tin kiên định vào tương lai tươi sáng. Tác phẩm khẳng định tài năng bậc thầy của Nguyễn Quang Sáng khi hòa quyện vẻ đẹp thiên nhiên với khí phách hào hùng Nam Bộ.',
    url: LINKS.youtube6,
    youtubeId: 'T2MJY6r3s7A',
    exhibitionCategory: 'chuyen-de',
    placeholderPrompt: 'DÁN LINK YOUTUBE 06',
    colorTheme: {
      accent: 'from-amber-500/20 via-blue-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },
  {
    id: 'link-07',
    order: 7,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Cánh Đồng Hoang',
    description: 'Tư liệu lịch sử & Nam Bộ',
    tagline: 'Giữa cánh đồng hoang, tình người vẫn bền bỉ nảy mầm.',
    literaryNote: 'Bản hùng ca bất tử về vợ chồng Ba Đô kiên cường bám trụ giữa lòng chảo đầm lầy Đồng Tháp Mười rực lửa đạn. Giữa vòng vây trực thăng giặc, sự sống vẫn đâm chồi từ tình thương con thơ và ý chí quyết tử cho Tổ quốc quyết sinh. Tác phẩm là biểu tượng đỉnh cao cho chủ nghĩa anh hùng cách mạng và tâm hồn cao thượng của người dân châu thổ.',
    url: LINKS.youtube7,
    youtubeId: 't1l6vvN8jdk',
    exhibitionCategory: 'chuyen-de',
    placeholderPrompt: 'DÁN LINK YOUTUBE 07',
    colorTheme: {
      accent: 'from-amber-500/20 via-emerald-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },

  // 03 — TƯ LIỆU & TRIỂN LÃM (08, 09, 10)
  {
    id: 'link-08',
    order: 8,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Chiếc Lược Ngà',
    description: 'Sản phẩm truyền thông',
    tagline: 'Một chiếc lược nhỏ, một tình cha con lớn lao.',
    literaryNote: 'Kiệt tác văn học xúc động đến nghẹn ngào về tình phụ tử thiêng liêng giữa anh Sáu và bé Thu trong hoàn cảnh éo le của chiến tranh. Cây lược ngà chưa kịp chải mái tóc con đã trở thành kỷ vật bất tử, kết tinh tình cha con vượt lên trên ranh giới sống chết. Tác phẩm gieo vào lòng người đọc niềm xúc động sâu xa về sự hy sinh thầm lặng của những người lính vì độc lập dân tộc.',
    url: LINKS.youtube8,
    youtubeId: 'v5XX04i5ALQ',
    exhibitionCategory: 'tu-lieu',
    placeholderPrompt: 'DÁN LINK YOUTUBE 08',
    colorTheme: {
      accent: 'from-amber-500/20 via-rose-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },
  {
    id: 'link-09',
    order: 9,
    platform: 'YouTube',
    category: 'youtube',
    title: 'Tiểu sử tác giả Nguyễn Quang Sáng',
    description: 'Audio kịch truyền thanh',
    tagline: 'Một đời cầm bút, một đời nặng tình với đất và người phương Nam.',
    literaryNote: 'Nguyễn Quang Sáng – nhà văn chiến sĩ cả cuộc đời gắn bó máu thịt với chiến trường miền Nam và dòng sông Cửu Long huyền thoại. Văn phong của ông mộc mạc, tự nhiên như hơi thở đời thường nhưng chất chứa triết lý nhân sinh sâu sắc và nghĩa tình đậm đà. Đoạn phim tư liệu là chiếc cầu nối giúp độc giả thấu hiểu cội nguồn cảm hứng và tài hoa của người cầm bút tài danh.',
    url: LINKS.youtube9,
    youtubeId: 'SQ46_GbxUFg',
    exhibitionCategory: 'tu-lieu',
    placeholderPrompt: 'DÁN LINK YOUTUBE 09',
    colorTheme: {
      accent: 'from-amber-500/20 via-purple-500/10 to-transparent',
      border: 'hover:border-amber-400/50',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]',
      badge: 'text-amber-300 bg-amber-950/60 border-amber-400/30',
    },
  },
];
