import type { Metadata } from 'next';
import '@/styles/globals.css';

import styles from './index.module.scss';
import { Pretendard } from '@/styles/fonts';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'Corinthionia',
  description: 'Tech blog by @Corinthionia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>
        <Header />
        <div className={styles.grid}>
          <div />
          <div className={styles.wrapper}>{children}</div>
          <div />
        </div>
      </body>
    </html>
  );
}
