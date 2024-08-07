import MDX from '@/components/mdx';
import styles from './index.module.scss';

interface Props {
  title: string;
  content: string;
}

function Snippet({ title, content }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.snippet}>
        <MDX content={content} />
      </div>
    </div>
  );
}

export default Snippet;
