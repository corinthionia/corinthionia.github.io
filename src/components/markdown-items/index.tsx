import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { PostContentProps } from 'types/post';
import './prism-one-dark.css';

const MarkdownItems = function ({ html }: PostContentProps) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

const MarkdownRenderer = styled.div`
  // Renderer Style

  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // Markdown Style
  color: ${theme.colors.gray6};
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1 {
    font-size: 32px;
    font-weight: 600;
    margin-top: 60px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 26px;
    font-weight: 600;
    margin-top: 56px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 8px;
  }

  h1 + h1,
  h1 + h2,
  h1 + h3,
  h2 + h1,
  h2 + h2,
  h2 + h3,
  h3 + h1,
  h3 + h2,
  h3 + h3 {
    margin-top: 0px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 20px 0;
    padding: 0 15px;
    border-left: 3px solid ${theme.colors.pink0};
    color: ${theme.colors.gray2};
    font-weight: 400;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 24px;
  }

  li {
    margin-top: 6px;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 0.5px solid ${theme.colors.gray0};
    border-radius: 1px;
    margin: 60px 0;
  }

  // Adjust Link Element Style
  a {
    color: ${theme.main.point2};
    margin-left: 3px;

    -moz-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    -ms-transition: color 0.3s ease;
    -webkit-transition: color 0.3s ease;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.main.point1};
    }
  }

  img {
    max-width: 700px;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  // Markdown Responsive Design
  @media (max-width: 700px) {
    width: 100%;
    font-size: 15px;
    padding: 30px 20px 80px 20px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

export default MarkdownItems;
