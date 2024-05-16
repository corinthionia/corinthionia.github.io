import Thumbnail from '@/components/thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getAllTILs } from 'src/utils/post';
import styles from './index.module.scss';

export default async function Page() {
  const posts = await getAllTILs();

  return (
    <div className={styles.thumbnailList}>
      {posts.map((post: PostType) => (
        <Thumbnail key={post.fields.slug} {...post} />
      ))}
    </div>
  );
}
