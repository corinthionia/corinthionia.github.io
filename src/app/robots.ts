import { INFO } from '@/constants/info';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${INFO.website}/sitemap.xml`,
  };
}
