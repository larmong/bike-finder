import Header from "../../components/commons/layout/header/Header.container";
import Footer from "../../components/commons/layout/footer/Footer.container";
import styled from "@emotion/styled";
import { Fragment } from "react";

interface ILayoutProps {
  children: JSX.Element;
}

const Page = styled.div`
  min-height: calc(100vh - 461px);
  height: 100%;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Fragment>
      <Header></Header>
      <Page>{props.children}</Page>
      <Footer></Footer>
    </Fragment>
  );
}
