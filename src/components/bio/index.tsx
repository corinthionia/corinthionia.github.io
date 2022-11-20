import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProfileImageProps } from 'types/bio';

const Bio = ({ profileImage }: ProfileImageProps) => {
  return (
    <Wrapper>
      <Title>Corinthionia</Title>
      <IndroductionWrapper>
        <ProfileImage image={profileImage} alt="Profile image" />
        <TextWrapper>
          <Author>
            Written by <AuthorName>@[Joohyun Kim]</AuthorName>
          </Author>
          <Introduction>
            EWHA.W.UNIV Computer Science & Engineering
          </Introduction>
          <div>
            <LinkText to="https://github.com/corinthionia">Github</LinkText>
            <LinkText to="https://velog.io/@corinthionia">Velog</LinkText>
          </div>
        </TextWrapper>
      </IndroductionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 700px;
  margin: 0 auto;
  margin-top: 24px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Title = styled.div`
  height: 75px;

  display: flex;
  align-items: center;

  color: hotpink;
  font-size: 28px;
  font-weight: 700;
  font-family: 'Press Start 2P', cursive;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

const IndroductionWrapper = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
`;

const ProfileImage = styled(GatsbyImage)`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  border-radius: 40%;
`;

const TextWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
`;

const Author = styled.div`
  color: #555555;
`;

const AuthorName = styled.div`
  display: inline-block;
  padding: 4px 6px;

  border-radius: 4px;
  background-color: #ffe5e9;

  color: hotpink;
  font-weight: 600;

  animation: flutter 2s infinite linear;

  @-webkit-keyframes flutter {
    0% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    60% {
      transform: rotate(5deg);
    }
    65% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes flutter {
    0% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    60% {
      transform: rotate(5deg);
    }
    65% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Introduction = styled.div`
  color: #909090;
  font-size: 13px;
  font-weight: 400;
  margin-top: 4px;
  margin-bottom: 8px;
`;

const LinkText = styled(Link)`
  font-size: 13px;
  color: #295ab0;
  margin-right: 8px;
`;

export default Bio;
