'use client';

import Image from 'next/image';
import dark from 'public/icons/dark.svg';
import light from 'public/icons/light.svg';
import { useTheme } from 'next-themes';
import styles from './index.module.scss';

const Theme = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const isLightTheme = systemTheme === 'light' || theme === 'light';

  return (
    <Image
      width={32}
      height={32}
      alt="theme"
      src={isLightTheme ? light : dark}
      className={styles.theme}
      style={{ cursor: 'pointer' }}
      onClick={() => setTheme(isLightTheme ? 'dark' : 'light')}
    />
  );
};

export default Theme;
