import React from 'react';
import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

function PostList(props: Props) {
  const { children } = props;
  return <section className={styles.wrapper}>{children}</section>;
}

export default PostList;
