import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/profile.svg';
import styles from './index.module.scss';

function Bio() {
  return (
    <section className={styles.wrapper}>
      <Image alt="Profile Image" src={profileImage} className={styles.image} />

      <div className={styles.text}>
        <span className={styles.name}>Joohyun Kim</span>
        <div className={styles.description}>
          <Link href="mailto:corinthionia@gmail.com">
            <span>corinthionia@gmail.com</span>
          </Link>
          <span>프론트엔드 개발을 하고 있어요</span>
        </div>
      </div>
    </section>
  );
}

export default Bio;
