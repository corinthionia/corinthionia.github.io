import { NeighborPostType, PageType } from '@/interfaces/post';
import Header from '@/components/post/Header';
import MDX from '@/components/mdx';
import NeighborPost from '@/components/post/NeighborPost';
import Giscus from '@/components/giscus';
import TOC from '@/components/toc';
import styles from './index.module.scss';

interface Props {
  title: string;
  date: string;
  content: string;
  pageType: PageType;
  neighborPost: Pick<NeighborPostType, 'prev' | 'next'>;
}

function PostLayout({ title, date, content, pageType, neighborPost: { prev, next } }: Props) {
  return (
    <>
      <article className={styles.wrapper}>
        <Header title={title} date={date} />
        <MDX content={content} />
        <div className={styles.border} />
        <NeighborPost pageType={pageType} neighborPost={{ prev, next }} />
        <Giscus />
      </article>

      <TOC />
    </>
  );
}

export default PostLayout;
