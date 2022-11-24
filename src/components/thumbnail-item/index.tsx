import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostItemProps } from 'types/post';
import { GatsbyImage } from 'gatsby-plugin-image';

const ThumbnailItem = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}: PostItemProps) => {
  return (
    <Wrapper to={link}>
      <Image image={gatsbyImageData} alt="Post thumbnail" />
      <PostInfo>
        <div>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
        </div>
        <PostData>
          <Category>{categories}</Category>
          <Category>|</Category>
          <Date>{date}</Date>
        </PostData>
      </PostInfo>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;

  width: 92%;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
  /* background: pink; */

  /* border-radius: 8px;
  box-shadow: 0 0 8px rgba(47, 58, 48, 0.2); */

  cursor: pointer;

  &:hover {
    /* box-shadow: 0 0 10px rgba(47, 58, 48, 0.25); */
    text-shadow: 0 0 10px rgba(47, 58, 48, 0.2);
    transition: text-shadow 0.3s, opacity 0.4s;
  }

  & + & {
    margin-top: 52px;
  }

  @media (max-width: 700px) {
    width: 300px;
    height: inherit;
    flex-direction: column;

    & + & {
      margin-top: 0px;
    }
  }
`;

const Image = styled(GatsbyImage)`
  width: 200px;
  object-fit: fill;
  border-radius: 12px;

  @media (max-width: 700px) {
    width: 100%;
    height: 200px;
  }
`;

const PostInfo = styled.div`
  width: 444px;
  padding: 16px 0 16px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 100%;
    padding: 24px 8px;
  }
`;

const Title = styled.div`
  display: -webkit-box;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: #383838;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const PostData = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 700px) {
    margin-top: 16px;
    font-weight: 600;
    font-size: 14px;
  }
`;

const Date = styled.div`
  color: #a9a9a9;

  @media (max-width: 700px) {
    color: #bababa;
  }
`;

const Category = styled.span`
  color: #8fa8c4;
  margin-right: 8px;

  @media (max-width: 700px) {
    color: #afc1d5;
  }
`;

const Summary = styled.div`
  margin-top: 8px;
  display: -webkit-box;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  overflow-wrap: break-word;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: #8b8b8b;
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: 700px) {
    margin-top: 16px;
    -webkit-line-clamp: 2;
  }
`;

export default ThumbnailItem;
