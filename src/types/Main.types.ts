import { ReactNode } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type CategoryItemProps = {
  active: boolean;
};

export type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

export type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

export type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

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

export type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};
