import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  ${mediaQuery[2]} {
    margin-top: 40px;
  }
`;

export const CitizenGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CitizenTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #444444;
  ${mediaQuery[2]} {
    font-size: 18px;
  }
  ${mediaQuery[3]} {
    font-size: 16px;
  }
`;

export const Youtube = styled(ReactPlayer)`
  width: 100%;
  height: 600px;
  ${mediaQuery[0]} {
    height: 500px;
  }
  ${mediaQuery[1]} {
    height: 400px;
  }
  ${mediaQuery[2]} {
    height: 300px;
  }
  ${mediaQuery[3]} {
    height: 200px;
  }
`;
