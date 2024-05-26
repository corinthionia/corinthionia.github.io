'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';

    scriptElem.setAttribute('data-repo', 'corinthionia/blog-comments');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOGUqqLw');
    scriptElem.setAttribute('data-category', 'Comments');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOGUqqL84CfZyf');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', isLightTheme ? 'light' : 'transparent_dark');
    scriptElem.setAttribute('data-lang', 'en');
    scriptElem.crossOrigin = 'anonymous';
    scriptElem.async = true;

    ref.current.appendChild(scriptElem);
  }, []);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: isLightTheme ? 'light' : 'transparent_dark' } } },
      'https://giscus.app'
    );
  }, [theme]);

  return <section ref={ref} />;
};

export default Giscus;
