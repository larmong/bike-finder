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
  //color: #0d8f68;
  svg {
    width: 31px;
    height: 31px;
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
