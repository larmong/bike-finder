import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 34px 0 130px 0;
`;

export const Container = styled.div`
  min-height: calc(100vh - 625px);
  width: 1080px;
  margin: 0 auto;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Notice = styled.div`
  margin-top: -1px;
  padding: 30px 20px;
  border: 1px solid #e9e9e9;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07em;
  span {
    text-align: center;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    display: block;
    margin-bottom: 20px;
  }
  strong {
    display: block;
    font-weight: 700;
    em {
      color: #dc1919;
    }
  }
`;
