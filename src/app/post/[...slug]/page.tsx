import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMatchedPost } from '@/utils/post';
import MDX from '@/components/mdx/MDX';

import prism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

interface ParamType {
  params: {
    slug: string[];
  };
}

export default async function Post({ params }: ParamType) {
  const { slug } = params;

  const post = await getMatchedPost(slug);
  if (!post) return notFound();

  const {
    frontMatter: { title },
    content,
  } = post;

  return (
    <>
      <h1>{title}</h1>
      <MDX>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkToc],
              rehypePlugins: [prism, rehypeSlug],
            },
          }}
        />
      </MDX>
    </>
  );
}
