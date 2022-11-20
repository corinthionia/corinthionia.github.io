import styled from '@emotion/styled';
import { Link } from 'gatsby';

type prop = {
  location: string;
};

const Header = ({ location }: prop) => {
  const isRoot = location === 'https://corinthionia.github.io';

  return (
    <Wrapper>
      {!isRoot && (
        <Link to="/">
          <Author>Corinthionia</Author>
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 24px;

  display: flex;
  align-items: center;

  background-image: linear-gradient(60deg, #c9eb74 0%, #f9c5b4 100%);
`;

const Author = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Press Start 2P', cursive;
`;

export default Header;
