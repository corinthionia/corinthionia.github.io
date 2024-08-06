import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corinthionia',
  description: 'Tech blog by @Corinthionia',
  applicationName: 'Corinthionia',
  icons: {
    icon: '/favicon/favicon-96x96.png',
  },
  metadataBase: new URL('https://corinthionia.github.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ko-KR': '/ko-KR',
    },
  },
  openGraph: {
    title: 'Corinthionia',
    description: 'Tech blog by @Corinthionia',
    url: './',
    siteName: 'Corinthionia',
    images: [''],
    locale: 'ko-KR',
    type: 'website',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  generator: '',
  keywords: null,
  referrer: null,
  colorScheme: null,
  creator: '',
  publisher: '',
  robots: '',
  manifest: '',
  appleWebApp: null,
  formatDetection: null,
  abstract: '',
  appLinks: null,
  archives: null,
  assets: null,
  bookmarks: null,
  category: null,
  classification: null,
};
