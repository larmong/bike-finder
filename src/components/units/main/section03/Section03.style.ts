import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  padding: 130px 0;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Contents = styled.div`
  margin-top: 55px;
  display: flex;
  gap: 150px;
  align-items: center;
  ${mediaQuery[0]} {
    margin-top: 40px;
    gap: 50px;
    flex-direction: column-reverse;
  }
`;
export const ContLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  ${mediaQuery[0]} {
    gap: 20px;
  }
`;
export const Cont = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  ${mediaQuery[0]} {
    gap: 20px;
  }
`;
export const ContIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #0d8f68;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQuery[0]} {
    width: 60px;
    height: 60px;
  }
`;

export const iconStyle = {
  width: "65%",
  height: "65%",
  color: "#fff",
};

export const ContText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 370px;
  ${mediaQuery[0]} {
    display: flex;
    flex-direction: column;
    width: calc(100% - 80px);
  }
`;
export const ContTitle = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  ${mediaQuery[0]} {
    font-size: 20px;
    line-height: 20px;
  }
`;
export const ContDsc = styled.span`
  font-size: 22px;
  line-height: 28px;
  color: #666666;
  ${mediaQuery[0]} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ContRight = styled.div`
  width: 464px;
  height: 341px;
  background-image: url("/images/main/graph.png");
  background-size: cover;
`;
