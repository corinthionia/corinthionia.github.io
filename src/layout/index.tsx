import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from 'components/footer';
import { Helmet } from 'react-helmet';
import { TemplateProps } from 'types/layout';
import styled from '@emotion/styled';
import Header from 'components/header';

const Layout = function ({ title, description, url, children }: TemplateProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@corinthionia" />
        <meta name="twitter:creator" content="@corinthionia" />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      <Container>
        <Header location={url} />
        {children}
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Layout;
