import styled from "@emotion/styled";

export const DefaultBtn = styled.button`
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.btnWidth};
  height: 50px;
  background: #0d8f68;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.07em;
  color: #ffffff;
`;
