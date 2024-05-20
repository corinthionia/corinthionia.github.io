import { notFound } from 'next/navigation';
import MDX from '@/components/MDX/MDX';
import Header from '@/components/Post/Header';
import NeighborPost from '@/components/Post/NeighborPost';
import Giscus from '@/components/Giscus/Giscus';
import { formatDate } from '@/utils/date';
import { getNeighborPosts } from '@/utils/post';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';
import styles from './index.module.scss';

interface ParamType {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: ParamType) {
  const { slug } = params;

  const { prev, curr, next } = await getNeighborPosts(CONTENTS_PATH.TIL_PATH, slug);

  if (!curr) return notFound();

  const {
    frontMatter: { title, date },
    content,
  } = curr;

  return (
    <article className={styles.wrapper}>
      <Header title={title} date={formatDate(date)} />
      <MDX content={content} />
      <div className={styles.border} />
      <NeighborPost pageType="til" neighborPost={{ prev, next }} />
      <Giscus />
    </article>
  );
}
