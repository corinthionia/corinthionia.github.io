import Link from 'next/link';
import { ROUTE } from '@/constants/ROUTE';
import styles from './index.module.scss';
import logo from 'public/header_logo.svg';
import Image from 'next/image';

const menus = [
  { title: '포스트', href: ROUTE.POST },
  { title: '기록', href: ROUTE.TIL },
  { title: '조각', href: ROUTE.SNIPPET },
];

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        <div className={styles.items}>
          {menus.map(menu => (
            <Link href={menu.href} key={menu.title}>
              <span>{menu.title}</span>
            </Link>
          ))}
        </div>

        <Link href={ROUTE.MAIN}>
          <div className={styles.logo}>
            <Image width={205} height={14} alt="logo" src={logo} />
          </div>
        </Link>

        <div className={styles.items}>
          <Link href={ROUTE.GUESTBOOK}>
            <span>방명록</span>
          </Link>
          <Link href="https://github.com/corinthionia" target="_blank">
            <span>깃허브</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
