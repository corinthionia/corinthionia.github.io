import styled from '@emotion/styled';

const Bio = () => {
  return (
    <Wrapper>
      <Name
        src="https://github.com/corinthionia/corinthionia.github.io/assets/79887293/fb14ce05-9e5a-4e30-bb7f-78067a770c9a"
        alt="corinthionia"
      />
      <TextWrapper>
        <Text>🧞‍♂️ Good vibes only</Text>
        <Text>💭 능동적인 사고를 통한 성장을 위해 노력합니다</Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* height: 160px; */
  height: 100px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px;

  @media (max-width: 700px) {
    margin: 0 auto;
    /* height: 140px; */
    height: 88px;
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
  /* height: 100px; */
  height: 44px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 700px) {
    /* height: 88px; */
  }
`;

const Text = styled.span`
  font-size: 14px;
`;

export default Bio;
