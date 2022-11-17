import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProfileImageProps } from 'types/Main.types';

const Bio = ({ profileImage }: ProfileImageProps) => {
  return (
    <Wrapper>
      <ProfileImage image={profileImage} alt="Profile image" />
      <div>
        <Title>Corinthionia</Title>
        <SubTitle>하이하이~~</SubTitle>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ProfileImage = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 37.5%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export default Bio;
