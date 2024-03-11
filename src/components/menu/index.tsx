import styled from '@emotion/styled';
import React from 'react';
import menuCloseIcon from '../../assets/svgs/menu_close.svg';
import theme from '../../styles/theme';

interface Props {
  onClick: () => void;
}

const Menu = (props: Props) => {
  const { onClick } = props;

  const currentURL = window.location.pathname;

  return (
    <Wrapper>
      <CloseButton src={menuCloseIcon} alt="close" onClick={onClick} />
      <MenuWrapper>
        <a href="/post">
          <MenuItemWrapper onClick={onClick} isActive={currentURL === '/post/'}>
            <PostIcon
              src="https://user-images.githubusercontent.com/79887293/223728512-088d980e-0ab5-40d7-9a4d-d8f3684005ed.svg"
              alt="posts"
            />
            <span>포스트</span>
          </MenuItemWrapper>
        </a>

        <Border />

        <a href="/til">
          <MenuItemWrapper onClick={onClick} isActive={currentURL === '/til/'}>
            <TILIcon
              src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/8b44fab2-5c4f-4fca-a607-9544a7b6c3f4"
              alt="today i learned"
            />
            <span>공부 기록</span>
          </MenuItemWrapper>
        </a>

        <Border />

        <a href="/snippet">
          <MenuItemWrapper
            onClick={onClick}
            isActive={currentURL === '/snippet/'}
          >
            <SnippetIcon
              src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/b6dcc737-3029-4017-9f92-b202f484ed92"
              alt="snippet"
            />
            <span>코드 조각</span>
          </MenuItemWrapper>
        </a>

        <Border />
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 68px;
  left: 0;
  z-index: 3;
  width: 100%;
  height: calc(100% - 68px);
  background: #ffffff5f;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
`;

const CloseButton = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 24px;
  right: 24px;
`;

const MenuWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const MenuItemWrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 4px;
  padding: 0 8px;
  color: ${theme.colors.gray5};
`;

const PostIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 3px;
  margin-right: 3px;
`;

const TILIcon = styled.img`
  width: 28px;
  height: 25px;
`;

const SnippetIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.colors.gray0};
  margin: 16px 0;
`;

export default Menu;
