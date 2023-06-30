import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${mediaQuery[2]} {
    width: calc(100% - 3px);
  }
`;

export const PassGuide = styled.div`
  position: absolute;
  top: -36px;
  right: 0;
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
  span {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.07em;
  }
  ${mediaQuery[1]} {
    top: -113px;
  }
  ${mediaQuery[2]} {
    top: -126px;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    padding: 30px 20px;
    width: 50%;
  }
  ${mediaQuery[1]} {
    flex-direction: column;
    gap: 50px;
    > div {
      padding: 0;
      width: 100%;
    }
  }
`;

export const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${mediaQuery[2]} {
    gap: 12px;
  }
`;
export const SectionTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.07em;
  ${mediaQuery[2]} {
    font-size: 17px;
    line-height: 20px;
  }
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
  ${mediaQuery[1]} {
    border-right: none;
  }
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
  ${mediaQuery[2]} {
    padding: 12px;
    font-size: 17px;
  }
`;
