import styled from '@emotion/styled';

const Header = () => {
  return (
    <Wrapper>
      <IconWrapperLeft>
        <a href="/blog">
          <PostIcon
            src="https://user-images.githubusercontent.com/79887293/223728512-088d980e-0ab5-40d7-9a4d-d8f3684005ed.svg"
            alt="posts"
          />
        </a>
        {/* <a href="/til">
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
        </a> */}
      </IconWrapperLeft>
      <a href="/">
        <Logo
          src="https://user-images.githubusercontent.com/79887293/223732692-bd9cd64a-0495-48a0-b724-c6ae50143986.svg"
          alt="logo"
        />
      </a>

      <IconWrapperRight>
        <a href="mailto:corinthionia@gmail.com">
          <RightIcon
            src="https://user-images.githubusercontent.com/79887293/223728516-05d5e781-230c-4448-8c5d-3914968be3e1.svg"
            alt="mail"
          />
        </a>
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
  margin-right: 60px;

  @media (max-width: 700px) {
    height: 16px;
  }
`;

const IconWrapperLeft = styled.div`
  width: 142px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 90px;
  }
`;

const IconWrapperRight = styled.div`
  width: 68px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 60px;
  }
`;

const PostIcon = styled.img`
  width: 22px;
  height: 22px;

  @media (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`;

const TILIcon = styled.img`
  width: 25px;
  height: 25px;

  @media (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`;

const SnippetIcon = styled.img`
  width: 28px;
  height: 28px;

  @media (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`;

const RightIcon = styled.img`
  width: 28px;
  height: 28px;

  @media (max-width: 700px) {
    width: 24px;
    height: 24px;
  }
`;

export default Header;
