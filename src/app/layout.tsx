import type { Metadata } from 'next';
import { NotoSansKR } from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Corinthionia',
  description: 'Tech blog by @Corinthionia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={NotoSansKR.className}>{children}</body>
    </html>
  );
}
