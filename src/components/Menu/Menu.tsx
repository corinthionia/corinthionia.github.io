import Link from 'next/link';
import { ROUTE } from '@/constants/ROUTE';
import cn from 'classnames';
import styles from './index.module.scss';
import Border from '@/ui/Border/Border';

const menus = [
  { title: '포스트', href: ROUTE.POST },
  { title: '기록', href: ROUTE.TIL },
  { title: '코드조각', href: ROUTE.SNIPPET },
];

interface Props {
  onClick: () => void;
}

const Menu = (props: Props) => {
  const { onClick } = props;
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
};

export default Menu;
