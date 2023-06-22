import styled from "@emotion/styled";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 20px 20px 20px;
  width: 500px;
  height: auto;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;
export const CloseBtn = styled.button`
  transition: all ease-in 0.2s;
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 3px;
  color: #888;
  padding: 3px 7px;
  font-size: 18px;
  :hover {
    background: #eee;
    color: #555;
  }
`;
export const ModalContents = styled.div`
  width: 100%;
`;

export const InputTitle = styled.span`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 16px;
`;
