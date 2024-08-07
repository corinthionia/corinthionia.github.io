import styles from './index.module.scss';
import cn from 'classnames';

interface Props {
  activeId: string;
  heading: Element;
}

function Heading({ activeId, heading }: Props) {
  return (
    <div
      className={cn(
        heading.nodeName === 'H1' && styles.heading1,
        heading.nodeName === 'H2' && styles.heading2,
        activeId === heading.id && styles.active
      )}
    >
      <a href={`#${heading.id}`}>{heading.textContent}</a>
    </div>
  );
}

export default Heading;
