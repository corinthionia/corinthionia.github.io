import Link from 'next/link';
import { NeighborPostType } from '@/interfaces/post';
import styles from './NeighborPost.module.scss';

interface Props {
  pageType: 'post' | 'til';
  neighborPost: NeighborPostType;
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
              <div className={styles.top}>← 이전 글</div>
              <div className={styles.bottom}>{prev.frontMatter.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link href={`/${pageType}/${next.fields.slug}`}>
            <div className={styles.wrapper}>
              <div className={styles.top}>다음 글 →</div>
              <div className={styles.bottom}>{next.frontMatter.title}</div>
            </div>
          </Link>
        )}
      </section>
    </>
  );
};

export default NeighborPost;
