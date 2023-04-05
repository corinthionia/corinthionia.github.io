import styled from '@emotion/styled';
import Bio from 'components/bio';

const Head = ({ url }: any) => {
  const isRoot = url === 'https://corinthionia.github.io';

  return (
    <Wrapper isRoot={isRoot}>
      <Bio />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isRoot: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: ${({ isRoot }) => (isRoot ? '1224px' : '1024px')};
  margin: 0 auto;
  margin-top: 50px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export default Head;
