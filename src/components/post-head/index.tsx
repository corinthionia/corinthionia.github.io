import styled from '@emotion/styled';
import { PostHeadInfoProps } from 'types/post';

const PostHead = function ({ title, date }: PostHeadInfoProps) {
  return (
    <PostHeadWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </PostHeadWrapper>
  );
};

const PostHeadWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 700px;
  height: 200px;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 24px;
  }
`;

const Title = styled.div`
  color: hotpink;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.5;

  display: -webkit-box;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 36px;

  color: #6f6f6f;
  font-size: 13px;
  font-weight: 500;
`;

export default PostHead;
