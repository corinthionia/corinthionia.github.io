import { graphql } from 'gatsby';
import { PostTemplateProps } from 'types/post';
import Layout from '../../layout';
import Utterances from 'components/utterances';
import PostHead from 'components/post-head';
import MarkdownItems from 'components/markdown-items';

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
      <PostHead title={title} date={date} />
      <MarkdownItems html={html} />
      <Utterances />
    </Layout>
  );
};

export default PostContainer;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`;
