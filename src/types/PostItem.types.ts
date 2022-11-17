import { IGatsbyImageData } from 'gatsby-plugin-image';
import { MutableRefObject } from 'react';

export type PostFrontmatterType = {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
};

export type PostListItemType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostFrontmatterType;
  };
};

export type PostPageItemType = {
  node: {
    html: string;
    frontmatter: PostFrontmatterType;
  };
};

export type PostItemProps = PostFrontmatterType & { link: string };

export type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

export interface PostContentProps {
  html: string;
}

export type GatsbyImgProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

export type PostHeadInfoProps = {
  title: string;
  date: string;
};

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: PostListItemType[];
};

export type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
};

export type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  location: {
    href: string;
  };
};
