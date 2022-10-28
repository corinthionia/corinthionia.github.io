import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/main/ProfileImg';

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />
        <div>
          <SubTitle>Corinthionia</SubTitle>
          <Title>하이하이~~</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #c6ee61 0%, #f9c5b4 100%);
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
`;

export default Introduction;
