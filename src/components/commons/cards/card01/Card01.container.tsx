import * as S from "./Card01.style";
import { useRouter } from "next/router";
import { MdArrowForward } from "react-icons/md";
import { MouseEvent } from "react";

export default function Card01(props) {
  const router = useRouter();

  const onClickMoveToTabMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`inquiry/${event.currentTarget.id}`);
  };
  return (
    <S.MenuCard
      onClick={onClickMoveToTabMenus}
      id={props.route}
      isType={props.type}
    >
      <S.MenuCardText>
        <S.MenuCardTitle isType={props.type}>{props.title}</S.MenuCardTitle>
        <S.MenuCardDsc isType={props.type}>{props.dsc}</S.MenuCardDsc>
      </S.MenuCardText>
      <S.MenuCardIcon isType={props.type}>
        <MdArrowForward />
      </S.MenuCardIcon>
    </S.MenuCard>
  );
}
