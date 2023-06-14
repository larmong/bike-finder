import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
`;
export const Contents = styled.div``;

export const UserPayment = styled.div``;

export const RefundGuide = styled.div`
  position: absolute;
  top: 13px;
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
`;
