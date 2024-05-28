import styles from './index.module.scss';
import { Pretendard } from '@/styles/fonts';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>
        <ThemeProvider>
          <Header />

          <div className={styles.layout}>
            <div className={styles.grid}>
              <main className={styles.contents}>{children}</main>
            </div>
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
