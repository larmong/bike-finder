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
  strong {
    display: inline;
    font-weight: 700;
    color: #dc1919;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Message = styled.p`
  margin-top: 50px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: #444444;
  span {
    color: #0d8f68;
  }
`;

export const Method = styled.div`
  display: flex;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
  margin-top: -1px;
`;
export const MethodHead = styled.div`
  width: 139px;
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  color: #666666;
  background: #f9f9f9;
  border-right: 1px solid #e9e9e9;
`;
export const MethodBody = styled.div`
  padding: 18px 30px;
  font-weight: 400;
  color: #666666;
  > span {
    color: #0d8f68;
  }
`;
