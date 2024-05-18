import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import { FrontMatterType, PostType } from '@/interfaces/post';
import { formatDate } from '@/utils/date';

interface Props {
  post: PostType;
  to: string;
}

const Thumbnail = (props: Props) => {
  const {
    post: { frontMatter, fields },
    to,
  } = props;

  return (
    <Link key={frontMatter.title} href={`/${to}/${fields.slug}`}>
      <div className={styles.wrapper}>
        <Image
          width={160}
          height={160}
          quality={100}
          src={frontMatter.thumbnail}
          alt="thumbnail"
          priority
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />

        <div className={styles.postInfo}>
          <div>
            <div className={styles.title}>{frontMatter.title}</div>
            <div className={styles.summary}>{frontMatter.summary}</div>
          </div>
          <div className={styles.postData}>
            <div className={styles.category}>{frontMatter.categories[1]}</div>
            <div className={styles.category}>|</div>
            <div className={styles.date}>{formatDate(frontMatter.date)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
