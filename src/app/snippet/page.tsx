import { Metadata } from 'next';
import SnippetListLayout from '@/layouts/snippet-list';

export default async function Page() {
  return <SnippetListLayout />;
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  const authors = ['Corinthionia', 'Joohyun Kim'];

  return {
    title: 'Snippet | Corinthionia',
    description: 'Snippet | Corinthionia',
    openGraph: {
      title: 'Snippet | Corinthionia',
      description: 'Snippet | Corinthionia',
      siteName: 'Corinthionia',
      locale: 'ko_KR',
      type: 'article',
      url: './',
      authors: authors,
    },
  };
}
