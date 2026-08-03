import Link from 'next/link';
import Thumbnail from '@/components/thumbnail';
import { Metadata } from 'next';
import { getPinnedPostList } from 'src/utils/post';
import { PostType } from '@/interfaces/post';
import { ROUTES } from '@/constants/route';
import styles from './index.module.scss';
import { INFO } from '@/constants/info';

export default async function Home() {
  const posts = await getPinnedPostList();

  return (
    <section className={styles.wrapper}>
      <section className={styles.bio}>
        <div className={styles.info}>
          <span className={styles.name}>Joohyun Kim ✨</span>
          <span>{INFO.email}</span>
        </div>
        <div className={styles.links}>
          <Link href={INFO.github} target="_blank">
            😺 깃허브
          </Link>
          <Link href={INFO.linkedin} target="_blank">
            🔗 링크드인
          </Link>
          <Link href="/guest-book">🏡 방명록</Link>
        </div>
      </section>

      <section className={styles.posts}>
        <div className={styles.heading}>
          <span className={styles.fixed}>📌 Pinned Post</span>
          <Link href={ROUTES.POST}>
            <span>View All</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {posts.map((post: PostType) => (
            <Thumbnail key={post.fields.slug} post={post} to={ROUTES.POST} />
          ))}
        </div>
      </section>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  const authors = ['Corinthionia', 'Joohyun Kim'];

  return {
    title: 'Corinthionia',
    description: 'Corinthionia',
    openGraph: {
      title: 'Corinthionia',
      description: 'Corinthionia',
      siteName: 'Corinthionia',
      locale: 'ko_KR',
      type: 'article',
      url: './',
      authors: authors,
    },
  };
}
