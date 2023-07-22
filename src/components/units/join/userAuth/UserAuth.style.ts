import styled from "@emotion/styled";

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
  position: relative;
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
