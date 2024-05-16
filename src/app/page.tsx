import Thumbnail from '@/components/thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getPinnedPostList } from 'src/utils/post';
import styles from './index.module.scss';

export default async function Home() {
  const posts = await getPinnedPostList();

  return (
    <div className={styles.thumbnailList}>
      <div className={styles.heading}>
        <h2>고정된 포스트</h2>
        <h2>전체 포스트</h2>
      </div>
      {posts.map((post: PostType) => (
        <Thumbnail key={post.fields.slug} {...post} />
      ))}
    </div>
  );
}
