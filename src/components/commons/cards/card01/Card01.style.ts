import styled from "@emotion/styled";
import { IIsType } from "./Card01.types";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const MenuCard = styled.div`
  width: calc(50% - 20px);
  height: 239px;
  border-radius: 15px 0;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: ${(props: IIsType) => (props.isType ? "none" : "3px solid #333333")};
  background: ${(props: IIsType) => (props.isType ? "#0D8F68" : "#ffffff")};
  ${mediaQuery[1]} {
    width: 100%;
    max-width: 400px;
    height: 200px;
  }
  ${mediaQuery[2]} {
    padding: 15px;
    height: 180px;
  }
`;

export const MenuCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: ${(props: IIsType) =>
    props.isType ? "3px solid #ffffff" : "3px solid #333333"};

  svg {
    width: 30px;
    height: 30px;
    color: ${(props: IIsType) => (props.isType ? "#ffffff" : "#333333")};
  }
`;
export const MenuCardIconTicket = styled.div`
  svg {
    width: 60px;
    height: 60px;
    color: ${(props: IIsType) => (props.isType ? "#ffffff" : "#333333")};
  }
  ${mediaQuery[2]} {
    svg {
      width: 54px;
      height: 54px;
    }
  }
`;

export const MenuCardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;
`;
export const MenuCardTitle = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  color: ${(props: IIsType) => (props.isType ? "#ffffff" : "#333333")};
  ${mediaQuery[2]} {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const MenuCardDsc = styled.p`
  line-height: 20px;
  letter-spacing: -0.1em;
  color: ${(props: IIsType) => (props.isType ? "#eeeeee" : "#666666")};
  ${mediaQuery[2]} {
    font-size: 14px;
  }
`;
