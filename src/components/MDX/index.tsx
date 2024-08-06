import { MDXRemote } from 'next-mdx-remote/rsc';
import prism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkBreaks from 'remark-breaks';
import rehypeCodeTitles from 'rehype-code-titles';
import styles from './index.module.scss';
import './prism-one-dark.scss';

interface Props {
  content: string;
}

function MDX(props: Props) {
  const { content } = props;

  return (
    <main className={styles.mdx}>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkBreaks, remarkGfm],
            rehypePlugins: [prism as any, rehypeSlug, rehypeAutolinkHeadings, rehypeCodeTitles],
          },
        }}
      />
    </main>
  );
}

export default MDX;
