import Tab01 from "../../../commons/tabs/tab01/Tab01.container";

export default function Faq() {
  const TAB_MENUS = [
    {
      name: "대여 및 반납",
      route: "policy/use",
    },
    {
      name: "자전거 추가 배치",
      route: "policy/privacy",
    },
    {
      name: "대여소(개설/폐쇄)",
      route: "policy/privacy",
    },
    {
      name: "결제/환불/마일리지",
      route: "policy/privacy",
    },
    {
      name: "자전거 및 시설 관리",
      route: "policy/privacy",
    },
    {
      name: "앱 또는 홈페이지 문의",
      route: "policy/privacy",
    },
  ];

  return (
    <>
      <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="16.66%" />
    </>
  );
}
