import Link from 'next/link';
import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getPinnedPostList } from 'src/utils/post';
import { ROUTE } from '@/constants/ROUTE';
import styles from './index.module.scss';
import PostList from '@/components/PostList/PostList';

export default async function Home() {
  const posts = await getPinnedPostList();

  return (
    <section className={styles.list}>
      <div className={styles.heading}>
        <span className={styles.fixed}>고정된 포스트</span>
        <Link href={ROUTE.POST}>
          <span>전체 포스트</span>
        </Link>
      </div>

      <PostList>
        {posts.map((post: PostType) => (
          <Thumbnail key={post.fields.slug} post={post} to={ROUTE.POST} />
        ))}
      </PostList>
    </section>
  );
}
