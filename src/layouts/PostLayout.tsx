import styles from './PostLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Post = (props: Props) => {
  const { children } = props;
  return <article className={styles.wrapper}>{children}</article>;
};

export default Post;
