import Thumbnail from '@/components/thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getPinnedPostList } from 'src/utils/post';
import styles from './index.module.scss';

export default async function Home() {
  const posts = await getPinnedPostList();

  return (
    <div className={styles.thumbnailList}>
      {posts.map((post: PostType) => (
        <Thumbnail key={post.fields.slug} {...post} />
      ))}
    </div>
  );
}
