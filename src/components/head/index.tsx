import styled from '@emotion/styled';
import Bio from 'components/bio';
import { ProfileImageProps } from 'types/bio';

const Head = ({ profileImage }: ProfileImageProps) => {
  return (
    <Wrapper>
      <Text>Corinthionia</Text>
      <Bio profileImage={profileImage} />
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

const Text = styled.div`
  height: 75px;

  display: flex;
  align-items: center;

  color: hotpink;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Press Start 2P', cursive;
`;

export default Head;
