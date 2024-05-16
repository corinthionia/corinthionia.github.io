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
import Giscus from '@/components/giscus/Giscus';

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
          <span>
            {new Date(date).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>

      <MDX>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkToc, remarkBreaks, remarkGfm],
              rehypePlugins: [prism as any, rehypeSlug, rehypeAutolinkHeadings, rehypeCodeTitles],
            },
          }}
        />
      </MDX>

      <div className={styles.neighborPostWrapper}>
        {prev ? (
          <Link href={`/post/${prev.fields.slug}`}>
            <div className={styles.neighborPost}>
              <div>이전 글</div>
              <div>{prev.frontMatter.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link href={`/post/${next.fields.slug}`}>
            <div className={styles.neighborPost}>
              <div>다음 글</div>
              <div>{next.frontMatter.title}</div>
            </div>
          </Link>
        )}
      </div>

      <Giscus />
    </>
  );
}
