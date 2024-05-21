import type { Metadata } from 'next';
import styles from './index.module.scss';
import { Pretendard } from '@/styles/fonts';
import Header from '@/components/Header/Header';
import Bio from '@/components/Bio/Bio';
import Footer from '@/components/Footer/Footer';
import Aside from '@/components/Aside/Aside';
import '@/styles/globals.css';
import TOC from '@/components/TOC/TOC';

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

          <Bio />

          <div className={styles.grid}>
            <main className={styles.contents}>{children}</main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
