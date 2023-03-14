import React from 'react';
import { useMemo } from 'react';
import styled from '@emotion/styled';
import ThumbnailItem from '../thumbnail-item';
import { PostListItemType, PostListProps } from 'types/post-list';

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
    <>
      <Wrapper>
        {postListData.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <ThumbnailItem key={id} {...frontmatter} link={slug} />
          )
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 92%;
  max-width: 768px;
  min-height: 100vh;

  margin: 0 auto;
  margin-top: 72px;
  margin-bottom: 48px;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 52px;

    width: 100%;
    padding: 30px 0;
    margin-top: 28px;
  }
`;

export default PostList;
