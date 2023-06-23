import styled from "@emotion/styled";
import { MdArrowForwardIos, MdStar } from "react-icons/md";
import { IIsSelect } from "./Select01.types";

export const Wrapper = styled.div`
  position: relative;
  width: ${(props: IIsSelect) => props.isSelect || "500px"};
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
  border-radius: 5px;
  border: 1.5px solid #e9e9e9;
  padding: 14px 16px;
  font-size: 14px;
  cursor: pointer;
`;

export const SelectText = styled.p`
  margin: 0;
`;
export const Icon = styled(MdArrowForwardIos)`
  width: 15px;
  height: 15px;
  transform: rotate(90deg);
`;
export const Star = styled(MdStar)`
  width: 15px;
  height: 15px;
  margin-bottom: 2px;
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  padding: 5px 14px;
  border: 1px solid #e9e9e9;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;
export const SelectMenu = styled.li`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 5px;
  border-bottom: 1px solid #e9e9e9;
  &:last-of-type {
    border-bottom: none;
  }
  &.active {
    font-weight: 700;
    color: #0d8f68;
  }
`;
