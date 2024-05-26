import type { Metadata } from 'next';
import styles from './index.module.scss';
import { NotoSansKR } from '@/styles/fonts';
import Header from '@/components/Header/Header';
import Bio from '@/components/Bio/Bio';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Corinthionia',
  description: 'Tech blog by @Corinthionia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={NotoSansKR.className}>
        <ThemeProvider>
          <div className={styles.layout}>
            <Header />
            <Bio />

            <div className={styles.grid}>
              <main className={styles.contents}>{children}</main>
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
