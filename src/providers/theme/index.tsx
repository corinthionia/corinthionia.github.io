'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};

export default ThemeProvider;
