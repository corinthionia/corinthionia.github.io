import { PostType } from '@/interfaces/post';
import { getAllSnippets } from 'src/utils/post';
import styles from './index.module.scss';
import Snippet from '@/components/snippet/Snippet';

export default async function Page() {
  const posts = await getAllSnippets();

  return (
    <div className={styles.thumbnailList}>
      {posts.map((post: PostType) => (
        <Snippet key={post.fields.slug} title={post.frontMatter.title} content={post.content} />
      ))}
    </div>
  );
}
