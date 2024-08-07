import { getAllPosts } from '@/utils/post';
import { PageType, PostType } from '@/interfaces/post';
import Bio from '@/components/bio';
import Thumbnail from '@/components/thumbnail';
import styles from './index.module.scss';

interface Props {
  pageType: PageType;
}

async function PostListLayout({ pageType }: Props) {
  const posts = await getAllPosts(`contents/${pageType}`);

  return (
    <div className={styles.wrapper}>
      <Bio />

      <section className={styles.list}>
        {posts.map((post: PostType) => (
          <Thumbnail key={post.fields.slug} post={post} to={`/${pageType}`} />
        ))}
      </section>
    </div>
  );
}

export default PostListLayout;
