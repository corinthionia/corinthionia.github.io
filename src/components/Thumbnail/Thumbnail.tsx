import Link from 'next/link';
import Image from 'next/image';
import { PostType } from '@/interfaces/post';
import { formatDate } from '@/utils/date';
import styles from './index.module.scss';

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
          width={224}
          height={144}
          quality={100}
          src={thumbnail}
          alt="thumbnail"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100%"
          priority
        />

        <div className={styles.postInfo}>
          <div className={styles.top}>
            <div className={styles.category}>{categories[1]}</div>
            <span className={styles.date}>{formatDate(date)}</span>
          </div>

          <div className={styles.bottom}>
            <div className={styles.title}>{title}</div>
            <div className={styles.summary}>{summary}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
