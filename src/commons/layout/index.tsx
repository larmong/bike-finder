import Header from "../../components/commons/layout/header/Header.container";
import Footer from "../../components/commons/layout/footer/Footer.container";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header></Header>
      <div>{props.children}</div>
      <Footer></Footer>
    </>
  );
}
