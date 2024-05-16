import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMatchedPost, getNeighborPosts } from '@/utils/post';
import MDX from '@/components/mdx/MDX';

import prism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkBreaks from 'remark-breaks';
import rehypeCodeTitles from 'rehype-code-titles';

import Link from 'next/link';

import styles from './index.module.scss';

interface ParamType {
  params: {
    slug: string[];
  };
}

export default async function Post({ params }: ParamType) {
  const { slug } = params;

  const post = await getMatchedPost(slug);
  const { prev, next } = await getNeighborPosts(slug);

  if (!post) return notFound();

  const {
    frontMatter: { title, date },
    content,
  } = post;

  return (
    <>
      <div className={styles.postHeader}>
        <h2 className={styles.postTitle}>{title}</h2>
        <div className={styles.postData}>
          <Link href="https://github.com/corinthionia" target="_blank">
            <span>@corinthionia</span>
          </Link>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>

      <MDX>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkToc, remarkBreaks, remarkGfm],
              rehypePlugins: [prism, rehypeSlug, rehypeAutolinkHeadings, rehypeCodeTitles],
            },
          }}
        />
      </MDX>

      {prev && (
        <Link href={`/post/${prev.fields.slug}`}>
          <div>이전 포스트 {prev.frontMatter.title}</div>
        </Link>
      )}

      {next && (
        <Link href={`/post/${next.fields.slug}`}>
          <div>다음 포스트 {next.frontMatter.title}</div>
        </Link>
      )}
    </>
  );
}
