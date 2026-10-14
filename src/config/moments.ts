/**
 * =========================================================================
 * 8 ĐƯỜNG DẪN ẢNH THẬT TỪ GOOGLE DRIVE & THÔNG TIN CHI TIẾT - KHOẢNH KHẮC 11A8
 * =========================================================================
 * Thư mục nguồn Google Drive: https://drive.google.com/drive/folders/1uCcmbA4onUSvMlFnyFya3f_B6OjFI1ni
 * Kèm thông tin chú thích, thứ tự chuẩn và dữ liệu ảnh thật tải trực tiếp từ Drive
 */

import photo01Drive from '../assets/images/drive-photo-01.jpg';
import photo02Drive from '../assets/images/drive-photo-02.jpg';
import photo03Drive from '../assets/images/drive-photo-03.jpg';
import photo04Drive from '../assets/images/drive-photo-04.jpg';
import photo05Drive from '../assets/images/drive-photo-05.jpg';
import photo06Drive from '../assets/images/drive-photo-06.jpg';
import photo07Drive from '../assets/images/drive-photo-07.jpg';
import photo08Drive from '../assets/images/drive-photo-08.jpg';

export interface MomentPhoto {
  id: number;
  url: string;
  fallback: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  aspect?: string;
}

/**
 * 8 Direct image URLs trích xuất trực tiếp từ 8 file ảnh thật trong Google Drive folder
 * (1uCcmbA4onUSvMlFnyFya3f_B6OjFI1ni)
 */
export const CLASS_11A8_PHOTO_URLS: string[] = [
  "https://lh3.googleusercontent.com/d/1RCy42lJhHHys5dzCncYjGOHycyaURyqV", // Ảnh 1 (1790430929411)
  "https://lh3.googleusercontent.com/d/1aUx27opS9KtpmPEZcbh62i1BIQL5nXYJ", // Ảnh 2 (1790430929565)
  "https://lh3.googleusercontent.com/d/1ccRaJ9rrLNEX-GDw_cnnVw3aoZzC0hUR", // Ảnh 3 (1791010328356)
  "https://lh3.googleusercontent.com/d/1rJLkv2mX1GlQsnnIlpQW262SJ90PNEiF", // Ảnh 4 (1791010328373)
  "https://lh3.googleusercontent.com/d/1MoMT5EvNk2ysVYzahWcdEqCz--EiN9A2", // Ảnh 5 (1791608639825)
  "https://lh3.googleusercontent.com/d/1RRrmkVhgz04bVfrdbW6464EUGSqLeVVh", // Ảnh 6 (1791608642116)
  "https://lh3.googleusercontent.com/d/1f4lD2h6-FvWtUA9Ngi1GAvjfqNotSVOX", // Ảnh 7 (1791608642617)
  "https://lh3.googleusercontent.com/d/1uZN5rh15ZZZAKlk6zpzCYDu_8KeTj1Oi", // Ảnh 8 (1791608643153)
];

export const CLASS_11A8_MOMENTS: MomentPhoto[] = [
  {
    id: 1,
    url: CLASS_11A8_PHOTO_URLS[0],
    fallback: photo01Drive,
    badge: "Chuẩn bị học liệu",
    title: "Làm đồ thủ công tại căng tin",
    subtitle: "Cắt dán & phác thảo mô hình trực quan",
    description: "Các thành viên tập thể 11A8 cùng nhau chuẩn bị vật liệu, phác thảo và cắt dán mô hình học tập cho dự án văn học số.",
  },
  {
    id: 2,
    url: CLASS_11A8_PHOTO_URLS[1],
    fallback: photo02Drive,
    badge: "Thảo luận nhóm",
    title: "Thảo luận & cùng làm bài học",
    subtitle: "Phân tích tư liệu tác phẩm",
    description: "Nhóm học tập 11A8 cùng nhau tra cứu văn bản, phân tích văn phong Nam Bộ và hoàn thiện nội dung liên môn trực tuyến.",
  },
  {
    id: 3,
    url: CLASS_11A8_PHOTO_URLS[2],
    fallback: photo03Drive,
    badge: "Hoạt động ngoài giờ",
    title: "Làm việc nhóm ngoài giờ tại quán",
    subtitle: "Lên ý tưởng triển lãm số",
    description: "Buổi làm việc nhóm tập trung ngoài giờ học để xây dựng kịch bản truyền thông và hoàn thiện thiết kế số hóa.",
  },
  {
    id: 4,
    url: CLASS_11A8_PHOTO_URLS[3],
    fallback: photo04Drive,
    badge: "Sáng tác nghệ thuật",
    title: "Vẽ chân dung Nguyễn Quang Sáng",
    subtitle: "Màu nước nghệ thuật đầy cảm xúc",
    description: "Bức vẽ chân dung nhà văn Nguyễn Quang Sáng bằng màu nước tỉ mỉ và tâm huyết do chính học sinh lớp 11A8 thực hiện.",
  },
  {
    id: 5,
    url: CLASS_11A8_PHOTO_URLS[4],
    fallback: photo05Drive,
    badge: "Học tập thực tế",
    title: "Nghiên cứu & thu thập tư liệu",
    subtitle: "Khám phá không gian văn học",
    description: "Các bạn học sinh cùng nhau đối chiếu sách giáo khoa và các tư liệu ngoại khóa về cuộc đời tác giả Nam Bộ.",
  },
  {
    id: 6,
    url: CLASS_11A8_PHOTO_URLS[5],
    fallback: photo06Drive,
    badge: "Gắn kết tập thể",
    title: "Gắn kết tập thể & sáng tạo số",
    subtitle: "Đồng lòng triển khai nền tảng",
    description: "Tập thể 11A8 thể hiện tinh thần đoàn kết, tương trợ lẫn nhau trong từng giai đoạn phát triển không gian văn học số.",
  },
  {
    id: 7,
    url: CLASS_11A8_PHOTO_URLS[6],
    fallback: photo07Drive,
    badge: "Chuyên đề mở",
    title: "Sôi nổi trao đổi & phản biện",
    subtitle: "Hoàn thiện nội dung thuyết trình",
    description: "Không khí sôi nổi, nhiệt huyết của học sinh 11A8 trong các buổi thảo luận chuyên đề và đóng góp ý kiến xây dựng.",
  },
  {
    id: 8,
    url: CLASS_11A8_PHOTO_URLS[7],
    fallback: photo08Drive,
    badge: "Kỷ niệm thanh xuân",
    title: "Dấu ấn kỷ niệm tập thể 11A8",
    subtitle: "Lưu giữ khoảnh khắc học đường",
    description: "Dấu ấn thanh xuân và kỷ niệm học đường đẹp đẽ của tập thể lớp 11A8 qua từng trang tư liệu số hóa.",
  },
];
