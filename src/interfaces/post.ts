export interface FrontMatterType {
  date: string;
  title: string;
  categories: string[];
  summary: string;
  thumbnail: string;
  draft: boolean;
  pinned: boolean;
}

export interface PostType {
  frontMatter: FrontMatterType;
  content: string;
  fields: {
    slug: string;
  };
  path: string;
}

export interface NeighborPostType {
  prev: PostType | null;
  next: PostType | null;
}
