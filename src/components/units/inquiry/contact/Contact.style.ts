import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const ContactWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #666666;
  border-bottom: 1px solid #666666;
`;

export const ContactItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e9e9e9;
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    min-height: 65px;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    background: #fafafa;
  }
`;

export const InputItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  input {
    width: 100%;
    height: 45px;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    padding: 14px 16px;
  }
`;

export const TextItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const ContItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 15px 20px;
`;

export const CbItem = styled.div`
  > div {
    height: 40px;
  }
  span {
    width: 100%;
    background: none;
    font-size: 14px;
    display: flex;
    justify-content: left;
  }
`;

export const FileItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

export const Notice = styled.div`
  width: 100%;
  padding: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: justify;
  background: #fafafa;
  color: #666666;
  span {
    color: #dc1919;
  }
`;

export const ContactBtn = styled.button`
  width: 200px;
  height: 50px;
  background: #0d8f68;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.07em;
  color: #ffffff;
`;
