import { ROUTES } from '@/constants/route';
import { getAllPosts } from '@/utils/post';
import { PostType } from '@/interfaces/post';
import Thumbnail from '@/components/thumbnail';
import PostList from '@/components/post-list';
import Bio from '@/components/bio';
import styles from './index.module.scss';

interface Props {
  postType: string;
}

async function PostListLayout({ postType }: Props) {
  const posts = await getAllPosts(postType);

  return (
    <>
      <Bio />

      <section className={styles.wrapper}>
        <PostList>
          {posts.map((post: PostType) => (
            <Thumbnail key={post.fields.slug} post={post} to={ROUTES.POST} />
          ))}
        </PostList>
      </section>
    </>
  );
}

export default PostListLayout;
