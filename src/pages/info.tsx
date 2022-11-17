import { graphql } from 'gatsby';
import { Global, css } from '@emotion/react';

const InfoPage = function () {
  return <Global styles={globalStyle} />;
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`;
