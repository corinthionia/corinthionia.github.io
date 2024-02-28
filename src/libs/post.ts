import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { sync } from 'glob';
import { PostType } from '@interfaces/post';

const BASE_PATH = 'contents/posts';
const CONTENTS_DIR = path.join(process.cwd(), BASE_PATH);

export async function getMatchedPost(slug: string[]) {
  const posts = await getAllPosts();
  return posts.find(
    (post: PostType) => post.fields.slug === [...slug].join('/')
  );
}

export async function getPinnedPostList() {
  const posts = await getAllPosts();
  return posts.filter((post: any) => post.frontMatter.pinned);
}

export async function getAllPosts() {
  const paths: string[] = sync(`${CONTENTS_DIR}/**/*.md*`);

  const posts = paths
    .reduce((acc: any, path: string) => {
      const post = parsePost(path);

      if (!post) return acc;

      return [...acc, post];
    }, [])
    .sort((a: PostType, b: PostType) => sortPostByDate(a, b));
  return posts;
}

const parsePost = (path: string) => {
  const file = fs.readFileSync(path, { encoding: 'utf8' });
  const { data, content } = matter(file);

  const slug = path
    .slice(path.indexOf(BASE_PATH) + BASE_PATH.length + 1)
    .replace('.md', '');

  if (data.draft) return;

  return {
    frontMatter: {
      ...data,
      date: new Date(data.date).toISOString().substring(0, 19),
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
