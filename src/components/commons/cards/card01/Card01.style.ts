import styled from "@emotion/styled";

export const MenuCard = styled.div`
  width: calc(50% - 20px);
  height: 239px;
  border-radius: 15px 0;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  border: ${(props) => (props.isType ? "none" : "3px solid #333333")};
  background: ${(props) => (props.isType ? "#0D8F68" : "#ffffff")};
`;

export const MenuCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: ${(props) =>
    props.isType ? "3px solid #ffffff" : "3px solid #333333"};
  svg {
    width: 30px;
    height: 30px;
    color: ${(props) => (props.isType ? "#ffffff" : "#333333")};
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
  color: ${(props) => (props.isType ? "#ffffff" : "#333333")};
`;
export const MenuCardDsc = styled.p`
  line-height: 20px;
  letter-spacing: -0.1em;
  color: ${(props) => (props.isType ? "#eeeeee" : "#666666")};
`;
