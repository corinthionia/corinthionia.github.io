import Link from 'next/link';
import { NeighborPostType } from '@/interfaces/post';
import styles from './NeighborPost.module.scss';

interface Props {
  pageType: 'post' | 'til';
  neighborPost: Pick<NeighborPostType, 'prev' | 'next'>;
}

const NeighborPost = (props: Props) => {
  const {
    pageType,
    neighborPost: { prev, next },
  } = props;

  return (
    <>
      <section className={styles.section}>
        {prev ? (
          <Link href={`/${pageType}/${prev.fields.slug}`}>
            <div className={styles.wrapper}>
              <span className={styles.top}>← 이전 글</span>
              <span className={styles.bottom}>{prev.frontMatter.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link href={`/${pageType}/${next.fields.slug}`}>
            <div className={styles.wrapper}>
              <span className={styles.top}>다음 글 →</span>
              <span className={styles.bottom}>{next.frontMatter.title}</span>
            </div>
          </Link>
        )}
      </section>
    </>
  );
};

export default NeighborPost;
