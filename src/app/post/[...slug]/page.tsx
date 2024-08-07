import PostLayout from '@/layouts/post';
import { notFound } from 'next/navigation';
import { formatDate } from '@/utils/date';
import { getAllPosts, getNeighborPosts } from '@/utils/post';
import { CONTENTS_PATH } from '@/constants/post';
import { PostType } from '@/interfaces/post';
import { Metadata } from 'next';

interface ParamType {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: ParamType) {
  const { slug } = params;
  const { prev, curr, next } = await getNeighborPosts(CONTENTS_PATH.POST_PATH, slug);

  if (!curr) return notFound();

  const {
    frontMatter: { title, date },
    content,
  } = curr;

  return (
    <PostLayout title={title} date={formatDate(date)} content={content} pageType="post" neighborPost={{ prev, next }} />
  );
}

export async function generateStaticParams() {
  const posts: PostType[] = await getAllPosts(CONTENTS_PATH.POST_PATH);

  if (!posts || posts.length === 0) {
    return [{ slug: 'not-found' }];
  }

  return posts.map(post => ({
    slug: post.fields.slug.split('/'),
  }));
}

export async function generateMetadata({ params }: ParamType): Promise<Metadata | undefined> {
  const { curr } = await getNeighborPosts(CONTENTS_PATH.POST_PATH, params.slug);
  const post = curr;

  if (!post) {
    return;
  }

  const publishedAt = new Date(post.frontMatter.date).toISOString();
  const modifiedAt = new Date(post.frontMatter.date).toISOString();
  const authors = ['Corinthionia', 'Joohyun Kim'];

  return {
    title: `${post.frontMatter.title} | Corinthionia`,
    description: post.frontMatter.summary,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.summary,
      siteName: 'Corinthionia',
      locale: 'ko_KR',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: post.frontMatter.thumbnail,
      authors: authors,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontMatter.title,
      description: post.frontMatter.summary,
      images: post.frontMatter.thumbnail,
    },
  };
}
