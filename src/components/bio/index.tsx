import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProfileImageProps } from 'types/bio';

const Bio = ({ profileImage }: ProfileImageProps) => {
  return (
    <Wrapper>
      <Name
        src="https://user-images.githubusercontent.com/79887293/223732205-a4d37ab0-fd70-48a1-8f54-c847186d92fd.png"
        alt="corinthionia"
      />
      <TextWrapper>
        <Text>💞 Good vibes only</Text>
        <Text>☁️ 끊임없이 ‘더 좋은 방식’에 대해 고민합니다</Text>
        <Text>🌙 스스로의 부족함을 인지하고 이를 채워 나가려 노력합니다</Text>
        <Text>
          🚀 새로운 것을 배우고, 새로운 일에 도전하는 것을 좋아합니다{' '}
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px;

  @media (max-width: 700px) {
    margin: 0 auto;
    height: 140px;
    margin-top: 28px;
  }
`;

const Name = styled.img`
  width: 280px;

  @media (max-width: 700px) {
    width: 200px;
  }
`;

const TextWrapper = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 700px) {
    height: 88px;
  }
`;

const Text = styled.span`
  font-size: 14px;
`;

const ProfileImage = styled(GatsbyImage)`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  border-radius: 40%;

  @media (max-width: 700px) {
    padding: 0;
    background: pink;
    height: 140px;
    margin-top: 28px;
  }
`;

// const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 375px) {
//     width: 240px;
//   }
// `;

const Author = styled.div`
  color: #555555;
  font-size: 16px;
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
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 1.4;

  @media (max-width: 375px) {
    font-size: 11px;
  }
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
