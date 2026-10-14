import worksPhoto01 from '../assets/images/works-photos/works-photo-01.jpg';
import worksPhoto02 from '../assets/images/works-photos/works-photo-02.jpg';
import worksPhoto03 from '../assets/images/works-photos/works-photo-03.jpg';
import worksPhoto04 from '../assets/images/works-photos/works-photo-04.jpg';
import worksPhoto05 from '../assets/images/works-photos/works-photo-05.jpg';
import worksPhoto06 from '../assets/images/works-photos/works-photo-06.jpg';
import worksPhoto07 from '../assets/images/works-photos/works-photo-07.jpg';

export interface WorksPhoto {
  id: string;
  driveId: string;
  url: string;
  directUrl: string;
  title: string;
  caption: string;
}

export const WORKS_PHOTOS: WorksPhoto[] = [
  {
    id: 'works-01',
    driveId: '1p5nHIZ4GaxIUv9rOXhgqI6d8f_Hx1bs9',
    url: worksPhoto01,
    directUrl: 'https://lh3.googleusercontent.com/d/1p5nHIZ4GaxIUv9rOXhgqI6d8f_Hx1bs9',
    title: 'Tác phẩm Chiếc lược ngà – Bìa ấn phẩm đặc biệt',
    caption: 'Kiệt tác truyện ngắn ngợi ca tình cha con thiêng liêng và bất diệt trong chiến tranh'
  },
  {
    id: 'works-02',
    driveId: '1G5B4gRVoyIajWjEmw5Gj6PlFqBf75R82',
    url: worksPhoto02,
    directUrl: 'https://lh3.googleusercontent.com/d/1G5B4gRVoyIajWjEmw5Gj6PlFqBf75R82',
    title: 'Không gian sông rạch & Rừng tràm Nam Bộ',
    caption: 'Địa bàn chiến đấu và chất liệu văn học sống động trong từng trang viết Nguyễn Quang Sáng'
  },
  {
    id: 'works-03',
    driveId: '1jO6lZjemI8wl2Y6916D_cRMqMfQMj2k2',
    url: worksPhoto03,
    directUrl: 'https://lh3.googleusercontent.com/d/1jO6lZjemI8wl2Y6916D_cRMqMfQMj2k2',
    title: 'Cánh đồng hoang – Cảnh phim điện ảnh kinh điển',
    caption: 'Bộ phim đoạt Huy chương Vàng LHP Quốc tế Moskva do Nguyễn Quang Sáng viết kịch bản'
  },
  {
    id: 'works-04',
    driveId: '1Ofw9FrtOQ5WOrV1VluyhyVEhRjJGMEXj',
    url: worksPhoto04,
    directUrl: 'https://lh3.googleusercontent.com/d/1Ofw9FrtOQ5WOrV1VluyhyVEhRjJGMEXj',
    title: 'Hình tượng con người miền Tây quật khởi',
    caption: 'Khí phách kiên cường, hồn hậu và giàu tình nghĩa của đồng bào sông nước Cửu Long'
  },
  {
    id: 'works-05',
    driveId: '1POYxk_XxdxpGAce1CILXJos8MK-XpsdE',
    url: worksPhoto05,
    directUrl: 'https://lh3.googleusercontent.com/d/1POYxk_XxdxpGAce1CILXJos8MK-XpsdE',
    title: 'Ấn phẩm truyện ngắn Chiếc lược ngà',
    caption: 'Tác phẩm trọng tâm trong chương trình Ngữ văn 11 với những trang viết xúc động lòng người'
  },
  {
    id: 'works-06',
    driveId: '19wS5DV1DnXF-UwZ6K7xloWtfN_CUS6lo',
    url: worksPhoto06,
    directUrl: 'https://lh3.googleusercontent.com/d/19wS5DV1DnXF-UwZ6K7xloWtfN_CUS6lo',
    title: 'Tiểu thuyết & Bộ phim Mùa gió chướng',
    caption: 'Bức tranh sinh động về con người và cuộc kháng chiến anh hùng trên mảnh đất Nam Bộ'
  },
  {
    id: 'works-07',
    driveId: '1XursZIV92elsSfZ81HRcnTmJg3PWQZQp',
    url: worksPhoto07,
    directUrl: 'https://lh3.googleusercontent.com/d/1XursZIV92elsSfZ81HRcnTmJg3PWQZQp',
    title: 'Không gian nghệ thuật châu thổ sông Cửu Long',
    caption: 'Âm vang phù sa và vẻ đẹp dung dị trong thế giới văn chương Nguyễn Quang Sáng'
  }
];
