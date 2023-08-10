import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import PostList from 'components/post-list';
import Layout from '../layout';
import { IndexPageProps } from 'types';
import Head from 'components/head';

const Blog = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
  const parsed: ParsedQuery<string> = queryString.parse(search);

  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  return (
    <Layout title={title} description={description} url={siteUrl}>
      <Head />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Layout>
  );
};

export default Blog;

export const getPostList = graphql`
  query getPostList {
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
        frontmatter: { categories: { ne: null }, draft: { eq: false } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "MMMM DD, YYYY")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
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
