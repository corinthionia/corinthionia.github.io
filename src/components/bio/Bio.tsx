import React from 'react';
import styles from './index.module.scss';

import profileImage from 'public/profile.svg';
import Image from 'next/image';
import Link from 'next/link';

const Bio = () => {
  return (
    <div className={styles.wrapper}>
      <Image width={160} height={160} alt="Profile Image" src={profileImage} />
      <div className={styles.text}>
        <div className={styles.name}>Joohyun Kim</div>
        <div className={styles.description}>
          <Link href="mailto:corinthionia@gmail.com">
            <div>corinthionia@gmail.com</div>
          </Link>
          <div>프론트엔드를 공부하고 있습니다</div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
