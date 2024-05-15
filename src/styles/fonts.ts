import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

export const NotoSansKR = Noto_Sans_KR({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const Pretendard = localFont({
  src: '../assets/fonts/Pretendard.woff2',
  display: 'swap',
});
