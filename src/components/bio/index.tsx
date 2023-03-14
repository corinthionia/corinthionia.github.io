import styled from '@emotion/styled';

const Bio = () => {
  return (
    <Wrapper>
      <Name
        src="https://user-images.githubusercontent.com/79887293/223732205-a4d37ab0-fd70-48a1-8f54-c847186d92fd.png"
        alt="corinthionia"
      />
      <TextWrapper>
        <Text>💞 Good vibes only</Text>
        <Text>☁️ 끊임없이 ‘더 좋은 방식’에 대해 고민합니다</Text>
        <Text>🚀 새로운 것을 배우고 도전하는 것을 좋아합니다</Text>
        <Text>🌙 능동적인 사고를 통한 성장을 위해 노력합니다</Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px;

  @media (max-width: 700px) {
    margin: 0 auto;
    height: 140px;
    margin-top: 28px;
  }
`;

const Name = styled.img`
  width: 280px;

  @media (max-width: 700px) {
    width: 200px;
  }
`;

const TextWrapper = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 700px) {
    height: 88px;
  }
`;

const Text = styled.span`
  font-size: 14px;
`;

export default Bio;
