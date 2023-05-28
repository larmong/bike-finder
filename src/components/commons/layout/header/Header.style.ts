import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background: #f9fafa;
`;
export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 로고
export const Logo = styled.div`
  width: 147px;
  height: 32.32px;
  background-image: url("/images/logo.svg");
  background-size: cover;
  cursor: pointer;
`;

// 메뉴
export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Menu = styled.span`
  position: relative;
  cursor: pointer;
  &:before {
    transition: 0.35s;
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);

    width: 0;
    height: 3px;
    background: #0d8f68;
  }
  &:hover {
    &:before {
      width: 110%;
    }
  }
`;

// 버튼
export const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
`;
export const HeaderBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 36px;
  background: #0d8f68;
  border-radius: 5px;
  letter-spacing: 0.02em;
  color: #ffffff;
`;
export const HeaderBtnLine = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 36px;
  border: 1px solid #0d8f68;
  border-radius: 5px;
  letter-spacing: 0.02em;
  color: #0d8f68;
`;

// TODO: 유지보수 쉽도록 공통 Container 만들기
export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;
