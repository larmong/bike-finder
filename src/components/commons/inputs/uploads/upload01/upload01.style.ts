import styled from "@emotion/styled";

export const InputFile = styled.input`
  display: none;
`;
export const UploadFile = styled.li`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > img {
    width: 14px;
    height: 14px;
    margin-bottom: 5px;
  }

  > span {
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    color: #4f4f4f;
  }
`;
export const UploadImg = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;
