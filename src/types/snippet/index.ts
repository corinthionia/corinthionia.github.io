import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface SnippetListType {
  node: {
    id: string;
    html: string;
    frontmatter: SnippetFrontmatterType;
  };
}

export interface SnippetFrontmatterType {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  draft: boolean;
}

export interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: SnippetListType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  location: {
    href: string;
  };
}
