import Link from 'next/link';
import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getPinnedPostList } from 'src/utils/post';
import { ROUTE } from '@/constants/ROUTE';
import styles from './index.module.scss';

export default async function Home() {
  const posts = await getPinnedPostList();

  return (
    <section className={styles.list}>
      <div className={styles.bio}>
        <div className={styles.text}>
          <span>corinthionia@gmail.com</span>
          <span>프론트엔드를 공부하고 있습니다 ✨</span>
        </div>
        <div className={styles.links}>
          <Link href="https://github.com/corinthionia" target="_blank">
            <span>깃허브</span>
          </Link>
          <Link href="/guest-book">
            <span>방명록</span>
          </Link>
        </div>
      </div>

      <div className={styles.heading}>
        <span className={styles.fixed}>📌 Pinned Post</span>
        <Link href={ROUTE.POST}>
          <span>View All</span>
        </Link>
      </div>
      <div className={styles.postGrid}>
        {posts.map((post: PostType) => (
          <Thumbnail key={post.fields.slug} post={post} to={ROUTE.POST} />
        ))}
      </div>
    </section>
  );
}
