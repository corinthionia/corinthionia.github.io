import Link from 'next/link';
import styles from './index.module.scss';
import { PostType } from '@/interfaces/post';

const Thumbnail = (props: PostType) => {
  const { frontMatter, fields } = props;

  return (
    <Link key={frontMatter.title} href={`/post/${fields.slug}`}>
      <div className={styles.wrapper}>
        {/* <Image
          width={200}
          height={200}
          alt="thumbnail"
          style={{ objectFit: 'cover', borderRadius: '8px' }}
          // quality={100}
          // layout="fixed"
          priority
          src={thumbnail}
        /> */}
        {/* <img
          alt="thumbnail"
          src={'/thumbnail/post/react-google-login-library.png'}
          style={{ objectFit: 'cover', width: '200px', height: '200px' }}
        /> */}

        <div style={{ width: '160px', height: '160px', borderRadius: '8px', border: '1px solid gray' }} />

        <div className={styles.postInfo}>
          <div>
            <div className={styles.title}>{frontMatter.title}</div>
            <div className={styles.summary}>{frontMatter.summary}</div>
          </div>
          <div className={styles.postData}>
            <div className={styles.category}>{frontMatter.categories[1]}</div>
            <div className={styles.category}>|</div>
            <div className={styles.date}>{frontMatter.date.slice(0, 10)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
