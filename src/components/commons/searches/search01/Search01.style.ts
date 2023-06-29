import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Search = styled.div`
  margin: 30px 0;
  position: relative;
  width: 100%;
  height: 50px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  svg {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #666666;
  }
  ${mediaQuery[2]} {
    height: 45px;
    svg {
      width: 22px;
      height: 22px;
      left: 10px;
    }
  }
`;

export const SearchInput = styled.input`
  padding: 16px 16px 16px 50px;
  width: 100%;
  border: none;
  font-size: 16px;
  line-height: 20px;
  ${mediaQuery[2]} {
    padding: 12px 12px 12px 38px;
    font-size: 14px;
  }
`;

export const SearchBtn = styled.button`
  width: 130px;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  background: #666666;
  ${mediaQuery[2]} {
    width: 100px;
    font-size: 16px;
  }
`;
