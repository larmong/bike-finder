import styled from "@emotion/styled";
import { mediaQuery } from "../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div``;

export const Contents = styled.div``;

export const Map = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  ${mediaQuery[0]} {
    height: calc(100vh - 220px);
  }
  ${mediaQuery[2]} {
    height: calc(100vh - 180px);
  }
`;

export const MapLoading = styled.div`
  width: 100%;
  height: 100%;
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
`;
