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
  flex-direction: column;

  width: 88%;
  height: 380px;
  margin: 0 auto;
  overflow: hidden;

  border-radius: 8px;
  box-shadow: 0 0 8px rgba(47, 58, 48, 0.2);

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(47, 58, 48, 0.25);
    text-shadow: 0 0 10px rgba(47, 58, 48, 0.2);
    transition: text-shadow 0.3s, opacity 0.4s;
  }
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 205px;
  object-fit: cover;

  @media (max-width: 700px) {
    height: 52%;
  }
`;

const PostInfo = styled.div`
  height: 175px;
  padding: 22px 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 18px;
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
  font-size: 14px;
`;

const Date = styled.div`
  color: #a9a9a9;
`;

const Category = styled.span`
  color: #8fa8c4;
  margin-right: 8px;
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

  color: #9b9b9b;
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: 700px) {
    -webkit-line-clamp: 1;
  }
`;

export default ThumbnailItem;
