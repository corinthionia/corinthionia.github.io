import { Metadata } from 'next';
import PostListLayout from '@/layouts/post-list';

export default function Page() {
  return <PostListLayout postType="post" />;
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  const authors = ['Corinthionia', 'Joohyun Kim'];

  return {
    title: 'Blog | Corinthionia',
    description: 'Blog | Corinthionia',
    openGraph: {
      title: 'Blog | Corinthionia',
      description: 'Blog | Corinthionia',
      siteName: 'Corinthionia',
      locale: 'ko_KR',
      type: 'article',
      url: './',
      authors: authors,
    },
  };
}
