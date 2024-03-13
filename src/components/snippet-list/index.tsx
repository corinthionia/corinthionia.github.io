import React from 'react';
import styled from '@emotion/styled';
import Snippet from '../../components/snippet';
import { SnippetListType } from 'types/snippet';

interface Props {
  edges: SnippetListType[];
}

const SnippetList = function (props: Props) {
  const { edges } = props;
  console.log(edges);
  return (
    <>
      <Wrapper>
        {edges.map(({ node }: SnippetListType) => (
          <Snippet key={node.id} {...node} />
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 92%;
  max-width: 768px;
  margin: 0 auto;
  margin-top: 72px;
  margin-bottom: 48px;
  @media (max-width: 700px) {
    font-size: 14px;
    font-weight: 400;
    padding: 0 2%;
  }
`;

export default SnippetList;
