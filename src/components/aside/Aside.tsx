import React from 'react';
import styles from './index.module.scss';
import Bio from '@/components/Bio/Bio';

const Aside = () => {
  return (
    <div className={styles.wrapper}>
      <Bio />
    </div>
  );
};

export default Aside;
