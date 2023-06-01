import Header from "../../components/commons/layout/header/Header.container";
import Footer from "../../components/commons/layout/footer/Footer.container";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: JSX.Element;
}

const Page = styled.div`
  min-height: calc(100vh - 495px);
`;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header></Header>
      <Page>{props.children}</Page>
      <Footer></Footer>
    </>
  );
}
