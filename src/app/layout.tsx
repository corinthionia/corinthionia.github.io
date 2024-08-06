import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from 'next-themes';
import { NotoSansKR } from '@/styles/fonts';
import { metadata as meta } from '@/assets/metadata';
import styles from './index.module.scss';
import '@/styles/globals.scss';
import Script from 'next/script';

export const metadata = meta;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
        <title>Tech blog by @corinthionia</title>
        <link rel="icon" href="./favicon.svg" />
      </Head>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      ></Script>
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${process.env.NEXT_PUBLIC_GA_TRACKING_ID});
        `}
      </Script>

      <body className={NotoSansKR.className}>
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
