import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: #fff;
  padding: 34px 0 130px 0;
`;

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px 42px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 40px 15px;
  width: calc(33.33% - 28px);
  height: 396px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
`;
export const CardImage = styled.img`
  width: 65%;
  margin-bottom: 20px;
`;
export const CardTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
`;
export const CardContent = styled.p`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #666666;
  white-space: pre-wrap;
`;
