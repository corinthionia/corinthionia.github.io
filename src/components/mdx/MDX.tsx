import { MDXRemote } from 'next-mdx-remote/rsc';
import prism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkBreaks from 'remark-breaks';
import rehypeCodeTitles from 'rehype-code-titles';

import styles from './index.module.scss';
import './prism-one-dark.scss';

interface Props {
  content: string;
}

const MDX = (props: Props) => {
  const { content } = props;

  return (
    <div className={styles.mdx}>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkToc, remarkBreaks, remarkGfm],
            rehypePlugins: [prism as any, rehypeSlug, rehypeAutolinkHeadings, rehypeCodeTitles],
          },
        }}
      />
    </div>
  );
};

export default MDX;
