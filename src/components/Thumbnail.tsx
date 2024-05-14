import Link from 'next/link';
import styles from './index.module.scss';

const Thumbnail = ({ frontMatter, fields }: any) => {
  return (
    <Link key={frontMatter.title} href={`/post/${fields.slug}`}>
      <div className={styles.wrapper}>
        <div className={styles.postInfo}>
          <div>
            <div className={styles.title}>{frontMatter.title}</div>
          </div>
          {frontMatter.categories.join(' ')}
          <div className={styles.date}>{frontMatter.date}</div>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
