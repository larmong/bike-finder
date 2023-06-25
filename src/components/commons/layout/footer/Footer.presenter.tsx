import * as S from "./Footer.style";
import { useRouter } from "next/router";
import { Container } from "../../../../commons/style/global.style";
import { IFooterMenus, IFooterUI, ISnsMenus } from "./Footer.types";
import { Fragment } from "react";

export default function FooterUI(props: IFooterUI) {
  const router = useRouter();
  const FOOTER_MENUS: IFooterMenus[] = [
    { name: "이용약관", route: "/policy/use" },
    { name: "개인정보처리방침", route: "/policy/privacy" },
    { name: "의무와책임", route: "/policy/duty" },
    { name: "보험안내", route: "/policy/insurance" },
    { name: "도움주신분", route: "/policy/helped" },
  ];
  const SNS_MENUS: ISnsMenus[] = [
    {
      name: "youtube",
      link: "https://youtube.com/@user-ql9nk6ds1t",
    },
    { name: "insta", link: "https://www.instagram.com/seoulbike_/" },
    {
      name: "facebook",
      link: "https://www.facebook.com/seoulbike/?locale=ko_KR",
    },
  ];

  return (
    <S.Footer isActive={router.pathname === "/login"}>
      <Container>
        <S.Wrapper>
          <S.Menus>
            {FOOTER_MENUS.map((el: IFooterMenus, index: number) => (
              <Fragment key={index}>
                <S.Menu id={el.route} onClick={props.onClickMoveToMenus}>
                  {el.name}
                </S.Menu>
              </Fragment>
            ))}
          </S.Menus>
          <S.Sns>
            {SNS_MENUS.map((el: ISnsMenus, index: number) => (
              <Fragment key={index}>
                <img
                  id={el.link}
                  src={`/images/footer/${el.name}.svg`}
                  onClick={props.onClickMoveToMenus}
                  alt={el.name}
                />
              </Fragment>
            ))}
          </S.Sns>
          <S.Info>
            <div>
              <p>
                <span>주소</span>서울특별시 중구 세종대로 110 (지하철 1, 2호선
                시청역 5번 출구)
                <span>우편번호</span>04524
              </p>
              <p>
                <span>문의번호</span>1599-0120
                <span>사업자등록번호</span>104-83-00469
              </p>
            </div>
            <S.Copy>Copyright ⓒ 2023 larmong All rights reserved.</S.Copy>
          </S.Info>
        </S.Wrapper>
      </Container>
    </S.Footer>
  );
}
