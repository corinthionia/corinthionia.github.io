import Link from 'next/link';
import { INFO } from '@/constants/info';
import styles from './Header.module.scss';

interface Props {
  title: string;
  date: string;
}

const Header = ({ title, date }: Props) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>
        <Link href={INFO.github} target="_blank">
          <span>@corinthionia</span>
        </Link>
        <span>{date}</span>
      </div>
    </header>
  );
};

export default Header;
