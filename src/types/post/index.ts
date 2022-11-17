import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface PostFrontmatterType {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export type PostType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        publicURL: string;
      };
    };
  };
};

export interface PostPageItemType {
  node: {
    html: string;
    frontmatter: PostFrontmatterType;
  };
}

export interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  location: {
    href: string;
  };
}

export interface PostHeadInfoProps {
  title: string;
  date: string;
}

export interface PostContentProps {
  html: string;
}

export type PostItemProps = PostFrontmatterType & { link: string };
