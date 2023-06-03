import styled from "@emotion/styled";

export const PaymentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ListItem = styled.li`
  padding-left: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;

  p {
    position: relative;
    display: inline-block;
    width: 60px;
    font-weight: 700;
    letter-spacing: -0.07em;
    &:after {
      content: "";
      position: absolute;
      top: 43%;
      left: -18px;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #0d8f68;
    }
  }
  span {
    font-weight: 400;
  }
`;

export const CbWrapper = styled.div``;
