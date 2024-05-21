'use client';

import { useLayoutEffect, useState } from 'react';
import { getTOCObserver } from '@/utils/toc';
import Heading from '@/components/TOC/Heading';
import styles from './index.module.scss';

const TOC = () => {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<Element[]>([]);

  useLayoutEffect(() => {
    const observer = getTOCObserver(setActiveId);

    const headingElements = Array.from(document.querySelectorAll('h1, h2')).slice(1);
    setHeadings(headingElements);

    headingElements.map(heading => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {headings.map(heading => (
        <Heading key={heading.id} activeId={activeId} heading={heading} />
      ))}
    </div>
  );
};

export default TOC;
