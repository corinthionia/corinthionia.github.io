import { PostFrontmatterType } from '../post';

export interface PostListItemType {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostFrontmatterType;
  };
}

export interface PostListProps {
  selectedCategory: string;
  posts: PostListItemType[];
}
