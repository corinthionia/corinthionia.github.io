'use client';

import Link from 'next/link';
import { ROUTE } from '@/constants/ROUTE';
import styles from './index.module.scss';

import logo from 'public/header_logo.svg';

import Image from 'next/image';
import Menu from '@/components/Menu/Menu';
import { useState } from 'react';
import Theme from './Theme';

const menus = [
  { title: '포스트', href: ROUTE.POST },
  { title: '노트', href: ROUTE.NOTE },
  { title: '코드조각', href: ROUTE.SNIPPET },
];

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpened(prev => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        <Image width={28} height={28} alt="menu" src="/profile.svg" className={styles.menu} onClick={handleMenuClick} />
        {isMenuOpened && <Menu onClick={handleMenuClick} />}

        <Link href={ROUTE.MAIN} className={styles.logo}>
          <Image width={160} src={logo} alt="logo" />
        </Link>

        <div className={styles.right}>
          <div className={styles.menus}>
            {menus.map(menu => (
              <Link href={menu.href} key={menu.title}>
                <span>{menu.title}</span>
              </Link>
            ))}
          </div>

          <span className={styles.border}>|</span>

          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Header;
