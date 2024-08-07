import { ROUTES } from '@/constants/route';
import { getAllPosts } from '@/utils/post';
import { PostType } from '@/interfaces/post';
import Bio from '@/components/bio';
import Thumbnail from '@/components/thumbnail';
import styles from './index.module.scss';

interface Props {
  postType: string;
}

async function PostListLayout({ postType }: Props) {
  const posts = await getAllPosts(postType);

  return (
    <div className={styles.wrapper}>
      <Bio />

      <section className={styles.list}>
        {posts.map((post: PostType) => (
          <Thumbnail key={post.fields.slug} post={post} to={ROUTES.POST} />
        ))}
      </section>
    </div>
  );
}

export default PostListLayout;
