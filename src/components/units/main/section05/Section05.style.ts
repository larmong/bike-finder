import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  padding: 130px 0;
  ${mediaQuery[2]} {
    padding: 100px 0;
  }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
  ${mediaQuery[2]} {
    margin-top: 40px;
    gap: 20px;
  }
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 510px;
  height: 480px;
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
  ${mediaQuery[1]} {
    width: 100%;
    height: 180px;
    border-radius: 15px;
  }
  ${mediaQuery[2]} {
    height: 120px;
    border-radius: 10px;
  }
`;

export const ContImgContainer = styled.div`
  overflow: hidden;
  height: 297px;
  width: 100%;
  ${mediaQuery[0]} {
    position: relative;
    width: 220px;
    height: 100%;
  }
  ${mediaQuery[1]} {
    width: 180px;
  }
  ${mediaQuery[2]} {
    width: 120px;
  }
`;

export const ContImg = styled.img`
  width: 100%;
  ${mediaQuery[0]} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
  }
  ${mediaQuery[1]} {
    width: 200px;
  }
  ${mediaQuery[2]} {
    width: 130px;
  }
`;

export const ContText = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${mediaQuery[0]} {
    width: calc(100% - 220px);
  }
  ${mediaQuery[1]} {
    padding: 10px 15px;
    gap: 4px;
    width: calc(100% - 180px);
  }
  ${mediaQuery[2]} {
    padding: 10px 15px;
    gap: 4px;
    width: calc(100% - 120px);
  }
`;

export const ContTitle = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  ${mediaQuery[0]} {
    font-size: 20px;
    line-height: 25px;
  }
  ${mediaQuery[1]} {
    font-size: 18px;
  }
  ${mediaQuery[2]} {
    font-size: 16px;
  }
`;
export const ContDsc = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: justify;
  ${mediaQuery[0]} {
    font-size: 16px;
    line-height: 20px;
  }
  ${mediaQuery[1]} {
    font-size: 14px;
    line-height: 18px;
  }
  ${mediaQuery[2]} {
    font-size: 12px;
    line-height: 16px;
  }
`;
