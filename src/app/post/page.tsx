import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getAllPosts } from 'src/utils/post';
import styles from './index.module.scss';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <main className={styles.thumbnailList}>
      {posts.map((post: PostType) => (
        <Thumbnail key={post.fields.slug} post={post} to="post" />
      ))}
    </main>
  );
}
