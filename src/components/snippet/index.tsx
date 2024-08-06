import React from 'react';
import styles from './index.module.scss';
import MDX from '@/components/mdx';

interface Props {
  title: string;
  content: string;
}

function Snippet(props: Props) {
  const { title, content } = props;

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
