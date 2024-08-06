import { NeighborPostType } from '@/interfaces/post';
import Header from '@/components/post/Header';
import MDX from '@/components/mdx';
import NeighborPost from '@/components/post/NeighborPost';
import Border from '@/ui/Border/Border';
import Giscus from '@/components/giscus';
import TOC from '@/components/toc';
import styles from './index.module.scss';

interface Props {
  title: string;
  date: string;
  content: string;
  pageType: 'post' | 'note';
  neighborPost: Pick<NeighborPostType, 'prev' | 'next'>;
}

function PostLayout({ title, date, content, pageType, neighborPost: { prev, next } }: Props) {
  return (
    <>
      <article className={styles.wrapper}>
        <Header title={title} date={date} />
        <MDX content={content} />
        <Border />
        <NeighborPost pageType={pageType} neighborPost={{ prev, next }} />
        <Giscus />
      </article>

      <TOC />
    </>
  );
}

export default PostLayout;
