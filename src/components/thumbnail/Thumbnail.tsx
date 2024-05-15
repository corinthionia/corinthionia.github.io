import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';
import { PostType } from '@/interfaces/post';

const Thumbnail = (props: PostType) => {
  const { frontMatter, fields } = props;
  return (
    <Link key={frontMatter.title} href={`/post/${fields.slug}`}>
      <div className={styles.wrapper}>
        <div style={{ width: '200px', height: '200px', background: 'pink' }} />
        <div className={styles.postInfo}>
          <div>
            <div className={styles.title}>{frontMatter.title}</div>
            <div className={styles.summary}>{frontMatter.summary}</div>
          </div>
          <div className={styles.postData}>
            <div className={styles.category}>{frontMatter.categories.join(' ')}</div>
            <div className={styles.category}>|</div>
            <div className={styles.date}>{frontMatter.date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
