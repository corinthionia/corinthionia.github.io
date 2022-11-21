import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProfileImageProps } from 'types/bio';

const Bio = ({ profileImage }: ProfileImageProps) => {
  return (
    <Wrapper>
      <ProfileImage image={profileImage} alt="Profile image" />
      <TextWrapper>
        <Author>
          Written by{' '}
          <a href="https://github.com/corinthionia">
            <AuthorName>@[Joohyun Kim]</AuthorName>
          </a>
        </Author>
        <Introduction>EWHA.W.UNIV Computer Science & Engineering</Introduction>
        <div>
          <LinkText href="https://github.com/corinthionia">Github</LinkText>
          <LinkText href="https://velog.io/@corinthionia">Velog</LinkText>
        </div>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  padding: 4px 7px;

  border-radius: 8px;
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

const LinkText = styled.a`
  margin-right: 8px;

  font-size: 13px;
  color: #84bb70;

  &:hover {
    color: hotpink;
  }
`;

export default Bio;
