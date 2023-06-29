import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div``;
export const Contents = styled.div``;

export const UserInfo = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${mediaQuery[0]} {
    margin-top: 30px;
  }
`;
