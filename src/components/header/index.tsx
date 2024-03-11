import React from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';

interface Props {
  onClick: () => void;
}

const Header = (props: Props) => {
  const { onClick } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <Wrapper>
      <IconWrapperLeft>
        {isMobile ? (
          <MenuIcon
            src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/a0ab6937-29ec-4eab-afd3-d1e630777827"
            alt="menu"
            onClick={onClick}
          />
        ) : (
          <>
            <a href="/post">
              <PostIcon
                src="https://user-images.githubusercontent.com/79887293/223728512-088d980e-0ab5-40d7-9a4d-d8f3684005ed.svg"
                alt="posts"
              />
            </a>
            <a href="/til">
              <TILIcon
                src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/8b44fab2-5c4f-4fca-a607-9544a7b6c3f4"
                alt="today i learned"
              />
            </a>
            <a href="/snippet">
              <SnippetIcon
                src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/b6dcc737-3029-4017-9f92-b202f484ed92"
                alt="snippet"
              />
            </a>
          </>
        )}
      </IconWrapperLeft>

      <a href="/">
        <Logo
          src="https://user-images.githubusercontent.com/79887293/223732692-bd9cd64a-0495-48a0-b724-c6ae50143986.svg"
          alt="logo"
        />
      </a>

      <IconWrapperRight>
        <a href="https://github.com/corinthionia" target="_blank">
          <RightIcon
            src="https://user-images.githubusercontent.com/79887293/223728888-06511911-20ce-44e6-b7b1-59791885ecca.svg"
            alt="github"
          />
        </a>
      </IconWrapperRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 112px);
  height: 68px;
  padding: 0 8px;
  background: #ffffff5f;

  position: fixed;
  top: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #383838;
  backdrop-filter: blur(10px);

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 16px;
  }
`;

const Logo = styled.img`
  height: 18px;

  @media (max-width: 700px) {
    height: 16px;
  }
`;

const IconWrapperLeft = styled.div`
  gap: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

const IconWrapperRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const PostIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const TILIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const SnippetIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const RightIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export default Header;
