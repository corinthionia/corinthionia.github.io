import { MetadataRoute } from 'next';
import { getAllPosts } from 'src/utils/post';
import { CONTENTS_PATH } from '@/constants/post';

const BASE_URL = 'https://corinthionia.github.io';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts(CONTENTS_PATH.POST_PATH);
  const notes = await getAllPosts(CONTENTS_PATH.NOTE_PATH);

  return [
    ...posts.map(post => ({
      url: `${BASE_URL}/post/${post.fields.slug}`,
      lastModified: `${post.frontMatter.date}`,
    })),
    ...notes.map(note => ({
      url: `${BASE_URL}/note/${note.fields.slug}`,
      lastModified: note.frontMatter.date,
    })),
  ];
}
