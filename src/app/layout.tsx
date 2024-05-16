import type { Metadata } from 'next';
import '@/styles/globals.css';

import styles from './index.module.scss';
import { Pretendard } from '@/styles/fonts';
import Header from '@/components/header/Header';
import Bio from '@/components/bio/Bio';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Corinthionia',
  description: 'Tech blog by @Corinthionia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>
        <div className={styles.layout}>
          <Header />
          <div className={styles.grid}>
            <Bio />
            <div className={styles.wrapper}>
              {children}
              <Footer />
            </div>
            <div />
          </div>
        </div>
      </body>
    </html>
  );
}
