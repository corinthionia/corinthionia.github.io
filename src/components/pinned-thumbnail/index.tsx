import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const PinnedThumbnail = ({
  fields: { slug },
  frontmatter: { thumbnail, title, summary, date, categories },
}: any) => {
  return (
    <PinnedPost to={slug}>
      <ThumbnailImage
        image={thumbnail.childImageSharp.gatsbyImageData}
        alt="Post thumbnail"
        objectFit="cover"
      />

      <ThumbnailWrapper>
        <ThumbnailTitle>{title}</ThumbnailTitle>
        <ThumbnailSummary>{summary}</ThumbnailSummary>
        <PostData>
          <Date>{`${date} |`}</Date>
          <Category>{categories[0]}</Category>
        </PostData>
      </ThumbnailWrapper>
    </PinnedPost>
  );
};

const PinnedPost = styled(Link)`
  width: 96%;
  height: 180px;

  display: flex;
  overflow: visible;

  @media (max-width: 700px) {
    width: 100%;
    height: 400px;

    flex-direction: column;
    border: none;
  }
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 200px;
  object-fit: cover;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 8px rgba(215, 215, 215, 0.49));

  @media (max-width: 700px) {
    width: 100%;
    height: 200px;
    border-radius: 12px;
  }
`;

const ThumbnailWrapper = styled.div`
  width: 400px;
  height: 200px;
  padding: 24px 36px;

  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
    height: 200px;
    padding: 20px 8px;

    flex-direction: column;
  }
`;

const ThumbnailTitle = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 20px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 700px) {
    margin-top: 12px;
  }
`;

const ThumbnailSummary = styled.div`
  margin-top: 12px;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #858585;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const PostData = styled.div`
  margin-top: 28px;

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
  margin-right: 8px;

  font-size: 13px;
  font-weight: 500;
`;

const Category = styled.span`
  color: #8fa8c4;
  font-size: 13px;
  font-weight: 500;
`;

export default PinnedThumbnail;
