import { PostType } from '@/interfaces/post';
import { getAllSnippets } from 'src/utils/post';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';
import Bio from '@/components/Bio/Bio';
import Snippet from '@/components/Snippet/Snippet';
import styles from './index.module.scss';

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
