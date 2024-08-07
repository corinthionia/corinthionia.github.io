import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sync } from 'glob';
import { NeighborPostType, PostInfoType, PostType } from '@/interfaces/post';
import { CONTENTS_PATH } from '@/constants/post';

const getContentsDir = (basePath: string) => path.join(process.cwd(), basePath);

export async function getAllPosts(contentsPath: string): Promise<PostType[]> {
  const paths: string[] = sync(`${getContentsDir(contentsPath)}/**/*.md*`);

  const posts = paths
    .reduce((acc: any, path: string) => {
      const post = getPostInfo(contentsPath, path);

      if (!post) return acc;

      return [...acc, post];
    }, [])
    .sort((a: PostType, b: PostType) => sortPostByDate(a, b));

  return posts;
}

export async function getAllSnippets(contentsPath: string): Promise<PostType[]> {
  const paths: string[] = sync(`${getContentsDir(contentsPath)}/*.md*`);

  const posts = paths
    .reduce((acc: any, path: string) => {
      const post = getMatchedPostContents(contentsPath, path);

      if (!post) return acc;

      return [...acc, post];
    }, [])
    .sort((a: PostType, b: PostType) => sortPostByDate(a, b));
  return posts;
}

const getPostInfo = (base: string, path: string): PostInfoType | undefined => {
  const file = fs.readFileSync(path, { encoding: 'utf8' });
  const { data } = matter(file);

  const slug = path.slice(path.indexOf(base) + base.length + 1).replace(/\.mdx?/g, '');

  if (data.draft) return;

  return {
    frontMatter: {
      ...data,
    },
    fields: {
      slug,
    },
    path,
  };
};

const getMatchedPostContents = (base: string, path: string): PostType | undefined => {
  const file = fs.readFileSync(path, { encoding: 'utf8' });
  const { data, content } = matter(file);

  const slug = path.slice(path.indexOf(base) + base.length + 1).replace(/\.mdx?/g, '');
  if (data.draft) return;

  return {
    frontMatter: {
      ...data,
    },
    content,
    fields: {
      slug,
    },
    path,
  };
};

export async function getNeighborPosts(contentsPath: string, slug: string[]): Promise<NeighborPostType> {
  const posts = await getAllPosts(contentsPath);
  const index = posts.findIndex((post: PostType) => post.fields.slug === [...slug].join('/'));

  const curr = getMatchedPostContents(contentsPath, posts[index].path);

  if (index === 0) {
    return { prev: posts[index + 1], curr: curr, next: null };
  }

  if (index === posts.length - 1) {
    return { prev: null, curr: curr, next: posts[index - 1] };
  }

  return { prev: posts[index + 1], curr: curr, next: posts[index - 1] };
}

export async function getPinnedPostList(): Promise<PostType[]> {
  const posts = await getAllPosts(CONTENTS_PATH.POST_PATH);
  return posts.filter((post: any) => post.frontMatter.pinned);
}

const sortPostByDate = (a: PostType, b: PostType) => {
  if (a.frontMatter.date < b.frontMatter.date) {
    return 1;
  }

  if (a.frontMatter.date > b.frontMatter.date) {
    return -1;
  }

  return 0;
};
