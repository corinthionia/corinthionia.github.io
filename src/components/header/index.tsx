import styled from '@emotion/styled';

const Header = () => {
  return (
    <Wrapper>
      <a href="/blog">
        <PostListIcon
          src="https://user-images.githubusercontent.com/79887293/223728512-088d980e-0ab5-40d7-9a4d-d8f3684005ed.svg"
          alt="post list"
        />
      </a>
      <a href="/">
        <Logo
          src="https://user-images.githubusercontent.com/79887293/223732692-bd9cd64a-0495-48a0-b724-c6ae50143986.svg"
          alt="logo"
        />
      </a>

      <IconWrapper>
        <a href="mailto:corinthionia@gmail.com">
          <Icon
            src="https://user-images.githubusercontent.com/79887293/223728516-05d5e781-230c-4448-8c5d-3914968be3e1.svg"
            alt="mail"
          />
        </a>
        <a href="https://github.com/corinthionia" target="_blank">
          <Icon
            src="https://user-images.githubusercontent.com/79887293/223728888-06511911-20ce-44e6-b7b1-59791885ecca.svg"
            alt="github"
          />
        </a>
      </IconWrapper>
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
  height: 20px;

  @media (max-width: 700px) {
    height: 16px;
  }
`;

const IconWrapper = styled.div`
  width: 68px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 60px;
  }
`;

const PostListIcon = styled.img`
  width: 22px;
  height: 22px;

  @media (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;

  @media (max-width: 700px) {
    width: 24px;
    height: 24px;
  }
`;

export default Header;
