import Header from '@/components/header';
import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/seo/GoogleAnalytics';
import { ThemeProvider } from 'next-themes';
import { Pretendard } from '@/styles/fonts';
import { metadata as meta } from '@/assets/metadata';
import styles from './layout.module.scss';
import '@/styles/globals.scss';

export const metadata = meta;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <GoogleAnalytics />

      <body className={Pretendard.className}>
        <ThemeProvider>
          <Header />
          <div className={styles.layout}>
            <main className={styles.main}>{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
