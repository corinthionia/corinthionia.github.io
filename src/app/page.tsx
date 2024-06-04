import Link from 'next/link';
import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getPinnedPostList } from 'src/utils/post';
import { ROUTE } from '@/constants/ROUTE';
import styles from './index.module.scss';

import bio from '/public/bio.svg';
import github from '/public/bio_github.svg';
import guestbook from '/public/bio_guest_book.svg';

import Image from 'next/image';

export default async function Home() {
  const posts = await getPinnedPostList();

  return (
    <section className={styles.list}>
      <div className={styles.bio}>
        <Image width={140} src={bio} alt="Joohyun Kim" />
        <span>프론트엔드를 공부하고 있습니다 ✨</span>
      </div>

      <div className={styles.heading}>
        <span className={styles.fixed}>📌 고정된 포스트</span>
        <Link href={ROUTE.POST}>
          <span>전체 포스트</span>
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
