import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/profile.svg';
import styles from './index.module.scss';

const Bio = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.profile}>
        <Image width={140} height={140} alt="Profile Image" src={profileImage} />
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
    </section>
  );
};

export default Bio;
