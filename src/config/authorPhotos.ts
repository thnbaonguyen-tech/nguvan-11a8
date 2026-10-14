import authorPhoto01 from '../assets/images/author-photos/author-photo-01.jpg';
import authorPhoto02 from '../assets/images/author-photos/author-photo-02.jpg';
import authorPhoto03 from '../assets/images/author-photos/author-photo-03.jpg';
import authorPhoto04 from '../assets/images/author-photos/author-photo-04.jpg';
import authorPhoto06 from '../assets/images/author-photos/author-photo-06.jpg';
import authorPhoto07 from '../assets/images/author-photos/author-photo-07.jpg';
import authorPhoto08 from '../assets/images/author-photos/author-photo-08.jpg';

export interface AuthorPhoto {
  id: string;
  driveId: string;
  url: string;
  directUrl: string;
  title: string;
  caption: string;
}

export const AUTHOR_PHOTOS: AuthorPhoto[] = [
  {
    id: 'author-01',
    driveId: '1T6vx50G5nPJvNcEjQ6gAahVtLtLzPUba',
    url: authorPhoto01,
    directUrl: 'https://lh3.googleusercontent.com/d/1T6vx50G5nPJvNcEjQ6gAahVtLtLzPUba',
    title: 'Nhà văn Nguyễn Quang Sáng bên bàn làm việc',
    caption: 'Chân dung nhà văn Nguyễn Quang Sáng trong những năm tháng miệt mài sáng tác'
  },
  {
    id: 'author-02',
    driveId: '1qbKOS59Q-BgdRUe-qKxXRgpq9dS9db_T',
    url: authorPhoto02,
    directUrl: 'https://lh3.googleusercontent.com/d/1qbKOS59Q-BgdRUe-qKxXRgpq9dS9db_T',
    title: 'Khoảnh khắc đời thường giản dị của nhà văn',
    caption: 'Vẻ đẹp đôn hậu, nụ cười hiền từ của người cầm bút xứ Nam Bộ'
  },
  {
    id: 'author-03',
    driveId: '1cEpcobwbPcGCKpHPgMaV3UADLrIW_HIC',
    url: authorPhoto03,
    directUrl: 'https://lh3.googleusercontent.com/d/1cEpcobwbPcGCKpHPgMaV3UADLrIW_HIC',
    title: 'Nhà văn Nguyễn Quang Sáng thời kỳ kháng chiến',
    caption: 'Tư liệu lịch sử quý giá thời nhà văn trực tiếp cầm bút và chiến đấu tại chiến trường'
  },
  {
    id: 'author-04',
    driveId: '1AuVBU7v31d4Ueez4GUaP8fFwsZskD1qN',
    url: authorPhoto04,
    directUrl: 'https://lh3.googleusercontent.com/d/1AuVBU7v31d4Ueez4GUaP8fFwsZskD1qN',
    title: 'Tác giả Chiếc lược ngà bên các đồng nghiệp văn nghệ',
    caption: 'Những cuộc gặp gỡ, đàm đạo văn chương sâu sắc cùng bạn văn thời kỳ đổi mới'
  },
  {
    id: 'author-06',
    driveId: '1-590XIl63KNBA4O0aJvDUWQvjwJ5bv6w',
    url: authorPhoto06,
    directUrl: 'https://lh3.googleusercontent.com/d/1-590XIl63KNBA4O0aJvDUWQvjwJ5bv6w',
    title: 'Chân dung trầm ngâm suy tư của tác giả',
    caption: 'Những phút chiêm nghiệm sâu lắng về cuộc đời, đất nước và số phận con người miền Tây'
  },
  {
    id: 'author-07',
    driveId: '1qkhwdlheEbT6F039HShZiNAmJgZUj4Hc',
    url: authorPhoto07,
    directUrl: 'https://lh3.googleusercontent.com/d/1qkhwdlheEbT6F039HShZiNAmJgZUj4Hc',
    title: 'Nhà văn Nguyễn Quang Sáng – Nụ cười hiền hòa và cốt cách Nam Bộ',
    caption: 'Chân dung tư liệu quý giá của nhà văn Nguyễn Quang Sáng được lưu giữ trân trọng'
  },
  {
    id: 'author-08',
    driveId: '1iVymWV2G1lcaWz7le4cCHufXt-sCjo7C',
    url: authorPhoto08,
    directUrl: 'https://lh3.googleusercontent.com/d/1iVymWV2G1lcaWz7le4cCHufXt-sCjo7C',
    title: 'Dấu ấn nhà văn Nam Bộ trọn đời vì quê hương',
    caption: 'Hình ảnh bất hủ của nhà văn đạt Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật'
  }
];
