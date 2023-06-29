import Header from "../../components/commons/layout/header/Header.container";
import Footer from "../../components/commons/layout/footer/Footer.container";
import styled from "@emotion/styled";
import { Fragment } from "react";
import { mediaQuery } from "../style/mediaQuery.style";

interface ILayoutProps {
  children: JSX.Element;
}

const Page = styled.div`
  min-height: calc(100vh - 461px);
  height: 100%;
  margin: 40px 0 130px 0;
  ${mediaQuery[0]} {
    margin: 100px 0 110px 0;
  }
  ${mediaQuery[2]} {
    margin: 85px 0;
  }
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
