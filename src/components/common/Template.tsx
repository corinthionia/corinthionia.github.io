import React, { FunctionComponent } from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import Footer from 'components/common/Footer';
import { Helmet } from 'react-helmet';
import { TemplateProps } from '../../types/Template.types';
import { Container } from '../../styles/templates/template';

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@corinthionia" />
        <meta name="twitter:creator" content="@corinthionia" />

        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;
