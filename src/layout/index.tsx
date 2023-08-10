import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from 'components/footer';
import { Helmet } from 'react-helmet';
import { TemplateProps } from 'types/layout';
import styled from '@emotion/styled';
import Header from 'components/header';
import theme from '../styles/theme';

const Layout = function ({ title, description, url, children }: TemplateProps) {
  const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', \`${process.env.GATSBY_GTM_CONTAINER_ID}\`);`;

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <script>{GTM_SCRIPT}</script>

        <meta
          name="google-site-verification"
          content={process.env.GATSBY_GOOGLE_SEARCH_CONSOLE}
        />
        <meta name="author" content="corinthionia Joohyun Kim 김주현" />
        <meta name="description" content={description} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      <Container>
        <Gradient1 />
        <Gradient2 />
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 56px;
  padding-top: 68px;

  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 20px 0 0 0;
  }
`;

const Gradient1 = styled.div`
  position: fixed;
  width: 1067px;
  height: 1111px;
  left: 0;
  top: 209px;

  background: radial-gradient(
    49.77% 36.47% at 50.72% 45.42%,
    ${theme.main.secondary} 0%,
    rgba(254, 207, 255, 0) 100%
  );
  transform: rotate(-39.57deg);
  z-index: -1;

  @media (max-width: 700px) {
    top: 150px;
  }
`;

const Gradient2 = styled.div`
  position: fixed;
  width: 1087px;
  height: 1111px;
  left: 453px;
  top: -200px;

  background: radial-gradient(
    49.77% 36.47% at 50.72% 45.42%,
    ${theme.main.primary}63 0%,
    rgba(240, 255, 207, 0) 100%
  );
  transform: rotate(24.12deg);
  z-index: -1;

  @media (max-width: 700px) {
    left: 0;
    top: -300px;
  }
`;

export default Layout;
