import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  padding: 130px 0;
  background: #f9fafa;
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
  ${mediaQuery[0]} {
    margin-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 332px;
  height: 463px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 24px;
  overflow: hidden;
  ${mediaQuery[0]} {
    width: 80%;
    height: 200px;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContImgContainer = styled.div`
  overflow: hidden;
  height: 310px;
  width: 100%;
  ${mediaQuery[0]} {
    width: 220px;
    height: auto;
  }
`;

export const ContImg = styled.img`
  width: 100%;
  ${mediaQuery[0]} {
    width: 220px;
    height: auto;
  }
`;

export const ContText = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${mediaQuery[0]} {
    width: calc(100% - 220px);
  }
`;
export const ContTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
`;
export const ContDsc = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
`;
