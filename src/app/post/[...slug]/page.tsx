import { notFound } from 'next/navigation';
import PostLayout from '@/layouts/PostLayout';
import Header from '@/components/Post/Header';
import MDX from '@/components/MDX/MDX';
import Border from 'src/ui/Border/Border';
import NeighborPost from '@/components/Post/NeighborPost';
import Giscus from '@/components/Giscus/Giscus';
import TOC from '@/components/TOC/TOC';
import { formatDate } from '@/utils/date';
import { getAllPosts, getNeighborPosts } from '@/utils/post';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';
import { PostType } from '@/interfaces/post';

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
    <>
      <PostLayout>
        <Header title={title} date={formatDate(date)} />
        <MDX content={content} />
        <Border />
        <NeighborPost pageType="post" neighborPost={{ prev, next }} />
        <Giscus />
      </PostLayout>

      <TOC />
    </>
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
