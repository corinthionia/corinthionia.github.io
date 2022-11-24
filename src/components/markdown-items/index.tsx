import styled from '@emotion/styled';
import { PostContentProps } from 'types/post';

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
  color: #383838;
  line-height: 1.6;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin: 75px 0 20px 0;
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
    margin: 0;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 26px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 20px 0;
    padding: 0 15px;
    border-left: 3px solid #a9d871;
    color: #9c9c9c;
    font-weight: 500;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
  }
  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #e4e4e4;
    border-radius: 1px;
    margin: 60px 0;
  }

  // Adjust Link Element Style
  a {
    color: hotpink;

    -moz-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    -ms-transition: color 0.3s ease;
    -webkit-transition: color 0.3s ease;
    transition: color 0.3s ease;

    &:hover {
      color: #8ad46f;
    }
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 20px 0;
    padding: 15px;
    font-size: 14px;
    border-radius: 8px;
    overflow: auto;
    font-family: 'Fira Code', monospace;
  }

  /* code[class*='language-'],
  pre[class*='language-'] {
    background: #fef9d1;
  } */

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'Fira Code', monospace;

    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.6;
    font-size: 13px;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    -ms-overflow-style: none; // IE 10+
    overflow: -moz-scrollbars-none; // Firefox

    & > * {
      font-family: 'Fira Code', monospace;
    }
  }

  // Markdown Responsive Design
  @media (max-width: 700px) {
    width: 100%;
    padding: 30px 20px 80px 20px;
    font-size: 15px;
    line-height: 1.7;

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
