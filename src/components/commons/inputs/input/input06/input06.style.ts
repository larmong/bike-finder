import styled from "@emotion/styled";

export const InputCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  //justify-content: space-between;
`;
export const InputCard = styled.input`
  text-align: center;
  width: 120px;
  height: 40px;
  padding: 14px 16px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
`;
export const CardMessage = styled.span`
  color: #999999;
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  strong {
    font-weight: 700;
  }
`;
