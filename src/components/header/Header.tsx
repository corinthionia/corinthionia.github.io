import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const Header = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconsWrapperLeft}>
        {/* <Image
          alt="menu"
          src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/a0ab6937-29ec-4eab-afd3-d1e630777827"
          className={styles.MenuIcon}
        /> */}
        <Link href="/post">
          <Image
            width={22}
            height={22}
            src="https://user-images.githubusercontent.com/79887293/223728512-088d980e-0ab5-40d7-9a4d-d8f3684005ed.svg"
            alt="posts"
            className={styles.PostIcon}
          />
        </Link>
        <Link href="/til">
          <Image
            width={25}
            height={25}
            src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/8b44fab2-5c4f-4fca-a607-9544a7b6c3f4"
            alt="today i learned"
            className={styles.TILIcon}
          />
        </Link>
        <Link href="/snippet">
          <Image
            width={28}
            height={28}
            src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/b6dcc737-3029-4017-9f92-b202f484ed92"
            alt="snippet"
            className={styles.SnippetIcon}
          />
        </Link>
      </div>

      <div className={styles.iconWrapperRight}>
        <Link href="https://github.com/corinthionia">
          <Image
            width={28}
            height={28}
            src="https://user-images.githubusercontent.com/79887293/223728888-06511911-20ce-44e6-b7b1-59791885ecca.svg"
            alt="github"
            className={styles.RightIcon}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
