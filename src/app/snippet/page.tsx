import { PostType } from '@/interfaces/post';
import { getAllSnippets } from 'src/utils/post';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';
import Bio from '@/components/Bio/Bio';
import Snippet from '@/components/Snippet/Snippet';
import styles from './index.module.scss';
import { Metadata } from 'next';

export default async function Page() {
  const posts = await getAllSnippets(CONTENTS_PATH.SNIPPET_PATH);

  return (
    <>
      <Bio />

      <main className={styles.wrapper}>
        {posts.map((post: PostType) => (
          <Snippet key={post.fields.slug} title={post.frontMatter.title} content={post.content} />
        ))}
      </main>
    </>
  );
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
