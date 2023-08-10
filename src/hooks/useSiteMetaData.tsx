import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetaData = () => {
  const siteMetaData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
    }
  `);

  return siteMetaData;
};
