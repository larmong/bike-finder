import styled from "@emotion/styled";
import { IIsActive } from "./Pagination01.types";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PageBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const Page = styled.span`
  width: auto;
  display: flex;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${(props: IIsActive) => (props.isActive ? "17px" : "16px")};
  font-weight: ${(props: IIsActive) => (props.isActive ? "700" : "400")};
  color: ${(props: IIsActive) => (props.isActive ? "#ffd600" : "#4f4f4f")};
  margin: ${(props: IIsActive) =>
    props.isActive ? "-2px 10px 0 10px" : "-1px 10px 0 10px"};
  text-decoration-line: ${(props: IIsActive) =>
    props.isActive ? "underline" : "none"};
`;

export const PageNextBtn = styled.button`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;
export const PagePrevBtn = styled.button`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;
