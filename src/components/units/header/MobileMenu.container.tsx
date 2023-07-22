import * as S from "./MobileMenu.style";
import { FiUser } from "react-icons/fi";
import { TbTicket } from "react-icons/tb";
import { FaHeadphonesAlt } from "react-icons/fa";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsGeoAlt, BsHeadset } from "react-icons/bs";
import { MdArrowForwardIos, MdDirectionsBike } from "react-icons/md";
import { IMobileMenus, IPropsMobileMenu } from "./MobileMenu.types";

export default function MobileMenu(props: IPropsMobileMenu) {
  const MOBILE_MENUS: IMobileMenus[] = [
    { name: "마이페이지", route: "mypage/userInfo", icon: <FiUser /> },
    { name: "대여소조회", route: "station", icon: <BsGeoAlt /> },
    { name: "이용권구매", route: "ticket", icon: <TbTicket /> },
    { name: "문의하기", route: "inquiry", icon: <BsHeadset /> },
    { name: "안전수칙", route: "safety", icon: <MdDirectionsBike /> },
    { name: "시민센터", route: "citizen/notice", icon: <AiOutlineTrophy /> },
  ];

  return (
    <S.Menu_Wrapper>
      <S.Menu_Content>
        <S.Menu_UserName>
          <span>
            {props.loginCheck ? props.loginUser?.split("@", 1) : "서울시민"}
          </span>
          님!
        </S.Menu_UserName>
        <S.Menu_Text>
          <span>따릉이</span>와 함께
          <br />
          서울을 누빌 준비 되셨나요?
        </S.Menu_Text>
      </S.Menu_Content>
      <S.Notice_M>
        <S.Notice_Container>
          <S.Notice>
            <S.Notice_Title>
              <span>[ 업데이트 ]&nbsp;&nbsp;&nbsp;</span>
              공지 지도앱 업데이트 - 네비게이션 편 (v5.22.0) 네비게이션이
              업데이트 되었어요!
            </S.Notice_Title>
            <MdArrowForwardIos />
          </S.Notice>
          <S.Notice>
            <S.Notice_Title>
              <span>[ 안내 ]&nbsp;&nbsp;&nbsp;</span>
              따릉이 안전표어 공모전 안내
            </S.Notice_Title>
            <MdArrowForwardIos />
          </S.Notice>
          <S.Notice>
            <S.Notice_Title>
              <span>[ 폐쇄 ]&nbsp;&nbsp;&nbsp;</span>
              843. 이태원관광특구B(용산구청쪽) 대여소 임시 폐쇄(예정) 안내
            </S.Notice_Title>
            <MdArrowForwardIos />
          </S.Notice>
        </S.Notice_Container>
      </S.Notice_M>
      <S.Menu_Title>따릉이 메뉴</S.Menu_Title>
      <S.Menu_Container>
        {MOBILE_MENUS.map((el: IMobileMenus, index: number) => (
          <S.Menu_Card
            key={index}
            id={el.route}
            onClick={props.onClickMoveToMobileMenus}
          >
            <S.Menu_Icon>{el.icon}</S.Menu_Icon>
            <S.Menu_Name>{el.name}</S.Menu_Name>
          </S.Menu_Card>
        ))}
      </S.Menu_Container>
      <S.Footer_M>
        <FaHeadphonesAlt />
        <S.ServiceCenter>고객센터 1599-0120</S.ServiceCenter>
      </S.Footer_M>
    </S.Menu_Wrapper>
  );
}
