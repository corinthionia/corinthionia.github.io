import { MetadataRoute } from 'next';
import { INFO } from '@/constants/info';
import { getAllPosts } from 'src/utils/post';
import { CONTENTS_PATH } from '@/constants/post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts(CONTENTS_PATH.POST_PATH);
  const notes = await getAllPosts(CONTENTS_PATH.NOTE_PATH);

  return [
    ...posts.map(post => ({
      url: `${INFO.website}/post/${post.fields.slug}`,
      lastModified: `${post.frontMatter.date}`,
    })),
    ...notes.map(note => ({
      url: `${INFO.website}/note/${note.fields.slug}`,
      lastModified: note.frontMatter.date,
    })),
  ];
}
