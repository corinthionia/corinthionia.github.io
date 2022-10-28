import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { PostFrontmatterType } from 'types/PostItem.types';
import { GatsbyImage } from 'gatsby-plugin-image';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Thumbnail Image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map((category) => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
};

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px;
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.div`
  display: -webkit-box;
  margin-bottom: 3px;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  -webkit-line-clamp: 1;

  font-size: 18px;
  font-weight: 600;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.5;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`;

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 2px 6px;
  border-radius: 4px;
  background: #b9bbd1;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
`;

const Summary = styled.div`
  display: -webkit-box;
  margin-top: auto;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  overflow-wrap: break-word;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 14px;
  opacity: 0.8;
`;

export default PostItem;
