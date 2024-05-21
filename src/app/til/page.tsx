import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getAllPosts } from 'src/utils/post';
import PostList from '@/components/PostList/PostList';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';
import styles from './index.module.scss';
import { ROUTE } from '@/constants/ROUTE';

export default async function Page() {
  const posts = await getAllPosts(CONTENTS_PATH.TIL_PATH);

  return (
    <main className={styles.wrapper}>
      <PostList>
        {posts.map((post: PostType) => (
          <Thumbnail key={post.fields.slug} post={post} to={ROUTE.TIL} />
        ))}
      </PostList>
    </main>
  );
}
