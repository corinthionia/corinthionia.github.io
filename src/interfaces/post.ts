export interface FrontMatterType {
  date: string;
  title: string;
  categories: string[];
  summary: string;
  thumbnail: string;
  draft: boolean;
  pinned: boolean;
}

export interface PostInfoType {
  frontMatter: { [key: string]: any };
  fields: {
    slug: string;
  };
  path: string;
}

export interface PostType {
  frontMatter: { [key: string]: any };
  content: string;
  fields: {
    slug: string;
  };
  path: string;
}

export interface NeighborPostType {
  prev: PostType | null;
  curr: PostType | undefined;
  next: PostType | null;
}
