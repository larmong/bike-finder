import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const SuccessContents = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
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
  text-align: center;
`;
export const Icon = styled.div`
  svg {
    width: 50px;
    height: 50px;
    color: #0d8f68;
  }
`;
export const Message = styled.p`
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 28px;
  span {
    color: #0d8f68;
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  gap: 15px;
`;
