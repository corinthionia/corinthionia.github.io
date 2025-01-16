import localFont from 'next/font/local';

export const Pretendard = localFont({
  src: [
    { path: '../assets/fonts/Pretendard-Light.woff2', weight: '300' },
    { path: '../assets/fonts/Pretendard-Medium.woff2', weight: '400' },
    { path: '../assets/fonts/Pretendard-SemiBold.woff2', weight: '500' },
    { path: '../assets/fonts/Pretendard-Bold.woff2', weight: '600' },
  ],
});
