import { Metadata } from 'next';
import { PostType } from '@/interfaces/post';
import { getAllSnippets } from 'src/utils/post';
import { CONTENTS_PATH } from '@/constants/post';
import Snippet from '@/components/snippet';
import Bio from '@/components/bio';
import styles from './index.module.scss';

export default async function Page() {
  const snippets = await getAllSnippets(CONTENTS_PATH.SNIPPET_PATH);

  return (
    <>
      <Bio />

      <section className={styles.wrapper}>
        {snippets.map((snippet: PostType) => (
          <Snippet key={snippet.fields.slug} title={snippet.frontMatter.title} content={snippet.content} />
        ))}
      </section>
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
