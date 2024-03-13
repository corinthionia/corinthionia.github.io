import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { SnippetNodeType } from 'types/snippet';
import './code.css';

const Snippet = function (props: SnippetNodeType) {
  const { html, frontmatter } = props;

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClickSnippet = () => {
    if (parentRef.current === null || childRef.current === null) {
      return;
    }

    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = '0px';
    } else if (parentRef.current.clientHeight === 0) {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }

    setIsCollapsed(!isCollapsed);
  };

  const handleCopyToClipBoard = async (
    e: React.MouseEvent<HTMLImageElement>
  ) => {
    e.stopPropagation();

    try {
      if (childRef.current) {
        const coppiedSnippet =
          childRef.current.childNodes[0].childNodes[0].childNodes[0]
            .childNodes[0].textContent!;

        await navigator.clipboard.writeText(coppiedSnippet);

        alert('클립보드에 복사되었습니다.');
      }
    } catch {
      alert('링크 복사에 실패했습니다.\n다시 시도해 주세요.');
    }
  };

  return (
    <Wrapper>
      <TitleWrapper onClick={handleClickSnippet} isCollapsed={isCollapsed}>
        <TitleItems>
          <CopyButton
            src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/835dfccf-79e9-45ee-ae5e-69e71b4137d5"
            alt="copy"
            onClick={(e) => handleCopyToClipBoard(e)}
          />
          <div>{frontmatter?.title}</div>
        </TitleItems>
        {isCollapsed ? (
          <AccordionIcon
            src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/ca244910-133f-4a09-80b8-34d853524997"
            alt="expand"
          />
        ) : (
          <AccordionIcon
            src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/007b1398-e97b-404f-91ac-ab4ad2e80706"
            alt="collapse"
          />
        )}
      </TitleWrapper>

      <ListWrapper ref={parentRef}>
        <ListItem ref={childRef}>
          <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
        </ListItem>
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #c6c8d1;
  color: ${theme.colors.gray5};
  & + & {
    margin-top: 48px;
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 14px;
    font-weight: 400;

    & + & {
      margin-top: 28px;
    }
  }
`;

const TitleWrapper = styled.section<{ isCollapsed: boolean }>`
  width: 100%;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isCollapsed ? `1px solid #c6c8d1` : `none`};
  @media (max-width: 700px) {
    font-size: 14px;
    font-weight: 400;
    padding: 18px 20px;
  }
`;

const TitleItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 14px;
    gap: 8px;
  }
`;

const CopyButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 18px;
    height: 18px;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 0px;
  overflow: hidden;
  padding: 0 24px;
  transition: height 0.35s ease, background 0.35s ease;
`;

const ListItem = styled.div`
  padding: 0;
`;

const AccordionIcon = styled.img`
  width: 18px;
  height: 18px;
  @media (max-width: 700px) {
    width: 14px;
    height: 14px;
  }
`;

const MarkdownRenderer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
    font-size: 12px;
  }

  pre {
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.gray0};
      border-radius: 15px;
    }
    ::-webkit-scrollbar {
      height: 4px;
    }
  }
`;

export default Snippet;
