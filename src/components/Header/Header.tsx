import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

import logo from 'public/header_logo.svg';
import Image from 'next/image';

const menus = [
  { title: '포스트', href: '/post' },
  { title: '기록', href: '/til' },
  { title: '조각', href: '/snippet' },
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

        <Link href="/">
          <div className={styles.logo}>
            <Image width={205} height={14} alt="logo" src={logo} />
          </div>
        </Link>

        <div className={styles.items}>
          <Link href="/guest-book">
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
