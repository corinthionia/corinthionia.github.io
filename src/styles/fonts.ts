import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

export const NotoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
});

export const Pretendard = localFont({
  src: '../assets/fonts/Pretendard.woff2',
  display: 'swap',
});
