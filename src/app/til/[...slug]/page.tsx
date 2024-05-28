import { notFound } from 'next/navigation';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';
import { getNeighborPosts } from '@/utils/post';
import { formatDate } from '@/utils/date';
import PostLayout from '@/layouts/PostLayout';
import Header from '@/components/Post/Header';
import MDX from '@/components/MDX/MDX';
import Border from 'src/ui/Border/Border';
import NeighborPost from '@/components/Post/NeighborPost';
import Giscus from '@/components/Giscus/Giscus';
import TOC from '@/components/TOC/TOC';

interface ParamType {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: ParamType) {
  const { slug } = params;

  const { prev, curr, next } = await getNeighborPosts(CONTENTS_PATH.TIL_PATH, slug);

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
        <NeighborPost pageType="til" neighborPost={{ prev, next }} />
        <Giscus />
      </PostLayout>

      <TOC />
    </>
  );
}
