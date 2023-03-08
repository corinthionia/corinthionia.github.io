import styled from '@emotion/styled';
import Bio from 'components/bio';
import { ProfileImageProps } from 'types/bio';

const Head = ({ profileImage }: ProfileImageProps) => {
  return (
    <Wrapper>
      <Bio profileImage={profileImage} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 1024px;
  margin: 0 auto;
  margin-top: 50px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export default Head;
