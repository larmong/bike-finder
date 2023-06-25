import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 130px 0;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 510px;
  height: 480px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 24px;
`;

export const ContImg = styled.img`
  overflow: hidden;
  height: 297px;
  width: 100%;
`;

export const ContText = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContTitle = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
`;
export const ContDsc = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: justify;
`;
