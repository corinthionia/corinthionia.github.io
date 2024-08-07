import { Metadata } from 'next';
import { POST_TYPE } from '@/constants/post';
import PostListLayout from '@/layouts/post-list';

export default function Page() {
  return <PostListLayout pageType={POST_TYPE.NOTE} />;
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  const authors = ['Corinthionia', 'Joohyun Kim'];

  return {
    title: 'Note | Corinthionia',
    description: 'Note | Corinthionia',
    openGraph: {
      title: 'Note | Corinthionia',
      description: 'Note | Corinthionia',
      siteName: 'Corinthionia',
      locale: 'ko_KR',
      type: 'article',
      url: './',
      authors: authors,
    },
  };
}
