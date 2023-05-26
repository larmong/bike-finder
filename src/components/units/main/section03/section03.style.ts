import styled from "@emotion/styled";
import { MdPark } from "react-icons/md";

export const Wrapper = styled.div``;

export const Container = styled.div`
  height: 100%;
`;

export const Section = styled.div`
  padding: 130px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 55px;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleIcon = styled(MdPark)`
  width: 50px;
  height: 50px;
  color: #0d8f68;
`;

export const Title = styled.h3`
  margin: 10px 0 20px 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
`;

export const TitleDsc = styled.p`
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #979797;
`;

export const Contents = styled.div`
  display: flex;
  gap: 150px;
  align-items: center;
`;
export const ContLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const Cont = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
export const ContIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #0d8f68;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const iconStyle = {
  width: "48px",
  height: "48px",
  color: "#fff",
};

export const ContText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 370px;
`;
export const ContTitle = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
`;
export const ContDsc = styled.span`
  font-size: 22px;
  line-height: 28px;
  color: #666666;
`;

export const ContRight = styled.div`
  width: 464px;
  height: 341px;
  background-image: url("/images/main/graph.png");
  background-size: cover;
`;
