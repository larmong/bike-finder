import * as S from "../../src/components/units/citizen/Citizen.style";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";
import Tab01 from "../../src/components/commons/tabs/tab01/Tab01.container";
import Charges from "../../src/components/units/citizen/charges/Charges.container";
import Info from "../../src/components/units/citizen/info/Info.container";
import Notice from "../../src/components/units/citizen/notice/Notice.container";
import Ranking from "../../src/components/units/citizen/ranking/Ranking.container";

export default function Citizen(props) {
  const TAB_MENUS = [
    {
      name: "공지사항",
      route: "citizen/notice",
    },
    {
      name: "이용요금 안내",
      route: "citizen/charges",
    },
    {
      name: "대여/반납 안내",
      route: "citizen/info",
    },
    {
      name: "따릉이 이용 랭킹",
      route: "citizen/ranking",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title={props.title} />
        <S.Contents>
          <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="170px" />
          <S.Content>
            {props.pathname === "notice" ? (
              <Notice />
            ) : props.pathname === "charges" ? (
              <Charges />
            ) : props.pathname === "info" ? (
              <Info />
            ) : props.pathname === "ranking" ? (
              <Ranking />
            ) : (
              <></>
            )}
          </S.Content>
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
