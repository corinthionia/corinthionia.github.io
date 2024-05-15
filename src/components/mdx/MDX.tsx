import { ReactElement } from 'react';
import styles from './index.module.scss';
import './prism-one-dark.scss';

interface Props {
  children: ReactElement;
}

const MDX = (props: Props) => {
  const { children } = props;

  return <div className={styles.mdx}>{children}</div>;
};

export default MDX;
