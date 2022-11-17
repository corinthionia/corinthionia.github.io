import { useMemo } from 'react';
import styled from '@emotion/styled';
import ThumbnailItem from '../thumbnail-item';
import { PostListItemType } from 'types/PostItem.types';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostList = function ({ selectedCategory, posts }: PostListProps) {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true
      ),
    [selectedCategory]
  );

  return (
    <PostListWrapper>
      {postListData.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <ThumbnailItem {...frontmatter} link={slug} key={id} />
        )
      )}
    </PostListWrapper>
  );
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 75px;

  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

export default PostList;
