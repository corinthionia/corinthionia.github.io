import Link from 'next/link';
import Border from '@/ui/Border/Border';
import { ROUTES } from '@/constants/route';
import cn from 'classnames';
import styles from './index.module.scss';

const menus = [
  { title: '포스트', href: ROUTES.POST },
  { title: '노트', href: ROUTES.NOTE },
  { title: '코드조각', href: ROUTES.SNIPPET },
];

interface Props {
  onClick: () => void;
}

function Menu({ onClick }: Props) {
  const pathname = window.location.pathname.split('/')[1];

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Link href="https://github.com/corinthionia" target="_blank">
          @corinthionia
        </Link>
      </div>
      <Border />
      <div className={styles.bottom}>
        {menus.map(menu => (
          <Link href={menu.href} key={menu.title} onClick={onClick}>
            <span className={cn(`/${pathname}` === menu.href && styles.active)}>{menu.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
