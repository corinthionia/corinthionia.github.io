import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { PostType } from '@/interfaces/post';
import { getAllPosts } from 'src/utils/post';
import PostList from '@/components/PostList/PostList';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';

export default async function Page() {
  const posts = await getAllPosts(CONTENTS_PATH.TIL_PATH);

  return (
    <PostList>
      {posts.map((post: PostType) => (
        <Thumbnail key={post.fields.slug} post={post} to="til" />
      ))}
    </PostList>
  );
}
