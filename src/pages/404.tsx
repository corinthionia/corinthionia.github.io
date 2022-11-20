import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Layout from '../layout';
import GlobalStyle from '../styles/GlobalStyle';

const NotFoundPage = function () {
  return (
    <Layout title={'404'} description={''} url={'404'}>
      <NotFoundPageWrapper>
        <GlobalStyle />
        <NotFoundText>Page Not Found</NotFoundText>
        <NotFoundDescription>페이지를 찾을 수 없습니다!</NotFoundDescription>
        <GoToMainButton to="/">메인으로</GoToMainButton>
      </NotFoundPageWrapper>
    </Layout>
  );
};

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 84vh;
`;

const NotFoundText = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: hotpink;
  font-family: 'Press Start 2P', cursive;

  @media (max-width: 700px) {
    font-size: 100px;
  }
`;

const NotFoundDescription = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: hotpink;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const GoToMainButton = styled(Link)`
  padding: 12px 20px;
  margin-top: 48px;
  font-size: 16px;

  color: #ffffff;
  background: hotpink;
  border-radius: 12px;

  &:hover {
    color: #ffffff;
  }
`;

export default NotFoundPage;
