import { graphql, Link } from 'gatsby';
import Layout from '../layout';

import Head from 'components/head';
import styled from '@emotion/styled';
import PinnedThumbnail from 'components/pinned-thumbnail';

const Index = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
  },
}: any) {
  // console.log(process.env.GATSBY_GA_TRACKING_ID);

  return (
    <Layout title={title} description={description} url={siteUrl}>
      <Head url={siteUrl} />
      <PinnedWrapper>
        <PinnedTitle
          src="https://user-images.githubusercontent.com/79887293/224006290-eda97870-b68b-443e-bbc3-9b3489a39c35.png"
          alt="pinned"
        />
        <PostArea>
          {edges.map((edge: any) => (
            <PinnedThumbnail key={edge.node.id} {...edge.node} />
          ))}
        </PostArea>

        <a href="/blog">
          <ReadMore>{`View More Posts >`}</ReadMore>
        </a>
      </PinnedWrapper>

      <Margin />
    </Layout>
  );
};

export default Index;

const PinnedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 auto;

  margin-top: 57px;
  margin-bottom: 18px;

  @media (max-width: 700px) {
    padding: 0 32px;
  }
`;

const PinnedTitle = styled.img`
  width: 109px;

  @media (max-width: 700px) {
    width: 88px;
  }
`;

const PostArea = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 36px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 24px;
  column-gap: 5%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const ReadMore = styled.span`
  color: hotpink;
  font-size: 14px;
  text-decoration: underline;
`;

const Margin = styled.div`
  height: 48px;
`;

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
        frontmatter: {
          categories: { ne: null }
          draft: { eq: false }
          pinned: { eq: true }
        }
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
