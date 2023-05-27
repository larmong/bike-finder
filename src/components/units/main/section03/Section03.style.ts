import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 130px 0;
`;

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
