import { graphql } from 'gatsby';
import { PostTemplateProps } from 'types/post';
import Layout from '../../layout';
import Utterances from 'components/utterances';
import PostHead from 'components/post-head';
import MarkdownItems from 'components/markdown-items';
import Bio from 'components/bio';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import SEO from 'components/SEO';

const PostContainer = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}: PostTemplateProps) => {
  const {
    node: {
      html,
      frontmatter: { title, summary, date },
    },
  } = edges[0];

  return (
    <Layout title={title} description={summary} url={href}>
      <SEO title={title} description={summary} url={href} />
      <PostHead title={title} date={date} />
      <MarkdownItems html={html} />
      <BioWrapper>
        <Border />
        <Bio />
      </BioWrapper>
      <Utterances />
    </Layout>
  );
};

export default PostContainer;

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 700px;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Border = styled.div`
  width: 100%;
  height: 3px;
  margin: 24px auto;
  margin-bottom: 48px;

  display: flex;
  align-items: center;
  background-image: linear-gradient(
    60deg,
    ${theme.main.secondary} 0%,
    ${theme.main.primary} 100%
  );

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "MMMM DD, YYYY")
            categories
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
