import styled from '@emotion/styled';
import { Link } from 'gatsby';

type prop = {
  location: string;
};

const Header = ({ location }: prop) => {
  const isRoot = location === 'https://corinthionia.github.io';

  return (
    <Wrapper>
      {!isRoot ? (
        <Link to="/">
          <Author>Corinthionia</Author>
        </Link>
      ) : (
        <div />
      )}
      <a href="https://github.com/corinthionia">
        <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2Z"
            fill="white"
          />
        </SVG>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: linear-gradient(60deg, #c9eb74 0%, #f9c5b4 100%);
`;

const Author = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Press Start 2P', cursive;
`;

const SVG = styled.svg`
  width: 36px;
  height: 36px;
  fill: none;
`;

export default Header;
