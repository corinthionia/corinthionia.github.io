import Thumbnail from '@components/Thumbnail';
import { PostType } from '@interfaces/post';
import { getPinnedPostList } from 'src/libs/post';

export default async function Home() {
  const posts = await getPinnedPostList();

  return (
    <>
      {posts.map((post: PostType) => (
        <Thumbnail key={post.fields.slug} {...post} />
      ))}
    </>
  );
}
