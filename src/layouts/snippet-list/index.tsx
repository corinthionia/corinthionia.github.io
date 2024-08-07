import { getAllSnippets } from '@/utils/post';
import { CONTENTS_PATH } from '@/constants/post';
import { PostType } from '@/interfaces/post';
import Snippet from '@/components/snippet';
import Bio from '@/components/bio';
import styles from './index.module.scss';

async function SnippetListLayout() {
  const snippets = await getAllSnippets(CONTENTS_PATH.SNIPPET_PATH);

  return (
    <div className={styles.wrapper}>
      <Bio />

      <section className={styles.list}>
        {snippets.map((snippet: PostType) => (
          <Snippet key={snippet.fields.slug} title={snippet.frontMatter.title} content={snippet.content} />
        ))}
      </section>
    </div>
  );
}

export default SnippetListLayout;
