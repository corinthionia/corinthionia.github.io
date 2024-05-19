import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getAllPosts } from 'src/utils/post';
import PostList from '@/components/PostList/PostList';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <PostList>
      {posts.map((post: PostType) => (
        <Thumbnail key={post.fields.slug} post={post} to="post" />
      ))}
    </PostList>
  );
}
