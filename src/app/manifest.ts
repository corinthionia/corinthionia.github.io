import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tech blog by Corinthionia',
    short_name: 'Tech blog by Corinthionia',
    description: 'Tech blog by Corinthionia',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
