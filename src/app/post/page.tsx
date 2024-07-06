import { PostType } from '@/interfaces/post';
import { getAllPosts } from 'src/utils/post';
import { CONTENTS_PATH } from '@/constants/CONTENTS_PATH';
import { ROUTE } from '@/constants/ROUTE';
import PostList from '@/components/PostList/PostList';
import Bio from '@/components/Bio/Bio';
import styles from './index.module.scss';
import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { getAllCategories } from '@/utils/category';
import { Metadata } from 'next';

export default async function Page() {
  const posts = await getAllPosts(CONTENTS_PATH.POST_PATH);
  const categories = await getAllCategories(CONTENTS_PATH.POST_PATH);

  return (
    <>
      <Bio />

      <main className={styles.wrapper}>
        <PostList>
          {posts.map((post: PostType) => (
            <Thumbnail key={post.fields.slug} post={post} to={ROUTE.POST} />
          ))}
        </PostList>
      </main>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  const authors = ['Corinthionia', 'Joohyun Kim'];

  return {
    title: 'Blog | Corinthionia',
    description: 'Blog | Corinthionia',
    openGraph: {
      title: 'Blog | Corinthionia',
      description: 'Blog | Corinthionia',
      siteName: 'Corinthionia',
      locale: 'ko_KR',
      type: 'article',
      url: './',
      authors: authors,
    },
  };
}
