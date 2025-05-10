'use client';

import { useState } from 'react';
import { ROUTES } from '@/constants/route';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/menu';
import logo from 'public/header_logo.svg';
import Theme from './Theme';
import styles from './index.module.scss';

const menus = [
  { title: '포스트', href: ROUTES.POST },
  // { title: '노트', href: ROUTES.NOTE },
  { title: '코드조각', href: ROUTES.SNIPPET },
];

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpened(prev => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        <Image
          width={28}
          height={28}
          alt="menu"
          src="/profile.svg"
          className={styles.menu}
          onClick={handleMenuClick}
        />
        {isMenuOpened && <Menu onClick={handleMenuClick} />}

        <Link href={ROUTES.MAIN} className={styles.logo}>
          <Image width={140} src={logo} alt="logo" />
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
}

export default Header;
