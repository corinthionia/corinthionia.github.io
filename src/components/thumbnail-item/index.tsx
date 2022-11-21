import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostItemProps } from 'types/post';

const ThumbnailItem = ({
  title,
  date,
  categories,
  summary,
  link,
}: PostItemProps) => {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <Title>{title}</Title>
        <PostData>
          {categories.map((category) => (
            <>
              <CategoryItem key={category}>{category}</CategoryItem>
              <CategoryItem>|</CategoryItem>
            </>
          ))}
          <Date>{date}</Date>
        </PostData>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
};

const PostItemWrapper = styled(Link)`
  display: flex;

  width: 88%;
  margin: 0 auto;

  border-radius: 8px;
  box-shadow: 0 0 8px rgba(47, 58, 48, 0.2);

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(47, 58, 48, 0.25);
    text-shadow: 0 0 10px rgba(47, 58, 48, 0.2);
    transition: text-shadow 0.3s, opacity 0.4s;
  }

  & + & {
    margin-top: 36px;
  }
`;

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
`;

const Title = styled.span`
  display: -webkit-box;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: #383838;
  font-size: 24px;
  font-weight: 600;
`;

const PostData = styled.div`
  margin-top: 15px;

  display: flex;
  align-items: center;
`;

const Date = styled.div`
  color: #a9a9a9;

  font-size: 16px;
  font-weight: 600;
`;

const CategoryItem = styled.span`
  color: #8fa8c4;
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
`;

const Summary = styled.div`
  margin-top: 20px;
  display: -webkit-box;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  overflow-wrap: break-word;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  color: #757575;
  font-size: 14px;
  line-height: 1.5;
`;

export default ThumbnailItem;
