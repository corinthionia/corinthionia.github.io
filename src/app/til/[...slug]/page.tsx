import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMatchedTIL, getNeighborTILs } from '@/utils/post';

import MDX from '@/components/mdx/MDX';
import Giscus from '@/components/giscus/Giscus';
import { formatDate } from '@/utils/date';
import styles from './index.module.scss';

interface ParamType {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: ParamType) {
  const { slug } = params;

  const post = await getMatchedTIL(slug);
  const { prev, next } = await getNeighborTILs(slug);

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
          <span>{formatDate(date)}</span>
        </div>
      </div>

      <MDX content={content} />

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
