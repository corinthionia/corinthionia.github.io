import styled from '@emotion/styled';
import theme from '../../styles/theme';
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
  margin: 0 auto;
  padding: 60px 24px 12px 0;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 64px;
    padding: 40px 24px 12px 24px;
  }
`;

const Title = styled.div`
  color: ${theme.colors.gray6};
  font-size: 36px;
  font-weight: 600;
  line-height: 1.6;

  display: -webkit-box;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 700px) {
    font-size: 26px;
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
