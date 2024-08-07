import { Metadata } from 'next';
import { POST_TYPE } from '@/constants/post';
import PostListLayout from '@/layouts/post-list';

export default function Page() {
  return <PostListLayout pageType={POST_TYPE.POST} />;
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
