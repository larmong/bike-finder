import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Notice = styled.div`
  margin-top: -1px;
  padding: 30px 20px;
  border: 1px solid #e9e9e9;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07em;
  strong {
    font-weight: 700;
    color: #dc1919;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    padding: 30px 20px;
    width: 50%;
  }
`;

export const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const SectionTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.07em;
`;

export const MileageGroup = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.07em;
  color: #666666;
  text-align: right;
  span {
    color: #0d8f68;
  }
`;

export const ContentLeft = styled.div`
  border-right: 1px solid #e9e9e9;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 2px solid #333333;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.07em;
  padding: 12px 20px;
  span {
    color: #0d8f68;
  }
`;
