import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Pretendard } from '@/styles/fonts';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import styles from './index.module.scss';
import '@/styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
        <title>Tech blog by @corinthionia</title>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID as string} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_CONTAINER_ID as string} />
      </Head>

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
