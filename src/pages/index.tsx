import { useMemo } from 'react';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { CategoryListProps } from 'types/category';
import Category from 'components/category';
import PostList from 'components/post-list';
import Layout from '../layout';
import { IndexPageProps } from 'types';
import Head from 'components/head';

const IndexPage = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}: IndexPageProps) {
  const parsed: ParsedQuery<string> = queryString.parse(search);

  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps[],
          {
            node: {
              frontmatter: { categories },
            },
          }
        ) => {
          categories.forEach((category) => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 }
      ),
    []
  );

  return (
    <Layout title={title} description={description} url={siteUrl}>
      <Head profileImage={gatsbyImageData} />
      <Category
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Layout>
  );
};

export default IndexPage;

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
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
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
