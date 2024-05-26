'use client';

import Link from 'next/link';
import { ROUTE } from '@/constants/ROUTE';
import styles from './index.module.scss';
import logoLight from 'public/header_logo_light.svg';
import logoDark from 'public/header_logo_dark.svg';

import Image from 'next/image';
import Menu from '@/components/Menu/Menu';
import { useState } from 'react';
import Theme from './Theme';
import { useTheme } from 'next-themes';

const menus = [
  { title: '포스트', href: ROUTE.POST },
  { title: '기록', href: ROUTE.TIL },
  { title: '코드조각', href: ROUTE.SNIPPET },
];

const Header = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpened(prev => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        <Image width={28} height={28} alt="menu" src="/profile.svg" className={styles.menu} onClick={handleMenuClick} />
        {isMenuOpened && <Menu onClick={handleMenuClick} />}

        <div className={styles.items}>
          {menus.map(menu => (
            <Link href={menu.href} key={menu.title}>
              <span>{menu.title}</span>
            </Link>
          ))}
        </div>

        <Link href={ROUTE.MAIN}>
          <div className={styles.logo}>
            <Image width={205} height={14} alt="logo" src={isLightTheme ? logoLight : logoDark} />
          </div>
        </Link>

        <Theme />
      </div>
    </div>
  );
};

export default Header;
