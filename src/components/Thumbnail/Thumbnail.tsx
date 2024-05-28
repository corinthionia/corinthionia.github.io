import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import { PostType } from '@/interfaces/post';
import { formatDate } from '@/utils/date';

interface Props {
  to: string;
  post: PostType;
}

const Thumbnail = (props: Props) => {
  const {
    to,
    post: {
      frontMatter: { title, thumbnail, summary, categories, date },
      fields,
    },
  } = props;

  return (
    <Link key={title} href={`${to}/${fields.slug}`}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          width={160}
          height={160}
          quality={100}
          src={thumbnail}
          alt="thumbnail"
          style={{ objectFit: 'cover', borderRadius: '8px' }}
          sizes="(max-width: 768px) 100%"
          priority
        />

        <div className={styles.postInfo}>
          <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.summary}>{summary}</div>
          </div>
          <div className={styles.postData}>
            <div className={styles.category}>{categories[1]}</div>
            <div className={styles.date}>{formatDate(date)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
