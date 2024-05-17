import { getAllPosts, getMatchedPost } from '@/utils/post';
import styles from './index.module.scss';
import MDX from '@/components/MDX/MDX';
import Giscus from '@/components/Giscus/Giscus';

export default async function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.title}>🏡 Guest Book</div>
        <div className={styles.body}>방문해 주신 모든 분들께 감사드립니다!</div>
      </div>
      <Giscus />
    </div>
  );
}
