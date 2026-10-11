/**
 * =========================================================================
 * 8 ĐƯỜNG DẪN ẢNH TRỰC TUYẾN & THÔNG TIN CHI TIẾT - KHOẢNH KHẮC 11A8
 * =========================================================================
 * Dữ liệu 8 ảnh thực tế của tập thể lớp 11A8 tại Postimages
 * Kèm thông tin chú thích, thứ tự chuẩn và ảnh dự phòng cục bộ
 */

import photo01Fallback from '../assets/images/khoanh-khac-1-thu-cong-cang-tin.jpg';
import photo02Fallback from '../assets/images/khoanh-khac-2-cung-lam-bai.jpg';
import photo03Fallback from '../assets/images/khoanh-khac-3-lam-viec-quan.jpg';
import photo04Fallback from '../assets/images/khoanh-khac-4-ve-chan-dung.jpg';
import photo05Fallback from '../assets/images/khoanh-khac-5.jpg';
import photo06Fallback from '../assets/images/khoanh-khac-6.jpg';
import photo07Fallback from '../assets/images/khoanh-khac-7.jpg';
import photo08Fallback from '../assets/images/khoanh-khac-8.jpg';

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

export const CLASS_11A8_PHOTO_URLS: string[] = [
  "https://i.postimg.cc/JGmF8gHy/1790430929411-7776302793088302946-7776302793088302946-f8de5d490280d048f16a217cfd11180d.jpg",
  "https://i.postimg.cc/hfgYnwQQ/1790430929565-7776302793088302946-7776302793088302946-7ad3fff4a071c965ed4619d065a3ef4a.jpg",
  "https://i.postimg.cc/TpGsxS5p/1791010328356-5831818717598040166-5831818717598040166-168cda79d2048e705a2a3e074dd8ed48.jpg",
  "https://i.postimg.cc/Xp3PWhBJ/1791010328373-5831818717598040166-5831818717598040166-9902f492bcf0875e7521ca59b30a6229.jpg",
  "https://i.postimg.cc/WhjyVKqg/1791608639825-7325525036300284449-7325525036300284449-780dd4e56668d4fcc9d08feaab293f60.jpg",
  "https://i.postimg.cc/CzY20tnf/1791608642116-7325525036300284449-7325525036300284449-06e30b56e82a03086c1eb850231600eb.jpg",
  "https://i.postimg.cc/8jDYG3fv/1791608642617-7325525036300284449-7325525036300284449-f554f2e46680feec7d663b9be4e5d989.jpg",
  "https://i.postimg.cc/jLK1T9nw/1791608643153-7325525036300284449-7325525036300284449-a949af5f3276562c1364c34d96130ad7.jpg",
];

export const CLASS_11A8_MOMENTS: MomentPhoto[] = [
  {
    id: 1,
    url: CLASS_11A8_PHOTO_URLS[0],
    fallback: photo01Fallback,
    badge: "Chuẩn bị học liệu",
    title: "Làm đồ thủ công tại căng tin",
    subtitle: "Cắt dán & phác thảo mô hình trực quan",
    description: "Các thành viên tập thể 11A8 cùng nhau chuẩn bị vật liệu, phác thảo và cắt dán mô hình học tập cho dự án văn học số.",
  },
  {
    id: 2,
    url: CLASS_11A8_PHOTO_URLS[1],
    fallback: photo02Fallback,
    badge: "Thảo luận nhóm",
    title: "Thảo luận & cùng làm bài học",
    subtitle: "Phân tích tư liệu tác phẩm",
    description: "Nhóm học tập 11A8 cùng nhau tra cứu văn bản, phân tích văn phong Nam Bộ và hoàn thiện nội dung liên môn trực tuyến.",
  },
  {
    id: 3,
    url: CLASS_11A8_PHOTO_URLS[2],
    fallback: photo03Fallback,
    badge: "Hoạt động ngoài giờ",
    title: "Làm việc nhóm ngoài giờ tại quán",
    subtitle: "Lên ý tưởng triển lãm số",
    description: "Buổi làm việc nhóm tập trung ngoài giờ học để xây dựng kịch bản truyền thông và hoàn thiện thiết kế số hóa.",
  },
  {
    id: 4,
    url: CLASS_11A8_PHOTO_URLS[3],
    fallback: photo04Fallback,
    badge: "Sáng tác nghệ thuật",
    title: "Vẽ chân dung Nguyễn Quang Sáng",
    subtitle: "Màu nước nghệ thuật đầy cảm xúc",
    description: "Bức vẽ chân dung nhà văn Nguyễn Quang Sáng bằng màu nước tỉ mỉ và tâm huyết do chính học sinh lớp 11A8 thực hiện.",
  },
  {
    id: 5,
    url: CLASS_11A8_PHOTO_URLS[4],
    fallback: photo05Fallback,
    badge: "Học tập thực tế",
    title: "Nghiên cứu & thu thập tư liệu",
    subtitle: "Khám phá không gian văn học",
    description: "Các bạn học sinh cùng nhau đối chiếu sách giáo khoa và các tư liệu ngoại khóa về cuộc đời tác giả Nam Bộ.",
  },
  {
    id: 6,
    url: CLASS_11A8_PHOTO_URLS[5],
    fallback: photo06Fallback,
    badge: "Gắn kết tập thể",
    title: "Gắn kết tập thể & sáng tạo số",
    subtitle: "Đồng lòng triển khai nền tảng",
    description: "Tập thể 11A8 thể hiện tinh thần đoàn kết, tương trợ lẫn nhau trong từng giai đoạn phát triển không gian văn học số.",
  },
  {
    id: 7,
    url: CLASS_11A8_PHOTO_URLS[6],
    fallback: photo07Fallback,
    badge: "Chuyên đề mở",
    title: "Sôi nổi trao đổi & phản biện",
    subtitle: "Hoàn thiện nội dung thuyết trình",
    description: "Không khí sôi nổi, nhiệt huyết của học sinh 11A8 trong các buổi thảo luận chuyên đề và đóng góp ý kiến xây dựng.",
  },
  {
    id: 8,
    url: CLASS_11A8_PHOTO_URLS[7],
    fallback: photo08Fallback,
    badge: "Kỷ niệm thanh xuân",
    title: "Dấu ấn kỷ niệm tập thể 11A8",
    subtitle: "Lưu giữ khoảnh khắc học đường",
    description: "Dấu ấn thanh xuân và kỷ niệm học đường đẹp đẽ của tập thể lớp 11A8 qua từng trang tư liệu số hóa.",
  },
];
