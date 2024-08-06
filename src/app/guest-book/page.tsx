import { Metadata } from 'next';
import styles from './index.module.scss';
import Giscus from '@/components/giscus';

export default async function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>🏡 Guest Book</div>
        <div className={styles.body}>방문해 주신 모든 분들께 감사드립니다!</div>
      </div>
      <Giscus />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  const authors = ['Corinthionia', 'Joohyun Kim'];

  return {
    title: 'Guest book',
    description: 'Guest book',
    openGraph: {
      title: 'Guest book',
      description: 'Guest book',
      siteName: 'Corinthionia',
      locale: 'ko_KR',
      type: 'article',
      url: './',
      authors: authors,
    },
  };
}
