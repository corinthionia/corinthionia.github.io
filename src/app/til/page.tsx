import { PostType } from '@/interfaces/post';
import { getAllPosts } from 'src/utils/post';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';
import { ROUTE } from '@/constants/ROUTE';
import PostList from '@/components/PostList/PostList';
import Thumbnail from '@/components/Thumbnail/Thumbnail';
import Bio from '@/components/Bio/Bio';
import styles from './index.module.scss';

export default async function Page() {
  const posts = await getAllPosts(CONTENTS_PATH.TIL_PATH);

  return (
    <>
      <Bio />

      <main className={styles.wrapper}>
        <PostList>
          {posts.map((post: PostType) => (
            <Thumbnail key={post.fields.slug} post={post} to={ROUTE.TIL} />
          ))}
        </PostList>
      </main>
    </>
  );
}
