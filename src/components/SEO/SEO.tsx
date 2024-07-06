import { Metadata } from 'next';
import { metadata } from '@/assets/metadata';

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

export function generatePageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    description: description || metadata.description,
    openGraph: {
      title: `${title} | ${metadata.title}`,
      description: description || metadata.description || 'Tech blog by @Corinthionia',
      url: './',
      siteName: metadata.openGraph?.siteName ?? 'Corinthionia',
      images: metadata.openGraph?.images ?? '',
      locale: 'ko-KR',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${metadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [''],
    },
    ...rest,
  };
}
