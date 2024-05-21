import { Dispatch, SetStateAction } from 'react';

const observerOptions = {
  threshold: 1.0,
  rootMargin: '-128px 0px 0px 0px',
};

export const getTOCObserver = (setState: Dispatch<SetStateAction<string>>) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      setState(entry.target.id);
    });
  }, observerOptions);

  return observer;
};
