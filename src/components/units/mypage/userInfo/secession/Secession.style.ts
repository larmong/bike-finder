import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Notice = styled.div`
  margin-top: -1px;
  padding: 30px 20px;
  border: 1px solid #e9e9e9;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.07em;
  line-height: 23px;
`;

export const Contents = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  input {
    padding: 12px 16px;
    width: 330px;
    height: 44px;
  }
`;
export const Message = styled.div`
  text-align: center;
  p {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    em {
      color: #dc1919;
    }
  }
  span {
    font-size: 20px;
    line-height: 30px;
    color: #666666;
  }
`;
