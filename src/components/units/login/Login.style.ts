import styled from "@emotion/styled";
import { mediaQuery } from "../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  background: #f9fafa;
  padding: 100px 0;
  min-height: calc(100vh - 100px);
  ${mediaQuery[0]} {
    min-height: calc(100vh - 65px);
  }
  ${mediaQuery[2]} {
    padding: 0;
  }
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 450px;
  padding: 50px 30px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  ${mediaQuery[2]} {
    gap: 25px;
    width: 100%;
    height: 100vh;
    box-shadow: none;
    border-radius: 0;
    padding: 60px 20px;
  }
`;

export const Logo = styled.div`
  width: 200px;
  height: 43.97px;
  background-image: url("/images/logo.svg");
  background-size: cover;
  cursor: pointer;
  margin: 10px 0 40px 0;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LoginMenu = styled.ul`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #999999;
`;

export const Menu = styled.li`
  cursor: pointer;
  position: relative;
  &:before {
    content: "|";
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
  }
  &:last-of-type:before {
    content: none;
  }
`;

export const AuthGroup = styled.div`
  display: flex;
  gap: 15px;
`;
export const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
`;
