import styled from '@emotion/styled';
import { PostHeadInfoProps } from 'types/post';

const PostHead = function ({ title, date }: PostHeadInfoProps) {
  const goBackPage = () => window.history.back();

  return (
    <PostHeadWrapper>
      <PostHeadInfoWrapper>
        <Title>{title}</Title>
        <PostData>{date}</PostData>
      </PostHeadInfoWrapper>
    </PostHeadWrapper>
  );
};

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  @media (max-width: 700px) {
    height: 200px;
  }
`;

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 700px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

const Title = styled.div`
  margin-top: auto;

  color: hotpink;
  font-size: 36px;
  font-weight: 800;

  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`;

export default PostHead;
