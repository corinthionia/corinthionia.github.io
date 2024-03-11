import { graphql } from 'gatsby';
import Layout from '../layout';
import { SnippetPageProps } from 'types';
import Head from 'components/head';
import SnippetList from 'components/snippet-list';

const Snippet = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
  },
}: SnippetPageProps) {
  return (
    <Layout title={title} description={description} url={siteUrl}>
      <Head />
      <SnippetList edges={edges} />
    </Layout>
  );
};

export default Snippet;

export const getSnippetList = graphql`
  query getSnippetList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
      filter: {
        frontmatter: {
          categories: { regex: "/snippet/", ne: null }
          draft: { eq: false }
        }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            summary
            date(formatString: "MMMM DD, YYYY")
            categories
            draft
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`;
