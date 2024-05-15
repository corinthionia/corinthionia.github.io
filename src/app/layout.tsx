import type { Metadata } from 'next';
import '@/styles/globals.css';

import Aside from '@/components/aside/Aside';
import styles from './index.module.scss';
import { Pretendard } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Corinthionia',
  description: 'Tech blog by @Corinthionia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>
        <div className={styles.grid}>
          <Aside />
          <div className={styles.wrapper}>{children}</div>
          <div />
        </div>
      </body>
    </html>
  );
}
