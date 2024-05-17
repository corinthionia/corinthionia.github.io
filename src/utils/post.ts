import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { sync } from 'glob';
import { NeighborPostType, PostType } from '@/interfaces/post';

const POST_PATH = 'contents/post';
const TIL_PATH = 'contents/til';
const SNIPPET_PATH = 'contents/snippet';

const getContentsDir = (basePath: string) => path.join(process.cwd(), basePath);

export async function getMatchedPost(slug: string[]): Promise<PostType | undefined> {
  const posts = await getAllPosts();
  return posts.find((post: PostType) => post.fields.slug === [...slug].join('/'));
}

export async function getMatchedTIL(slug: string[]): Promise<PostType | undefined> {
  const posts = await getAllTILs();
  return posts.find((post: PostType) => post.fields.slug === [...slug].join('/'));
}

export async function getNeighborPosts(slug: string[]): Promise<NeighborPostType> {
  const posts = await getAllPosts();
  const index = posts.findIndex((post: PostType) => post.fields.slug === [...slug].join('/'));

  if (index === 0) {
    return { prev: null, next: posts[index - 1] };
  }

  if (index === posts.length - 1) {
    return { prev: posts[index + 1], next: null };
  }

  return { prev: posts[index + 1], next: posts[index - 1] };
}

export async function getNeighborTILs(slug: string[]): Promise<NeighborPostType> {
  const posts = await getAllTILs();
  const index = posts.findIndex((post: PostType) => post.fields.slug === [...slug].join('/'));

  if (index === 0) {
    return { prev: posts[index + 1], next: null };
  }

  if (index === posts.length - 1) {
    return { prev: null, next: posts[index - 1] };
  }

  return { prev: posts[index + 1], next: posts[index - 1] };
}

export async function getPinnedPostList(): Promise<PostType[]> {
  const posts = await getAllPosts();
  return posts.filter((post: any) => post.frontMatter.pinned);
}

export async function getAllPosts(): Promise<PostType[]> {
  const paths: string[] = sync(`${getContentsDir(POST_PATH)}/**/*.md*`);

  const posts = paths
    .reduce((acc: any, path: string) => {
      const post = parsePost(POST_PATH, path);

      if (!post) return acc;

      return [...acc, post];
    }, [])
    .sort((a: PostType, b: PostType) => sortPostByDate(a, b));
  return posts;
}

export async function getAllTILs(): Promise<PostType[]> {
  const paths: string[] = sync(`${getContentsDir(TIL_PATH)}/**/**/*.md*`);

  const posts = paths
    .reduce((acc: any, path: string) => {
      const post = parsePost(TIL_PATH, path);

      if (!post) return acc;

      return [...acc, post];
    }, [])
    .sort((a: PostType, b: PostType) => sortPostByDate(a, b));
  return posts;
}

export async function getAllSnippets(): Promise<PostType[]> {
  const paths: string[] = sync(`${getContentsDir(SNIPPET_PATH)}/**/*.md*`);

  const posts = paths
    .reduce((acc: any, path: string) => {
      const post = parsePost(SNIPPET_PATH, path);

      if (!post) return acc;

      return [...acc, post];
    }, [])
    .sort((a: PostType, b: PostType) => sortPostByDate(a, b));
  return posts;
}

const parsePost = (base: string, path: string) => {
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

const sortPostByDate = (a: PostType, b: PostType) => {
  if (a.frontMatter.date < b.frontMatter.date) {
    return 1;
  }

  if (a.frontMatter.date > b.frontMatter.date) {
    return -1;
  }

  return 0;
};
