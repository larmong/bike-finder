import styled from "@emotion/styled";

export const PagesTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 34px;
`;

export const Circle = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 6px solid #0d8f68;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 11.33px;
    height: 11.33px;
    border-radius: 50%;
    background: #0d8f68;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 34px;
  line-height: 43px;
  letter-spacing: -0.1em;
`;
