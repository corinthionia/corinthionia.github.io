import { createRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { UtterancesAttributesType } from 'types/utterances';

const src = 'https://utteranc.es/client.js';
const repo = 'corinthionia/blog-comments';

const Utterances = function () {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <UtterancesWrapper ref={element} />;
};

const UtterancesWrapper = styled.div`
  margin-top: 32px;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`;

export default Utterances;
