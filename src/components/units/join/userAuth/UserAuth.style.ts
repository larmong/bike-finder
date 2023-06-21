import styled from "@emotion/styled";

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  text-align: center;
  color: #999999;
  svg {
    width: 31px;
    height: 31px;
  }
  span.target {
    color: #0d8f68;
  }
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

export const InputGroup = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const InputItem = styled.div`
  display: flex;
  align-items: center;
`;

export const InputTitle = styled.p`
  width: 100px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
`;
